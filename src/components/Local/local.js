import React from 'react'
import * as S from './styles';
import { useNavigate } from "react-router-dom";

const Local = ({ title, image, price, id, type}) => {
  const navigate = useNavigate();
  return (
    <S.LocalContainer onClick={() => navigate(`/quartos/${id}`)}>
      <S.Image src={image} alt="" />
        <S.Title>{title}</S.Title>
          <S.Price>R${price} dia</S.Price>
    </S.LocalContainer>
  );
  };

export default Local;