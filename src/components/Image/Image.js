import React from 'react'
import './Image.css'
function Image(data) {
    console.log(data.data.img)
    return (
        <div className="image">
          <img src={data.data.img}/>
        </div>
    )
}

export default Image
