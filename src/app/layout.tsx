import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL("https://vjshrinath.vercel.app"),
  title: "Vijay Shrinath | Premium Freelance Full Stack Developer & Next.js Expert",
  description: "Hire Vijay Shrinath, a professional Full Stack Web Developer specializing in Next.js, React, and scalable digital solutions. Expert in building high-performance web applications and driving business growth through technical excellence.",
  keywords: ["Freelance Web Developer", "Next.js Expert", "React Developer for Hire", "Full Stack Developer Portfolio", "Remote Software Engineer", "Hire Web Developer India", "Professional Web Application Developer"],
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
    title: "Vijay Shrinath | Pro Full Stack Developer Portfolio",
    description: "Building premium digital experiences with Next.js & React. Explore my work and get in touch for high-performance web development.",
    url: "https://vjshrinath.vercel.app",
    siteName: "Vijay Shrinath Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vijay Shrinath - Professional Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vijay Shrinath | Freelance Full Stack Web Developer",
    description: "Expert Next.js & React development for modern businesses.",
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
        
        {/* JSON-LD Structured Data for Pro Developer Profile */}
        <Script id="json-ld" type="application/ld+json">
          {`
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
              "jobTitle": "Full Stack Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "description": "Professional Full Stack Web Developer specializing in Next.js, React, and building scalable digital solutions for global clients.",
              "knowsAbout": ["Web Development", "Next.js", "React", "Node.js", "Firebase", "Digital Marketing", "SEO"],
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://vjshrinath.vercel.app"
              }
            }
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
