import React from 'react'
import TodoTemplate from '../components/TodoTemplate';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';
import TodoCreate from '../components/TodoCreate';

const TodoPage = () => {
  return (
    <>
      <TodoTemplate>
        <TodoHeader />
        <TodoList />
        <TodoCreate open={false} />
      </TodoTemplate>
    </>
  );
}

export default TodoPage
