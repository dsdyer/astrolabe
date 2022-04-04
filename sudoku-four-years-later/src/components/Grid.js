import React from 'react';
import Cell from './Cell.js';
import './Grid.css';


// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );a

function Grid() {
  let cells = new Array(81).fill().map((cell, i) => <Cell digit={i} />);
  console.log(`cells: ${cells}`)
  return (
    <div className="grid">
    {cells}
      {/* {[1,2,3,4,5].map((cell, i) => {
        return <Cell key={i} digit={i} />;
      })} */}
    </div>
  );
}

export default Grid;
