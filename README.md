# Job Application Tracker

A full-stack web application for organizing and tracking job applications throughout the job search process. Built as a portfolio project demonstrating REST API design, CRUD operations, database integration, and (soon) React frontend development.

## Status: In progress

Backend complete, Frontend not yet started.

- ✅ Phase 1: Planning (scope, database design, API design, UI design)
- ✅ Phase 2: Backend (Spring Boot REST API, MySQL, validation, error handling)
- Phase 3: Frontend (React + TypeScript)
- Phase 4: Testing & polish

## Tech Stack

**Backend**
- Java 21
- Spring Boot 4.1.1
- Spring Web (`spring-boot-starter-webmvc`)
- Spring Data JPA / Hibernate
- MySQL 9.7 LTS
- Jakarta Bean Validation

**Frontend**
- React + TypeScript
- Tailwind CSS
- React Router
- Axios

**Tools**
- IntelliJ IDEA (backend)
- VS Code (frontend)
- MySQL Workbench
- Postman
- Git / GitHub

## Features

- Full CRUD on job applications (create, read, update, delete)
- Status tracking through six stages: Saved → Applied → Under Review → Interview → Offer / Rejected
- Dedicated status-only update endpoint (separate from full edits)
- Server-side validation with field-specific error messages
- Centralized error handling with clean, consistent JSON error responses
- Automatic `createdAt` / `updatedAt` timestamps

## Database Schema

**Table: `applications`**

| Column | Type | Notes |
|---|---|---|
| `id` | `BIGINT` | Primary key, auto-increment |
| `job_title` | `VARCHAR(150)` | Required |
| `company` | `VARCHAR(150)` | Required |
| `location` | `VARCHAR(150)` | Optional |
| `job_type` | `ENUM` | FULL_TIME, PART_TIME, CONTRACT, INTERNSHIP |
| `work_setup` | `ENUM` | ONSITE, REMOTE, HYBRID |
| `status` | `ENUM` | SAVED, APPLIED, UNDER_REVIEW, INTERVIEW, OFFER, REJECTED |
| `application_date` | `DATE` | Optional |
| `job_url` | `VARCHAR(500)` | Optional |
| `company_url` | `VARCHAR(500)` | Optional |
| `notes` | `TEXT` | Optional |
| `created_at` | `TIMESTAMP` | Auto-set on creation |
| `updated_at` | `TIMESTAMP` | Auto-updated on every change |

## API Endpoints

Base URL: `http://localhost:8080/api/applications`

| Method | Endpoint | Description | Success | Errors |
|---|---|---|---|---|
| GET | `/api/applications` | Get all applications | `200` | - |
| GET | `/api/applications/{id}` | Get one application | `200` | `404` |
| POST | `/api/applications` | Create an application | `201` | `400` (validation) |
| PUT | `/api/applications/{id}` | Full update | `200` | `400`, `404` |
| PATCH | `/api/applications/{id}/status` | Update status only | `200` | `404` |
| DELETE | `/api/applications/{id}` | Delete an application | `204` | `404` |

### Example: Create an application

**Request** - `POST /api/applications`
```json
{
  "jobTitle": "Frontend Developer",
  "company": "Northwind Studio",
  "location": "Remote",
  "jobType": "FULL_TIME",
  "workSetup": "REMOTE",
  "status": "APPLIED",
  "applicationDate": "2026-09-01",
  "jobUrl": "https://example.com/job/123",
  "companyUrl": "https://northwindstudio.com",
  "notes": "Applied through referral"
}
```

**Response** - `201 Created`
```json
{
  "id": 1,
  "jobTitle": "Frontend Developer",
  "company": "Northwind Studio",
  "status": "APPLIED",
  "createdAt": "2026-09-03T05:54:20.466976",
  "updatedAt": "2026-09-03T05:54:20.466976"
}
```

### Example: Validation error

**Request** - `POST /api/applications` with a blank `jobTitle` and missing `jobType`

**Response** - `400 Bad Request`
```json
{
  "error": "Validation Failed",
  "status": 400,
  "fieldErrors": {
    "jobTitle": "Job title is required",
    "jobType": "Job type is required"
  }
}
```

### Example: Not found error

**Response** - `404 Not Found`
```json
{
  "error": "Not Found",
  "status": 404,
  "message": "Application not found with id: 999"
}
```

## Getting Started (Backend)

### Prerequisites
- Java 21
- MySQL 9.7 LTS (or compatible)
- Maven (included via `mvnw` wrapper)

### Setup

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/job-application-tracker.git
   cd job-application-tracker/backend
   ```

2. Create the database in MySQL:
   ```sql
   CREATE DATABASE job_application_tracker;
   ```

3. Create `src/main/resources/application-local.properties` (not committed to Git):
   ```properties
   spring.datasource.username=root
   spring.datasource.password=your_mysql_password
   ```

4. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

   The API will be available at `http://localhost:8080`.

5. Test endpoints using Postman or any HTTP client.

## Project Structure

```
job-application-tracker/
├── backend/
│   └── src/main/java/com/drn/job_application_tracker_api/
│       ├── controller/     # REST endpoints
│       ├── service/        # Business logic
│       ├── repository/     # Database access (Spring Data JPA)
│       ├── model/          # Entities and enums
│       └── exception/      # Custom exceptions and global error handling
├── frontend/                # (coming in Phase 3)
└── README.md
```

## License

MIT
