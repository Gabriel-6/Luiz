import React from 'react';
import comatus from '../../assets/comatus.svg';
import sf from '../../assets/SF.svg'
import st from '../../assets/st.svg'
import Local from './local';
import * as S from './styles';

const Locals = ( { selectedType } ) => {

    const locals = [
      {title: "Três Corações, Brasil", image: st, price: "90", id: 1, type: "hotel"},
      {title: "Pouso Alegre, Brasil", image: sf, price: "85", id: 2, type: "hotel"},
      {title: "Pouso Alegre, Brasil", image: comatus, price: "100", id: 3, type: "creche"},
    ];
    
    const filteredLocals = selectedType
    ? locals.filter((local) => local.type === selectedType)
    : locals;

    return(
      <div>
        <S.LocalsWrapper>
        <S.LocalsContainer>
          {filteredLocals.map((local) => (
            <Local
              title={local.title}
              image={local.image}
              price={local.price}
              id={local.id}
              type={local.type}
            />
          ))}
        </S.LocalsContainer>
      </S.LocalsWrapper>

    </div>
    )
  
}

export default Locals;