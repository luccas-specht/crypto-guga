import React, { useState } from 'react';
import * as SC from './asynStyle';
import { Button } from '../../../components/button/button';
import { InputText } from '../../../components/inputText/inputText';
import Axios from 'axios'

export const FormAsym = () => {
  const [text, setText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleChange = (event: any) => {
    event.preventDefault();
    setText(event.target.value);
  };

  const handleClickCriptografar = async ()=>{
    const res= await (await Axios.post("http://localhost:3333/asymmetric/encrypt", { text })).data
    setPublicKey(res.publicKey);
    setEncryptedText(res.text)
  }

  const handleClickDescriptografar= async ()=>{
    const res= await (await Axios.post("http://localhost:3333/asymmetric/decryption", { publicKey, text: encryptedText })).data
    setDecryptedText(res.decrypt);
  }

  return (
    <SC.Form onSubmit={(event)=>event.preventDefault()}>
      <SC.inputs>
        <InputText
          id="Frase"
          name="Frase"
          value={text}
          placeholder="Digite uma frase"
          onChange={handleChange}
          type={"text"}
        />
      <InputText
          id="textoEncriptado"
          name="textoEncriptado"
          value={encryptedText}
          placeholder="textoEncriptado"
          type={"text"}
      />
      <InputText
        id="publicKey"
        name="publicKey"
        value={publicKey}
        placeholder="publicKey"
        type={"text"}
      />
      <InputText
        id="decryptedText"
        name="decryptedText"
        value={decryptedText}
        placeholder="decryptedText"
        type={"text"}
      />
      </SC.inputs>
      <SC.button>
        <Button title="Criptografar" onClick={handleClickCriptografar} />
        <Button title="Descriptografar" onClick={handleClickDescriptografar} type="submit" />
      </SC.button>
    </SC.Form>
  );
};
