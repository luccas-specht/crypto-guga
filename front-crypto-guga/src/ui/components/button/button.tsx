import React from 'react';
import * as SC from './buttonStyle';

type PropsButton = {
  title: string;
  type?: 'button' | 'submit' | 'reset';
};

export const Button = ({ title, type }: PropsButton) => {
  return <SC.button type={type}>{title}</SC.button>;
};
