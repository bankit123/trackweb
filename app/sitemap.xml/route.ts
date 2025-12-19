import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://trackmyspend.online'
  const logoUrl = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhO3FzMvPTqFW1lJ4Z0A4nXdS6NP_H2bj3DgM4nwAN2PBY4QjTVihO1rmg-KhfqiOKWrM8afQ_2fo7qwc_0Y6Rj0M22Sig_Sc0TjVDsdzv52hKN_LFxYc5WK9M33039cJ8q7p9hBAKsMpDIjLhR0i1c1vsTf8Un-oZNAOlQ_TPzYaU8-Gm4Wjqf0bTYUs0U/s320/Logo.jpg'
  const currentDate = new Date().toISOString()

  // All images from public/images folder
  const images = [
    {
      url: `${baseUrl}/images/About.webp`,
      title: 'TrackMySpend About - Expense Manager App Interface',
      caption: 'TrackMySpend Expense Manager App - About page showing budget management and expense tracking features',
    },
    {
      url: `${baseUrl}/images/PlaystoreIMG.webp`,
      title: 'TrackMySpend on Google Play Store',
      caption: 'TrackMySpend Expense Manager App available on Google Play Store for Android devices',
    },
    {
      url: `${baseUrl}/images/SS1.webp`,
      title: 'TrackMySpend App Screenshot 1 - Dashboard and Budget Overview',
      caption: 'TrackMySpend Expense Manager App Screenshot showing dashboard with budget overview and expense tracking',
    },
    {
      url: `${baseUrl}/images/SS2.webp`,
      title: 'TrackMySpend App Screenshot 2 - Expense Categories',
      caption: 'TrackMySpend Expense Manager App Screenshot displaying expense categories and spending analysis',
    },
    {
      url: `${baseUrl}/images/SS3.webp`,
      title: 'TrackMySpend App Screenshot 3 - Transaction History',
      caption: 'TrackMySpend Expense Manager App Screenshot showing transaction history and expense tracking features',
    },
    {
      url: `${baseUrl}/images/SS4.webp`,
      title: 'TrackMySpend App Screenshot 4 - Budget Planning',
      caption: 'TrackMySpend Expense Manager App Screenshot displaying monthly budget planning and financial reports',
    },
    {
      url: `${baseUrl}/images/SS5.webp`,
      title: 'TrackMySpend App Screenshot 5 - Financial Insights',
      caption: 'TrackMySpend Expense Manager App Screenshot showing financial insights and spending trends',
    },
    {
      url: `${baseUrl}/images/SS6.webp`,
      title: 'TrackMySpend App Screenshot 6 - Settings and Features',
      caption: 'TrackMySpend Expense Manager App Screenshot displaying settings and customization features',
    },
  ]

  // Generate image XML for each image
  const generateImageXML = (imageList: Array<{url: string, title: string, caption: string}>) => {
    return imageList.map((img: {url: string, title: string, caption: string}) => `
    <image:image>
      <image:loc>${img.url}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('')
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1</priority>
    <image:image>
      <image:loc>${logoUrl}</image:loc>
      <image:title>TrackMySpend Logo</image:title>
      <image:caption>TrackMySpend - Expense Manager App Logo</image:caption>
    </image:image>
    ${generateImageXML(images)}
  </url>
  <url>
    <loc>${baseUrl}/privacy-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.1</priority>
    <image:image>
      <image:loc>${logoUrl}</image:loc>
      <image:title>TrackMySpend Logo</image:title>
      <image:caption>TrackMySpend - Expense Manager App Logo</image:caption>
    </image:image>
  </url>
  <url>
    <loc>${baseUrl}/terms-of-service</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.1</priority>
    <image:image>
      <image:loc>${logoUrl}</image:loc>
      <image:title>TrackMySpend Logo</image:title>
      <image:caption>TrackMySpend - Expense Manager App Logo</image:caption>
    </image:image>
  </url>
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}

