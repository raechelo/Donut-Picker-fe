import React from 'react'


export const Container = (props) => {
    return(
            <div className="container">
            <div className="donuts-area">
            {props.donuts} 
            <button onClick={()=> props.freshPalette()}>GET COLORS</button>
            <button onClick={() => props.toggleView()}> VIEW PROJECTS </button>

            </div>
            
            </div>
    )
}

export default Container