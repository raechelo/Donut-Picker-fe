import React from 'react'


export const Container = (props) => {
    return(
            <div className="container">
            <div className="donuts-area">
            {props.donuts} 
            <button onClick={()=> props.freshPalette()}>GET COLORS</button>
            </div>
            
            </div>
    )
}

export default Container