# FaceAttendance Backend

## Setup

1. Install dependencies:
   ```cmd
   cd server
   npm install
   ```
2. Set up your `.env` file:
   - `MONGO_URI`: Your MongoDB connection string
   - `JWT_SECRET`: A secret key for JWT authentication
3. Start the server:
   ```cmd
   npm run dev
   ```

## API Endpoints

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and get JWT token
- `POST /api/attendance/mark` — Mark attendance
- `GET /api/attendance/user/:id` — Get attendance records for a user

## Deployment
- Deploy frontend (React) on Netlify or Vercel
- Deploy backend (Node.js/Express) on Render, Vercel, or Heroku
- Set frontend to use backend API endpoints

---
Replace placeholder values in `.env` before deploying.
