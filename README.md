# SerenityAPP

Wellness web app that helps relieve headaches through guided vibration patterns and relaxing sounds. Built with Vue.js and Node.js as a university project for the HCI (Interacción Persona-Ordenador) course.

## What it does

- **Pain analysis**: Guided questionnaire to assess headache type and intensity before starting a relief session.
- **Vibration therapy**: Uses the device's vibration motor with calibrated patterns designed to relax muscle tension when the phone is placed on the affected area.
- **Relaxing audio**: Plays calming ambient sounds during sessions to complement the physical relief.
- **User accounts**: Register, login, and track your session history (analyses and relief sessions).
- **Responsive design**: Fully responsive across desktop, tablet, and mobile with custom wave-themed SVG backgrounds.

## Tech stack

**Frontend:**
- Vue 3 + Vue Router + Pinia (state management)
- Vuetify 3 (Material Design components)
- Vite

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- JWT authentication via cookies

**Infrastructure:**
- Docker Compose (frontend + backend containers)

## Project structure

```
├── web/                # Vue.js frontend
│   ├── src/
│   │   ├── views/      # Pages (Home, Analisis, Aliviar, Profile, LandingPage...)
│   │   ├── components/ # Navbar, Footer, Use
│   │   ├── stores/     # Pinia auth store
│   │   └── router/     # Route definitions
│   └── public/         # SVG backgrounds and logos
├── server/             # Express backend
│   ├── models/         # Mongoose schemas (User, Analisis, Alivio)
│   ├── controllers/    # Request handlers
│   ├── routes/         # API routes
│   └── middleware/     # JWT auth middleware
└── docker-compose.yml
```

## Running it

```bash
# With Docker
docker-compose up

# Or manually
cd server && npm install && node app.js
cd web && npm install && npm run dev
```

The frontend runs on `localhost:5173` and the backend API on `localhost:3000`.

## Context

Built for the **Interacción Persona-Ordenador** course (Computer Engineering degree, Universidad de Salamanca, 2024). Team project by Daniel Mulas Fajardo, Tomás Pérez Vellarino, and Mario Prieta Sánchez.