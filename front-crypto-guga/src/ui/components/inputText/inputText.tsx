import React from 'react';
import * as SC from './inputTextStyle';

interface PropsInputText {
  id: string;
  type: string
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: any) => void;
}

export const InputText = ({ id, name, value, placeholder, type }: PropsInputText) => {
  return (
    <SC.Container>
      <SC.Input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </SC.Container>
  );
};
