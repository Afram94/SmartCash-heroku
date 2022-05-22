import React from 'react';

import Side_Master from '../Master/Side_Master';
import Std_Master from '../Master/Std_Master';
import Om_oss_art_1 from "../Gfx/Om_oss_art_1.svg"
import Om_oss_art_2 from "../Gfx/Om_oss_art_2.svg"
import Om_oss_art_3 from "../Gfx/Om_oss_art_3.svg"
import Om_oss_art_4 from "../Gfx/Om_oss_art_4.svg"

import bild_1 from "../Gfx/bild_1.png"
import Group_32 from "../Gfx/Group_32.png"
import Group_33 from "../Gfx/Group_33.png"

import Kontakt_card from '../Components/Kontakt_card';

export default function Home() {
  return(
    <Std_Master img={bild_1} inner={
        <div className="grid grid-cols-4 mx-72 h-full rounded-lg py-12 gap-x-80 bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url(" + Group_33 + ")"}}>

          <div className="col-span-4 font-lato font-bold">
            <p className="text-[65px] flex justify-center">Om Oss</p>
            <p className="text-[20px] flex justify-center text-gray-700">Ett sympatiskt och kompetent gäng som sätter service till kunden före allt.</p>
          </div>
          
          <div className="col-span-2 font-lato my-12">
            <h2 className="text-[40px] flex justify-center">Bakgrund</h2>
            <div className="flex justify-center ">
              <p className="text-[15px] text-gray-700 ">Smart Cash grundades 2010 och är idag ett väletablerat bolag inom kassabranschen. Vi har genom åren byggt upp en gedigen kompetens för att tillgodose behovet av ett säkert och tillförlitligt betalsystem åt våra kunder.</p>
            </div>
          </div>

          <div className="col-span-2 font-lato my-12">
            <h2 className="text-[40px] flex justify-center">Affärside</h2>
            <div className="flex justify-center ">
              <p className="text-[15px] text-gray-700 ">Smart Cash vill erbjuda en unik kundupplevelse med förstklassig service och en trygghet för alla våra kunder oavsett om ni är en stor organisation eller ägare av en liten butik. Vår strävan är att erbjuda de absolut senaste funktionerna som marknaden efterfrågar och på ett effektivt sätt sänka våra kunders kostnader på deras betaltjänster. Vi tror på att underlätta för våra kunder genom att samla alla kostnader på och samma faktura för varje tjänst man behöver för ett komplett betalsystem, där av smidighet hela vägen från beställning till användandet av våra tjänster.</p>
            </div>
          </div>

          <div className="col-span-2 font-lato my-12">
            <h2 className="text-[40px] flex justify-center">Mål/Vision</h2>
            <div className="flex justify-center ">
              <p className="text-[15px] text-gray-700 ">Kunden i fokus är en regel för oss. Vi jobbar alltid med långsiktiga relationer och alla våra kunder ska känna sig prioriterade. Till skillnad mot många av våra konkurrenter så är vi tillgängliga på ett helt annat sätt än vad våra kunders branscher är vana med och den linjen har vi tänkt att fortsätta på.</p>
            </div>
          </div>

          <div className="col-span-2 font-lato my-12">
            <h2 className="text-[40px] flex justify-center">Vår kompetens</h2>
            <div className="flex justify-center ">
              <p className="text-[15px] text-gray-700 ">Vi håller utbildningar med alla serviceteknikers kontinuerligt för att hålla dom uppdaterade inom nya lagar samt regler som tillkommer varje år. Vi består idag av ett team på 6st säljare samt 7st serviceteknikers. Hos oss utlovas en säkerhet för våra kunder!</p>
            </div>
          </div>

          <div className="col-span-4 font-lato my-12">
            <h2 className="text-[40px] flex justify-center">Vi lyssnar på våra kunder</h2>
            <div className="flex justify-center ">
              <p className="text-[15px] text-gray-700 text-center">Vi är inte omöjliga! När våra kunder har önskemål på funktioner så lyssnar vi och tar till oss det och i mån av tid så brukar vi framställa dom inom 1-3 månader. Vårt kassasystem är idag anpassat mot verksamheter som Restaurang Bar & Nattklubb, Livsmedelsbutiker & Kiosker, Skönhetssalonger & Frisörer, Kemtvättar, Servicebutiker och Klädbutiker men klarar självklart av andra verksamheter, så tveka inte på att höra av er för att få en professionell rådgivning över vad just du/ni behöver.</p>
            </div>
          </div>
          



            {/* <div className="col-span-3 mx-4 flex justify-center">
              <div className=''>
                <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl font-lato flex justify-center">OM OSS</p>
                <p class=" ml-2 mt-5 text-xl text-gray-500 font-lato">Ettasympatiskt och kompetent gäng som sätter service till kunden före allt.</p>
              </div>
            </div>

            <div className="col-span-2 mx-4 h-[100px]">
              <div className=''>
                  <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl font-lato">Bakgrund</p>
                  <p class="max-w-xl ml-2 mt-5 mx-auto text-xl text-gray-500 font-lato">Smart Cash grundades 2010 och är idag ett väletablerat bolag inom kassabranschen. Vi har genom åren byggt upp en gedigen kompetens för att tillgodose behovet av ett säkert och tillförlitligt betalsystem åt våra kunder.</p>
              </div>
            </div>
            <div className="col-span-1 mx-4"></div>

            <div className="col-span-1 mx-4 h-[100px]"></div>
            <div className="col-span-2 mx-4 flex justify-center">
              <div className=''>
                <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl font-lato">Affärside</p>
                <p class="max-w-xl ml-2 mt-5 mx-auto text-xl text-gray-500 font-lato">Smart Cash vill erbjuda en unik kundupplevelse med förstklassig service och en trygghet för alla våra kunder oavsett om ni är en stor organisation eller ägare av en liten butik. Vår strävan är att erbjuda de absolut senaste funktionerna som marknaden efterfrågar och på ett effektivt sätt sänka våra kunders kostnader på deras betaltjänster. Vi tror på att underlätta för våra kunder genom att samla alla kostnader på och samma faktura för varje tjänst man behöver för ett komplett betalsystem, där av smidighet hela vägen från beställning till användandet av våra tjänster.</p>
              </div>
            </div>

            <div className="col-span-2 mx-4 h-[100px]">
              <div className=''>
                  <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl font-lato">Mål/Vision</p>
                  <p class="max-w-xl ml-2 mt-5 mx-auto text-xl text-gray-500 font-lato">Kunden i fokus är en regel för oss. Vi jobbar alltid med långsiktiga relationer och alla våra kunder ska känna sig prioriterade. Till skillnad mot många av våra konkurrenter så är vi tillgängliga på ett helt annat sätt än vad våra kunders branscher är vana med och den linjen har vi tänkt att fortsätta på.</p>
              </div>
            </div>
            <div className="col-span-1 mx-4"></div>

            <div className="col-span-1 mx-4 h-[100px]"></div>
            <div className="col-span-2 mx-4 flex justify-center">
              <div className=''>
                <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl font-lato">Vår kompetens</p>
                <p class="max-w-xl ml-2 mt-5 mx-auto text-xl text-gray-500 font-lato">Vi håller utbildningar med alla serviceteknikers kontinuerligt för att hålla dom uppdaterade inom nya lagar samt regler som tillkommer varje år. Vi består idag av ett team på 6st säljare samt 7st serviceteknikers. Hos oss utlovas en säkerhet för våra kunder!</p>
              </div>
            </div>

            <div className="col-span-3 mx-4 h-[300px] mt-16">
              <div className=''>
                  <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl font-lato flex justify-center">Vi lyssnar på våra kunder</p>
                  <div className="flex justify-center">
                      <p class="ml-2 mt-5 text-xl text-gray-500 font-lato w-full flex">Vi är inte omöjliga! När våra kunder har önskemål på funktioner så lyssnar vi och tar till oss det och i mån av tid så brukar vi framställa dom inom 1-3 månader. Vårt kassasystem är idag anpassat mot verksamheter som Restaurang Bar & Nattklubb, Livsmedelsbutiker & Kiosker, Skönhetssalonger & Frisörer, Kemtvättar, Servicebutiker och Klädbutiker men klarar självklart av andra verksamheter, så tveka inte på att höra av er för att få en professionell rådgivning över vad just du/ni behöver.</p>
                  </div>
              </div>
            </div>


            <div className="col-span-3 mx-4">
              <Kontakt_card />
            </div> */}
            
          
        </div>

        
      /* 

        

       

        

        

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

      </div> */
    } />
  );
}
