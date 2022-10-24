import React from 'react'
import {Link} from 'react-router-dom'

function Links ({color}) {
  return (
    <div>
      <Link to = {`/colors/${color.color}`}>
        <p className='underline'>{color.color}</p>
      </Link>
    </div>
  )
}

export default Links
