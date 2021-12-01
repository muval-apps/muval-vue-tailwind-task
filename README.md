Muval Test Task
===============

Muval Test Task running Vite, Vue 3 and TailwindCSS

Initial Setup
-------------

```
npm install
npm run dev
```

Task
-------------

Create a table view `views/Table.vue` and link to this via the Button found in App.vue. Then within this view using as many or as little components as you see fit create:

A table that calls the `api.muval.dev/api/v1/vehicles` endpoint displaying a limit of 10 vehicles at a time and pagination to navigate to the pages in the table (make use of the meta data returned via the vehicles endpoint) The columns to be displayed: name, registration, type, capacity, manufacturer, year, fuel and transmission. Bonus points to have a little search input above the table to search via the query param `search`
Query params vehicles endpoint accepts: `page`, `limit`, `search`


Tech Stack
-------------

- __[vite](https://vitejs.dev/)__ - Next Generation Frontend Tooling
- __[vue3](https://v3.vuejs.org/guide/introduction.html)__ - Vue 3
- __[tailwindcss](https://tailwindcss.com/)__ - Tailwind CSS



