import React, { FC, useRef, useState } from 'react';
import { FiLogIn, FiLogOut, FiPlusCircle } from 'react-icons/fi';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import clsx from 'clsx';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import SideForm from './SideForm/SideForm';
import { addButton, addSection, boardItem, boardItemActive, container, title } from './BoardList.css';
import { app } from '../../firebase';
import { removeUser, setUser } from '../../store/slices/userSlice';
import { useAuth } from '../../hooks/useAuth';

type TBoardListProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
}

const BoardList:FC<TBoardListProps> = ({ activeBoardId, setActiveBoardId }) => {

  const dispatch = useTypedDispatch();

  const { boardArray } = useTypedSelector(state => state.boards);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // firebase connect
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const { isAuth } = useAuth();

  const handleLogin = () => {
    // popup google login
    signInWithPopup(auth, provider)
      // success to login 
      .then(userCredential => {
        console.log(userCredential);
        dispatch(
          setUser({
            email: userCredential.user.email,
            id: userCredential.user.uid,
          })
        );
      })
      // fail to login
      .catch(error => {
        console.error(error);
      });
  }

  const handleLogout = () => {
    signOut(auth)
    // success to logout
    .then(() => {
      dispatch(removeUser());
    })
    // fail to logout
    .catch(error => {
      console.error(error);
    });
  }

  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  }

  return (
    <div className={container}>

      <div className={title}>
        board:
      </div>

      {boardArray.map((board, index) => (
        <div
          key={board.boardId}
          className={
            clsx(
              {
                [boardItemActive]:
                boardArray.findIndex(b => b.boardId === activeBoardId) === index,
              },
              {
                [boardItem]:
                boardArray.findIndex(b => b.boardId === activeBoardId) !== index,
              }
            )
          }
          onClick={() => setActiveBoardId(boardArray[index].boardId)}
        >
          <div>
            {board.boardName}
          </div>
        </div>
      ))}
      
      <div className={addSection}>
        {
          isFormOpen 
          ?
          <SideForm inputRef={inputRef} setFormOpen={setIsFormOpen} />
          :
          <FiPlusCircle className={addButton} onClick={handleClick} />
        }

        {
          isAuth 
          ?
          <FiLogOut className={addButton} onClick={handleLogout}/>
          :
          <FiLogIn className={addButton} onClick={handleLogin}/>
        }
      </div>
    </div>
  )
}

export default BoardList
