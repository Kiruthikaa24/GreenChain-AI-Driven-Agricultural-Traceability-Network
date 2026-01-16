# GreenChain

AI-Driven Agricultural Traceability Network

---

## Project Overview

**GreenChain** is a full-stack application that leverages **AI and cloud technologies** to provide an end-to-end **agricultural traceability system**. It enables farmers, distributors, and consumers to track the journey of agricultural products from farm to fork, ensuring **transparency, accountability, and quality assurance**.  

---
---

## Tech Stack

- **Frontend:** React.js, JavaScript, HTML, CSS  
- **Backend:** Java, Spring Boot, Maven  
- **Database:** MySQL  
- **Tools:** Eclipse IDE, Node.js, npm, Git  

---

## Features

### Farmer Module
- Add farm details and produce information  
- Upload images of crops  
- Track crop growth stages using AI insights  

### Distributor Module
- View available produce from farmers  
- Verify crop authenticity and quality  
- Manage inventory and orders

### Retailer Module
- Browse products
- Place bulk orders
- Manage customer orders

### Consumer Module
- Trace the origin of purchased produce  
- Access crop history and AI-generated quality reports  
- Rate and review products   

---

## Usage

- Access frontend: [http://localhost:3000](http://localhost:3000)  
- Access backend API: [http://localhost:8082](http://localhost:8082)  

**Instructions:**  
- Login as Farmer, Distributor, or Admin  
- Perform CRUD operations on crops, orders, and inventory  
- Trace product origins using unique IDs  

---

## 🚀 Getting Started

### Frontend (React)

1. Open terminal in the `frontend` folder:
```bash
cd frontend


Install dependencies:

npm install


Start the development server:

npm start


Open in browser:

http://localhost:3000

Backend (Spring Boot / Eclipse)

Open Eclipse IDE and import the backend folder as an Existing Maven Project.

Configure MySQL database in application.properties:

spring.datasource.url=jdbc:mysql://localhost:3307/farmxchain
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update


Create the database in MySQL:

CREATE DATABASE farmxchain;


Run FarmxchainAuthApplication.java as a Java Application.
The backend will start at:

http://localhost:8082

🔄 Running the Full Application

Start MySQL.

Run the backend in Eclipse.

Run the frontend (npm start).

Access the app at http://localhost:3000

The frontend communicates with backend APIs at http://localhost:8082.
