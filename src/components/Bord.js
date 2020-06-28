import React from 'react';
import Square from './Square';

const style = {
  border: '5px solid darkblue',
  borderRadius: '10px',
  width: '500px',
  height: '500px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Board = ({ squares, onClick }) => (
  <div style={style}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;

/* import React from 'react'
 import Square from './Square.js'
 
const style ={
    border : '5px solid darkblue',
    borderRadius: '10px',
    width:'500px',
    height:'500px',
    margin: '0 auto',
    display :'grid',
    gridTemplete: 'repeat(3,1fr) / repeat (3,1fr)'

}
const Bord = ({ squares, onClick }) =>(
    <div style={style}>
        {squares.map((Square,i) =>(
            <Square key={i} value={Square} onClick={()=>onClick(i)} />
            
        ) )}
    </div>
    
) 

export default Bord */