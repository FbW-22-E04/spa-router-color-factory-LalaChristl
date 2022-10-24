import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Colorpage({ colors }) {

  const { shades } = useParams();

  const [color, setColor] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    setColor(colors.filter((item) => item.color === shades)[0]);
  });
  return (
    <div style={{backgroundColor: `${shades}`}} className="flex justify-center items-center h-screen">
      <div>
        <p className="text-[3rem]">This is {color?.color}!</p>
        <p className="my-[10rem] text-[3rem]">Isn't it {color?.color}?</p>
        <p className="text-[3rem] underline" onClick={() => navigate('/')}>Go Back</p>
      </div>
    </div>
  );
}

export default Colorpage;
