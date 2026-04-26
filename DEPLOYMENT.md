# Ophelia Deployment Notes

## Frontend on Vercel

Use this folder as the Vercel project root:

`E_Bussiness/`

The static homepage is available at:

`index.html`

Vercel can serve the frontend directly from this root. No frontend build step is required.

## API base URL

The browser API URL is configured in `config.js`.

For local development, the frontend falls back to:

`http://localhost:5159/api`

For production, set `window.OPHELIA_API_BASE_URL` or edit `config.js` after the ASP.NET Core API is deployed. Do not hardcode localhost in `main.js` or `features.js`.

Example production value:

```js
window.OPHELIA_API_BASE_URL = "https://your-ophelia-api.example.com/api";
```

## Backend hosting

`Ophelia.Api/` is an ASP.NET Core Web API and should be hosted separately from Vercel, for example on Azure, Render, Railway, or another .NET hosting provider. Keep the SQL Server connection string in the backend hosting environment or in the backend appsettings for local development.
