import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TrackMySpend - Expense Manager App',
    short_name: 'TrackMySpend',
    description: 'Track expenses, manage budgets, and take control of your personal finances with TrackMySpend Expense Manager.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    categories: ['finance', 'productivity', 'utilities'],
    screenshots: [
      {
        src: '/images/SS1.webp',
        sizes: '1080x1920',
        type: 'image/webp',
        label: 'TrackMySpend Dashboard',
      },
      {
        src: '/images/SS2.webp',
        sizes: '1080x1920',
        type: 'image/webp',
        label: 'Expense Categories',
      },
    ],
  }
}

