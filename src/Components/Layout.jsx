import React from 'react';
import exampleImage from '../../public/exampleImage.png'; // Update with your image path

const Layout = () => {
  return (
    <div className="flex bg-gray-100">
      {/* Left Side: Buttons */}
      <div className="flex flex-col justify-center items-start p-4 bg-white border-r">
        <button className="mb-2 py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-400">Button 1</button>
        <button className="mb-2 py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-400">Button 2</button>
        <button className="mb-2 py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-400">Button 3</button>
        <button className="mb-2 py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-400">Button 4</button>
      </div>

      {/* Middle: Image */}
      <div className="flex items-center justify-center flex-grow">
        <img src={exampleImage} alt="Example" className="h-72 w-auto rounded-lg shadow-lg" />
      </div>

      {/* Right Side: Description */}
      <div className="flex flex-col justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Page Title</h2>
        <p className="text-gray-700">
          This is a description of the content on the right side of the layout. Here you can provide informative text about the image or any relevant details that enhance the user's understanding.
        </p>
      </div>
    </div>
  );
};

export default Layout;