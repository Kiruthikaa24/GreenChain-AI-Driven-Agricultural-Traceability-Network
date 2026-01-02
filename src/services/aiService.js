// src/services/aiService.js

/* ======================================================
   CONFIG
====================================================== */

const API_KEY = process.env.REACT_APP_API_KEY;
const IMAGE_ANALYSIS_MODEL = "gemini-2.5-flash"; // safer + cheaper
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${IMAGE_ANALYSIS_MODEL}:generateContent?key=${API_KEY}`;

/* ======================================================
   MOCK ANALYSIS (FALLBACK / DEV)
====================================================== */

export const mockAnalyzeImage = (file, product = "product") => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const random = Math.random();

      let overallQuality;
      let freshnessStatus;
      let consumable;

      if (random > 0.7) {
        overallQuality = "A";
        freshnessStatus = "Fresh";
        consumable = true;
      } else if (random > 0.4) {
        overallQuality = "B";
        freshnessStatus = "Ripe";
        consumable = true;
      } else {
        overallQuality = "D";
        freshnessStatus = "Stale";
        consumable = false;
      }

      resolve({
        productName: product,
        freshnessStatus,
        overallQuality,
        confidence: Math.floor(80 + Math.random() * 20),
        justification: `Mock analysis indicates ${freshnessStatus.toLowerCase()} condition.`,
        consumable
      });
    }, 1200);
  });
};

/* ======================================================
   FILE → BASE64
====================================================== */

export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base64 = reader.result.split(",")[1];
      resolve(base64);
    };

    reader.onerror = reject;
  });
};

/* ======================================================
   FETCH WITH RETRY
====================================================== */

async function fetchWithRetry(url, options, maxRetries = 5) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.status !== 429) return response;

      const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
      await new Promise((r) => setTimeout(r, delay));
    } catch {
      const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
      await new Promise((r) => setTimeout(r, delay));
    }
  }
  throw new Error("Gemini API failed after retries");
}

/* ======================================================
   GEMINI IMAGE ANALYSIS
====================================================== */

export const analyzeImageWithGemini = async (
  product,
  base64Data,
  mimeType
) => {
  if (!API_KEY) {
    throw new Error("Missing REACT_APP_API_KEY");
  }

  const prompt = `
Analyze the provided image of a ${product}.

Respond ONLY with valid JSON.
Set "productName" exactly to "${product}".

Schema:
{
  "productName": string,
  "freshnessStatus": string,
  "overallQuality": string,
  "confidence": number (0.5–1.0),
  "justification": string
}
`;

  const payload = {
    contents: [
      {
        role: "user",
        parts: [
          { text: prompt },
          {
            inlineData: {
              mimeType,
              data: base64Data
            }
          }
        ]
      }
    ]
  };

  const response = await fetchWithRetry(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Gemini error ${response.status}: ${err}`);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("Empty Gemini response");
  }

  // 🔥 Extract JSON safely
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("Gemini returned non-JSON output");
  }

  const parsed = JSON.parse(jsonMatch[0]);

  return {
    ...parsed,
    confidence: Math.round(parsed.confidence * 100)
  };
};

/* ======================================================
   MAIN ENTRY FUNCTION (USED BY UI)
====================================================== */

export const analyzeImageWithAI = async (product, file) => {
  try {
    const base64Data = await fileToBase64(file);
    return await analyzeImageWithGemini(
      product,
      base64Data,
      file.type
    );
  } catch (error) {
    console.error("AI analysis failed, using mock:", error.message);
    return await mockAnalyzeImage(file, product);
  }
};
