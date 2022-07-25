import React from 'react'

const StatusMessage = ({winner,isSetX,board}) => {
    const noOfMovesLeft = board.every(v=>v!==null);
  return (
    <div className='status-message'>
        {winner&&winner&&<>
            Winner is <span className={winner==='X'?"text-green":"text-orange"}>{winner}</span>
        </>}
        {!winner&&!noOfMovesLeft&&<>
            <span className={isSetX?"text-green":"text-orange"}>{isSetX?"X":"O"}'s</span> turn
        </>}
        {!winner&&noOfMovesLeft&&<>
        <span className='text-green'>X</span> and <span className='text-orange'>O</span> tied
        </>}
    </div>
  )
}

export default StatusMessage