# Backend Assignment – Railway Form API Integration

## Overview
This backend project is built using **Node.js**, **Express.js**, and **PostgreSQL**. It covers two APIs as per the assignment requirements:

1. `POST /api/forms/bogie-checksheet`
2. `GET /api/forms/wheel-specifications`

The backend is tested using **Postman** and connected to a PostgreSQL database (using **pgAdmin** locally).

---

## Tech Stack

- **Backend Framework:** Node.js with Express
- **Database:** PostgreSQL
- **Testing Tool:** Postman
- **Other Tools:** pgAdmin (for managing database), VS Code

---

## Project Structure

project-root/
│
├── config/
│ └── db.js # PostgreSQL database connection
│
├── routes/
│ ├── bogieChecksheet.js # POST API route
│ └── wheelSpecifications.js # GET API route
│
├── .env # Environment variables (DB connection, PORT)
├── index.js # Main server file
├── package.json # Node dependencies
├── postman_collection.json # Postman collection to test APIs
├── demo.mp4 # Screen recording demo of assignment
└── README.md # Project documentation

yaml
Copy
Edit

---

## Setup Instructions

### Step 1: Clone the repository
```bash
git clone <your-repo-link>
cd project-root
Step 2: Install Node.js dependencies
bash
Copy
Edit
npm install
Step 3: Create a .env file and configure your environment
env
Copy
Edit
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_DATABASE=your_database_name
Step 4: Start the server
bash
Copy
Edit
npm start
The server will run on http://localhost:3000.

API Endpoints
1. POST /api/forms/bogie-checksheet
Used to submit bogie inspection form data.

📤 Request Body:
json
Copy
Edit
{
  "date": "2025-07-19",
  "coach_type": "Sleeper",
  "coach_number": "S9",
  "remarks": "All checks completed successfully.",
  "bogie_number": "BG102",
  "shift": "Night"
}
 Response:
json
Copy
Edit
{
  "message": "Bogie checksheet data inserted successfully"
}
2. GET /api/forms/wheel-specifications
Used to retrieve all wheel specification data from the database.

 Sample Response:
json
Copy
Edit
[
  {
    "id": 1,
    "parameter": "Tread Diameter",
    "min_value": 800,
    "max_value": 920
  },
  {
    "id": 2,
    "parameter": "Back to Back Distance",
    "min_value": 1000,
    "max_value": 1040
  }
]
 API Testing Instructions (Postman)
Open Postman.

Import the file postman_collection.json.

Start your server using npm start.

Test the two APIs with the correct request body for POST and observe the response.

You can also check your database using pgAdmin to verify insertions.

 Demo Video
The included video file (demo.mp4) contains a full walkthrough:

Project structure explanation

API testing via Postman

Database preview in pgAdmin

Code walkthrough in VS Code

📩 Notes for Submission
✅ Backend Code (Node + PostgreSQL)

✅ Connected to PostgreSQL using pgAdmin

✅ Tested with Postman

✅ Video Demo attached

✅ README file (this file)

 Author
Name: Dasu
Role: Full-Stack Developer
Email: [Your email here, optional]
LinkedIn/GitHub: [Your profile link, optional]

Thanks for reviewing my assignment! 

python
Copy
Edit

---

Let me know if you'd like a `.zip` checklist or a shortened README version too. Good luck bro — you're submitting it like a pro! 