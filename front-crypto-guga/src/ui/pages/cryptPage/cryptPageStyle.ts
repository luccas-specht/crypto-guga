import styled, { keyframes, css } from 'styled-components';

type TabProps = {
  active: boolean;
};

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
`;

export const h = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
`;

export const c = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100%;
`;
export const mc = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const title = styled.h1`
  color: #333;
  line-height: 32px;
  font-weight: 400;
  font-size: 25px;
  margin-right: 25px;
`;

export const omc = styled.div`
  width: auto;
  height: auto;
`;

export const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-100px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const appearFromRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(100px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimantionForm = styled.div<TabProps>`
  animation: ${({ active }) => (active ? appearFromRight : appearFromLeft)} 1s;
  width: 80%;
`;

export const Ul = styled.ul<TabProps>`
  margin-top: 100px;
  width: 80%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  li {
    font-style: normal;
    font-size: 26px;
    line-height: 32px;
    text-align: center;
    font-weight: 900;
    list-style: none;
    cursor: pointer;

    ${({ active }) =>
      active
        ? css`
            &:first-child {
              color: #00bfff;
              border-radius: 1px;
              border-bottom: 2px solid #00bfff;
            }
          `
        : css`
            &:last-child {
              color: #00bfff;
              border-radius: 1px;
              border-bottom: 2px solid #00bfff;
            }
          `}
  }
`;
