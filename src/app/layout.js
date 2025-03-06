import { Geist, Geist_Mono } from "next/font/google";
import "@/app/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("http://localhost:3000"), // Update for production
  title: "GGMV Services - Railway Wagon & Labor Contractor",
  description: "We provide premium railway wagon and labor contracting services.",
  keywords: "railway wagon, labor contractor, logistics, GGMV Services",
  openGraph: {
    title: "GGMV Services",
    description: "Providing premium railway and logistics solutions.",
    url: "http://localhost:3000", // Update for production
    siteName: "GGMV Services",
    images: [
      {
        url: "/logo/GGMV-logo.png", // Corrected path
        width: 1200,
        height: 630,
        alt: "GGMV Services Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GGMV Services",
    description: "Providing railway and labor contracting services across India.",
    images: ["/logo/GGMV-logo.png"], // Corrected path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Corporation",
              "name": "GGMV Services",
              "url": "http://localhost:3000", // Update for production
              "logo": "http://localhost:3000/logo/GGMV-logo.png", // Update for production
              "description": "Providing premium railway and labor contracting services.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 9876543210",
                "contactType": "Customer Support",
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "24/2, Girish Mukherjee Road",
                "addressLocality": "Kolkata",
                "addressRegion": "West Bengal",
                "postalCode": "700025",
                "addressCountry": "IN",
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
