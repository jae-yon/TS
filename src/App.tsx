import { useState } from "react";
import { appContainer, board, buttons, deleteButton, loggerButton } from "./App.css";
import { useTypedDispatch, useTypedSelector } from "./hooks/redux";
import BoardList from "./components/BoardList/BoardList";
import ListsContainer from "./components/ListsContainer/ListsContainer";
import EditModal from "./components/EditModal/EditModal";
import LoggerModal from "./components/LoggerModal/LoggerModal";
import { deleteBoard } from "./store/slices/boardsSlice";
import { addLog } from "./store/slices/loggerSlice";
import { v4 } from "uuid";

function App() {

  const [activeBoardId, setActiveBoardId] = useState("board-0");

  const [isLoggerOpen, setIsLoggerOpen] = useState(false);

  const boards = useTypedSelector(state => state.boards.boardArray);

  const modalActive = useTypedSelector(state => state.boards.modalActive);
  
  const getActiveBoard = boards.filter(board => board.boardId === activeBoardId)[0];

  const lists = getActiveBoard.lists;

  const dispatch = useTypedDispatch();

  const handleDeleteBoard = () => {
    if (boards.length > 1) {
      // delete board
      dispatch(deleteBoard({ boardId: getActiveBoard.boardId }));
      // log recording
      dispatch(
        addLog({
          logId: v4(),
          logMessage: `게시판 삭제: ${getActiveBoard.boardName}`,
          logAuthor: "user",
          logTimestamp: String(Date.now()),
        })
      );
      // change board index
      const newIndexToSet = () => {
        const indexToBeDeleted = boards.findIndex(board => board.boardId === activeBoardId);
        return indexToBeDeleted === 0 ? indexToBeDeleted + 1 : indexToBeDeleted -1 ;
      }
      setActiveBoardId(boards[newIndexToSet()].boardId);
    } else {
      alert("게시판은 1개 이상 존재해야 합니다");
    }
  }

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
        <button className={deleteButton} onClick={handleDeleteBoard}>
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
