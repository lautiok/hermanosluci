# SEO - Sitemap y Robots.txt

## 📋 Archivos Creados

### 1. **Sitemap** (`/src/app/sitemap.ts`)
- Genera automáticamente el sitemap XML
- Incluye todas las páginas principales del sitio
- Configurado con prioridades y frecuencias de actualización

### 2. **Robots.txt** (`/src/app/robots.ts`)
- Controla qué pueden rastrear los bots de búsqueda
- Bloquea rutas internas y APIs
- Incluye referencia al sitemap

### 3. **Manifest** (`/src/app/manifest.ts`)
- Configuración PWA (Progressive Web App)
- Mejora la experiencia móvil
- Configura íconos y colores del tema

### 4. **Datos Estructurados** (`/src/components/structured-data/StructuredData.tsx`)
- JSON-LD para mejor SEO
- Schemas de organización, servicios, breadcrumbs y FAQ
- Ayuda a Google a entender mejor tu negocio

## 🔍 URLs Generadas Automáticamente

Una vez que despliegues el sitio, estos archivos estarán disponibles en:

- **Sitemap**: `https://hltransporte.com.ar/sitemap.xml`
- **Robots**: `https://hltransporte.com.ar/robots.txt`
- **Manifest**: `https://hltransporte.com.ar/manifest.webmanifest`

## ✅ Verificación Local

Para verificar que funcionen correctamente en desarrollo:

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Accede a estas URLs en tu navegador:
   - http://localhost:3000/sitemap.xml
   - http://localhost:3000/robots.txt
   - http://localhost:3000/manifest.webmanifest

## 📊 Páginas Incluidas en el Sitemap

| Página | Prioridad | Frecuencia | URL |
|--------|-----------|------------|-----|
| Inicio | 1.0 | Semanal | `/` |
| Cotizaciones | 0.9 | Semanal | `/cotizaciones` |
| Nosotros | 0.8 | Mensual | `/nosotros` |
| Flota | 0.8 | Mensual | `/flota` |
| FAQ | 0.7 | Mensual | `/faq` |
| Privacidad | 0.3 | Anual | `/privacidad` |

## 🚀 Próximos Pasos para SEO

### 1. Google Search Console
- Regístrate en: https://search.google.com/search-console
- Verifica tu dominio
- Envía el sitemap manualmente

### 2. Verificación del Sitio
Una vez verificado, agrega tu código de verificación en `/src/app/layout.tsx`:

```typescript
verification: {
  google: 'tu-codigo-de-verificacion',
},
```

### 3. Google Business Profile
- Crea tu perfil en Google My Business
- Agrega fotos de tus vehículos
- Pide reseñas a tus clientes

### 4. Monitoreo
- Usa Google Analytics para seguimiento
- Monitorea el rendimiento en Search Console
- Revisa regularmente las palabras clave

## 🎯 Datos Estructurados Incluidos

Los siguientes schemas JSON-LD están implementados:

1. **LocalBusiness**: Información de tu empresa
2. **BreadcrumbList**: Navegación del sitio
3. **Service**: Servicios que ofreces
4. **FAQPage**: Preguntas frecuentes

Esto ayuda a:
- Aparecer en búsquedas locales
- Mostrar rich snippets en Google
- Mejorar el CTR (Click Through Rate)
- Aparecer en Google Maps

## 📱 PWA (Progressive Web App)

El manifest permite que tu sitio:
- Se pueda "instalar" en dispositivos móviles
- Funcione mejor offline
- Tenga un ícono en la pantalla de inicio
- Muestre colores personalizados en la barra de navegación

## 🔧 Configuración del Dominio

Cuando tengas el dominio listo:

1. Actualiza el `baseUrl` en:
   - `/src/app/sitemap.ts`
   - `/src/app/robots.ts`

2. Actualiza el `metadataBase` en:
   - `/src/app/layout.tsx`

3. Actualiza las URLs en:
   - `/src/components/structured-data/StructuredData.tsx`

## 📝 Notas Importantes

- Los archivos se generan automáticamente en build time
- No necesitas crear archivos XML/TXT manualmente
- Next.js maneja todo automáticamente
- Los cambios se reflejan después de `npm run build`
