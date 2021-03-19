import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 32px;
  width: 100%;
  align-items: center;
  max-height: 56px;
`;

export const Input = styled.input`
  color: #333;
  background: transparent;
  border: 0;
  outline: none;

  &::placeholder {
    color: #333;
  }
`;
