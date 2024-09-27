Auto-Switching Tabs and Timer with Progress Bar

This React project implements a dynamic UI featuring auto-switching tabs. The website offers both automatic and manual tab-switching mechanisms with visual feedback.

 
Features
1.Tab Switching:
  Automatic tab switching every 5 seconds.
  Manual tab switching with timer reset.
  Smooth transitions between tabs and active tab highlighting.

2. Responsive Design:
  The application is fully responsive, providing a consistent experience across devices and orientations.


Prerequisites
Before running the project, ensure you have the following installed on your machine:
Node.js (version 14.x or higher)
npm (version 7.x or higher)
Vite (bundled with the project)

Install the project:
npm install

Running the Project
npm run dev

This will start the project and open it in your default browser at http://localhost:5173.

Components
Header Component : Header Section incluse logo, navigation, lanuages, login
Tab Component: Handles tab switching with both automatic and manual interaction.
Timer Component: Displays the timer counting from 14:00 to 14:59.
Progress Bar Component: Displays the progress bar that fills in sync with the timer.
Footer Component : Footer Section incluse logo, navigation, mobile app btn, copywrite, subscripe form.

Code Structure

src/
│
├── components/
│   ├── Tabs.jsx          # Manages auto and manual tab switching
│   ├── Tabs.css          # Manages auto and manual tab switching CSS Style
│   ├── Timer.jsx         # Handles the countdown timer
│   ├── Timer.jsx         # Handles the countdown timer CSS Style
│   └── ProgressBar.jsx   # Progress bar synced with the timer
│   └── ProgressBar.jsx   # Progress bar synced with the timer CSS Style
│── components/Header/
│   ├── Header.jsx          # Manages Header Section
│   ├── Header.css          # Manages Header Section CSS Style
│── components/Footer/
│   ├── Footer.jsx          # Manages Footer Section
│   ├── Footer.css          # Manages Footer Section CSS Style
│
├── App.jsx               # Main application entry point
├── main.jsx              # Vite-specific main file for rendering React
└── index.css             # CSS styles for the application





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

