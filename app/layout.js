import "./globals.css";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
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


  return (

    <html lang="en"> 
 <Layout>{children}</Layout>
    </html>
    
  );
}
