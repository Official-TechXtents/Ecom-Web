import React, { useContext, useState } from 'react'
import {assets} from '../assests/assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'



const Navbar = () => {


    const [visible , setVisible] = useState(false)

    const {setShowSearch , showSearch , getCartCount} = useContext(ShopContext)


  return (
    <>
    
    <div className="flex items-center justify-between py-5 font-medium">
        <img src={assets.logo} alt="" className='w-36'/>
        <ul className=' hidden sm:flex gap-5 text-sm  text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1' >
                <p>Home</p>
                <hr  className=' w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1' >
                <p>Collection</p>
                <hr  className=' w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1' >
                <p>About</p>
                <hr  className=' w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1' >
                <p>Contact</p>
                <hr  className=' w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>
        
        <div className="flex items-center gap-6">
<img src={assets.search_icon} alt="" className=' cursor-pointer w-5' onClick={()=>setShowSearch(true)} />
<div className="group relative">
    <Link to='/login'>
    <img src={assets.profile_icon} className=' cursor-pointer w-5' alt="" />
    </Link>
    
    <div className="group-hover:block hidden absolute right-0 pt-4">
        <div className="flex flex-col gap-2 w-36 px-3 py-5 bg-slate-100 text-gray-500 rounded-lg">
            <div className="cursor-pointer hover:text-black">My Profile</div>
            <div className="cursor-pointer hover:text-black">Orders</div>
            <div className="cursor-pointer hover:text-black">Logout</div>
        </div>
    </div>
</div>
<Link  to='/cart' className=' relative' >
<img src={assets.cart_icon} className='min-w-5 w-5' />
<p className=' absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
</Link>
<img src={assets.menu_icon} onClick={()=>setVisible(true)} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>


{/* {Side Bar  small Screen} */}


<div className={` absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full': 'w-0'}`}>

<div className="flex flex-col text-gray-600" onClick={()=>setVisible(false)}>
    <div className="flex items-center gap-4 p-3 cursor-pointer">
        <img src={assets.dropdown_icon} className=' h-4 rotate-180' alt="" />
        <p>Back</p>
    </div>
    
    <NavLink  to='/' className='py-2 pl-6 border' onClick={()=>setVisible(false)} >Home</NavLink>
    <NavLink  to='/collection' className='py-2 pl-6 border' onClick={()=>setVisible(false)} >Collection</NavLink>
    <NavLink  to='/about' className='py-2 pl-6 border' onClick={()=>setVisible(false)} >About</NavLink>
    <NavLink  to='/contact' className='py-2 pl-6 border' onClick={()=>setVisible(false)} >Contact</NavLink>
</div>


</div>

    </div>
    
    
    
    </>
  )
}

export default Navbar