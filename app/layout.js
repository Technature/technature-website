import "./globals.css";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import Layout from "@/components/layout";
import Head from "next/head";

const sofia = Sofia_Sans({ subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Technature",
  description: "Building digital experiences",
  openGraph: {
    title: 'Technature',
    description: 'Building digital experiences',
    type:'website',
    url:"https://technature.gr",
   image:"/opengraph-image-logo4.png"
  },
  icons: { icon: '/favicon.ico', }
};

const structuredData= {
  "@context": "http://schema.org",
  "@type": "Organization",
    "name": "Jobeat",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Marousi, Athens, Greece",
      "postalCode": "15124",
      "streetAddress": "Panathineon 9"
    },
    "url": "https://www.technature.gr",
        "image":"https://technaturegr.fra1.cdn.digitaloceanspaces.com/technature-website/logo4.png"
  }



export default function RootLayout({ children }) {


  return (

    <html lang="en"> 
    <Head>
    <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>

 <Layout>{children}</Layout>
    </html>
    
  );
}
