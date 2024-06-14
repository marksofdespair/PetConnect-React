# PetConnect - React

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Written for the PetConnect Capstone Project by Team Laika 2024. Project proposal on GDocs

All pages are functional and data is being pulled in through Axios APIs.
- Most of the CSS is labeled. If you need to make changes for your individual features these are labeled appropriately.
- If you are adding on to the CSS, please label it and note what features it's affecting.
- Add new pages in App.jsx and route them using syntax <Route path="/PAGENAME" element={<ELEMENT />} /> {/* Rout for ELEMENT */} 
- If they're not exported, don't Route them. It will cause the app to render a blank white page. Export the page and then route it.

# KNOWN ISSUE

- Breed lists may be slow to populate, do NOT refresh page without giving it a chance! It's just being a baby.