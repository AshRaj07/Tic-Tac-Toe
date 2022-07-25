import React,{useState} from "react";
import Board from "./components/Board";
import Helper from "./components/Helper";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import "./styles/root.scss"

const App = () => {
  const [history, sethistory] = useState([{board:Array(9).fill(null),isSetX:true}]);
  const [curMove, setcurMove] = useState(0)
  const {board,isSetX} = history[curMove];
  const {winner,winningSquares} = Helper(board);
  const handleSquareClick = (pos) => {
      if(board[pos]!=null||winner){
          return;
      }
      sethistory((prevState)=>{
        const {board,isSetX} = prevState[prevState.length-1];
          const newBoard =  board.map((val,idx)=>{
              if(idx==pos){
                  return isSetX ? "X" : "O";
              }
              return val;
          })
          return prevState.concat([{board:newBoard,isSetX:!isSetX}]);
      })
      setcurMove(curMove+1);
  }
  const moveTo = (move) => {
    setcurMove(move)
  }
  return (
    <div className="app">
      <h1>Tic <span className="text-green">Tac</span> Toe</h1>
      <StatusMessage winner={winner} isSetX={isSetX} board={board} />
      <Board board={board} handleSquareClick={handleSquareClick} winningSquares={winningSquares} />
      <button className={`btn-reset ${winner?"active":""}`} type="button" onClick={()=>{ 
        setcurMove(0)
        sethistory([{board:Array(9).fill(null),isSetX:true}])}}>Start New Game</button>
        <h2 style={{fontWeight:"normal"}}>Current Game History</h2>
      <History history={history} moveTo={moveTo} curMove={curMove} />
      <div className="bg-balls" />
    </div>
  );
};

export default App;