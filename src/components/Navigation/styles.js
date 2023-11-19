import styled from 'styled-components';

export const NavigationsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 0.3px solid #ccc;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  flex-shrink: 0;
  margin-right: 10px;
`;

export const CenterContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 42%;
  width: 100%;
`;

export const SearchInput = styled.input`
  margin-right: 10px;
`;

export const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
`;
