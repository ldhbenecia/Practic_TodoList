import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import axios from 'axios';

// import { useSetRecoilState } from 'recoil';
// import { todoListStates } from '../data/atoms';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<TodoItemProps>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div<TodoItemProps>`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

interface TodoItemProps {
  id?: number;
  done?: boolean;
  text?: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, done, text }) => {

  // Recoil
  // const setTodoList = useSetRecoilState(todoListStates);

  // const handleToggle = () => {
  //   setTodoList((todo) =>
  //     todo.map((toggleTodo) => (toggleTodo.id === id ? { ...toggleTodo, done: !toggleTodo.done } : toggleTodo)),
  //   );
  // };

  // const handleDelete = () => {
  //   setTodoList((todo) => todo.filter((deleteTodo) => deleteTodo.id !== id));
  // };

  const handleToggle = async () => {
    try {
      await axios.patch(`http://127.0.0.1:4000/api/v1/todos/${id}`);
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:4000/api/v1/todos/${id}`);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };


  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={handleToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={handleDelete}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};

export default TodoItem;
