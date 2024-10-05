import { createContext,useEffect,useState } from "react";
import { items } from "../assets/assets";

export const StoreContext =  createContext(null);

const StoreContextProvider = (props)=>{

    const AllItems = items;

    const printHello = (val)=>{
        console.log(`Hello from StoreContextProvider ${val}`);
    }

    const contextValue = {
        printHello,
        AllItems
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children} 
            {/* when we are using StoreContextProvider function in index.js, those are within the <StroreContextProvider> is consider as props.children, if we remove the props.children the <App/> component is not rendering */}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;