import { useState } from "react";
import { appContainer, board, buttons } from "./App.css";
import { useTypedSelector } from "./hooks/redux";
import BoardList from "./components/BoardList/BoardList";
import ListsContainer from "./components/ListsContainer/ListsContainer";

function App() {

  const [activeBoardId, setActiveBoardId] = useState("board-0");

  const boards = useTypedSelector(state => state.boards.boardArray);
  
  const getActiveBoard = boards.filter(board => board.boardId === activeBoardId)[0];

  const lists = getActiveBoard.lists;

  return (
    <div className={appContainer}>
      {/* header navigation */}
      <BoardList 
        activeBoardId={activeBoardId} 
        setActiveBoardId={setActiveBoardId}
      />
      {/* list container */}
      <div className={board}>
        <ListsContainer boardId={getActiveBoard.boardId} lists={lists} />
      </div>

      <div className={buttons}>
        <button>
          게시판 삭제
        </button>
        <button>

        </button>
      </div>

    </div>
  )
}

export default App
