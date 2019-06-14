import React from 'react';


const Square =({squareColor,sqname})=> {

        return ( <div className ={squareColor}>
                <div className="sqname">{sqname}</div></div> );
    
}
 
export default Square;