# PetConnect - React

Original: This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Written for the PetConnect Capstone Project by Team Laika 2024. Project proposal on GDocs

Several pages and components are currently nonfunctional but routed. Should work better once Axios is set up and pulling in data.
- Most of the CSS is labeled. If you need to make changes for your individual features these are labeled appropriately.
- If you are adding on to the CSS, please label it and note what features it's affecting.
- Add new pages in App.jsx and route them using syntax <Route path="/PAGENAME" element={<ELEMENT />} /> {/* Rout for ELEMENT */} 
- If they're not exported, don't Route them. It will cause the app to render a blank white page. Export the page and then route it.
