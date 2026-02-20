Virtual Event Management Backend
Overview

This is a backend system for a virtual event management platform, built using Node.js and Express.js. It supports:

User registration & login with bcrypt password hashing

JWT authentication for secure access

Event creation, update, deletion (organizers only)

Participant registration for events

Email notifications on successful event registration

All data stored in memory (arrays/objects)

Features

User Authentication

POST /api/register → Register as organizer or attendee

POST /api/login → Login and get JWT token

Event Management (Organizers Only)

POST /api/events → Create a new event

GET /api/events → View all events

PUT /api/events/:id → Update an event

DELETE /api/events/:id → Delete an event

Participant Management

POST /api/events/:id/register → Register for an event (email notification sent)

Technologies

Node.js

Express.js

bcrypt (password hashing)

jsonwebtoken (JWT authentication)

nodemailer (email notifications)

UUID (unique IDs)

In-memory storage (arrays/objects)

dotenv (environment variables)

Installation

Clone the repo:

git clone <your-github-repo-url>
cd virtual-event-backend

Install dependencies:

npm install

Create a .env file with your email credentials:

EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_app_password
PORT=3000
JWT_SECRET=your_jwt_secret

Start server:

npm run dev
Usage

Register a user via /api/register

Login via /api/login to get a token

Use token in Authorization header for all protected endpoints

Create an event as organizer

Register for an event as attendee

Receive email notification on successful registration

Notes

All data is stored in-memory, so restarting the server will reset users and events.

Use Postman or similar tool to test all endpoints.

Ensure App Password is used for Gmail, not normal password.

Author

Mohd Faraz