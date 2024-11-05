import React, { ChangeEvent, FC, useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';
import { icon, input, sideForm } from './SideForm.css';
import { useTypedDispatch } from '../../../hooks/redux';
import { addBoard } from '../../../store/slices/boardsSlice';
import { addLog } from '../../../store/slices/loggerSlice';

type TSideFormProps = {
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>,
  inputRef: React.RefObject<HTMLInputElement>
}

const SideForm:FC<TSideFormProps> = ({ setFormOpen, inputRef }) => {

  const dispatch = useTypedDispatch();

  const [inputText, setInputText] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  }

  const handleBlur = () => {
    setFormOpen(false);
  }

  const handleClick = () => {
    if(inputText) {
      dispatch(
        addBoard({
          board: {
            boardId: uuidv4(), 
            boardName: inputText,
            lists: []
          }
        })
      )

      dispatch (
        addLog({
          logId: uuidv4(),
          logMessage: `게시판 등록: ${inputText}`,
          logAuthor: "user",
          logTimestamp: String(Date.now()),
        })
      )
    }
  }

  return (
    <div className={sideForm}>
      <input 
        className={input}
        // ref={inputRef}
        autoFocus
        type="text"
        placeholder="새로운 게시판 등록"
        value={inputText}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FiCheck 
        className={icon}
        onMouseDown={handleClick}
      />
    </div>
  )
}

export default SideForm
