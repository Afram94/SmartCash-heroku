import React from 'react';

import Gasell_smartcash from "../Gfx/Gasell_smartcash.png";
import UC_dark from "../Gfx/UC_dark.png";
import Loading from "../Gfx/Loading.gif";



export default function Desc() {
  return(
    <div className='w-4/5 lg:w-full relative rounded-t-2xl shadow-md lg:shadow-none bg-white lg:bg-[#FFFFFF00] md:mt-52 mt-28 lg:mt-0 '>
      <div className=' py-6 text-left'>
        {/* <h2 class="text-lg sm:text-4xl font-extrabold tracking-tight md:text-white text-black" data-v-0dd2ab72=""> VAD ERBJUDER VI? </h2>
        <p class="mt-4 text-lg sm:text-lg md:text-white text-black font-medium" data-v-0dd2ab72=""> Smart Cash är ett väletablerat bolag i kassabranschen och erbjuder de absolut senaste funktionerna som marknaden efterfrågar. Vi strävar alltid efter att ge våra kunder en unik kundupplevelse med förstklassig service, oavsett företagsstorlek. </p> */}
        
        <div className='flex md:hidden flex-wrap w-full justify-center mt-4 '>
          {/* <img src={Gasell_smartcash} style={{height: "12vw"}} />
          <img src={UC_dark} style={{height: "12vw"}} /> */}
          
        </div>
        <div className='flex-wrap w-full justify-center mt-4 '>
        <h2 class="text-lg sm:text-4xl font-extrabold tracking-tight lg:text-white text-gray-600 px-4 text-center font-lato" data-v-0dd2ab72=""> VAD ERBJUDER VI? </h2>
        <p class="mt-4 text-lg sm:text-lg lg:text-white text-gray-600 font-medium px-4 text-center font-lato" data-v-0dd2ab72=""> Smart Cash är ett väletablerat bolag i kassabranschen och erbjuder de absolut senaste funktionerna som marknaden efterfrågar. Vi strävar alltid efter att ge våra kunder en unik kundupplevelse med förstklassig service, oavsett företagsstorlek. </p>
        {/* <h2 class="text-lg sm:text-4xl font-extrabold tracking-tight text-black" data-v-0dd2ab72=""> VAD ERBJUDER VI? </h2>
        <p class="mt-4 text-lg sm:text-lg text-black font-medium" data-v-0dd2ab72=""> Smart Cash är ett väletablerat bolag i kassabranschen och erbjuder de absolut senaste funktionerna som marknaden efterfrågar. Vi strävar alltid efter att ge våra kunder en unik kundupplevelse med förstklassig service, oavsett företagsstorlek. </p> */}
          {/* <img src={Gasell_smartcash} style={{height: "5vw"}} />
          <img src={UC_dark} style={{height: "5vw"}} /> */}
          {/* <Zoom left>
            <div className="grid grid-cols-2">
              <div className="col-span-1 flex items-center">The element ul has an implicit role of list. Defining this explicitly is redundant and should be avoided</div>
              <div className="col-span-1 bg-contain bg-no-repeat bg-center rounded-lg w-[300px] h-[300px]" style={{backgroundImage: "url(" + Loading + ")"}}></div>
            </div>
          </Zoom> */}
        </div>
      </div>
    </div>
  )
}
