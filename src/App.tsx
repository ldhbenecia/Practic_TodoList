import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoPage from './pages/TodoPage';


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
      <TodoPage />
    </>
  );
};

export default App;
