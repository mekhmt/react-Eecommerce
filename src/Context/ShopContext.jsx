import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'
export const ShopContext = createContext(null)
const getDefaultCart = ()=>{
    let cart = {};
    for(let i=0;i<all_product.length;i++){
        cart[i] = 0;
    }
    return cart
}
const ShopContextProvider = (props)=>{
    const [cartItem, setCartItems] = useState(getDefaultCart())
  
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItem);
    } 

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    } 

    const getTotalCartValue = ()=>{
        let totalAmout = 0;
        for (const item in cartItem){
             if(cartItem[item]>0){
                    let itemInfo = all_product.find((product)=> product.id === Number(item))
                    
                    totalAmout += Number(itemInfo.new_price) * cartItem[item]
             }
           
        }
        return totalAmout;
        
    }

    const getTotalCartItems = ()=>{
        let totalItems = 0
        for(let i in cartItem){
            totalItems += cartItem[i]
        }
        return totalItems
    }

    const contextValue = {getTotalCartItems,getTotalCartValue, all_product, cartItem,addToCart,removeFromCart}
    return(
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;