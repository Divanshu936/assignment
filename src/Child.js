import React from 'react'
import './Child.css'
function Child({data}) {
    return (
        <div className="child" style={{backgroundColor:data}}>
        
        </div>
    )
}

export default Child
