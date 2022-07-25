import React from 'react'

const History = ({history,moveTo,curMove}) => {
  return (
    <ul>
        {
            history.map((_,move)=>{
                return (
                <li key={move}>
                    <button type='button' onClick={()=>{moveTo(move)}} style={{fontWeight:move===curMove?"bolder":"normal"}}>
                        {move===0?`Go to game start`:`Go to #${move}`}
                    </button>
                </li>
                )
            })
        }
    </ul>
  )
}

export default History