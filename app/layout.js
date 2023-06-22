import "./globals.css";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import Head from "next/head";


import Layout from "@/components/layout";

const sofia = Sofia_Sans({ subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Technature",
  description: "Technature company website",
  openGraph: {
    title: 'technature',
    description: 'Building digital experiences',
    type:'website',
    url:"https://technature.gr",
    image:"https://technaturegr.fra1.cdn.digitaloceanspaces.com/technature-website/logo4.png"
  },
};


export default function RootLayout({ children }) {
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
          "about":"Building digital experiences",
          "image":"https://technaturegr.fra1.cdn.digitaloceanspaces.com/technature-website/logo4.png"
		}
		
  return (
    <html lang="en"> 
        {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      /> */}
 <Layout>{children}</Layout>
    </html>
  );
}
