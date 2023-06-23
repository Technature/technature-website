"use client";
import { useState } from "react";


const useServices=()=>{

    const [services, setServices] = useState(1);

    const clickServices = (serviceNumber) => (e) => {
      console.log(serviceNumber);
      setServices(serviceNumber);
    };

    
    return {services,clickServices}
}

export default useServices