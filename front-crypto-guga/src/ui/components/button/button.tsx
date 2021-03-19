import React from 'react';
import * as SC from './buttonStyle';

type PropsButton = {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: ()=> void;
};

export const Button = ({ title, type, onClick }: PropsButton) => {
  return <SC.button onClick={onClick} type={type}>{title}</SC.button>;
};
