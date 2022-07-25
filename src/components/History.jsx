import React from 'react'

const History = ({history,moveTo,curMove}) => {
  return (
    <div className="history-wrapper">
            <ul className='history'>
        {
            history.map((_,move)=>{
                return (
                <li key={move}>
                    <button className={`btn-move ${move===curMove?'active':''}`} type='button' onClick={()=>{moveTo(move)}} style={{fontWeight:move===curMove?"bolder":"normal"}}>
                        {move===0?`Go to game start`:`Go to #${move}`}
                    </button>
                </li>
                )
            })
        }
    </ul>
    </div>
  )
}

export default History