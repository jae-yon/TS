import React, { ChangeEvent, useState } from 'react'
import { v4 } from 'uuid';
import { FiX } from 'react-icons/fi'
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux'
import { deleteTask, setModalAcitive, updateTask } from '../../store/slices/boardsSlice';
import { addLog } from '../../store/slices/loggerSlice';
import { buttons, closeButton, deleteButton, header, input, modalWindow, title, updateButton, wrapper } from './EditModal.css';

const EditModal = () => {

  const dispatch = useTypedDispatch();

  const editingState = useTypedSelector(state => state.modal);

  const [data, setData] = useState(editingState);

  const handleCloseButton = () => {
    dispatch(setModalAcitive(false));
  }

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      task: {
        ...data.task,
        taskName: event.target.value,
      }
    })
  }

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      task: {
        ...data.task,
        taskDescription: event.target.value,
      }
    })
  }

  const handleAuthorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      task: {
        ...data.task,
        taskOwner: event.target.value,
      }
    })
  }

  const handleUpdate = () => {
    dispatch(
      updateTask({
        boardId: editingState.boardId,
        listId: editingState.listId,
        task: data.task,
      })
    );

    dispatch(
      addLog({
        logId: v4(),
        logMessage: `일 수정: ${editingState.task.taskName}`,
        logAuthor: "user",
        logTimestamp: String(Date.now()),
      })
    );

    dispatch(setModalAcitive(false));
  }

  const handleDelete = () => {
    dispatch(
      deleteTask({
        boardId: editingState.boardId,
        listId: editingState.listId,
        taskId: editingState.task.taskId,
      })
    );

    dispatch(
      addLog({
        logId: v4(),
        logMessage: `일 삭제: ${editingState.task.taskName}`,
        logAuthor: "user",
        logTimestamp: String(Date.now()),
      })
    );

    dispatch(setModalAcitive(false));
  }

  return (
    <div className={wrapper}>
      <div className={modalWindow}>
        <div className={header}>
          <div className={title}>{editingState.task.taskName}</div>
          <FiX className={closeButton} onClick={handleCloseButton} />
        </div>
        {/* title */}
        <div className={title}>제목</div>
        <input 
          type="text"
          className={input}
          value={data.task.taskName}
          onChange={handleNameChange}
        />
        {/* description */}
        <div className={title}>설명</div>
        <input 
          type="text"
          className={input}
          value={data.task.taskDescription}
          onChange={handleDescriptionChange}
        />
        {/* user */}
        <div className={title}>작성자</div>
        <input 
          type="text"
          className={input}
          value={data.task.taskOwner}
          onChange={handleAuthorChange}
        />
        <div className={buttons}>
          <button className={updateButton} onClick={handleUpdate}>✏️ 수정</button>
          <button className={deleteButton} onClick={handleDelete}>🗑️ 삭제</button>
        </div>
      </div>
    </div>
  )
}

export default EditModal
