import React, { useState } from 'react'
import * as L from './styles'
import { BsHouseDoor } from "react-icons/bs";
import { LuSchool } from "react-icons/lu";
import Locals from '../Local';

const LocalBar = () => {

  const [selectedOption, setSelectedOption] = useState('hotel');

  return (
    <div>
      <L.Container>
        <L.ContainerInside
          onClick={() => (setSelectedOption("hotel"))}
          selected={selectedOption === "hotel"}
        >
          <BsHouseDoor />
          <h3>Hotel</h3>
        </L.ContainerInside>

        <L.ContainerInside
          onClick={() => (setSelectedOption("creche"))}
          selected={selectedOption === "creche"}
        >
          <LuSchool />
          <h3>Creche</h3>
        </L.ContainerInside>
      </L.Container>

      <Locals selectedType={selectedOption} />
    </div>
  )
}

export default LocalBar