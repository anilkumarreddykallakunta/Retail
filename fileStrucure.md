root/
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    └── src/
        ├── main.jsx             <-- Entry point
        ├── App.jsx              <-- Main Layout
        ├── styles/
        │   └── index.css        <-- Global Styles
        ├── routes/
        │   └── AppRoutes.jsx    <-- Routing Logic
        ├── pages/
        │   └── Dashboard.jsx    <-- The main Sales Dashboard View
        ├── services/
        │   └── api.js           <-- Mock API calls
        ├── utils/
        │   └── mockData.js      <-- Data Generators
        ├── hooks/
        │   └── useSalesData.js  <-- Search/Sort Logic
        └── components/          <-- Reusable UI only
            ├── Sidebar.jsx
            ├── Header.jsx
            ├── FilterBar.jsx
            ├── StatsCards.jsx
            ├── SalesTable.jsx
            └── Pagination.jsx