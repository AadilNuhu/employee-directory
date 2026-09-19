# Handoff: Auth is complete

## Current status
- Auth is working and tested.
- Register, login, and protected `/auth/me` are all functional.
- Database is SQLite and is created automatically in `server/db/app.db`.

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
│   └── (add employees.js here)
├── controllers/
│   ├── authController.js
│   └── (add employeeController.js here)
├── .env
└── package.json
```

## Setup
```bash
cd server
npm install
cp .env.example .env
npm run dev
```

`.env` example:
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

Expected behavior:
- duplicate email => 409
- wrong password => 401
- missing/invalid token => 401/403

## User table
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role TEXT DEFAULT 'admin',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Next step: Employee CRUD
- Create an `employees` table in `server/db/database.js`.
- Add `server/controllers/employeeController.js`.
- Add `server/routes/employees.js`.
- Protect those routes with the existing auth middleware.
- Register the router in `server.js`:

```js
const employeeRoutes = require('./routes/employees');
app.use('/employees', employeeRoutes);
```

## Suggested employee table
```sql
CREATE TABLE employees (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  department TEXT,
  role TEXT,
  salary REAL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Notes
- Run `npm run dev` from inside `server/`.
- Keep `.env` out of git.
- Do not build employee CRUD on the `auth` branch; create a separate feature branch.
