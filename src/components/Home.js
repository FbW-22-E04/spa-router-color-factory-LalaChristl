
import {Link} from 'react-router-dom'
import Links from './Links'


function Home({colors}) {

 
 
    return (
    <div>
      <h1>Welcome to the color factory.</h1>
      <Link>Add a color</Link>
      {
        colors.map((item, idx) => (
            <Links key={idx} color={item}/>
        ))
      }
    </div>
  )
}

export default Home
