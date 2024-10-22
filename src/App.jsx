import React, { useEffect, useState } from "react";
import { Menu, MoreVertical, Search } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { generate } from "./config/gemniConfig.js"; //";
import Pantry from "./component/Pantry.jsx";



const SuperCook = () => {

  const [ingredientsData, setIngredientsData] = useState([]);

  const [vegetable, setveg] = useState("vegetable")
  const [dairy, setdairy] = useState("dairy")
  const [cheese, setcheese] = useState("cheese")
  const [mushroom, setmushroom] = useState("mushroom")
  const [fruits, setfruits] = useState("fruits")

  function handlegenerate(){
    
      try {
        const responseData = generate(`what dishes can i make with  ${vegetable}, ${dairy}, ${cheese},${fruits},${mushroom}, give me output in javascript object`);
        setIngredientsData(responseData); // Set the data in the state
      } catch (error) {
        console.error("Error generating data", error);
      }
  }
  return (
    <div className="container mx-auto p-4 md:flex md:space-x-4">
      {/* Left Scroll Container */}
      <div className="scroll-container bg-white shadow-md p-4 rounded-md w-full md:w-1/2 overflow-y-auto max-h-screen">
        <div className="navbar1">
          <div className="flex justify-between items-center mb-4">
            <div className="menubar">
              <Menu className="text-gray-700" size={24} />{" "}
              {/* Lucide Menu Icon */}
            </div>
            <div className="name1">
              <a href="/" className="text-lg font-semibold text-gray-700">
                PANTRY
              </a>
            </div>
            <div className="vertical-bar">
              <MoreVertical className="text-gray-700" size={24} />{" "}
              {/* Lucide MoreVertical Icon */}
            </div>
          </div>
          <div className="search">
            <div className="flex items-center bg-gray-100 rounded-md px-4 py-2">
              <Search className="text-gray-500" size={18} />{" "}
              {/* Lucide Search Icon */}
              <input
                className="ml-2 w-full bg-transparent focus:outline-none placeholder-gray-500"
                placeholder="add/remove/paste ingredients..."
              />
            </div>
          </div>
        </div>
      <Pantry vegetable={vegetable} setveg={setveg}  dairy={dairy} setdairy={setdairy} cheese={cheese} setcheese={setcheese}  mushroom={mushroom} setmushroom={setmushroom} fruits={fruits} setfruits={setfruits} />
      </div>
      {/* Right Scroll Container */}
      <div className="scroll-container bg-white shadow-md p-4 rounded-md w-full md:w-1/2 mt-4 md:mt-0 overflow-y-auto max-h-screen">
        <div className="navbar2 mb-4">
          <div className="name2 text-lg font-semibold text-gray-700">
            <a href="/">Your ingredients, Our recipe</a>
          </div>
        </div>

        <div className="search">
          <div className="flex items-center bg-gray-100 rounded-md px-4 py-2">
            <Search className="text-gray-500" size={18} />{" "}
            {/* Lucide Search Icon */}
            <input
              className="ml-2 w-full bg-transparent focus:outline-none placeholder-gray-500"
              placeholder="ask your ai to give you dishes..."
            />
          </div>
        </div>
        <div>
         <button  onClick={handlegenerate}className=" m-3 bg-purple-900 text-white p-1  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">Generate</button>
        </div>
        <div>
        <div className="generated-data">
          {ingredientsData.length > 0 ? (
            ingredientsData.map((item, index) => (
              <div key={index} className="data-item p-2 bg-gray-100 mb-2 rounded">
                <h3 className="font-bold">{item.dishName}</h3>
                <p>{item.description}</p>
              </div>
            ))
          ) : (
            <p> Click Generate to see recipe</p>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperCook;
