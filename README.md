# con-ww3-db

Aplicación Next.js exportada como sitio estático y publicada en GitHub Pages.

## Desarrollo local

```bash
npm ci
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). El prefijo `/con-ww3-db`
se aplica solo en producción para GitHub Pages.

## Publicación en GitHub Pages

El workflow de GitHub Actions compila la aplicación y publica el directorio `out`
al hacer push a `main`. También se puede ejecutar manualmente desde la pestaña
**Actions**.

En **Settings → Pages**, selecciona **GitHub Actions** como fuente de publicación.
La aplicación se sirve bajo `/con-ww3-db`, configurado en `next.config.ts`.

La exportación estática no admite funciones que necesiten un servidor Node.js en
tiempo de ejecución, como API routes o Server Actions.
