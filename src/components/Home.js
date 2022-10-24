// import {Link} from 'react-router-dom'
import Links from "./Links";
import {useNavigate} from 'react-router-dom'

function Home({ colors })
 {

const navigate = useNavigate();

  return (
    <div>
      <div className="bg-black text-white h-[20rem] flex flex-col items-center justify-center">
        <h2 className="text-[2rem]">Welcome to the color factory.</h2>
        <h1 style={{cursor: 'pointer'}} className="text-[3rem] underline" onClick={() => navigate('/colors/new')}>Add a color</h1>
      </div>
      <div className="flex flex-col items-center justify-center m-4">
        <h3 className="mb-4">Please select a color.</h3>
          {colors.map((item, idx) => (
            <Links key={idx} color={item} />
          ))}
      </div>
    </div>
  );
}

export default Home;
