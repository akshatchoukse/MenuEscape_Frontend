import React, { useState } from 'react';
import Header from './Header';

const RestaurantRating = ({ initialRating = 0, maxRating = 5 }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < rating ? 'currentColor' : 'none'}
          stroke="currentColor"
          viewBox="0 0 24 24"
          className={`w-10 h-10 cursor-pointer transition-all duration-200 ease-in-out ${
            i < rating ? 'text-yellow-500' : 'text-gray-400'
          } hover:scale-125 hover:text-yellow-400`}
          onClick={() => handleClick(i)}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  // Reset the rating to 0
  const resetRating = () => {
    setRating(0); // Reset the rating to 0
  };

  // Handle the submission (optional logic)
  const handleSubmit = () => {
    alert(`Thank you for your rating of ${rating} out of ${maxRating} stars!`);
    resetRating(); // Reset stars after submitting
  };

  return (
    <div className="flex justify-center items-center flex-col space-x-2">
      <Header />
      <div className='h-[87vh] w-full bg-[#fffdd0] flex flex-col items-center justify-center'>
        <label className='font-bold text-[20px] mb-4'>Give Us Your Rating</label>
        <div className='flex mb-4'>{renderStars()}</div>
        <button 
          onClick={handleSubmit} 
          className='border-2 border-blue-500 bg-blue-100 text-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-blue-500 hover:text-white transition duration-300'
        >
          Submit Rating
        </button>
      </div>
    </div>
  );
};

export default RestaurantRating;
