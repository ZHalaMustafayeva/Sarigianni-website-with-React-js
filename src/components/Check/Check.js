import React from 'react'
import {Link} from "react-router-dom";
import './Check.scss'
function Check(data) {
    console.log(data.info)
    return (
        <div className="check">
            <div className='check-wrapper'>
                <p>
                    {data.data.info}
                </p>
                
                    <Link to="/">
                        <span>{data.data.button}</span>
                        <span class='border1'></span>
                        <span class='border2'></span>
                    </Link>
                
            </div>
        </div>
    )
}

export default Check
