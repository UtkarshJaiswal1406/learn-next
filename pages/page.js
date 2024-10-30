import React from 'react';

const MyPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <img 
        src="/pic.jpg"
        alt="Description of image"
        className="w-1/3 h-auto rounded-lg shadow-lg border-4 border-blue-500 shadow-xl mb-4 hover:scale-105 hover:shadow-2xl transition-all duration-300"
      />
      <h1 className="text-4xl font-bold text-blue-500">Welcome to My Page!</h1>
      <p className="text-lg text-gray-500 font-medium italic tracking-wide hover:text-blue-600 transition-colors duration-200">
  HOW IS THE TASK??
</p>


    </div>
  );
};

export default MyPage;
