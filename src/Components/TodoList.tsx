import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import axios from 'axios';
import { TodoListItemProps } from './TodoCreate';

const TodoListLayout = styled.div`
  flex: 1;
  padding: 20px 32px;
  overflow-y: auto;
`;

const TodoList: React.FC = () => {
  // const [todoList, setTodoList] = useRecoilState(todoListStates);
  const [todos, setTodos] = useState<TodoListItemProps[]>([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:4000/api/v1/todos`).then((response) => {
      setTodos(response.data);
      //console.log(response.data);
    });
  }, [todos]);

  return (
    <TodoListLayout>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} done={todo.is_done} text={todo.content} />
      ))}
    </TodoListLayout>
  );
};

export default TodoList;
