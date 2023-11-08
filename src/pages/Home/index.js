import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";

import { Logo, Container, ButtonContainer, CustomInput  } from '../Home/styles';
import LogoIMG from '../../assets/logo.png'

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const teclaPressionada = (event) => {
    if (event.key === 'Enter') {
      console.log(inputValue);
    }
  };

  const mudarInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
    <Container>
      <Logo>
        <img src={LogoIMG} alt="" />
      </Logo>
      <CustomInput type="text" placeholder="Busque por Hoteis e Creches" value={inputValue} onChange={mudarInput} onKeyPress={teclaPressionada} />
      <ButtonContainer>
        <Button Text="Sair" onClick={() => [signout(), navigate("/")]}> Sair </Button>
      </ButtonContainer>
    </Container>

    </>
  );
};

export default Home;