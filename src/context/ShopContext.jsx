import React, { createContext, useEffect, useState } from 'react'
import { products } from '../assests/assets/frontend_assets/assets';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export const ShopContext = createContext()



const ShopContextProvider = (props) => {
  
  
  const currency = '$';
  const delivery_fee = 10;
  const [search , setSearch] = useState('')
  const [showSearch , setShowSearch] = useState(false)
  const [cartItems , setCartItems] = useState({})
  
  const navigate = useNavigate()

    const addToCart = async(itemId , size)=>
    {
let cartData = structuredClone(cartItems)

if(!size)
{
  toast.error('Please Select Size')
  return
}

if(cartData[itemId])
{
  if(cartData[itemId][size])
    {
         cartData[itemId][size] += 1;
    }
    else
    {
      cartData[itemId][size] = 1
  }
}
else
{
  cartData[itemId] = {};
  cartData[itemId][size] = 1
}
console.log(cartData)
setCartItems(cartData)
}


const getCartCount = () =>
{
  let totalCount = 0;
  for(const items in cartItems)
  {
    for(const item in cartItems[items])
    {
      try
      {
        if(cartItems[items][item]>0)
        {
          totalCount += cartItems[items][item]
        }
      }
      catch(error)
      {

        console.error(error)
      }
    }
  }
  return totalCount;
}


const updateQuantity = async(itemId , size , quantity) =>
{

  let cartData = structuredClone(cartItems);

  cartData[itemId][size] = quantity

  setCartItems(cartData)
}


const getCartAmount = () =>
{

  let totalAmount = 0;
  for(const items in cartItems)
  {
    let itemInfo = products.find((product)=>product.id===items)
    for(const item in cartItems[items])
    {
      try{
        if(cartItems[items][item]>0)
        {
          totalAmount += itemInfo.price * cartItems[items][item]
        }
       
      }
      catch{

      }
    }
  }
  return totalAmount;
}


    const value = {currency,delivery_fee,products,search,setSearch,showSearch, setShowSearch,cartItems,setCartItems , addToCart , getCartCount , getCartAmount, updateQuantity , navigate}


  return (
    <ShopContext.Provider value={value}>

{props.children}

    </ShopContext.Provider>
  )
}

export default ShopContextProvider;