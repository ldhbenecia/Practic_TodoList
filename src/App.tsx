import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './Components/TodoTemplate';
import TodoHeader from './Components/TodoHeader';
import TodoList from './Components/TodoList';
import TodoCreate from './Components/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #e9ecef;
  }
`;

const App:React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeader/>
        <TodoList />
        <TodoCreate open={false}/>
      </TodoTemplate>
    </>
  );
};

export default App;
