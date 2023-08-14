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
   image:"https://technature.gr/opengraph-image-logo4.png"
  },

};

// const structuredData= {
//   "@context": "http://schema.org",
//   "@type": "Organization",
//     "name": "Jobeat",
//     "address": {
//       "@type": "PostalAddress",
//       "addressLocality": "Marousi, Athens, Greece",
//       "postalCode": "15124",
//       "streetAddress": "Panathineon 9"
//     },
//     "url": "https://www.technature.gr",
//         "image":"https://technaturegr.fra1.cdn.digitaloceanspaces.com/technature-website/logo4.png"
//   }



export default function RootLayout({ children }) {


  return (

    <html lang="en"> 
  
 <Layout>{children}</Layout>
    </html>
    
  );
}
