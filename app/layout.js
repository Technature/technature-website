import './globals.css'
import { Inter } from 'next/font/google'
import { Sofia } from 'next/font/google'
import Link from 'next/link';
import Burger from '@/components/Burger';
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Technature',
  description: "Technature company website",
}


export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body >
        {/* <div id="modal" className='w-full h-screen bg-gray-900  z-50 fixed overflow-hidden top-[0px] left-[0px]'></div> */}
        <header className=" p-2 fixed left-[10px] top-[20px] z-20">



          <div className='cursor-pointer m-5'>
            <Link href="/">
              <Image src="/logo2.png" alt="technature logo" height="60" width="60"></Image>
            </Link>
          </div>

          <nav >

            <div className='text-gray-900 hover:text-lime-600 font-bold mr-6 fixed right-60 top-10'>  <Link href="/work">Work</Link></div>


            <div className='text-gray-900 hover:text-lime-600 font-bold mr-6 fixed right-40 top-10'><Link href="/contactUs">Contact </Link></div>


            <Burger></Burger>
          </nav>

        </header>

        {children}

      </body>
    </html>
  )
}
