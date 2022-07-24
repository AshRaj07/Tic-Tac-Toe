import React,{useState} from "react";
import Board from "./components/Board";
import Helper from "./components/Helper";
import "./styles/root.scss"

const App = () => {
  const [board, setboard] = useState(Array(9).fill(null));
  const [isSetX, setisSetX] = useState(false)

  const winner = Helper(board);
  const message = winner?`Winner is ${winner}`:`${isSetX?"X":"O"}'s turn`
  const handleSquareClick = (pos) => {
      if(board[pos]!=null||winner){
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
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;