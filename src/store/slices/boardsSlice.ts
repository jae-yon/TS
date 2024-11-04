import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TBoardsState = {
  modalActive: boolean;
  boardArray: IBoard[];
}

const initialState : TBoardsState = {
  modalActive: false,
  boardArray: [
    {
      boardId: 'board-0',
      boardName: 'first',
      lists: [
        {
          listId: 'list-0',
          listName: 'list 1',
          tasks: [
            {
              taskId: 'task-0',
              taskName: 'task 1',
              taskDescription: 'Description',
              taskOwner: 'Jhon',
            },
            {
              taskId: 'task-1',
              taskName: 'task 2',
              taskDescription: 'Description',
              taskOwner: 'Alis',
            }
          ]
        },
        {
          listId: 'list-1',
          listName: 'list 2',
          tasks: [
            {
              taskId: 'task-2',
              taskName: 'task 3',
              taskDescription: 'Description',
              taskOwner: 'Kim',
            },
            {
              taskId: 'task-3',
              taskName: 'task 4',
              taskDescription: 'Description',
              taskOwner: 'Lee',
            }
          ]
        }
      ]
    }
  ]
}

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {

  }
});

export const boardsReducer = boardsSlice.reducer;