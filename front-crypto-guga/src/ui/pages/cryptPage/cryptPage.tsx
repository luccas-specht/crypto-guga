import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Header } from '../../components/header/header';
import { FormAsym } from '../components/asyn/asyn';
import { FormSym } from '../components/sym/sym';
import * as SC from './cryptPageStyle';

export const CryptPage = () => {
  const [tabActive, setTabActive] = useState<boolean>(true);

  return (
    <SC.Container>
      <SC.h>
        <Header>
          <img src={logo} alt="logo Crypto guga" />
          <SC.title>Lucas teles, Yuri frança e Luccas Specht</SC.title>
        </Header>
      </SC.h>
      <SC.c>
        <SC.mc>
          <SC.Ul active={tabActive}>
            <li onClick={() => setTabActive(true)}>Criptografia assimétrica</li>
            <li onClick={() => setTabActive(false)}>Criptografia simétrica</li>
          </SC.Ul>
          <SC.AnimantionForm active={tabActive}>
            {tabActive ? <FormAsym /> : <FormSym />}
          </SC.AnimantionForm>
        </SC.mc>
        <SC.omc></SC.omc>
      </SC.c>
    </SC.Container>
  );
};
