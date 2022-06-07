import React from 'react';

import Side_Master from '../Master/Side_Master';
import Std_Master from '../Master/Std_Master';

import bild_1 from "../Gfx/bild_1.png"

import InlosenAvtal_Card from '../Components/InlosenAvtal_Card';

export default function Home() {
  return(
    <Std_Master img={bild_1} inner={
      <div>
        <div className='flex justify-center flex-row'>
          <InlosenAvtal_Card />
        </div>

        <div className='w-full flex justify-center font-lato'>
          <div className='grid-cols-2 w-full 2md:w-3/4 md:h-[22vw] 2md:h-[200px] lg:h-[450px] flex-wrap flex lg:grid flex-row mt-8 md:mt-16 my-4'>
            <div className='col-start-1 col-span-1 flex flex-col px-4 md:px-24 justify-center'>
              <h3 className='text-left text-3xl font-extrabold tracking-tight text-gray-900 xl:text-[20px]'>Ett inlösenavtal som täcker alla behov</h3>
              <p className='text-left text-md text-gray-500'>
                Med vårt inlösenavtal kan du ta emot betalningar i butik och online från världens största kortutgivare oavsett vilken bank du har. VI JOBBAR MED ALLA BANKER! Med vårt inlösenavtal kan du hantera betalningar i över 100 olika valutor, samtidigt som du alltid får betalt i din egen valuta. Smart Cash erbjuder de snabbaste utbetalningarna på marknaden. I regel sätts pengarna in redan nästa dag. Vårt inlösenavtal erbjuder säkerhet i världsklass, tillsammans med våra samarbetspartners erbjuder vi ett riskteam som hela tiden arbetar med att övervaka dina transaktioner så vi tidigt kan upptäcka bedrägerier.
              </p>
            </div>
            <div className='col-start-2 col-span-1 flex items-center justify-center flex-wrap w-full mt-5'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/2560px-Visa_2021.svg.png" className='w-52 md:w-[32vw]' />
            </div>
          </div>
        </div>

        <div className='w-full flex justify-center my-32 font-lato my-4'>
          <div className='grid-cols-2 w-full 2md:w-3/4 md:h-[22vw] 2md:h-[200px] lg:h-[450px] flex-wrap flex lg:grid flex-row mt-8 md:mt-16'>
            <div className='col-start-1 col-span-1 flex flex-col px-4 md:px-24 justify-center'>
              <h3 className='text-left text-3xl font-extrabold tracking-tight text-gray-900 xl:text-[20px]'>Ett inlösenavtal som täcker alla behov</h3>
              <p className='text-left text-md text-gray-500'>
                Vi börjar med att samla in uppgifter om dig och ditt företag. Vår kompetenta avdelning för inlösenavtal lägger upp en ansökan efter att vi mottagit alla era uppgifter.Ansökan granskas och behöver godkännas av våra samarbetspartners samt er bank Ni som kund blir tilldelad ett redovisningsnummer som vi sedan kopplar samman med er kortterminal. Nu är ni igång!
              </p>
            </div>
            <div className='col-start-2 col-span-1 flex items-center justify-center flex-wrap w-full my-2'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className='w-40 md:w-[18vw]' />
            </div>
          </div>
        </div>

      </div>
    } />
  );
}
