import React, { Component } from 'react';
import Square from './components/Square';


const     chessRow=['a','b','c','d','e','f','g','h'];
const chessColumn=['8','7','6','5','4','3','2','1'];

class Chess extends Component {

    squareClass = (i,j)=>{
        console.log(`row: ${i} column ${j}`);
        return ((i+j)%2===0)?'row chessw chessSq':'row chessb chessSq' 
       } 
    
       render() {
      
        
        return (<div className = "board">{ chessRow.map((r,i)=>{
        
        return<div className= "row" key={r}> {chessColumn.map((c,j)=>{
           const squareColor = this.squareClass(i,j);                         //pass a function to determine the class
        return <div key = {r+c} id={r+c}>
           
            <Square squareColor= {squareColor} sqname={r+c}/>
        </div>})}</div> 
        })
      }</div>
        );
    }
}
 
export default Chess;