import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Colorpage({ colors }) {
  const { shades } = useParams();

  const [color, setColor] = useState({});

  useEffect(() => {
    setColor(colors.filter((item) => item.color === shades)[0]);
  });
  return (
    <div>
      <div>this is the {color?.color} page</div>
    </div>
  );
}

export default Colorpage;
