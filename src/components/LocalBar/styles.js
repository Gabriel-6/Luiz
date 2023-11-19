import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 30px 10px;
`;

export const ContainerInside = styled.div`
    align-items: center;
    text-align: center;

    ${(props) => props.selected && `
        border-bottom: 3px solid #333; // Adicione estilos para a linha abaixo do texto selecionado
    `}

    &:hover {
        
    }
`;