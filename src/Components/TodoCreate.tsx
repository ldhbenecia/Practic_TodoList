import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { todoListStates } from '../data/atoms';
import axios from 'axios';

const CircleButton = styled.button<TodoCreateProps>`
  background-color: #38d9a9;
  &:hover {
    background-color: #63e6be;
  }
  &:active {
    background-color: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

interface TodoCreateProps {
  open: boolean;
}

export interface TodoListItemProps {
  id: number;
  content: string;
  is_done: boolean;
}

const TodoCreate: React.FC<TodoCreateProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [todoList, setTodoList] = useRecoilState<TodoListItemProps[]>(todoListStates);

  const onToggle = () => {
    setOpen(!open);
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = {
      content: inputValue,
      is_done: false,
    };

    try {
      const response = await axios.post('http://127.0.0.1:4000/api/v1/todos', newTodo);
      setTodoList([...todoList, response.data]);
      setInputValue('');
      setOpen(false);
      //console.log('Todo added successfully:', response.data);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={handleSubmit}>
            <Input
              value={inputValue}
              onChange={handleInputChange}
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
};

export default TodoCreate;
