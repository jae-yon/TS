import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard, IList, ITask } from "../../types";

type TBoardsState = {
  modalActive: boolean;
  boardArray: IBoard[];
}

type TAddBoardAction = {
  board: IBoard;
}

type TAddListAction = {
  boardId: string;
  list: IList;
}

type TAddTaskAction = {
  boardId: string;
  listId: string;
  task: ITask;
}

type TDeleteBoardAction = {
  boardId: string;
}

type TDeleteTaskAction = {
  boardId: string;
  listId: string;
  taskId: string;
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
      state.boardArray.push(payload.board)
    },

    deleteBoard: (state, {payload}: PayloadAction<TDeleteBoardAction>) => {
      state.boardArray = state.boardArray.filter(
        board => board.boardId !== payload.boardId
      )
    },

    addList: (state, {payload}: PayloadAction<TAddListAction>) => {
      state.boardArray.map(board => 
        board.boardId === payload.boardId
        ? { ...board, lists: board.lists.push(payload.list) }
        : board
      )
    },

    deleteList: (state, {payload}: PayloadAction<TDeleteListAction>) => {
      state.boardArray = state.boardArray.map(board => 
        board.boardId === payload.boardId ? {
          ...board,
          lists: board.lists.filter(list => list.listId !== payload.listId)
        } : board
      )
    },

    addTask: (state, {payload}: PayloadAction<TAddTaskAction>) => {
      state.boardArray.map(board => 
        board.boardId === payload.boardId
        ? {
          ...board,
          lists: board.lists.map(list => list.listId === payload.listId ? { ...list, tasks: list.tasks.push(payload.task) } : list)
        }
        : board
      )
    },

    updateTask: (state, {payload}: PayloadAction<TAddTaskAction>) => {
      state.boardArray = state.boardArray.map(board => 
        board.boardId === payload.boardId
        ? {
          ...board,
          lists: board.lists.map(list => 
            list.listId === payload.listId
            ? {
              ...list,
              tasks: list.tasks.map(task =>
                task.taskId === payload.task.taskId
                ? payload.task : task
              )
            } : list
          )
        } : board
      )
    },

    deleteTask: (state, {payload}: PayloadAction<TDeleteTaskAction>) => {
      state.boardArray = state.boardArray.map(board => 
        board.boardId === payload.boardId
        ? {
          ...board,
          lists: board.lists.map(list => 
            list.listId === payload.listId
            ? {
              ...list,
              tasks: list.tasks.filter(task => task.taskId !== payload.taskId)
            } : list
          )
        } : board
      )
    }
  }
});

export const { setModalAcitive, addBoard, addList, addTask, updateTask, deleteBoard, deleteList, deleteTask } = boardsSlice.actions;

export const boardsReducer = boardsSlice.reducer;