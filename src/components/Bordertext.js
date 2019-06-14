import React, { Component } from 'react';

const chessRow=['a','b','c','d','e','f','g','h'];
const chessColumn=['8','7','6','5','4','3','2','1'];
class Bordertext extends Component {
    render() { 

        return (
        <div>
        
        <div className= "rowtextall">{
            chessRow.map(r =><div className ='rowtext'>{r}</div>)
        }</div> 
        <div className="columntextall">{
            chessColumn.map(c =><div className= 'columntext'>{c}</div>)
        }
        </div> 
        </div>);
    }
}
 
export default Bordertext;