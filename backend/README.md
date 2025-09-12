# Face Recognition Attendance System Backend

This is the backend API for the Face Recognition Attendance System, built with Node.js, Express, and MongoDB.

## Setup Instructions

1. Install dependencies:
   ```cmd
   cd backend
   npm install
   ```
2. Configure environment variables:
   - Edit `.env` file with your MongoDB URI and JWT secret.
3. Start the server:
   ```cmd
   npm start
   ```
   For development with auto-reload:
   ```cmd
   npm run dev
   ```

## API Endpoints
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and get JWT token
- `GET /api/users` — Get all users
- `GET /api/users/:id` — Get user by ID
- `POST /api/attendance` — Mark attendance
- `GET /api/attendance/user/:userId` — Get attendance for a user
- `GET /api/attendance` — Get all attendance records

## Deployment
- Use services like Heroku, Render, or Vercel for deployment.
- Set environment variables for production in your deployment platform.

## Notes
- This backend is ready to connect with your React frontend via HTTP requests.
- Face recognition logic can be added to the `faceData` field in the User model or as a separate service.
