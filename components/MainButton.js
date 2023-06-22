import Link from "next/link";


function MainButton(props) {
    return (<>{props.href?
        <Link href={props.href}>
        <button  className="border-tech rounded-3xl font-bold border-2 px-9 py-2 text-tech hover:text-white hover:bg-tech active:opacity-70 text-sm">{props.children}</button>
        </Link>
        :
        <button onClick={props.click}  className="border-tech rounded-3xl font-bold border-2 px-9 py-2 text-tech hover:text-white hover:bg-tech active:opacity-70 text-sm">{props.children}</button>} 
       </>
     );
}

export default MainButton;