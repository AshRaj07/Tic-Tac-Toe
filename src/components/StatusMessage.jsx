import React from 'react'

const StatusMessage = ({winner,isSetX,board}) => {
    const noOfMovesLeft = board.every(v=>v!==null);
  return (
    <h2>
        {winner&&winner&&`Winner is ${winner}`}
        {!winner&&!noOfMovesLeft&&`${isSetX?"X":"O"}'s turn`}
        {!winner&&noOfMovesLeft&&`X and O tied`}
    </h2>
  )
}

export default StatusMessage