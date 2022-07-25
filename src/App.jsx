import React,{useState} from "react";
import Board from "./components/Board";
import Helper from "./components/Helper";
import History from "./components/History";
import "./styles/root.scss"

const App = () => {
  const [history, sethistory] = useState([{board:Array(9).fill(null),isSetX:true}]);
  const [curMove, setcurMove] = useState(0)
  const {board,isSetX} = history[curMove];
  console.log(history);
  const winner = Helper(board);
  const message = winner?`Winner is ${winner}`:`${isSetX?"X":"O"}'s turn`
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
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
      <History history={history} moveTo={moveTo} curMove={curMove} />
    </div>
  );
};

export default App;