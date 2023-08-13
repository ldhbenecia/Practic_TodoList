import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useRecoilState } from 'recoil';
import { todoListStates } from '../data/atoms';

const TodoListLayout = styled.div`
  flex: 1;
  padding: 20px 32px;
  overflow-y: auto;
`;

const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListStates);

  return (
    <TodoListLayout>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} done={todo.done} text={todo.text} />
      ))}
    </TodoListLayout>
  );
};

export default TodoList;
