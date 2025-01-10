//here we create context for cart, Authentication state,filter and search state
import { createContext,useEffect,useState } from "react";
import { items } from "../assets/assets";
import axios from "axios";
import { CgLayoutGrid } from "react-icons/cg";

//create a context
export const StoreContext =  createContext(null);

//create a context provider
const StoreContextProvider = (props)=>{
    const [product,setProdouct] = useState(null);
    const [cart,setCart]= useState([]);

    let productEndpoints = "http://localhost:1000/product";
    let cartEndpoints = "http://localhost:1000/cart";
    const AllItems = items;


    //get all products
    const getProducts = ()=>{
        axios.get(productEndpoints)
        .then((result)=>{if (result.status == 200){setProdouct(result.data);}})
        .catch((err)=>{console.log(err)})
    }

    const fetchCart = async()=>{
      try {
        const response = await axios.get(cartEndpoints);
        return response.data;
      } catch (error) {
        throw error
      }
    }

    const printHello = (val)=>{
        console.log(`Hello from StoreContextProvider ${val}`);
    }

    useEffect(()=>{
        getProducts();
        const getcartData = async()=>{
            try {
                const data = await fetchCart();
                setCart(data)
            } catch (error) {
                console.log(error)
            }
        };
        getcartData();
    },[])

    //this useeffect for console.log the products data
    useEffect(()=>{
        if (product !== null) {
            console.log("all fetched products",product)
        };
        if (cart.length > 0) {
            console.log("cart data",cart);
        }
    },[product,cart])

    const contextValue = {
        printHello,
        AllItems,
        product,
        cart
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children} 
          
            {/* when we are using StoreContextProvider function in index.js, those are within the <StroreContextProvider> is consider as props.children, if we remove the props.children the <App/> component is not rendering */}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;