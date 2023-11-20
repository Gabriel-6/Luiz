import React, { useState } from 'react'
import Navigations from "../../components/Navigation";
import { useParams } from 'react-router-dom';
import { locals } from "../../components/Local"
import Logo from "../../assets/dog.jpg"
import { PiVan } from "react-icons/pi";
import { PiBowlFood } from "react-icons/pi";
import { MdOutlineCheck } from "react-icons/md";
import ReactDatePicker from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import { addDays, differenceInDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/index.css"

export const PetsSpace = () => {
  const currentDate = new Date();
  const [checkInDate, setCheckInDate] = useState(currentDate);
  const [checkOutDate, setCheckOutDate] = useState(addDays(currentDate, 3));
  const { id } = useParams();
  


  const hotel = locals.find((hotel) => {
    return hotel.id === parseInt(id)
  })

  const passDays = differenceInDays(checkOutDate, checkInDate);

  const dayPrice = () => {
    return (hotel.price * passDays)

  }

  const renderDescription = () => {
    if (!hotel.description) return null;
    const lines = hotel.description.split('\n');

    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <section>
      <Navigations />
      <div className="container mx-auto min-h-800px mb-14 mt-8">
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-2xl font-semibold font-sans'>{hotel.name}</h2>
            <h3 className='text-lg mb-5 font-normal font-sans'>{hotel.local}</h3>
          </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <div className='bg-blue-500 text-white capitalize px-3 rounded-full font-sans'>{hotel.type}</div>
            <div className='bg-orange-400 text-white capitalize px-3 rounded-full font-sans'>{hotel.state}</div>
          </div>
          <div className='text-2xl font-semibold text-blue-500 font-sans'>R$ {hotel.price} dia</div>
        </div>
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[768px]'>
            <div className='mb-8 w-full h-auto'>
              <img className="w-full h-auto" src={Logo} alt='' />
            </div>
            <div>
              <div className='flex justify-center lg:items-center space-x-12'>
                <div>
                  <PiVan className='text-3xl mr-2' />
                  <MdOutlineCheck className='text-3xl bg-green-500 rounded p-1' />
                </div>
                <div >
                  <PiBowlFood className='text-3xl mr-2' />
                  <MdOutlineCheck className='text-3xl bg-green-500 rounded p-1' />
                </div>
              </div>
              <div className='font-sans mt-10'>{renderDescription()}</div>
            </div>
          </div>
          <div className='flex-1 bg-white w-full rounded mb-8'>
            <div className='flex justify-center b mx-auto mb-5 mt-5'>
              <div className='mr-4'>
                <ReactDatePicker className='border border-gray-300 focus:border-blue-500 text-center outline-none rounded w-full px-4 h-14 font-sans ' locale={ptBR} selected={checkInDate} onChange={setCheckInDate} dateFormat="dd/MM/yyyy" minDate={currentDate} placeholderText='CheckIn' />

              </div>
              <div className=''>
                <ReactDatePicker className='border border-gray-300 focus:border-blue-500 text-center outline-none rounded w-full px-4 h-14 font-sans' locale={ptBR} selected={checkOutDate} onChange={setCheckOutDate} dateFormat="dd/MM/yyyy" minDate={currentDate} placeholderText='CheckOut'/>
              </div>
            </div>
            <div className='flex justify-center'>
              <div>R${hotel.price} x {passDays} dias </div>
              <div>R${dayPrice()}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PetsSpace;