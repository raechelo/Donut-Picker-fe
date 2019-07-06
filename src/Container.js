import React from 'react'


export const Container = (props) => {
    return(
            <div className="container">
            <div className="donuts-area">
            {props.donuts} 
            </div>
            
            </div>
    )
}

export default Container