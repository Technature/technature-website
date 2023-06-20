import Image from "next/image";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import ImageDistort from "@/components/imageDistort/imageDistort";
import axios from "axios";

const sofia = Sofia_Sans({ subsets: ["latin"] });

function CareersPage() {
  return (
    <>
      {/* SECTION 1 */}
      <section className=" h-[100vh] relative width-full  flex items-center justify-center flex-col sm:flex-row ">
        <ImageDistort src={"/join.png"}></ImageDistort>

        <div className=" w-[90%] md:w-1/2 sm:w-1/2 lg:w-1/3 sm:ml-5 md:ml-10 lg:ml-40 mt-10 sm:mt-0 text-center sm:text-start">
          <h1
            className={`${sofia.className} text-gray-800  lg:text-7xl md:text-5xl text-6xl  mb-5 font-extrabold `}
          >
            Γιατί Technature;
          </h1>
          <h2 className={`${sofia.className}`}>
            Όταν μπείτε στα γραφεία μας θα σας προϋπαντήσουμε με χαμόγελο. Σε
            περίοπτη θέση θα συναντήσετε τους designers να σχεδιάζουν καινοτόμα
            σχέδια, logos και websites.
          </h2>
          <h2 className={`${sofia.className}`}>
            Παραδίπλα οι εξειδικευμένοι marketeer μας θα σας παραθέσουν
            δημιουργικές λύσεις για να προωθήσετε την επιχείρηση σας, business
            analysts και strategists για το πως θα υλοποιηθεί το όλο κομμάτι και
            σε μία απομονωμένη γωνία τους μοναχικούς developers που μετατρέπουν
            τον καφέ σε κώδικα.
          </h2>
        </div>
      </section>

      <section className="w-full p-40 ">
        <h1
          className={`${sofia.className} text-gray-800 tracking-tighter lg:text-7xl md:text-2xl text-3xl  mb-5 font-extrabold w-1/2`}
        >
          <span className="text-blue-600">Ισορροπία</span> μεταξύ επαγγελματικής
          και προσωπικής ζωής
        </h1>
        <h2 className={`${sofia.className} w-2/3 ml-40 mt-10 text-sm`}>
          Η ζωή μας κινείται σε υψηλούς ρυθμούς και έχουμε γίνει πολυάσχολοι.
          Εκτιμούμε κάθε μέρα και περισσότερο τον χρόνο που αφιερώνουμε σε άτομα
          και πράγματα που έχουν αξία για εμάς. Όλοι μας θέλουμε να περνάμε
          περισσότερο χρόνο καθημερινά με φίλους, την οικογένεια, τα αγαπημένα
          μας πρόσωπα και να κάνουμε τις δραστηριότητες που μας γεμίζουν.
        </h2>
        <h2 className={`${sofia.className} w-2/3 ml-40 mt-10 text-sm`}>
          Στη Technature κατανοούμε απόλυτα την ανάγκη αυτή και έτσι θεσπίσαμε
          ένα ευέλικτο ωράριο εργασίας μεταξύ 9π.μ και 5:30 μ.μ.. Μετά από το
          πέρας της ημέρας δεν αποστέλλουμε email, ούτε επικοινωνούμε με τους
          εργαζομένους για θέματα της εταιρείας. Δεν έχουμε την απαίτηση από
          κανέναν να εργάζεται παράλογες ώρες και να χάνει σημαντικές στιγμές
          από τη ζωή του. Θέτουμε την ευημερία και τη ψυχική ευεξία ως
          προτεραιότητα.{" "}
        </h2>
      </section>

      <section className={`${sofia.className} w-full  bg-zinc-800 p-40`}>
        <h1
          className={`${sofia.className} text-white tracking-tighter lg:text-5xl md:text-xl text-2xl  mb-5 font-extrabold w-1/2`}
        >
          Πώς να<span className="text-blue-600"> υποβάλλετε</span> αίτηση
        </h1>

        <h1
          className={`${sofia.className} text-white tracking-tighter lg:text-2xl text-lg  mb-5 font-extrabold w-1/2`}
        >
          Ευπρόσδεκτες όλες οι αιτήσεις.
        </h1>

        <h2 className={`${sofia.className} w-2/3 mt-10 text-md text-white`}>
          Αν πιστεύετε ότι θα ταιριάζετε στο ύφος και τις αξίες μας και ότι θα
          ήσασταν μια σπουδαία προσθήκη στην Technature, στείλτε μας το
          βιογραφικό σας στο info@technature.gr. Τα κοιτάμε όλα με την
          απαιτούμενη προσοχή.
          <span className="text-rose-200">
            {" "}
            Μην αγχώνεστε, δεν πετάμε βιογραφικά. Όμως, όπως είναι φυσικό, δεν
            μπορούμε να απαντήσουμε σε κάθε αίτηση που λαμβάνουμε.
          </span>
        </h2>
        <h2 className={`${sofia.className} w-2/3 mt-10 text-md text-white`}>
          Για πληροφορίες σχετικά με τον τρόπο με τον οποίο επεξεργαζόμαστε τα
          δεδομένα σας κατά την υποβολή της αίτησης σας, ανατρέξτε στην πολιτική
          μας για τις αιτήσεις εργασίας.
        </h2>

        <h1
            className={`${sofia.className} text-white tracking-tighter lg:text-4xl text-xl mt-10 mb-5 font-extrabold w-full `}
          >
 <span className="text-blue-600"> Τρέχουσες </span>κενές θέσεις εργασίας.

          </h1>

          <ul className={`${sofia.className} text-white  lg:text-xl text-xl font-bold w-full ml-10`}>
            <a href="mailto:info@technature.gr">
            <li className="hover:text-lime-600 mb-4">
            Graphic Designer
            </li>
            </a>
            <a href="mailto:info@technature.gr">
            <li className="hover:text-lime-600 mb-4">
            Web Developer
            </li>
            </a>
            <a href="mailto:info@technature.gr">
            <li className="hover:text-lime-600 mb-4">
            Digital Content specialst
            </li>
            </a>
          </ul>

      </section>

      <section
          className={`${sofia.className} w-full flex flex-col  items-center  bg-gradient-to-r from-cyan-400 to-blue-700 p-10 lg:p-20 xl:p-40`}
        >
  
  <h1
            className={`${sofia.className} text-white lg:text-4xl text-xl mt-10 mb-5 font-extrabold w-full `}
          >
 Καθ' όλη τη διάρκεια του έτους, ανοίγουμε θέσεις εργασίας:

          </h1>

          <ul className={`${sofia.className}  lg:text-2xl text-xl  w-full ml-10`}>
       
            <li className="  mb-4 tracking-wider font-[1000] text-zinc-900 opacity-50  ">
            - Development
            </li>
       
            <li className=" mb-4 tracking-wider font-[1000] text-zinc-900 opacity-50  ">
            - Advertising
            </li>
       
            <li className=" mb-4 tracking-wider font-[1000] text-zinc-900 opacity-50  ">
            - Project Management
            </li>
            <li className=" mb-4 tracking-wider font-[1000] text-zinc-900 opacity-50  ">
            - Project Management
            </li>
            <li className=" mb-4 tracking-wider font-[1000] text-zinc-900 opacity-50  ">
            - Client Services
            </li>
            <li className=" mb-4 tracking-wider font-[1000] text-zinc-900 opacity-50  ">
            - SEO
            </li>
          </ul>
        </section>
    </>
  );
}

export default CareersPage;
