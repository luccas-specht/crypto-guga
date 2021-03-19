import React, { useState } from 'react';
import * as SC from './symStyle';
import { Button } from '../../../components/button/button';
import { InputText } from '../../../components/inputText/inputText';
import Axios from 'axios';

export const FormSym = () => {
  const [password, setPassword] = useState('');
  const [text, setText] = useState('');
  const [encryptedText, setEncryptedText]=useState('');
  const [decryptedText, setDeryptedText]=useState('');

  const handleChangeText = (event: any) => {
    event.preventDefault();
    setText(event.target.value);
  };

  const handleChangePassword = (event: any) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleClickCriptografar = async ()=>{
    const res= await (await Axios.post("http://localhost:3333/symmetric/encrypt", { text, password })).data
    setEncryptedText(res.encryptedText);
  }

  const handleClickDescriptografar= async ()=>{
    const res= await (await Axios.post("http://localhost:3333/symmetric/decryption", { encryptedText, password })).data
    setDeryptedText(res.decryptionText);
  }


  return (
    <SC.Form onSubmit={(event)=>event.preventDefault()}>
      <SC.inputs>
        <InputText
          id="Frase"
          name="Frase"
          value={text}
          placeholder="Digite uma frase"
          onChange={handleChangeText}
          type="text"
        />
        <InputText
          id="Senha"
          name="Senha"
          value={password}
          placeholder="Digite uma Senha"
          onChange={handleChangePassword}
          type="password"
        />
        <InputText
          id="encryptedText"
          name="encryptedText"
          value={encryptedText}
          placeholder="encryptedText"
          type="text"
        />
        <InputText
          id="decryptedText"
          name="decryptedText"
          value={decryptedText}
          placeholder="decryptedText"
          type="text"
        />
      </SC.inputs>
      <SC.button>
        <Button onClick={handleClickCriptografar} title="Criptografar"/>
        <Button onClick={handleClickDescriptografar} title="Descriptografar" />
      </SC.button>
    </SC.Form>
  );
};
