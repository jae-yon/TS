import React, { FC } from 'react';
import { IList } from '../../types';
import List from '../List/List';
import ActionButton from '../ActionButton/ActionButton';
import { listContainer } from './ListsContainer.css';

type TListsContainerProps = {
  boardId: string;
  lists: IList[];
}

const ListsContainer:FC<TListsContainerProps> = ({ lists, boardId }) => {
  return (
    <div className={listContainer}>
      {
        lists.map(list => (
          <List 
            key={list.listId}
            boardId={boardId}
            list={list}
          />
        ))
      }
      <ActionButton />
    </div>
  )
}

export default ListsContainer
