import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {MdOutlineSettings} from 'react-icons/md'
import {RiStockLine} from 'react-icons/ri'
import {AiOutlineCalendar} from 'react-icons/ai'
import {HiOutlineUsers} from 'react-icons/hi'

import Std_Master from '../Master/Std_Master';
import Gasell_smartcash from "../Gfx/Gasell_smartcash.png";
import UC_dark from "../Gfx/UC_dark.png";
import Brinto_gradient from "../Gfx/Brinto_gradient.png";
import Start_bild from "../Gfx/Start_bild.png"
import bild_1 from "../Gfx/bild_1.png"
import Brinto_1 from "../Gfx/Brinto_1.png"
import bild_enox from "../Gfx/bild_enox.png"
import Group_22 from "../Gfx/Group_22.png"
import Group_23 from "../Gfx/Group_23.png"
import Group_24 from "../Gfx/Group_24.png"
import Group_25 from "../Gfx/Group_25.png"

import kund_1 from "../Gfx/kund_1.jpeg"
import kund_2 from "../Gfx/kund_2.jpeg"
import kund_3 from "../Gfx/kund_3.jpeg"
import kund_4 from "../Gfx/kund_4.png"
import kund_5 from "../Gfx/kund_5.png"
import kund_6 from "../Gfx/kund_6.jpeg"
import kund_7 from "../Gfx/kund_7.jpeg"
import kund_8 from "../Gfx/kund_8.png"
import kund_9 from "../Gfx/kund_9.webp"
import kund_10 from "../Gfx/kund_10.jpg"
import kund_11 from "../Gfx/kund_11.png"
import kund_12 from "../Gfx/kund_12.png"
import kund_13 from "../Gfx/kund_13.jpg"
import bild_100 from "../Gfx/bild_100.jpg"
import bild_101 from "../Gfx/bild_101.png"
import bild_102 from "../Gfx/bild_102.png"
import bild_103 from "../Gfx/bild_103.png"
import bild_104 from "../Gfx/bild_104.png"
import Grocery from "../Gfx/Grocery.png"
import test_100 from "../Gfx/test_100.png"
import test_101 from "../Gfx/test_101.png"

import bild_111 from "../Gfx/bild_111.png"
import bild_222 from "../Gfx/bild_222.png"
import bild_333 from "../Gfx/bild_333.png"

import Card from '../Components/Card';
import Desc from '../Components/Desc';
import Home_card from '../Components/Home_card';
import InfoCard from '../Components/InfoCard';
import Kontakt_card from '../Components/Kontakt_card';
import { MdSentimentVerySatisfied } from "react-icons/md";

import Loading from "../Gfx/Loading.gif";

