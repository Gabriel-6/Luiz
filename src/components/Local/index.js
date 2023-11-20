import React from 'react';
import comatus from '../../assets/comatus.svg';
import sf from '../../assets/SF.svg'
import st from '../../assets/st.svg'
import Local from './local';
import * as S from './styles';

const locals = [
  {title: "Três Corações, Brasil", name:"Hotel Santa Benedita", local:"", state: "Três Corações - MG", description: "Seu amigo de quatro patas merece nada menos que o melhor, e é exatamente isso que oferecemos no Hotel Santa Benedita. Situado em um cenário encantador, nosso hotel boutique para cães é projetado para proporcionar uma estadia exclusiva e confortável para os hóspedes mais exigentes. \n\nCada detalhe do Hotel Santa Benedita foi cuidadosamente planejado para criar um ambiente sereno e elegante. Os quartos espaçosos são decorados com estilo, proporcionando aos cães um lugar tranquilo para descansar. Nossa equipe de cuidadores altamente treinados e apaixonados está disponível 24 horas por dia para garantir que cada hóspede receba atenção individualizada e carinho constante. \n\nAs comodidades incluem áreas de recreação ao ar livre, sessões de brincadeiras supervisionadas e cardápios gourmet preparados por chefs especializados em culinária canina. No Hotel Santa Benedita, comprometemo-nos a criar uma experiência excepcional para seus cães, onde eles não apenas são bem cuidados, mas também mimados da maneira que merecem." ,image: st, price: "90", id: 1, type: "hotel"},
  {title: "Pouso Alegre, Brasil", name:"Hotel São Francisco", local:"Rua Marcos Antônio de Souza, 800 Portal do Ipiranga", state: "Pouso Alegre - MG", description: "Bem-vindo ao Hotel São Francisco, o refúgio luxuoso para seus amigos de quatro patas! Localizado em um ambiente tranquilo e cercado pela natureza, nosso hotel oferece uma experiência única para cães de todas as raças e tamanhos. Nossas instalações espaçosas e modernas proporcionam conforto e entretenimento, desde amplos quartos climatizados até áreas de lazer ao ar livre.\n\nNossa equipe dedicada de cuidadores de animais está sempre pronta para garantir que cada hóspede receba atenção personalizada, cuidados de saúde e muita diversão durante a estadia. Os cães desfrutarão de passeios diários, atividades recreativas supervisionadas e, é claro, uma dieta balanceada preparada por nossos chefs especializados em nutrição canina.\n\nNo Hotel São Francisco, nos esforçamos para criar um ambiente acolhedor e seguro, onde os cães se sintam em casa longe de casa. Seja para uma estadia curta ou prolongada, estamos comprometidos em proporcionar uma experiência inesquecível para os seus queridos companheiros peludos." ,image: sf, price: "85", id: 2, type: "hotel"},
  {title: "Pouso Alegre, Brasil", name:"Creche Comatus", local:"" , state: "Pouso Alegre - MG", description: "Bem-vindo à Comatus, a creche de animais que entende e valoriza a alegria e o bem-estar dos seus amigos peludos! Localizada em um ambiente acolhedor e seguro, nossa creche é mais do que um lugar para os animais passarem o dia; é um espaço onde eles podem socializar, brincar e receber cuidados amorosos enquanto você está ausente.\n\nNa Comatus, nossa equipe apaixonada e treinada está comprometida em proporcionar uma experiência enriquecedora para cada animal sob nossa supervisão. As instalações são projetadas para oferecer áreas de recreação internas e externas, garantindo que os animais desfrutem de atividades estimulantes e interações sociais positivas.\n\nEntendemos a importância da segurança e do conforto, por isso mantemos uma atmosfera supervisionada e amigável. Cada membro da equipe Comatus é dedicado a conhecer as necessidades individuais de cada animal, garantindo que eles se sintam amados e seguros durante todo o tempo que passam conosco.\n\nNa Comatus, nos esforçamos para ser mais do que uma simples creche - somos uma extensão do cuidado e carinho que você proporciona ao seu animal de estimação. Confie-nos o seu amigo peludo, e garantimos que ele terá um dia cheio de diversão, companhia e atenção personalizada na Creche de Animais Comatus." ,image: comatus, price: "100", id: 3, type: "creche"},
];

export { locals };

const Locals = ( { selectedType } ) => {
    
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
              name={local.name}
              local={local.local}
              image={local.image}
              price={local.price}
              state={local.state}
              description={local.description}
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