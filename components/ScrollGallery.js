
const  ScrollGallery = ({sofia})=>{


    return(
        <>
            {/* SECTION 4 */}
            <section className=" relative width-full flex flex-row items-center justify-start mt-40">
        <div id="leftSide" className=" w-1/3 ml-40">
          <div className="mb-80">
            <div className="relative top-[33px] right-8 text-lime-600">01</div>
            <h1
              className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-2 font-extrabold `}
            >
              Beauty
            </h1>
            <h2 className={`${sofia.className} text-gray-600  font-semibold`}>
              Developing stunning one-of-a-kind digital design that catches
              people’s eye and brings your brand to life online.
            </h2>
          </div>

          <div className="mb-80">
            <div className="relative top-[33px] right-8 text-lime-600">02</div>
            <h1
              className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-2 font-extrabold `}
            >
              Thought
            </h1>
            <h2 className={`${sofia.className} text-gray-600  font-semibold`}>
              As a web design agency, we love to deliver meaningful and
              intuitive user experiences that build trust with your target
              audience.
            </h2>
          </div>

          <div className="mb-80">
            <div className="relative top-[33px] right-8 text-lime-600">03</div>
            <h1
              className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-2 font-extrabold `}
            >
              Impact
            </h1>
            <h2 className={`${sofia.className} text-gray-600  font-semibold`}>
              Designing tailor made solutions that resonate with your customers
              and drives them to act.
            </h2>
          </div>
        </div>
      </section>
        </>
    )
}


export default ScrollGallery