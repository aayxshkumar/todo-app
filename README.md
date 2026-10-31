# ToDoApp using React-Redux and Framer-motion with all the CRUD operations.

![CI](https://github.com/aayxshkumar/todo-app/actions/workflows/ci.yml/badge.svg)

> Learning project from July 2023.

A small to-do app for practising Redux Toolkit and Framer Motion. Todos live in the Redux store only, so they reset when the page reloads.

Live demo: [reactredux-todoapp.vercel.app](https://reactredux-todoapp.vercel.app)

## Features

- Add a todo
- Edit a todo in place (press Enter to save)
- Mark a todo as completed
- Delete a todo
- Filter by active, completed or all
- Animated heading, list and items with Framer Motion

## Tech stack

- React 17
- Redux Toolkit (`createSlice`, `configureStore`) with React Redux `connect`
- Framer Motion, React Icons
- Create React App (`react-scripts` 5), Jest and React Testing Library

## Getting started

Requires Node.js 22.

```bash
git clone https://github.com/aayxshkumar/todo-app.git
cd todo-app
npm ci
npm start                        # dev server on http://localhost:3000
npm test -- --watchAll=false     # run the tests once
npm run build                    # production build into build/
```

The `.npmrc` sets `legacy-peer-deps=true` so `npm ci` installs the dependency tree recorded in `package-lock.json`.

No environment variables are needed.
