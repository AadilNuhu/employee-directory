# Handoff: Backend auth and employee CRUD are in place

## Current status
- Auth flow is working: register, login, and the protected `/auth/me` route are implemented.
- Employee CRUD is implemented on the backend and protected with the auth middleware.
- SQLite is initialized automatically in `server/db/app.db` when the server starts.
- The API is mounted in `server/server.js` under `/auth` and `/employee`.

## Backend structure
```text
server/
├── server.js
├── db/
│   └── database.js
├── middleware/
│   └── auth.js
├── routes/
│   ├── auth.js
│   └── employee.js
├── controllers/
│   ├── authController.js
│   └── employeeController.js
├── enums/
│   ├── departments.js
│   └── roles.js
├── .env
├── package.json
└── app.db
```

## Setup
```bash
cd server
npm install
npm run dev
```

A `.env` file is required in the `server/` folder. Example:
```env
PORT=5000
JWT_SECRET=your_secret_here
```

## Working routes
| Method | Route | Auth |
|---|---|---|
| POST | `/auth/register` | No |
| POST | `/auth/login` | No |
| GET | `/auth/me` | Yes |
| GET | `/employee` | Yes |
| GET | `/employee/:id` | Yes |
| POST | `/employee` | Yes |
| PUT | `/employee/edit/:id` | Yes |
| DELETE | `/employee/delete/:id` | Yes |

### Auth behavior
- Duplicate email => `409`
- Wrong password => `401`
- Missing/invalid token => `401` / `403`

### Employee behavior
- Name and email are required for creation.
- Role and department are validated against the enum files in `server/enums/`.
- Duplicate employee emails return `409`.
- Missing employee records return `404`.

## Database tables
```sql
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role TEXT DEFAULT 'admin',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

```sql
CREATE TABLE IF NOT EXISTS employee (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE,
  department TEXT,
  role TEXT,
  phone_number TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Notes
- The app boots SQLite automatically and creates both tables on server startup.
- `server/routes/employee.js` applies the auth middleware to the whole router.
- The front-end can now call the backend endpoints directly for employee listing, creation, update, and deletion.
- Remaining work is mostly integration and UX polish on the client side, not backend API scaffolding.
- Keep `.env` out of version control.
