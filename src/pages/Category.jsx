import React, { useState } from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import foodImages from '../data/foodImages';
import Cart from '../componets/Cart';

function Category() {
    const categoryData = JSON.parse(localStorage.getItem("category"));

    const [cart, setCart] = useState([])

    return (
        <div>
            <Header />
            {cart.length>0? 
            <Cart cart={cart}></Cart>: null}

            <div className='flex flex-wrap w-[100%] justify-center gap-6 p-4'>
                {categoryData.foodItem.map((i, idx) => (
                    <div key={idx} className="group relative w-[300px] block overflow-hidden rounded-lg shadow-md border border-gray-200">
                        <button
                            className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                        >
                            <span className="sr-only">Wishlist</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                        </button>

                        <img
                            src={foodImages[i.name] || 'https://via.placeholder.com/300x200?text=No+Image'}
                            alt={i.name}
                            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="relative bg-white p-4">
                            <h3 className="text-lg font-medium text-gray-900">{i.name}</h3>
                            <p className="mt-1 text-sm text-gray-700">Rs. {i.price}</p>
                            <div className="mt-4">
                                {cart.find((j) => j.name == i.name)?.quantity > 0 ?

                                    <button
                                        className=" flex justify-between w-full rounded-sm  p-2 text-sm font-medium transition hover:scale-105"
                                    >
                                        <button onClick={() => {if(cart.find((j) => j.name == i.name)?.quantity == 1){
                                            setCart(cart.filter((food)=> food.id != i.id))
                                        } else{
                                            setCart(cart.map((food) => food.id == i.id ? { ...i, quantity: food.quantity - 1 } : food))
                                        }
                                            
                                        }} className=' text-[25px] bg-yellow-400 w-[20px]'>-</button>

                                        <button>{cart.find((j) => j.id == i.id).quantity}</button>

                                        <button onClick={() => setCart(
                                            cart.map((food) => food.id == i.id ? { ...i, quantity: food.quantity + 1 } : food)
                                        )} className='text-[25px] bg-yellow-400 w-[20px]'>+</button>
                                    </button> :
                                    <button
                                        onClick={() => setCart([...cart, { ...i, quantity: 1 }])}
                                        className="block w-full rounded-sm bg-yellow-400 p-2 text-sm font-medium transition hover:scale-105"
                                    >
                                        Add to Cart
                                    </button>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default Category;
