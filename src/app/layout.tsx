import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL("https://vjshrinath.vercel.app"),
  title: "Vijay Shrinath | Freelance Web Developer & Digital Marketing Expert in Maharashtra",
  description: "Hire Vijay Shrinath, the leading Freelance Web Developer and Digital Marketing Expert in Maharashtra. Specializing in high-performance, SEO-optimized, and conversion-focused websites to generate leads and grow local businesses.",
  keywords: ["Freelance Web Developer in Maharashtra", "Digital Marketing Expert in Maharashtra", "Ecommerce Website Developer near me", "SEO optimized websites", "Web Development Services Pune", "Local SEO Expert Maharashtra", "Custom Web Applications", "Next.js Expert India", "Professional Web Application Developer"],
  authors: [{ name: "Vijay Gopal Shrinath" }],
  creator: "Vijay Gopal Shrinath",
  publisher: "Vijay Gopal Shrinath",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "kb1KnyXlQzjYtnbE9VluOFI-4OYNg15RadI7wSBLcZQ",
  },
  openGraph: {
    title: "Vijay Shrinath | Web Developer & Digital Marketing Expert in Maharashtra",
    description: "Generate more leads with fast, SEO-optimized, and conversion-focused websites. Partner with Maharashtra's top freelance full-stack developer.",
    url: "https://vjshrinath.vercel.app",
    siteName: "Vijay Shrinath Web Development",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vijay Shrinath - Freelance Web Developer & Digital Marketing Expert",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vijay Shrinath | Web Developer & Digital Marketing Expert",
    description: "Growing local businesses in Maharashtra with high-performance, SEO-friendly custom websites.",
    images: ["/og-image.jpg"],
    creator: "@vjshrinath",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://vjshrinath.vercel.app",
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        
        {/* JSON-LD Structured Data for LocalBusiness & Person */}
        <Script id="json-ld" type="application/ld+json">
          {`
            [
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Vijay Gopal Shrinath",
                "url": "https://vjshrinath.vercel.app",
                "image": "https://vjshrinath.vercel.app/profile-photo.jpeg",
                "sameAs": [
                  "https://github.com/vj-shrinath",
                  "https://linkedin.com/in/vjshrinath",
                  "https://instagram.com/vjshrinath"
                ],
                "jobTitle": "Freelance Web Developer & Digital Marketing Expert",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Vijay Shrinath Web Services"
                },
                "description": "Leading freelance full-stack web developer and digital marketing specialist based in Maharashtra. I build custom, SEO-friendly, and high-conversion websites for local businesses and startups.",
                "knowsAbout": ["Web Development", "Next.js", "React", "Local SEO", "Digital Marketing", "Ecommerce Development", "Lead Generation"],
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://vjshrinath.vercel.app"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Vijay Shrinath Digital Solutions",
                "image": "https://vjshrinath.vercel.app/profile-photo.jpeg",
                "@id": "https://vjshrinath.vercel.app",
                "url": "https://vjshrinath.vercel.app",
                "email": "vjshrinath@outlook.com",
                "telephone": "+91-8668439274",
                "priceRange": "$$",
                "areaServed": [
                  {
                    "@type": "State",
                    "name": "Maharashtra"
                  },
                  {
                    "@type": "City",
                    "name": "Pune"
                  },
                  {
                    "@type": "City",
                    "name": "Mumbai"
                  },
                  {
                    "@type": "City",
                    "name": "Pimpri Chinchwad"
                  }
                ],
                "description": "Premium Web Development, Ecommerce, and Digital Marketing Services optimized for businesses in Maharashtra, India."
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Vijay Shrinath - Web Developer",
                "url": "https://vjshrinath.vercel.app",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://vjshrinath.vercel.app/#projects?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ]
          `}
        </Script>
      </head>
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
