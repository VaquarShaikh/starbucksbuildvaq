import React from 'react'
import './Heading.css'

function Heading({headings}) {
  return (
    <div className='heading'>
        {headings}
    </div>
  )
}

export default Heading