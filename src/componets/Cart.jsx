import React from 'react'
import { useNavigate } from 'react-router-dom'

function Cart({cart}) {
  const navigate = useNavigate()
  let totalPrice = cart.length>0 ? cart.map((i)=> i.price * i.quantity).reduce((a, b)=> a+b) : 0
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="bg-orange-500 text-white rounded-2xl shadow-xl px-6 py-3 flex justify-between items-center animate-slide-up">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6" />
          <div>
            <div className="font-semibold"> items : {cart.length}</div>
            <div className="text-sm text-white/90">₹{JSON.stringify(totalPrice)}</div>
          </div>
        </div>
        <button onClick={()=>{
          localStorage.setItem("cart", JSON.stringify(cart))
          navigate('/check-out-cart')
        }} className="bg-white text-orange-500 font-semibold px-4 py-2 rounded-xl shadow hover:bg-orange-100 transition">
          View Cart
        </button>
      </div>
    </div>
  )
}

export default Cart