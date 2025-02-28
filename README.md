# Task Management API

A RESTful API for managing tasks built with NestJS and PostgreSQL.

## Features

- Create, read, update, make tasks as completed and delete tasks
- Input validation with class-validator
- API documentation with Swagger
- PostgreSQL database with TypeORM

## Technologies Used

- Node.js
- NestJS
- TypeORM
- PostgreSQL
- Swagger

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.x or later)
- npm or yarn
- PostgreSQL

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-management-api.git
   cd task-management-api
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a PostgreSQL database:
   ```sql
   CREATE DATABASE taskmanagement;
   ```

4. Create a `.env` file in the root directory with the following environment variables:
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=your_password
   DB_DATABASE=task_management
   NODE_ENV=development
   ```

5. Start the development server:
   ```bash
   npm run start:dev
   # or
   yarn start:dev
   ```

6. The API will be available at [http://localhost:3000](http://localhost:3000)
7. The Swagger documentation will be available at [http://localhost:3000/api](http://localhost:3000/api)

## API Endpoints

| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| GET    | /tasks               | Get all tasks            |
| GET    | /tasks/:id           | Get a task by ID         |
| POST   | /tasks               | Create a new task        |
| PATCH  | /tasks/:id           | Update a task            |
| PATCH  | /tasks/{id}/complete | Make a task as completed |
| DELETE | /tasks/:id           | Delete a task            |

## Request and Response Examples

### Create a Task
```
POST /tasks
Content-Type: application/json

{
  "title": "Complete NestJS Project",
  "description": "Finish the task management API with all required endpoints"
}
```

Response:
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Complete NestJS Project",
  "description": "Finish the task management API with all required endpoints",
  "createdAt": "2025-02-27T12:00:00.000Z",
  "updatedAt": "2025-02-27T12:00:00.000Z"
}
```

### Get All Tasks
```
GET /tasks
```

Response:
```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "title": "Complete Task Management API Project",
    "description": "Finish the task management API with all required endpoints",
    "createdAt": "2025-02-27T12:00:00.000Z",
    "updatedAt": "2025-02-27T12:00:00.000Z"
  },
  {
    "id": "223e4567-e89b-12d3-a456-426614174001",
    "title": "Learn Docker",
    "description": "Master Docker and container orchestration",
    "createdAt": "2025-02-27T13:00:00.000Z",
    "updatedAt": "2025-02-27T13:00:00.000Z"
  }
]
```

## Testing

Run unit tests:
```bash
npm run test
# or
yarn test
```

Run end-to-end tests:
```bash
npm run test:e2e
# or
yarn test:e2e
```

## Building for Production

```bash
npm run build
# or
yarn build
```

Then start the production server:
```bash
npm run start:prod
# or
yarn start:prod
```

## Deployment

For deployment, consider using:
- AWS Elastic Beanstalk
- Heroku
- Docker with Kubernetes or Docker Compose


## Future Improvements

- Add authentication and user management
- Implement other task status (TODO, IN_PROGRESS, DONE)
- Add priorities
- Implement task categories or tags
- Add pagination for task listing

## License

MIT