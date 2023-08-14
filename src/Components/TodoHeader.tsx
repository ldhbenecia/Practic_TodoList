import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { TodoListItemProps } from './TodoCreate';

// import { todoListStates } from '../data/atoms';
// import { useRecoilValue } from 'recoil';

const TodoHeadLayout = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid rgb(230, 230, 230);

  h1 {
    margin: 0px;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const TodoHeader: React.FC = () => {
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = dayOfWeek[today.getDay()];
  const hours = today.getHours();
  const minutes = today.getMinutes();

  //const todoList = useRecoilValue(todoListStates);
  
  const [todos, setTodos] = useState<TodoListItemProps[]>([]);
  const unDoneTodo = todos.filter((todo) => !todo.is_done);
  const remainTodoCount = unDoneTodo.length;

  useEffect(() => {
    axios.get(`http://127.0.0.1:4000/api/v1/todos`).then((response) => {
      setTodos(response.data);
      //console.log(response.data);
    });
  }, [todos]);

  return (
    <TodoHeadLayout>
      <h1>
        {year}년 {month}월 {date}일
      </h1>
      <div className="day">
        {day}요일 {hours}시 {minutes}분
      </div>
      <div className="tasks-left">오늘의 Todo는 {remainTodoCount}개 남았어요.</div>
    </TodoHeadLayout>
  );
};

export default TodoHeader;
