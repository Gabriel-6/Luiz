import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import { FaSearch } from "react-icons/fa"
import { Logo, Container, ButtonContainer, CustomInput  } from '../Home/styles';
import LogoIMG from '../../assets/logo.png'

const Home = () => {
  const { signout } = useAuth(); 
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem('user_token');
    if (userToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <Container>
        <Logo>
          <img src={LogoIMG} alt="" />
        </Logo>

        <CustomInput
          type="text"
          placeholder="Busque por Hoteis e Creches"
          value={inputValue}
          onChange={(e) => [setInputValue(e.target.value), console.log(inputValue)]}
        />
        <FaSearch 
          style={{
            color: "#888",
            marginLeft: "-2.5%",
            cursor: "pointer"
          }}

          onClick={() => {
            alert(inputValue)
          }}
        />

        <ButtonContainer>
        {isLoggedIn ? (
              <Button Text="Sair" onClick={() => { 
                signout(); 
                localStorage.removeItem('userToken');
                setIsLoggedIn(false);
                navigate("/");
              }}>
                Sair
              </Button>
            ) : (
              <Button Text="Login" onClick={() => navigate("/signin")}>
                Login
              </Button>
            )}
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Home;