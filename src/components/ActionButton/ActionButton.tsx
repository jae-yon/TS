import React, { FC, useState } from 'react';
import DropdownForm from './DropdownForm/DropdownForm';
import { IoIosAdd } from 'react-icons/io';
import { listButton, taskButton } from './ActionButton.css';

type TActionButtonProps = {
  boardId: string;
  listId: string;
  list?: boolean;
}

const ActionButton: FC<TActionButtonProps> = ({ boardId, listId, list}) => {

  const [isFormOpen, setIsFormOpen] = useState(false);

  const buttonText = list ? "신규 리스트 등록" : "새로운 일 등록";
  
  return isFormOpen ? (
    <DropdownForm 
      setIsFormOpen={setIsFormOpen}
      list={list ? true : false}
      listId={listId}
      boardId={boardId}
    />
  ) : (
    <div 
      className={list ? listButton : taskButton}
      onClick={() => setIsFormOpen(true)}  
    >
      <IoIosAdd />
      <p>{buttonText}</p>
    </div>
  )
}

export default ActionButton