export default function Home() {

  const [count, setCount] = useState(0);
  const [transactionCount, setTransactionCount] = useState(950000);
  const [get_x, setGet_x] = useState(0)

  function ActiveCustomer(){
    var initialDate = new Date(2007, 10, 4);
    var now = Date.now();
    var difference = now - initialDate;
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    var daysSince = Math.floor(difference / millisecondsPerDay);


    var timesRun = 0;
    var interval = setInterval(function(){
        timesRun += 7;
        if(timesRun >= daysSince){
            clearInterval(interval);
        }else if(timesRun > 10000){ // to stop the infinite loop in case we have a bug
          clearInterval(interval);
        }
        setCount(timesRun)
        //do whatever here..
    }, ); 
  }

  function Transition(){
    var initialDate = new Date(-700, 10, 4);
    var now = Date.now();
    var difference = now - initialDate;
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    var daysSince = Math.floor(difference / millisecondsPerDay);


    var timesRun = 0;
    var interval = setInterval(function(){
        timesRun += 1822;
        if(timesRun >= daysSince){
            clearInterval(interval);
        }else if(timesRun > 1100000){ // to stop the infinite loop in case we have a bug
          clearInterval(interval);
        }
        setTransactionCount(timesRun)
        //do whatever here..
    }, ); 
  }

  useEffect(() => {
    ActiveCustomer();
    Transition();
  },[]);

  return(
    <Std_Master Title="Smarta Betallösningar" img={test_101} inner={
    <div>
      <div className=" xl:block hidden absolute 2xl:top-[570px] 2xl:left-[1120px] xl:top-[580px] xl:left-[660px] big_screen:left-[2160px] big_screen:top-[760px] bg-no-repeat bg-cover w-[500px] h-[200px] text-bold text-[28px] font-lato ">
      
      
        <div className="grid grid-cols-3 w-[750px] big_screen:w-[800px]">
          <div className="col-span-1 border-r border-l font-lato text-gray-700">
            {/* <div className="flex justify-center items-center text-center"> <MdSentimentVerySatisfied /></div> */}
            <div className="flex justify-center items-center text-center text-[20px] big_screen:text-[30px]"> Aktiva kunder</div>
            <div className="ml-[90px] text-[20px] big_screen:text-[30px] text-blue-500">{count} st</div>
          </div>
          
          <div className="col-span-1 border-r font-lato text-gray-700">
            <div className="flex justify-center items-center text-center text-[20px] big_screen:text-[30px]">Dagliga korttransktioner</div>
            <div className="ml-[80px] text-[20px] big_screen:text-[30px] text-green-500">{transactionCount} st</div>
          </div>
          
          
          <div className="col-span-1 border-r font-lato text-gray-700">
            <div className="flex justify-center items-center text-center text-[20px] big_screen:text-[30px]">Omsättning</div>
            <div className="ml-[90px] text-[20px] big_screen:text-[30px] text-[#962896]">{count} Kr</div>
          </div>
          
        </div>
      </div>
      
      {/* <div className="2xl:block hidden absolute top-[600px] left-[1000px] bg-no-repeat bg-cover w-[500px] h-[200px] text-bold text-[28px] font-lato text-[#F85DA7]" > Aktiva kunder </div>
      <div className="2xl:block hidden absolute top-[650px] left-[1060px] bg-no-repeat bg-cover w-[500px] h-[200px] text-bold text-[28px] font-lato text-[#F85DA7]" > {count} </div>
      <div className="2xl:block hidden absolute top-[585px] left-[700px] bg-no-repeat bg-cover w-[500px] h-[100px] text-bold text-[28px] font-lato border-r" >  </div>
      <div className="2xl:block hidden absolute top-[600px] left-[1230px] bg-no-repeat bg-cover w-[500px] h-[200px] text-bold text-[28px] font-lato text-[#962896]" > Aktiva kunder </div>
      <div className="2xl:block hidden absolute top-[650px] left-[1280px] bg-no-repeat bg-cover w-[500px] h-[200px] text-bold text-[28px] font-lato text-[#962896]" > {count} </div>
      <div className="2xl:block hidden absolute top-[585px] left-[940px] bg-no-repeat bg-cover w-[500px] h-[100px] text-bold text-[28px] font-lato border-r" >  </div>
      <div className="2xl:block hidden absolute top-[600px] left-[1470px] bg-no-repeat bg-cover w-[500px] h-[200px] text-bold text-[28px] font-lato" > Aktiva kunder </div>
      <div className="2xl:block hidden absolute top-[650px] left-[1520px] bg-no-repeat bg-cover w-[500px] h-[200px] text-bold text-[28px] font-lato" > {count} </div>
      <div className="2xl:block hidden absolute top-[585px] left-[840px] bg-no-repeat bg-cover w-[500px] h-[100px] text-bold text-[28px] font-lato border-r" >  </div> */}
      {/* <div className="2xl:block hidden absolute top-[550px] left-[1300px] bg-no-repeat bg-cover w-[500px] h-[200px]" style={{backgroundImage: "url(" + Gasell_smartcash + ")"}} /> */}
      {/* <div className="sm:block hidden absolute top-[350px] left-[1400px] bg-no-repeat bg-cover w-[500px] h-[400px] " style={{backgroundImage: "url(" + UC_dark + ")"}}></div> */}
      
      {/* <div className=" absolute top-[350px] left-[800px] bg-no-repeat bg-cover bg-center w-[400px] h-[400px]" style={{backgroundImage: "url(" + Start_bild + ")"}}></div> */}
      <div className='flex items-center justify-center w-full mt-8 mb-8 font-lato'>
        <div className='py-4 flex grid-cols-5 flex-wrap justify-center gap-x-6'>
          <div className='col-start-2 col-span-1 lg:relative'>
            <Link to="/restaurant-and-cafe">
              <InfoCard main_css={"md:w-[350px] md:h-[450px] w-[250px] h-[350px]"} css={"md:mt-52 mt-36"} content_css={"md:mt-48 mt-32"} check={"1"} img={bild_111} /* bild_101 */ title_2={"RESTAURANG & CAFE"} description={"Defining this explicitly"}/>
            </Link>
          </div>
          <div className='col-start-2 col-span-1 lg:relative'>
            <Link to="/beauty-and-health">
              <InfoCard main_css={"md:w-[350px] md:h-[450px] w-[250px] h-[350px]"} css={"md:mt-52 mt-36"} content_css={"md:mt-48 mt-32"} check={"1"} img={bild_222}  /*bild_104 bild_102  Group_25 */ title_2={"SKÖNHET & HÄLSA"} description={"Defining this explicitly"}/>
            </Link>
          </div>
          <div className='col-start-2 col-span-1 lg:relative'>
            <Link to="/grocery-stores">
              <InfoCard main_css={"md:w-[350px] md:h-[450px] w-[250px] h-[350px]"} css={"md:mt-52 mt-36"} content_css={"md:mt-48 mt-32"} check={"1"} img={bild_333} /* Grocery bild_103 Group_23 */ title_2={"LIVSMEDEL & KIOSK"} description={"Defining this explicitly"}/>
            </Link>
          </div>
          {/* <div className='col-start-3 col-span-1'>
            <Link to="/beauty-and-health">
              <Card img={Group_22}/>
            </Link>
          </div>
          <div className='col-start-4 col-span-1'>
            <Link to="/grocery-stores">
              <Card img={Group_21} />
            </Link>
          </div> */}
        </div>
      </div>

      <div className='h-24 md:h-44' />
      
      <div className='w-full grid-cols-8 hidden xl:grid bg-gradient-to-tr bg-[#F01E82] skew-y-12 h-[400px]'> {/* i have fixed height because i have the gif with fixed height and width */}
        <div className='col-start-2 col-span-2 xl:pt-8 flex items-center -skew-y-12'>
          <Desc />
        </div>
        {/* <div className='grid grid-cols-3'> */}
          <div className='col-span-2 flex items-center justify-center -skew-y-12 bg-contain bg-no-repeat' style={{backgroundImage: "url(" + bild_enox + ")"}}></div>
          <div className='col-span-2 items-center justify-center -skew-y-12 pt-16 font-lato'>
            <h2 class="text-lg sm:text-4xl font-extrabold tracking-tight text-white px-4" data-v-0dd2ab72=""> VAD ERBJUDER VI? </h2>
            <p class="mt-4 text-lg sm:text-lg text-white font-medium px-4" data-v-0dd2ab72=""> Smart Cash är ett väletablerat bolag i kassabranschen och erbjuder de absolut senaste funktionerna som marknaden efterfrågar. Vi strävar alltid efter att ge våra kunder en unik kundupplevelse med förstklassig service, oavsett företagsstorlek. </p>
          </div>
          {/* <div className='col-span-3 flex items-center justify-center -skew-y-12 bg-contain bg-no-repeat' style={{backgroundImage: "url(" + bild_2 + ")"}}></div> */}
          {/* <div className='col-span-2 flex items-center justify-center -skew-y-12 bg-contain bg-no-repeat ' style={{backgroundImage: "url(" + Sumup_1 + ")"}}></div> */}
        {/* </div> */}
        {/* <div className='col-start-4 col-span-2 flex items-center justify-center -skew-y-12 h-[400px]'>
          <img class="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="Get Started" />
        
        </div> */}
      </div>
      <div className='w-full lg:h-[450px] h-[250px] xl:hidden grid'>
        <div className='w-full h-full lg:w-full lg:h-[420px] bg-contain md:bg-cover bg-no-repeat rounded-t-2xl z-0 flex items-center justify-center' /* iphone_12_pro:w-[390px] iphone_12_pro:h-[390px] */
             style={{backgroundImage: "url(" + bild_enox + ")"}}/>
        <div className="z-10 absolute mt-14 lg:mt-[400px] flex justify-center w-full">
          <Desc />
        </div>
      </div>

      <div className='h-24 md:h-44' />

      <div className="lg:my-12 border-b-2">
        <h2 class="relative text-center text-lg sm:text-4xl uppercase font-extrabold text-gray-900 tracking-tight mt-44 md:mt-16 font-lato"> Några av våra kunder </h2>
        
        <div className="grid xl:grid-cols-9 sm:grid-cols-5 grid-cols-2 lg:mx-48 mx-12 my-12 sm:gap-x-12 gap-x-8 ">
          <div className="col-span-1 my-1">
            <div className="border-2 w-[110px] h-[110px] sm:w-[100px] my-2 sm:h-[100px] rounded-full bg-cover bg-center" style={{backgroundImage: "url(" + kund_1 + ")"}}/>
          </div>
          <div className="col-span-1 my-1">
            <div className="border-2 w-[110px] h-[110px] sm:w-[100px] my-2 sm:h-[100px] rounded-full bg-cover bg-center" style={{backgroundImage: "url(" + kund_2 + ")"}}/>
          </div>
          <div className="col-span-1 my-1">
            <div className="border-2 w-[110px] h-[110px] sm:w-[100px] my-2 sm:h-[100px] rounded-full bg-cover bg-center" style={{backgroundImage: "url(" + kund_3 + ")"}}/>
          </div>
          <div className="col-span-1 my-1">
            <div className="border-2 w-[110px] h-[110px] sm:w-[100px] my-2 sm:h-[100px] rounded-full bg-cover bg-center" style={{backgroundImage: "url(" + kund_4 + ")"}}/>
          </div>
          <div className="col-span-1 my-1">
            <div className="border-2 w-[110px] h-[110px] sm:w-[100px] my-2 sm:h-[100px] rounded-full bg-cover bg-center" style={{backgroundImage: "url(" + kund_5 + ")"}}/>
          </div>
          <div className="col-span-1 my-1">
            <div className="border-2 w-[110px] h-[110px] sm:w-[100px] my-2 sm:h-[100px] rounded-full bg-cover bg-center" style={{backgroundImage: "url(" + kund_6 + ")"}}/>
          </div>
          <div className="col-span-1 my-1">
            <div className="border-2 w-[110px] h-[110px] sm:w-[100px] my-2 sm:h-[100px] rounded-full bg-cover bg-center" style={{backgroundImage: "url(" + kund_7 + ")"}}/>
          </div>
          <div className="col-span-1 my-1">
            <div className="border-2 w-[110px] h-[110px] sm:w-[100px] my-2 sm:h-[100px] rounded-full bg-contain bg-no-repeat bg-center" style={{backgroundImage: "url(" + kund_8 + ")"}}/>
          </div>
          
          <div className="col-span-1 my-1">
            <div className="border-2 w-[110px] h-[110px] sm:w-[100px] my-2 sm:h-[100px] rounded-full bg-contain bg-no-repeat bg-center" style={{backgroundImage: "url(" + kund_9 + ")"}}/>
          </div>
          <div className="col-span-1 my-1">
            <div className="border-2 w-[110px] h-[110px] sm:w-[100px] my-2 sm:h-[100px] rounded-full bg-cover bg-center big_screen:ml-[850px] xl:ml-[450px] md:hidden 2xl:block" style={{backgroundImage: "url(" + kund_10 + ")"}}/>
          </div>
          <div className="col-span-1 my-1">
            <div className="border-2 w-[110px] h-[110px] sm:w-[100px] my-2 sm:h-[100px] rounded-full bg-contain bg-no-repeat bg-center big_screen:ml-[850px] xl:ml-[450px] sm:ml-[150px] md:hidden 2xl:block" style={{backgroundImage: "url(" + kund_11 + ")"}}/>
          </div>
          <div className="col-span-1 my-1">
            <div className="border-2 w-[110px] h-[110px] sm:w-[100px] my-2 sm:h-[100px] rounded-full bg-contain bg-no-repeat bg-center big_screen:ml-[850px] xl:ml-[450px] sm:ml-[150px] bg-black md:hidden 2xl:block" style={{backgroundImage: "url(" + kund_12 + ")"}}/>
          </div>
          <div className="col-span-1 my-1">
            <div className="border-2 w-[110px] h-[110px] sm:w-[100px] my-2 sm:h-[100px] rounded-full bg-cover bg-center big_screen:ml-[850px] xl:ml-[450px] sm:ml-[150px] ml-[70px] md:hidden 2xl:block" style={{backgroundImage: "url(" + kund_13 + ")"}}/>
          </div>
          
        </div>
      </div>
      {/* <div className="border-b-2 my-12">
        
        
        <div className="grid md:grid-cols-7 grid-cols-1 md:mx-48 mx-32 my-12 gap-x-24 relative justify-center">
          
          <div className="col-span-1 my-1">
            <div className="border-2 w-[160px] h-[160px] sm:w-[100px] sm:h-[100px] rounded-full bg-contain bg-no-repeat bg-center" style={{backgroundImage: "url(" + kund_9 + ")"}}/>
          </div>
          <div className="col-span-1 my-1">
            <div className="border-2 w-[160px] h-[160px] sm:w-[100px] sm:h-[100px] rounded-full bg-cover bg-center" style={{backgroundImage: "url(" + kund_10 + ")"}}/>
          </div>
          <div className="col-span-1 my-1">
            <div className="border-2 w-[160px] h-[160px] sm:w-[100px] sm:h-[100px] rounded-full bg-contain bg-no-repeat bg-center" style={{backgroundImage: "url(" + kund_11 + ")"}}/>
          </div>
          <div className="col-span-1 my-1">
            <div className="border-2 w-[160px] h-[160px] sm:w-[100px] sm:h-[100px] rounded-full bg-contain bg-no-repeat bg-center bg-black" style={{backgroundImage: "url(" + kund_12 + ")"}}/>
          </div>
          <div className="col-span-1 my-1">
            <div className="border-2 w-[160px] h-[160px] sm:w-[100px] sm:h-[100px] rounded-full bg-cover bg-center" style={{backgroundImage: "url(" + kund_13 + ")"}}/>
          </div>
          
          
        </div>
      </div> */}

      {/* <div className='relative w-full h-[800px] md:h-[1200px] grid grid-cols-4 '> */}
      <div className='lg:block hidden'>
      <div className=' grid grid-rows-3 relative w-full h-[800px] md:h-[1000px]'>
      {/* <div className='col-span-2 '>afram</div> */}
      <div className='row-span-2'>
          <div className='h-full w-full bg-contain bg-no-repeat' style={{backgroundImage: "url(" + Brinto_1 + ")"}}></div>
      </div>
      <div className=' row-span-1 flex justify-center text-center bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-500 h-[260px]'>
        <div className='grid md:grid-cols-4 grid-cols-1'>
          <div className='col-span-1'>
            <div class="relative">
              <dt>
                <div class="ml-[245px] my-6 h-12 w-12 flex items-center justify-center bg-indigo-500 rounded-md">
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                    </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium md:text-gray-50 text-gray-700 font-lato">Optimering</p>
              </dt>
              <dd class="ml-20 text-base text-gray-50 font-lato">
                <div class="mt-2 prose prose-white prose-base md:text-gray-50 text-gray-700 mx-auto">
                    <ul role="list">
                      <li>Inga dubbelbokningar</li>
                      <li>Tar emot bokningar 24/7</li>
                      <li>Kundregister, förbered dig innan din kund har anlänt</li>
                    </ul>
                </div>
              </dd>
          </div>
          </div>

    <div className='col-span-1'>
        <div class="relative">
          <dt>
            <div class="ml-[245px] my-6 h-12 w-12 flex items-center justify-center bg-indigo-500 rounded-md">
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
                </svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-50 font-lato">Statistik</p>
          </dt>
          <dd class="ml-20 text-base text-gray-50">
            <div class="mt-2 prose prose-white prose-base text-white mx-auto font-lato">
                <ul role="list">
                  <li>Inga Spåra din tillväxt med realtidsrapportering</li>
                  <li>Se dina senaste bokningar i detalj</li>
                  <li>Översikt på dina mest bokade tider så du kan planera din personal där det behövs</li>
                </ul>
            </div>
          </dd>
      </div>
    </div>
          <div className='col-span-1'>
          <div class="relative">
        <dt>
          <div class="ml-[245px] my-6 h-12 w-12 flex items-center justify-center bg-indigo-500 rounded-md">
              <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-0dd2ab72=""></path>
              </svg>
          </div>
          <p class="ml-16 text-lg leading-6 font-medium text-gray-50 font-lato" data-v-0dd2ab72="">Kalender</p>
        </dt>
        <dd class="ml-20 text-base text-gray-50" data-v-0dd2ab72="">
          <div class="mt-2 prose prose-white prose-base text-white mx-auto font-lato" data-v-0dd2ab72="">
              <ul role="list" data-v-0dd2ab72="">
                <li data-v-0dd2ab72="">Drag and Drop, flytta dina bokningar mellan dagar eller personal</li>
                <li data-v-0dd2ab72="">Möjligheter att öppna och stänga tider för specifika tider/dagar</li>
              </ul>
          </div>
        </dd>
    </div>
          </div>
          <div className='col-span-1'>
          <div class="relative" data-v-0dd2ab72="">
        <dt data-v-0dd2ab72="">
          <div class="ml-[245px] my-6 h-12 w-12 flex items-center justify-center bg-indigo-500 rounded-md" data-v-0dd2ab72="">
              <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-v-0dd2ab72="">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h 6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" data-v-0dd2ab72=""></path>
              </svg>
          </div>
          <p class="ml-16 text-lg leading-6 font-medium text-gray-50 font-lato" data-v-0dd2ab72="">Anställda (kommer inom kort)</p>
        </dt>
        <dd class="ml-20 text-base text-gray-50" data-v-0dd2ab72="">
          <div class="mt-2 prose prose-white prose-base text-white mx-auto font-lato" data-v-0dd2ab72="">
              <ul role="list" data-v-0dd2ab72="">
                <li data-v-0dd2ab72="">Löneunderlag</li>
                <li data-v-0dd2ab72="">Provision anpassat efter behandlingar och produkter</li>
                <li data-v-0dd2ab72="">Stämpel klocka</li>
              </ul>
          </div>
        </dd>
    </div>
          </div>
        </div>
          
      </div>
      </div>
      </div>




      {/* Mobile */}
    <div className='lg:hidden grid grid-cols-1'>
    <div className='col-span-1 rounded-lg mx-4 my-24 '>
          <div className='relative w-full h-full col-span-2 flex justify-center items-center flex-col' >
            <img src={Brinto_gradient} className='w-[240px] h-[240px]' />
            <button className='bg-white transition ease-in-out delay-150 hover:bg-gradient-to-r hover:from-white hover:to-indigo-500 hover:scale-110 py-2 px-12 text-lg font-medium rounded-xl mt-4' >Kom igång med brinto!</button>
          </div>
        </div>
      <div className="lg:hidden col-span-1 mx-4 my-4 h-full"> {/* lg:hidden col-span-1 shadow-lg rounded-lg mx-4 my-4 ease-in-out hover:shadow-2xl h-full */}
        <div className="flex justify-center">
          <MdOutlineSettings size={40} />
        </div>
        <div className="flex justify-center items-center text-center">
          <dd class="text-base text-gray-50">
            <p class=" text-lg leading-6 font-medium text-gray-700 my-4 font-lato">Optimering</p>
            <div class="mt-2 prose prose-white prose-base text-gray-700 mx-auto font-lato">
                <ul role="list">
                  <li>Inga dubbelbokningar</li>
                  <li>Tar emot bokningar 24/7</li>
                  <li>Kundregister, förbered dig innan din kund har anlänt</li>
                </ul>
            </div>
          </dd>
        </div>
    </div>

    <div className="lg:hidden col-span-1 mx-4 my-10 h-full"> {/* lg:hidden col-span-1 shadow-lg rounded-lg mx-4 my-8 ease-in-out hover:shadow-2xl h-full */}
      <div className="flex justify-center ">
        {/* <div className="flex justify-center my-2 h-12 w-12 bg-[#FB58A5] rounded-md"> */}
          <RiStockLine size={40} />
        {/* </div> */}
      </div>
        <div className="flex justify-center items-center text-center">
          <dd class="text-base text-gray-50">
            <p class=" text-lg leading-6 font-medium text-gray-700 my-4 font-lato">Statistik</p>
            <div class="mt-2 prose prose-white prose-base text-gray-700 mx-auto font-lato">
                <ul role="list">
                  <li>Inga Spåra din tillväxt med realtidsrapportering</li>
                  <li>Se dina senaste bokningar i detalj</li>
                  <li>Översikt på dina mest bokade tider så du kan planera din personal där det behövs</li>
                </ul>
            </div>
          </dd>
        </div>
    </div>

    <div className="lg:hidden col-span-1 mx-4 my-10 h-full"> {/* lg:hidden col-span-1 shadow-lg rounded-lg mx-4 my-10 ease-in-out hover:shadow-2xl h-full */}
      <div className="flex justify-center ">
          {/* <div className="flex justify-center my-2 h-12 w-12 bg-[#FB58A5] rounded-md"> */}
            <AiOutlineCalendar size={40} />
          {/* </div> */}
        </div>
        <div className="flex justify-center items-center text-center">
          <dd class="text-base text-gray-50">
            <p class=" text-lg leading-6 font-medium text-gray-700 my-4 font-lato">Kalender</p>
            <div class="mt-2 prose prose-white prose-base text-gray-700 mx-auto font-lato">
                <ul role="list">
                  <li data-v-0dd2ab72="">Drag and Drop, flytta dina bokningar mellan dagar eller personal</li>
                  <li data-v-0dd2ab72="">Möjligheter att öppna och stänga tider för specifika tider/dagar</li>
                </ul>
            </div>
          </dd>
        </div>
    </div>

    <div className="lg:hidden col-span-1 mx-4 my-10 h-full"> {/* lg:hidden col-span-1 shadow-lg rounded-lg mx-4 my-10 ease-in-out hover:shadow-2xl h-full */}
      <div className="flex justify-center ">
          {/* <div className="flex justify-center my-2 h-12 w-12 bg-[#FB58A5] rounded-md"> */}
            <HiOutlineUsers size={40} />
          {/* </div> */}
        </div>
        <div className="flex justify-center items-center text-center">
          <dd class="text-base text-gray-50">
            <p class=" text-lg leading-6 font-medium text-gray-700 my-4 font-lato">Anställda (kommer inom kort)</p>
            <div class="mt-2 prose prose-white prose-base text-gray-700 mx-auto font-lato">
                <ul role="list">
                  <li data-v-0dd2ab72="">Löneunderlag</li>
                  <li data-v-0dd2ab72="">Provision anpassat efter behandlingar och produkter</li>
                  <li data-v-0dd2ab72="">Stämpel klocka</li>
                </ul>
            </div>
          </dd>
        </div>
    </div>



    </div>






       {/*  <div className='absolute z-0 w-full h-[900px] md:h-[1200px] bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-500 mt-8' style={{WebkitTransform: "skewY(3deg)"}} />
        <div className='absolute z-10 py-16 lg:py-8 px-16 grid-rows-3 flex flex-col'>
          <p className='relative text-left text-lg sm:text-4xl uppercase font-bold text-white tracking-tight'>Brinto booking</p>
          <div className='w-full text-left'>
            <p class="mt-2 text-2xl font-extrabold text-purple-700 sm:text-3xl">Allt du behöver för att driva ditt företag!</p>
            
          </div>
        </div> */}
        {/* Pc */}
       {/*  <div className='absolute w-full h-full grid-cols-3 flex-col hidden md:grid'>
          <div className='w-full h-full col-span-2 flex px-24 py-32 lg:px-40 lg:py-40' >
            <dl class="mt-12 space-y-10">
   <div class="relative">
      <dt>
         <div class="absolute h-12 w-12 flex items-center justify-center bg-indigo-500 rounded-md">
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
            </svg>
         </div>
         <p class="ml-16 text-lg leading-6 font-medium text-gray-50">Optimering</p>
      </dt>
      <dd class="ml-20 text-base text-gray-50">
         <div class="mt-2 prose prose-white prose-base text-white mx-auto">
            <ul role="list">
               <li>Inga dubbelbokningar</li>
               <li>Tar emot bokningar 24/7</li>
               <li>Kundregister, förbered dig innan din kund har anlänt</li>
            </ul>
         </div>
      </dd>
   </div>
   <div class="relative">
      <dt>
         <div class="absolute h-12 w-12 flex items-center justify-center bg-indigo-500 rounded-md">
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
            </svg>
         </div>
         <p class="ml-16 text-lg leading-6 font-medium text-gray-50">Statistik</p>
      </dt>
      <dd class="ml-20 text-base text-gray-50">
         <div class="mt-2 prose prose-white prose-base text-white mx-auto">
            <ul role="list">
               <li>Inga Spåra din tillväxt med realtidsrapportering</li>
               <li>Se dina senaste bokningar i detalj</li>
               <li>Översikt på dina mest bokade tider så du kan planera din personal där det behövs</li>
            </ul>
         </div>
      </dd>
   </div>
   <div class="relative">
        <dt>
          <div class="absolute h-12 w-12 flex items-center justify-center bg-indigo-500 rounded-md">
              <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-0dd2ab72=""></path>
              </svg>
          </div>
          <p class="ml-16 text-lg leading-6 font-medium text-gray-50" data-v-0dd2ab72="">Kalender</p>
        </dt>
        <dd class="ml-20 text-base text-gray-50" data-v-0dd2ab72="">
          <div class="mt-2 prose prose-white prose-base text-white mx-auto" data-v-0dd2ab72="">
              <ul role="list" data-v-0dd2ab72="">
                <li data-v-0dd2ab72="">Drag and Drop, flytta dina bokningar mellan dagar eller personal</li>
                <li data-v-0dd2ab72="">Möjligheter att öppna och stänga tider för specifika tider/dagar</li>
              </ul>
          </div>
        </dd>
    </div>
    <div class="relative" data-v-0dd2ab72="">
        <dt data-v-0dd2ab72="">
          <div class="absolute h-12 w-12 flex items-center justify-center bg-indigo-500 rounded-md" data-v-0dd2ab72="">
              <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-v-0dd2ab72="">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h 6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" data-v-0dd2ab72=""></path>
              </svg>
          </div>
          <p class="ml-16 text-lg leading-6 font-medium text-gray-50" data-v-0dd2ab72="">Anställda (kommer inom kort)</p>
        </dt>
        <dd class="ml-20 text-base text-gray-50" data-v-0dd2ab72="">
          <div class="mt-2 prose prose-white prose-base text-white mx-auto" data-v-0dd2ab72="">
              <ul role="list" data-v-0dd2ab72="">
                <li data-v-0dd2ab72="">Löneunderlag</li>
                <li data-v-0dd2ab72="">Provision anpassat efter behandlingar pch produkter</li>
                <li data-v-0dd2ab72="">Stämpel klocka</li>
              </ul>
          </div>
        </dd>
    </div>
            </dl>
          </div>
          <div className='w-full h-full col-span-1 flex justify-center items-center flex-col' >
            <img src={Brinto_gradient} className='w-[20vw] h-[20vw]' />
            <button className='bg-white transition ease-in-out delay-150 hover:bg-gradient-to-r hover:from-white hover:to-indigo-500 hover:scale-110 py-2 px-12 text-lg font-medium rounded-xl mt-4' >Kom igång med brinto!</button>
          </div>
        </div> */}
        
      

      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:px-8'>
        {/* <Home_card /> */}
        <Kontakt_card />
      </div>

      {/* <div className='w-full h-[500px] bg-cover bg-center bg-no-repeat mt-32'
      style={{backgroundImage: 'linear-gradient(to right, rgba(217,39,121, 0.5),rgba(80,70,229, 0.5)), url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")'}} >
      </div> */}

    </div>
    } />
  );
}
