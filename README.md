# Warehouse Management System Backend

A backend API for a warehouse management system built with Node.js, Express, Prisma, PostgreSQL, and JWT authentication.

The project supports product, supplier, location, order, batch, and stock movement workflows, with business rules designed to prevent invalid inventory states such as negative stock.

---

## Live Links

Frontend: https://warehouse-management-frontend-eta.vercel.app

Backend Repository: https://github.com/Agbak17/warehouse-management-backend

Frontend Repository: https://github.com/Agbak17/warehouse-management-frontend

---

## Features

- JWT-based authentication
- Protected API routes
- Product, supplier, location, order, and batch management
- Stock movement tracking
- Batch-level inventory control
- Validation to prevent negative stock levels
- PostgreSQL relational database design
- Prisma ORM and migrations
- Production deployment using Render

---

## Tech Stack

- Node.js
- Express
- PostgreSQL
- Prisma
- JWT
- Render
- dotenv
- CORS

---

## Architecture

- Express server exposes REST API endpoints
- PostgreSQL stores relational warehouse data
- Prisma manages database schema, migrations, and queries
- JWT authentication protects private routes
- Frontend communicates with backend through secured API requests
- Backend deployed on Render

---

## Database Design

The backend uses a relational database structure to model warehouse workflows, including:

- Products
- Suppliers
- Locations
- Orders
- Batches
- Stock movements
- Users

Stock movement records are used to track inbound and outbound inventory changes, while validation logic prevents outbound movements from reducing stock below available quantities.

---

## Local Development Setup

```bash
git clone https://github.com/Agbak17/warehouse-management-backend.git
cd warehouse-management-backend
npm install

---

## Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=your_postgresql_database_url
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

## Run Locally

```bash
npm install
npm run dev
```

---

## Prisma Commands

Generate Prisma client:

```bash
npx prisma generate
```

Run migrations locally:

```bash
npx prisma migrate dev
```

Deploy migrations in production:

```bash
npx prisma migrate deploy
```

---

## Challenges & Lessons Learned

A key challenge in this project was designing inventory logic that accurately handles inbound and outbound stock movements while preventing invalid inventory states such as negative stock levels.

The project also involved debugging real deployment issues, including database connectivity, Prisma migration behavior, environment configuration, and production hosting differences between local development and Render.

Additional challenges included:

- Managing relational warehouse data using Prisma and PostgreSQL
- Designing batch-level inventory tracking
- Securing protected API routes with JWT authentication
- Handling environment variables safely across development and production environments
- Resolving production database lifecycle and connection issues

This project provided hands-on experience with backend architecture, relational database design, authentication, deployment workflows, and production debugging.

---

## Future Improvements

- Role-based user permissions
- Automated integration testing
- Advanced warehouse analytics and reporting
- Dockerized local development environment
- Audit logs for stock movement history
- Real-time inventory updates
- Improved inventory forecasting and low-stock notifications
