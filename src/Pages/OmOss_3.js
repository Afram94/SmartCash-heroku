import React from 'react';

import Side_Master from '../Master/Side_Master';
import Om_oss_art_1 from "../Gfx/Om_oss_art_1.svg"
import Om_oss_art_2 from "../Gfx/Om_oss_art_2.svg"
import Om_oss_art_3 from "../Gfx/Om_oss_art_3.svg"
import Om_oss_art_4 from "../Gfx/Om_oss_art_4.svg"

import Kontakt_card from '../Components/Kontakt_card';

export default function Home() {
  return(
    <Side_Master inner={
      <div className='bg-[#fff6ff] lg:relative w-full flex-wrap grid place-items-center'>

        <div className='grid-cols-2 flex-wrap px-4 md:w-3/4 flex justify-center my-4'>
          <div className='grid-rows-2 h-full flex-col items-center col-start-1 col-span-1'>
            <div className='row-start-1 row-span-1'>
              <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl font-lato">OM OSS</p>
            </div>
            <div className='row-start-2 row-span-1'>
              <p class="max-w-xl ml-2 mt-5 mx-auto text-xl text-gray-500 font-lato">Ettasympatiskt och kompetent gäng som sätter service till kunden före allt.</p>
            </div>
          </div>

          {/* <div className='h-full flex items-center justify-center col-start-2 col-span-1'>
            <img src={Om_oss_art_1} className='w-[400px]' />
          </div> */}

        </div>

        <div className='grid-cols-2 flex-wrap px-4 md:w-3/4 flex justify-center my-24'>
          <div className='grid-rows-2 h-full flex-col items-center col-start-1 col-span-1'>
            <div className='row-start-1 row-span-1'>
              <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl font-lato">Bakgrund</p>
            </div>
            <div className='row-start-2 row-span-1'>
              <p class="max-w-xl ml-2 mt-5 mx-auto text-xl text-gray-500 font-lato">Smart Cash grundades 2010 och är idag ett väletablerat bolag inom kassabranschen. Vi har genom åren byggt upp en gedigen kompetens för att tillgodose behovet av ett säkert och tillförlitligt betalsystem åt våra kunder.</p>
            </div>
          </div>
        </div>

        <div className='grid-cols-2 flex-wrap px-4 md:w-3/4 flex justify-center my-4 mt-12'>
          {/* <div className='h-full flex items-center justify-center col-start-2 col-span-1'>
            <img src={Om_oss_art_2} className='w-[400px]' />
          </div> */}

          <div className='grid-rows-2 h-full flex-col items-center col-start-1 col-span-1'>
            <div className='row-start-1 row-span-1'>
              <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl font-lato">Affärside</p>
            </div>
            <div className='row-start-2 row-span-1'>
              <p class="max-w-xl ml-2 mt-5 mx-auto text-xl text-gray-500 font-lato">Smart Cash vill erbjuda en unik kundupplevelse med förstklassig service och en trygghet för alla våra kunder oavsett om ni är en stor organisation eller ägare av en liten butik. Vår strävan är att erbjuda de absolut senaste funktionerna som marknaden efterfrågar och på ett effektivt sätt sänka våra kunders kostnader på deras betaltjänster. Vi tror på att underlätta för våra kunder genom att samla alla kostnader på och samma faktura för varje tjänst man behöver för ett komplett betalsystem, där av smidighet hela vägen från beställning till användandet av våra tjänster.</p>
            </div>
          </div>
        </div>

        <div className='grid-cols-2 flex-wrap px-4 md:w-3/4 flex justify-center my-4 mt-12'>
          <div className='grid-rows-2 h-full flex-col items-center col-start-1 col-span-1'>
            <div className='row-start-1 row-span-1'>
              <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl">Mål/Vision</p>
            </div>
            <div className='row-start-2 row-span-1'>
              <p class="max-w-xl ml-2 mt-5 mx-auto text-xl text-gray-500">Kunden i fokus är en regel för oss. Vi jobbar alltid med långsiktiga relationer och alla våra kunder ska känna sig prioriterade. Till skillnad mot många av våra konkurrenter så är vi tillgängliga på ett helt annat sätt än vad våra kunders branscher är vana med och den linjen har vi tänkt att fortsätta på.</p>
            </div>
          </div>

          {/* <div className='h-full flex items-center justify-center col-start-2 col-span-1'>
            <img src={Om_oss_art_3} className='w-[400px]' />
          </div> */}
        </div>

        <div className='grid-cols-2 flex-wrap px-4 md:w-3/4 flex justify-center my-4 mt-12'>
          {/* <div className='h-full flex items-center justify-center col-start-2 col-span-1'>
            <img src={Om_oss_art_4} className='w-[400px]' />
          </div> */}

          <div className='grid-rows-2 h-full flex-col items-center col-start-1 col-span-1'>
            <div className='row-start-1 row-span-1'>
              <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl">Vår kompetens</p>
            </div>
            <div className='row-start-2 row-span-1'>
              <p class="max-w-xl ml-2 mt-5 mx-auto text-xl text-gray-500">Vi håller utbildningar med alla serviceteknikers kontinuerligt för att hålla dom uppdaterade inom nya lagar samt regler som tillkommer varje år. Vi består idag av ett team på 6st säljare samt 7st serviceteknikers. Hos oss utlovas en säkerhet för våra kunder!</p>
            </div>
          </div>
        </div>

        <div className='flex-wrap px-4 md:w-3/4 flex justify-center my-24'>
          <div className='grid-rows-2 h-full flex-col items-center'>
            <div className='row-start-1 row-span-1'>
              <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl">Vi lyssnar på våra kunder</p>
            </div>
            <div className='row-start-2 row-span-1'>
              <p class="ml-2 mt-5 mx-auto text-xl text-gray-500">Vi är inte omöjliga! När våra kunder har önskemål på funktioner så lyssnar vi och tar till oss det och i mån av tid så brukar vi framställa dom inom 1-3 månader. Vårt kassasystem är idag anpassat mot verksamheter som Restaurang Bar & Nattklubb, Livsmedelsbutiker & Kiosker, Skönhetssalonger & Frisörer, Kemtvättar, Servicebutiker och Klädbutiker men klarar självklart av andra verksamheter, så tveka inte på att höra av er för att få en professionell rådgivning över vad just du/ni behöver.</p>
            </div>
          </div>
        </div>

        <div className='md:w-full 2xl:w-3/5'>
          <Kontakt_card />
          <div className='h-32' />
        </div>

      </div>
    } />
  );
}
