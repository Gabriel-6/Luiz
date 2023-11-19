import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../../pages/Home/styles";
import * as S from "./styles";
import logo from "../../assets/logo.svg";
import useAuth from "../../hooks/useAuth";
import Button from "../../components/Button";

const Navigation = () => {

    const [inputValue, setInputValue] = useState('');
    const { signout } = useAuth(); 
    const navigate = useNavigate();
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
        <S.NavigationsContainer>
            <S.LogoContainer>
                <S.LogoImage src={logo} alt="" onClick={() => { navigate("/home") }} />
            </S.LogoContainer>
            <S.CenterContainer>
                <S.SearchBarContainer>
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
                </S.SearchBarContainer>
            </S.CenterContainer>
            <S.MenuIconContainer>
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
            </S.MenuIconContainer>
        </S.NavigationsContainer>

    );
};

export default Navigation;
