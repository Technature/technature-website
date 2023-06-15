
const  ScrollGallery = ({sofia})=>{


    return(
        <>
            {/* SECTION 4 */}
            <section className=" relative width-full flex flex-row items-center justify-start mt-40">
        <div id="leftSide" className="w-1/2 md:w-1/3  ml-20 md:ml-40">
          <div className="mb-80">
            <div className="relative top-[33px] right-8 text-lime-600">01</div>
            <h1
              className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-2 font-extrabold `}
            >
              Κοινό.
            </h1>
            <h2 className={`${sofia.className} text-gray-600  font-semibold`}>
            Μέσω σωστών τεχνικών και γνώσης ετών πάνω στο τομέα του μάρκετινγκ, αναζητούμε το σωστό κοινό για να συνδέσουμε το brand σας μαζί του.

            </h2>
          </div>

          <div className="mb-80">
            <div className="relative top-[33px] right-8 text-lime-600">02</div>
            <h1
              className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-2 font-extrabold `}
            >
              Ορατότητα.
            </h1>
            <h2 className={`${sofia.className} text-gray-600  font-semibold`}>
            Βελτιστοποιούμε τόσο την εμφάνιση σας αλλά και το τρόπου και τη συχνότητα που εμφανίζεστε στα social media και στο διαδίκτυο.
            </h2>
          </div>

          <div className="mb-80">
            <div className="relative top-[33px] right-8 text-lime-600">03</div>
            <h1
              className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-2 font-extrabold `}
            >
              Περιεχόμενο.
            </h1>
            <h2 className={`${sofia.className} text-gray-600  font-semibold`}>
            Σχετικό και με γνώμονα τα αποτελέσματα.
            </h2>
          </div>

          <div className="mb-80">
            <div className="relative top-[33px] right-8 text-lime-600">04</div>
            <h1
              className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-2 font-extrabold `}
            >
             Ταξίδι.
            </h1>
            <h2 className={`${sofia.className} text-gray-600  font-semibold`}>
            Διασφαλίζουμε ότι οι πελάτες σας λαμβάνουν όλες τις πληροφορίες που χρειάζονται.
            </h2>
          </div>

          <div className="mb-80">
            <div className="relative top-[33px] right-8 text-lime-600">05</div>
            <h1
              className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-2 font-extrabold `}
            >
         Αποτέλεσμα.
            </h1>
            <h2 className={`${sofia.className} text-gray-600  font-semibold`}>
            Αποσκοπούμε στο να προσελκύσουμε το κατάλληλο κοινό και να αυξήσουμε την επισκεψημότητα στο brand σας ώστε να πετύχουμε τους επιχειρηματικούς σας στόχους.
            </h2>
          </div>
        </div>
      </section>
        </>
    )
}


export default ScrollGallery