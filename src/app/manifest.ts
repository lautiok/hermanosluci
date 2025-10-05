import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HL Transporte - Hermanos Luci',
    short_name: 'HL Transporte',
    description: 'Transporte de turismo en Córdoba. Traslados al aeropuerto, excursiones y viajes corporativos.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1976d2',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
