<h1 align="center">Notely</h1>

## Live demo: 
[Front-End](https://notely-1al0.onrender.com) 

[Back-End](https://notely-server-w9q8.onrender.com)
## What can you do?
Notely is Full-Stack App for notes. You can create and view notes. You can also login and register and you can edit and delete your notes. This repo contains both frontend and backend. Frontend is written in React and backend is written in ExpressJS. For ORM I use Prisma.

## How to set up the Frontend?
To set up the frontend, you need to clone the repo and run the following commands:

```bash
npm install
npm run dev
```
You need to add .env file next to .env.example with API_URL.

## How to set up the Backend?
To set up the backend, you need create .env file next to .env.example and add varaibles, that are icluded in .env.example file.

```bash
npm install
npm run start
```

## Backend endpoints
### get:
- /getAllNotes
- /getNote/:id
### post:
- /create
- /login
- /register
### delete:
- /delete/:id
### put:
- /edit/:id