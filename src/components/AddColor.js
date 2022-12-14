import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddColor = ( selectColor, setSelectColor) => {
  const navigate = useNavigate();
  const [data, setData] = useState({ colorName: "", colorValue: "" });

  const handleSubmit = (e) => {
    e.preventDefault()

    const oldArr = [...selectColor];
    setSelectColor([...oldArr, data]);
    navigate("/colors");
  };

  return (
    <div className="bg-green-400 h-screen flex justify-center items-center">
      <div className="bg-white w-[80%] p-[6rem] rounded-[15px] ">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Color Name</label>
            <input
              onChange={(e) => setData({ ...data, colorName: e.target.value })}
              value={data.colorName}
              className="border-2 border-gray-400"
              type="text"
              id="colorname"
              placeholder="Enter a name for the color"
            />
          </div>
          <div className="my-5">
            <label htmlFor="type">Color Value</label>
            <input onChange={(e) => setData({ ...data, colorValue: e.target.value })} value={data.value} type="color" id="type"/>
          </div>
          <button className="border-2 bg-blue-200">Add this color</button>
        </form>
      </div>
    </div>
  );
};




export default AddColor;
