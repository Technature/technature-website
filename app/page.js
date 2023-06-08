import Image from 'next/image'
import { Inter, Sofia_Sans,Prompt } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const prompt = Prompt({ subsets: ['latin'],weight:"500"})

export const metadata = {
  title: 'Technature',
  description: "Technature company website",
}



export default function Home() {
  return (
    <main className={`${inter.className} `}>

    <section className=" h-[100vh] relative width-[100vh]  flex flex-col sm:flex-row sm:mt-[150px] mt-[50px]" >
    <div className=' w-1/2 relative mr-[20px] ml-[30px] md:ml-[80px]  lg:ml-[130px]' ><Image src="/pic1.webp" width={700} height={500}></Image></div>
      <div className=' w-1/3 '>
     <h1 className={`${prompt.className} text-gray-900 tracking-tighter md:text-7xl text-4xl  mb-5`}  >Rebel against boring</h1>
     <h2>We’re a creative web design agency based in London that crafts beautiful and original websites for brands who refuse to blend in.</h2>
     </div>
    </section>

     <section className=" relative width-[100vh] py-60 flex flex-row items-center justify-between">
     <div className=' w-1/2 relative h-[50vw] ' ><Image src="/pic1.webp" fill={true}></Image></div>
      <div className=' w-1/3 mr-40'>
     <h1 className={`${prompt.className} text-gray-900 tracking-tighter md:text-7xl text-4xl  mb-5 `}  >Making brands a damn site better</h1>
     <h2>Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.</h2>
     </div>
    </section>
     <section className=" relative">
     <h1>fvdsfvsd</h1>
    </section>
    </main>
  )
}
