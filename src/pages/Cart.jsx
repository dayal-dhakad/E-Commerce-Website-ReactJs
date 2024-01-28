import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {
  const {cart} = useSelector((state)=>state)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr)=> acc + curr.price, 0));
  }, [cart])
  
  return (
    <div className='mt-10'>
    
      {
        cart.length>0 ? 
        (<div className='flex justify-center'> 
          <div className='w-[500px] lg:mr-80 '> 
            {
              cart.map((item, index)=>{
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
            </div>

            <div className='flex flex-col lg:fixed right-80 mt-10'>
            <div className='mb-72'>
                <div className='text-2xl text-green-600 font-bold'>Your Cart</div>
                <div className='text-4xl text-green-600 font-bold'>Summary</div>
                <p>
                  <span className='font-semibold'>Total Items : {cart.length}</span>
                </p>
              </div>

              <div>
                <p className='font-semibold'>Total Amount: <span className='font-extrabold'>${totalAmount}</span></p>
                <button className='bg-green-600 text-white font-semibold p-1 rounded-lg mt-3'>Checkout Now</button>
              </div>
            </div>
           


         </div>) :
        (<div><h1>Your Cart is Empty</h1>
             <Link to = "/"><button>Shop Now</button></Link> 
              </div>)
      }
    </div>
  )
}

export default Cart