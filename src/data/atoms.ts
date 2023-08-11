import { atom } from 'recoil';
import { TodoListItemProps } from '../components/TodoCreate';

export const todoListStates = atom<TodoListItemProps[]>({
  key: 'todoListState',
  default: [],
});
