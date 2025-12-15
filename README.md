# GreenChain

AI-Driven Agricultural Traceability Network

---

## 📌 Project Overview

**GreenChain** is a full-stack application that leverages **AI and cloud technologies** to provide an end-to-end **agricultural traceability system**. It enables farmers, distributors, and consumers to track the journey of agricultural products from farm to fork, ensuring **transparency, accountability, and quality assurance**.  

---

## 🏗️ Project Structure


FarmChainX-AI-Driven-Agricultural-Traceability-Network/
│
├─ frontend/ # React frontend
└─ backend/ # Spring Boot backend (Eclipse project)


## ⚙️ Tech Stack

- **Frontend:** React.js, JavaScript, HTML, CSS  
- **Backend:** Java, Spring Boot, Maven  
- **Database:** MySQL  
- **Tools:** Eclipse IDE, Node.js, npm, Git  

---
## ⚙️ Features

### Farmer Module
- Add farm details and produce information  
- Upload images of crops  
- Track crop growth stages using AI insights  

### Distributor Module
- View available produce from farmers  
- Verify crop authenticity and quality  
- Manage inventory and orders  

### Consumer Module
- Trace the origin of purchased produce  
- Access crop history and AI-generated quality reports  
- Rate and review products  

### Admin Module
- Manage users (farmers, distributors, consumers)  
- Monitor transactions and traceability reports  
- Generate analytics dashboards  

🚀 Usage

Access frontend: http://localhost:3000

Access backend API: http://localhost:8082

Login as Farmer, Distributor, or Admin

Perform CRUD operations on crops, orders, and inventory

Trace product origins using unique IDs

## 🚀 Getting Started

### Frontend (React)

1. Open terminal in the `frontend` folder:

```bash
<<<<<<< HEAD

=======
cd frontend
>>>>>>> 8c690be (Updated UI)
Install dependencies:

"""
npm install
Start the development server:
""
npm start
Open http://localhost:3000 in your browser.

Backend (Spring Boot / Eclipse)
Open Eclipse IDE and import the backend folder as an existing Maven project.

Configure MySQL database in application.properties:

properties

spring.datasource.url=jdbc:mysql://localhost:3306/farmxchain
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
Create the database:

CREATE DATABASE farmxchain;
Run FarmxchainAuthApplication.java as a Java Application. The backend will start on http://localhost:8080.

🔄 Running the Full Application
Start MySQL.

Run the backend in Eclipse.

Run the frontend (npm start).

Access the app at http://localhost:3000.
The frontend communicates with backend APIs at http://localhost:8080.



💡 Notes
Ensure ports 3000 (frontend) and 8080 (backend) are free.

<<<<<<< HEAD
The backend must be running for the frontend features to work properly.
=======
The backend must be running for the frontend features to work properly.
>>>>>>> 8c690be (Updated UI)
