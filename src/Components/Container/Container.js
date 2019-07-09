import React from 'react';
import { Link } from 'react-router-dom';


export const Container = (props) => {
    return(
            <div className="container">
            <div className="donuts-area">
            {props.donuts} 
            <button onClick={()=> props.freshPalette()}>GET COLORS</button>
            <Link exact to='/projects'>
                <button> VIEW PROJECTS </button>
            </Link>

            </div>
            
            </div>
    )
}

export default Container