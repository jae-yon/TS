import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TBoardsState = {
  modalActive: boolean;
  boardArray: IBoard[];
}

type TAddBoardAction = {
  board: IBoard;
}

type TDeleteListAction = {
  boardId: string;
  listId: string;
}

const initialState : TBoardsState = {
  modalActive: false,
  boardArray: [
    {
      boardId: 'board-0',
      boardName: '첫번째 게시물',
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
              taskOwner: 'Allis',
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
    },
    {
      boardId: 'board-1',
      boardName: '두번째 게시물',
      lists: [
        {
          listId: 'list-2',
          listName: 'list 3',
          tasks: [
            {
              taskId: 'task-4',
              taskName: 'task 5',
              taskDescription: 'Description',
              taskOwner: 'Khan',
            },
            {
              taskId: 'task-5',
              taskName: 'task 6',
              taskDescription: 'Description',
              taskOwner: 'Faker',
            }
          ]
        },
        {
          listId: 'list-6',
          listName: 'list 7',
          tasks: [
            {
              taskId: 'task-2',
              taskName: 'task 3',
              taskDescription: 'Description',
              taskOwner: 'Tom',
            },
            {
              taskId: 'task-7',
              taskName: 'task 8',
              taskDescription: 'Description',
              taskOwner: 'James',
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
    setModalAcitive: (state, {payload}: PayloadAction<boolean>) => {
      state.modalActive = payload;
    },

    addBoard: (state, {payload}: PayloadAction<TAddBoardAction>) => {
      state.boardArray.push(payload.board);
    },

    deleteList: (state, {payload}: PayloadAction<TDeleteListAction>) => {
      state.boardArray = state.boardArray.map(board => 
        board.boardId === payload.boardId ? {
          ...board,
          lists: board.lists.filter(list => list.listId !== payload.listId)
        } : board
      )
    }
  }
});

export const { setModalAcitive, addBoard, deleteList } = boardsSlice.actions;

export const boardsReducer = boardsSlice.reducer;