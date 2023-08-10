import React, { ReactNode } from 'react';
import styled from 'styled-components';

const TodoLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 512px;
  height: 768px;
  position: relative;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;

  margin-top: 70px;
  margin-bottom: 32px;
`;

interface TodoTemplateProps {
  children: ReactNode;
}

const TodoTemplate: React.FC<TodoTemplateProps> = ({ children }) => {
  return <TodoLayout>{children}</TodoLayout>;
};

export default TodoTemplate;
