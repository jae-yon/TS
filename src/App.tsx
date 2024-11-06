import { useState } from "react";
import { appContainer, board, buttons, deleteButton, loggerButton } from "./App.css";
import { useTypedSelector } from "./hooks/redux";
import BoardList from "./components/BoardList/BoardList";
import ListsContainer from "./components/ListsContainer/ListsContainer";
import EditModal from "./components/EditModal/EditModal";
import LoggerModal from "./components/LoggerModal/LoggerModal";

function App() {

  const [activeBoardId, setActiveBoardId] = useState("board-0");

  const [isLoggerOpen, setIsLoggerOpen] = useState(false);

  const boards = useTypedSelector(state => state.boards.boardArray);

  const modalActive = useTypedSelector(state => state.boards.modalActive);
  
  const getActiveBoard = boards.filter(board => board.boardId === activeBoardId)[0];

  const lists = getActiveBoard.lists;

  return (
    <div className={appContainer}>

      { isLoggerOpen ? <LoggerModal setIsLoggerOpen={setIsLoggerOpen} /> : null }

      { modalActive ? <EditModal /> : null }

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
        <button className={deleteButton}>
          게시판 삭제
        </button>
        <button className={loggerButton} onClick={() => setIsLoggerOpen(!isLoggerOpen)}>
          { isLoggerOpen ? "로그 내역 닫기" : "로그 내역 보기" }
        </button>
      </div>

    </div>
  )
}

export default App
