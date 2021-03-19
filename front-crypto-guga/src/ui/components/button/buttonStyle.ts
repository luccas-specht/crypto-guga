import styled from 'styled-components';

export const button = styled.button`
  background-color: #1e90ff;
  color: #ffffff;
  width: 10vw;
  height: 56px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: center;
  transition: background-color 0.3s;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #00bfff;
  }
`;
