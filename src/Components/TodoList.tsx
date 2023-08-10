import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListLayout = styled.div`
  flex: 1;
  padding: 20px 32px;
  overflow-y: auto;
`;

const TodoList = () => {
  return (
    <TodoListLayout>
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="프로젝트 생성하기" done={false} />
      <TodoItem text="프로젝트 생성하기" done={false} />
    </TodoListLayout>
  );
};

export default TodoList;
