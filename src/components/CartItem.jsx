import React from 'react'

import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/CartSlice'
import { toast } from 'react-hot-toast'
import { MdOutlineDeleteForever } from "react-icons/md";

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch()
  const removeFromCart = ()=>{
    dispatch(remove(item.id))
    toast.error("Item removed from Cart")

  }
  return (
    <div className='flex justify-center items-center gap-6 border-b-2 mb-10 border-black '>
    
      <div className='mb-4'>
        <img className='h-40 w-40' src={item.image} alt="" />
      </div>
      <div className='mb-4'>
        <h1 className='font-semibold mb-3'>{item.title}</h1>
        <h1 className='text-sm'>{item.description.slice(0, 100)}...</h1>
        <div className='flex items-center justify-between w-9/12 mt-4'>
          <p className='font-bold text-green-600'>${item.price}</p>
          <div  onClick={removeFromCart}>
            <MdOutlineDeleteForever className='h-5 w-5'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem