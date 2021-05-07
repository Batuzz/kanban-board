# kanban-board

Prerequisites:
- PostgreSQL database
- nodeJS 14+ installed
- npm 6+ installed

Project setup:

- Go to directories `client` & `server` and run `npm install` command in both of them
- create `server/.env` file and fill it with required variables \
e.g.
```
DB_URL=postgres://username:password@host:port/database-name
NODE_ENV=dev
JWT_SECRET=secret
```
- start client using `npm run serve` command inside `client` directory
- setup database tables using `npm run full-migration` command inside `server` directory
- start server using `npm start` command inside `server` directory
