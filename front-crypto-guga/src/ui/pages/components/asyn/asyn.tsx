import React, { useState } from 'react';
import * as SC from './asynStyle';
import { Button } from '../../../components/button/button';
import { InputText } from '../../../components/inputText/inputText';

export const FormAsym = () => {
  const [text, setText] = useState('');

  const handleChange = (event: any) => {
    event.preventDefault();

    setText(event.target.value);
  };

  return (
    <SC.Form>
      <SC.inputs>
        <InputText
          id="Frase"
          name="Frase"
          value={text}
          placeholder="Digite uma frase"
          onChange={setText}
          type={"text"}
        />
      </SC.inputs>
      <SC.button>
        <Button title="Criptografar" type="submit" />
        <Button title="Descriptografar" type="submit" />
      </SC.button>
    </SC.Form>
  );
};
