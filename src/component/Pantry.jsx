import React from 'react'

function Pantry({vegetable,setveg, dairy, setdairy,cheese, setcheese,mushroom, setmushroom,fruits, setfruits}) {

  return (
    <>
    <div className="body1 mt-6 grid grid-cols-1 gap-4">
    {[
      { name: "Vegetables", imageClass: "image2" },
    ].map((item, index) => (
      <div className="items1 flex items-center space-x-4" key={index}>
        <div
          className={`image bg-gray-200 w-12 h-12 rounded-md ${item.imageClass}`}
          ></div>
        <select
          name={item.name}
          id="item-id"
          className="border border-gray-300 rounded-md p-2 w-full focus:border-blue-500"
          onChange={(e) => setveg(e.target.value)}
          >
          <option  value={item.name}>{item.name}</option>
          <option  value="Potato">Potato</option>
          <option  value="Tomato">Tomato</option>
          <option  value="Cauliflower">Cauliflower</option>
          <option  value="Brinjal">Brinjal</option>
        </select>
      </div>
    ))}
  </div>
    <div className="body1 mt-6 grid grid-cols-1 gap-4">
    {[
      { name: "Mushrooms", imageClass: "image3" },
    ].map((item, index) => (
      <div className="items1 flex items-center space-x-4" key={index}>
        <div
          className={`image bg-gray-200 w-12 h-12 rounded-md ${item.imageClass}`}
          ></div>
        <select
          name={item.name}
          id="item-id"
          className="border border-gray-300 rounded-md p-2 w-full focus:border-blue-500"
          onChange={(e) => setmushroom(e.target.value)}
          >
          <option value={item.name}>{item.name}</option>
          <option value="Portobello Mushroom">Portobello Mushroom</option>
          <option value="Porcini Mushroom">Porcini Mushroom</option>
          <option value="Cremini Mushroom">Cremini Mushroom</option>
          <option value="Flammulina filiformis Mushroom">Flammulina filiformis Mushroom</option>
        </select>
      </div>
    ))}
  </div>
    <div className="body1 mt-6 grid grid-cols-1 gap-4">
    {[

      { name: "Fruits", imageClass: "image4" },

    ].map((item, index) => (
      <div className="items1 flex items-center space-x-4" key={index}>
        <div
          className={`image bg-gray-200 w-12 h-12 rounded-md ${item.imageClass}`}
          ></div>
        <select
          name={item.name}
          id="item-id"
          className="border border-gray-300 rounded-md p-2 w-full focus:border-blue-500"
          onChange={(e) => setfruits(e.target.value)}
          >
          <option value="value1">{item.name}</option>
          <option value="Apple">Apple</option>
          <option value="Blueberry">Blueberry</option>
          <option value="Avocado">Avocado</option>
          <option value="Banana">Banana</option>
        </select>
      </div>
    ))}
  </div>
    <div className="body1 mt-6 grid grid-cols-1 gap-4">
    {[
 
      { name: "Cheeses", imageClass: "image7" },

    ].map((item, index) => (
      <div className="items1 flex items-center space-x-4" key={index}>
        <div
          className={`image bg-gray-200 w-12 h-12 rounded-md ${item.imageClass}`}
          ></div>
        <select
          name={item.name}
          id="item-id"
          className="border border-gray-300 rounded-md p-2 w-full focus:border-blue-500"
          onChange={(e) => setcheese(e.target.value)}
        >
          <option value="value1">{item.name}</option>
          <option value="Cheddar Cheese">Cheddar Cheese</option>
          <option value="Gouda Cheese">Gouda Cheese</option>
          <option value="Mozzarella Cheese">Mozzarella Cheese</option>
          <option value="Cottage Cheese">Cottage Cheese</option>
        </select>
      </div>
    ))}
  </div>
    <div className="body1 mt-6 grid grid-cols-1 gap-4">
    {[
      { name: "Dairy & Eggs", imageClass: "image8" },
    ].map((item, index) => (
      <div className="items1 flex items-center space-x-4" key={index}>
        <div
          className={`image bg-gray-200 w-12 h-12 rounded-md ${item.imageClass}`}
          ></div>
        <select
          name={item.name}
          id="item-id"
          className="border border-gray-300 rounded-md p-2 w-full focus:border-blue-500"
          onChange={(e) => setdairy(e.target.value)}
          >
          <option value="value1">{item.name}</option>
          <option value="Egg">Egg</option>
          <option value="Butter">Butter</option>
          <option value="Tofu">Tofu</option>
          <option value="Milk">Milk</option>
        </select>
      </div>
    ))}
  </div>
    </>
  )
}
export default Pantry