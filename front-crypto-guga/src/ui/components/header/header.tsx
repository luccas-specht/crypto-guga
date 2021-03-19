import React from 'react';
import * as SC from './headerStyle';

interface PropsHeader {
  children: React.ReactNode;
}

export const Header = ({ children }: PropsHeader) => {
  return <SC.Container>{children}</SC.Container>;
};
