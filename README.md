# excanches-api

API de tasas de cambio de moneda desplegada en Vercel.

## Rutas

- `GET /api/rate` - Obtiene las tasas de cambio actuales basadas en USD

## Variables de Entorno

Asegúrate de configurar la siguiente variable de entorno en Vercel:

- `CURRENCY_API_KEY` - Tu API key de currencyapi.com

## Uso

Después del despliegue, accede a la API en:

```
https://tu-dominio.vercel.app/api/rate
```

**Nota importante**: La ruta debe ser `/api/rate`, no solo la raíz del dominio.