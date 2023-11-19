import styled from 'styled-components';

export const LocalsWrapper = styled.div`
  padding-top: 36px;
  max-width: 100%;
  margin: 0 auto;
`;

export const LocalsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const LocalContainer = styled.div`
  width: calc(25% - 20px);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    width: calc(100% - 20px);
  }
`;

export const Image = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px; 
  text-align: center;
  margin-left: 4.3%;

  @media (min-width: 768px) {
    text-align: start;
    margin-right: 10px; 
  }
`;

export const Price = styled.h3`
  font-family: 'kalam', sans-serif;
  font-weight: bold;
  margin-left: 4.3%;
  font-size: 4xl;
  margin-top: 7px;
  color: #333 ; 
  text-align: center;

  @media (min-width: 768px) {
    text-align: start;
    margin-right: 10px; 
  }
`;