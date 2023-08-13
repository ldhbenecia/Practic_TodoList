import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { TodoListItemProps } from '../components/TodoCreate';

const { persistAtom } = recoilPersist();

export const todoListStates = atom<TodoListItemProps[]>({
  key: 'todoListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
