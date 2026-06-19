# 🗂️ InterSathi — Job Application Tracker

> A full-stack web application to track job applications through every stage of the hiring pipeline — from Applied to Offer.

[![Demo Video](https://img.shields.io/badge/▶%20Demo-YouTube-red?style=flat-square&logo=youtube)](https://youtu.be/lQVYiw6qSM8)
[![Repo](https://img.shields.io/badge/GitHub-Job--Portal--Assessment-181717?style=flat-square&logo=github)](https://github.com/Saroj-kr-tharu/Job-Portal-Assessment)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Coming%20Soon-blue?style=flat-square)](https://github.com/Saroj-kr-tharu/Job-Portal-Assessment)

---

## 📺 Demo

[![Demo Video](https://img.youtube.com/vi/lQVYiw6qSM8/maxresdefault.jpg)](https://youtu.be/lQVYiw6qSM8)

> Click the thumbnail to watch the full demo on YouTube.

---

## 📌 Project Overview

InterSathi is a clean, responsive job application tracker built as a full-stack internship assessment. It lets users log every role they apply to, track progress through hiring stages, search and filter applications, and manage the full lifecycle from submission to offer or rejection.

Key highlights:

- Paginated application list with server-side filtering by status and search
- Add, edit, delete applications with confirmation dialogs
- Slide-in detail drawer for viewing full application info
- Dark-themed UI with status-color-coded pills
- Docker Compose setup — one command to run the whole stack

---

## 🛠️ Tech Stack

| Layer     | Technology                                      |
|-----------|-------------------------------------------------|
| Frontend  | React 18, TypeScript, Vite                      |
| Styling   | Tailwind CSS v3, DaisyUI v4                     |
| State     | TanStack Query (React Query v5)                 |
| Forms     | React Hook Form + Zod                           |
| HTTP      | Axios                                           |
| Backend   | Node.js, Express, TypeScript                    |
| ORM       | Sequelize                                       |
| Database  | PostgreSQL                                      |
| Container | Docker, Docker Compose                          |

---



---

## ✅ Prerequisites

- [Docker](https://www.docker.com/) and Docker Compose installed
- **Or** for manual setup: Node.js 18+ and PostgreSQL 14+

---

## 🚀 Quick Start — Docker (Recommended)

The entire stack (frontend + backend + database) runs with a single command.

**1. Clone the repository**

```bash
git clone https://github.com/Saroj-kr-tharu/Job-Portal-Assessment.git
cd Job-Portal-Assessment
```

**2. Create the environment files**

```bash
mkdir -p envirnoment
```

Create `envirnoment/.env.backend`:

```env
PORT=3000
DB_USER=postgres
DB_PASSWORD=12345
DB_NAME=JobPortal
DB_HOST=postgres_db
FORTEND_URL=http://localhost
```

Create `envirnoment/.env.postgres`:

```env
POSTGRES_USER=postgres
POSTGRES_PASSWORD=12345
POSTGRES_DB=JobPortal
```

**3. Start the stack**

```bash
docker compose up --build
```

Docker Compose will:
1. Start PostgreSQL and wait for it to be healthy
2. Run Sequelize migrations and seeders automatically
3. Start the Express backend on port `3000`
4. Build and serve the React frontend on port `80`

**4. Open the app**

```
http://localhost
```

**To stop:**

```bash
docker compose down
```

**To stop and remove all data:**

```bash
docker compose down -v
```

---

## 🧑‍💻 Manual Setup (Without Docker)

### Backend

```bash
cd Backend
npm install
```

Create a `.env` file in `Backend/`:

```env
PORT=3000
DB_USER=postgres
DB_PASSWORD=12345
DB_NAME=JobPortal
DB_HOST=localhost
FORTEND_URL=http://localhost:5173
```

Run migrations and seed:

```bash
npx sequelize-cli db:migrate --env development
npx sequelize-cli db:seed:all --env development
```

Start the server:

```bash
npm run dev      # development
npm start        # production
```

Backend runs at: `http://localhost:3000`

---

### Frontend

```bash
cd Fortend
npm install
```

Create a `.env` file in `Fortend/`:

```env
VITE_API_URL=http://localhost:3000/api/v1
```

Start the dev server:

```bash
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## 🔌 API Reference

Base URL: `http://localhost:3000/api/v1`

| Method   | Endpoint              | Description                              |
|----------|-----------------------|------------------------------------------|
| `GET`    | `/applications`       | List all applications (`?status=&search=&page=&limit=`) |
| `GET`    | `/applications/:id`   | Get a single application                 |
| `POST`   | `/applications`       | Create a new application                 |
| `PATCH`  | `/applications/:id`   | Partially update an application          |
| `DELETE` | `/applications/:id`   | Delete an application                    |

### Query Parameters — `GET /applications`

| Param    | Type     | Example              | Description                   |
|----------|----------|----------------------|-------------------------------|
| `status` | `string` | `?status=Applied`    | Filter by status              |
| `search` | `string` | `?search=stripe`     | Search by company or job title |
| `page`   | `number` | `?page=2`            | Page number (default: 1)      |
| `limit`  | `number` | `?limit=10`          | Results per page (default: 10)|

### Example Response — `GET /applications`

```json
{
  "data": {
    "applications": [
      {
        "id": 1,
        "company_name": "Stripe",
        "job_title": "Frontend Engineer Intern",
        "job_type": "Internship",
        "status": "Offer",
        "applied_date": "2025-06-02",
        "notes": "Sent thank-you email",
        "created_at": "2025-06-02T10:00:00Z",
        "updated_at": "2025-06-10T14:30:00Z"
      }
    ],
    "pagination": {
      "total": 48,
      "totalPages": 5,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

---

## 📊 Data Model

```
Application
├── id            — Auto-incremented integer
├── company_name  — String, required (min 2 chars)
├── job_title     — String, required
├── job_type      — Enum: Internship | Full-time | Part-time
├── status        — Enum: Applied | Interviewing | Offer | Rejected
├── applied_date  — Date, required
├── notes         — Text, optional
├── created_at    — Timestamp, auto-set
└── updated_at    — Timestamp, auto-updated
```

---

## 🌍 Environment Variables

### `envirnoment/.env.backend`

| Variable       | Description                  | Example              |
|----------------|------------------------------|----------------------|
| `PORT`         | API server port              | `3000`               |
| `DB_USER`      | PostgreSQL username          | `postgres`           |
| `DB_PASSWORD`  | PostgreSQL password          | `12345`              |
| `DB_NAME`      | Database name                | `JobPortal`          |
| `DB_HOST`      | DB host (container name or `localhost`) | `postgres_db` |
| `FORTEND_URL`  | Allowed frontend origin (CORS) | `http://localhost` |

### `envirnoment/.env.postgres`

| Variable            | Description          | Example      |
|---------------------|----------------------|--------------|
| `POSTGRES_USER`     | PostgreSQL username  | `postgres`   |
| `POSTGRES_PASSWORD` | PostgreSQL password  | `12345`      |
| `POSTGRES_DB`       | Database to create   | `JobPortal`  |

### `Fortend/.env`

| Variable       | Description           | Example                          |
|----------------|-----------------------|----------------------------------|
| `VITE_API_URL` | Backend API base URL  | `http://localhost:3000/api/v1`   |

---

## 🐳 Docker Services

| Service            | Container name       | Port         | Description               |
|--------------------|----------------------|--------------|---------------------------|
| `postgres_service` | `postgres_db`        | `5432`       | PostgreSQL database        |
| `backend_service`  | `backend_service`    | `3000`       | Express REST API           |
| `frontend`         | `frontend_service`   | `80`         | React app (Nginx)          |

All services share the `JobPortal_net` bridge network. Database data is persisted in the `postgres_db_vol` volume.

---

## ✨ Features

- **Application list** — company name, job title, status, applied date, action buttons
- **Add application** — form with full validation (Zod + React Hook Form)
- **Edit application** — pre-filled modal, partial PATCH to API
- **Delete application** — confirmation dialog before removal
- **Filter by status** — Applied, Interviewing, Offer, Rejected
- **Search** — server-side search by company name or job title
- **Pagination** — configurable page size (5 / 10 / 20 / 50)
- **View drawer** — slide-in panel with full application details
- **Loading states** — skeleton cards while fetching
- **Error handling** — toast notifications for all CRUD operations
- **Responsive** — works on mobile, tablet, and desktop

---

## 📄 License

This project was built as part of the **InternSathi Full Stack Internship Assessment**.

---

<div align="center">
  Built with ❤️ by <a href="https://github.com/Saroj-kr-tharu">Saroj Kumar Tharu</a>
</div>