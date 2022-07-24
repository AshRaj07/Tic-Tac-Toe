import React,{useState} from 'react'
import Square from './Square'

const Board = () => {
    const [board, setboard] = useState(Array(9).fill(null));
    const [isSetX, setisSetX] = useState(false)
    const handleSquareClick = (pos) => {
        if(board[pos]!=null){
            return;
        }
        setboard((prevState)=>{
            return prevState.map((val,idx)=>{
                if(idx==pos){
                    return isSetX ? "X" : "O";
                }
                return val;
            })
        })
        setisSetX(!isSetX);
    }

    const renderSquare = (pos) =>{
        return  <Square value={board[pos]} onClick={()=>{handleSquareClick(pos)}} />
    }
  return (
    <>
    <div className='board'>
        <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        </div>
        <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        </div>
        <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        </div>

    </div>
    </>
  )
}

export default Board