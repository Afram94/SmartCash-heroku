import React from 'react'
import { Link } from 'react-router-dom';
import Std_Master from '../../Master/Std_Master'
import Enox_SmartCash_3 from '../../Gfx/Enox_SmartCash_3.png'
import Mac from '../../Gfx/Mac.png'
import bg_1 from '../../Gfx/bg_1.png'
import bg_kontakt_card from '../../Gfx/bg_kontakt_card.png'
import Sigill_rosa from '../../Gfx/Sigill_rosa.png'
import Group_16 from '../../Gfx/Group_16.png'
import personalkollen_logo_blue_1 from '../../Gfx/personalkollen_logo_blue_1.png'
import fortnox_logo_1 from '../../Gfx/fortnox_logo_1.png'
import swish_logo_1 from '../../Gfx/swish_logo_1.png'
import Enox_ipad_iphon from '../../Gfx/Enox_ipad_iphon.png'
import Group_27 from '../../Gfx/Group_27.png'
import bild_1 from '../../Gfx/bild_1.png'
import kort_terminal_1 from '../../Gfx/kort_terminal_1.png'
import test_50 from "../../Gfx/test_50.png"
import hehe2 from '../../Gfx/hehe2.png'
import hehe3 from '../../Gfx/hehe3.png'
import hehe4 from '../../Gfx/hehe4.png'
import Smart_cash_gradientBg from "../../Gfx/Smart_cash_gradientBg.svg";
import test_9 from '../../Gfx/test_9.png'
import icon_img from '../../Gfx/icon_img.png'
import functions from '../../Gfx/functions.webp'
import Enox_Kassa from "../../Gfx/Enox_Kassa.png"
import Enox_mac from "../../Gfx/Enox_mac.png"

import kiosk_1 from "../../Gfx/kiosk_1.png"

import NewCard from '../../Components/NewCard'
import { FcOk } from "react-icons/fc";

import InfoCard from "../../Components/InfoCard"


export default function RestaurantAndCafe() {
    return (
        <Std_Master Title="SKÖNHET & HÄLSA" img={kiosk_1} inner={
            <div>
            <div className="grid gap-y-24">
                <div className="grid grid-cols-5 w-full lg:px-48 items-center border-b gap-4">
                    <div className="lg:col-span-2 col-span-5 px-2 mx-2 relative font-lato">
                    <p class="hidden md:block xl:text-[25px] 2xl:text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Ett kassasystem framtaget för<br/> butiker inom skönhet & salong!</p>
                            <p class="block md:hidden text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Ett kassasystem framtaget för butiker inom skönhet & salong!</p>
                            <div className="md:w-full mt-4">
                                <h2 class="font-medium text-gray-500 text-[17px]">
                                    I vårt kassasystem har vi inte bara tänkt på alla viktiga funktioner våra kunder efterfrågar utan har även <br/>
                                    jobbat på designen av kassorna då vi anser att det behöver se snyggt och prydligt ut för att matcha er butik.
                                    Med Enox kassasystem kan du enkelt hålla koll på ditt lager samt sköta era bokningar på ett enkelt & smidigt sätt.
                                    Här kan ni erbjuda era kunder e-postbekräftelser efter varje bokning. För att få reda på exakt
                                    vad du behöver så tveka inte att kontakta oss för en Demo helt kostnadsfritt.
                                </h2>

                            <div className="flex justify-end w-full py-8">
                                
                                <Link to="/kontakt" className='flex justify-center bg-gradient-to-tr bg-[#F01E82] text-white py-[6px] px-4 rounded-md w-[180px]'> Boka demo </Link>
                                
                            </div>

                            </div>
                    </div>
                    <div className="lg:col-span-3 col-span-5 ">
                        <div className="col-span-1 md:h-[600px] xl:h-[470px] 2xl:h-[600px] h-[280px] bg-cover bg-no-repeat" style={{backgroundImage: "url(" + Enox_SmartCash_3 + ")"}}></div>
                    </div>
                </div>
                <div className="bg-gray-50 bg-contain bg-center"> {/* style={{backgroundImage: "url(" + bg_1 + ")"}} */}
                    <div className="grid md:grid-cols-2 grid-cols-1 lg:mx-60 py-8">
                    <div className="md:col-span-2 col-span-1 border-r border-dashed h-[100px] font-bold flex justify-center py-8 text-3xl font-lato">FUNKTIONER</div>
                        <div className="grid-cols-1 ">
                            <div className="grid grid-rows-3">
                                <div className="row-span-1 flex justify-start h-[350px] relative">
                                    <div className=" px-6 py-4">
                                        <p className=" flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2 "><FcOk /></div> Bordshantering
                                        </p>
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2 "><FcOk /></div> Sökfält inbyggt i kassan för att snabbt kunna söka upp kvitton, kunder & artiklar
                                        </p>
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2 "><FcOk /></div> Rapporter i pdf format skickat direkt till din mejladress & er ekonomiansvarig/revisor
                                        </p>
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2 "><FcOk /></div> Pay@Table ( öppna upp notor vid bordet och ta betalt direkt i kortterminalen)
                                        </p>
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2 "><FcOk /></div> Artiklar kopplade till meddelanden
                                        </p>
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2 "><FcOk /></div> Bongsystem för köket (koppla hur många bongar du vill)
                                        </p>
                                    </div>
                                </div>
                                <div className="row-span-1 flex justify-start h-[350px] relative bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url(" + Enox_mac + ")"}}>
                                </div>
                                <div className="row-span-1 flex justify-start h-[350px] relative">
                                    <div className=" px-6 py-4 pt-16">
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2"><FcOk /></div> Lagerhantering
                                        </p>
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2"><FcOk /></div> Ordersystem med nummer (via skärm eller pappersformat)
                                        </p>
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2"><FcOk /></div> Pucksystem där du kan ange pucknummer som skrivs ut på kvittot
                                        </p>
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2"><FcOk /></div> Samla bongar för att skicka ordrar tillsammans
                                        </p>
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2"><FcOk /></div> Bokningskalender med e-post bekräftelse
                                        </p>
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2"><FcOk /></div> Presentkort/Rabattkort & Lunchkort (pappersform eller plastkort)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-cols-1">
                            <div className="grid grid-rows-3">
                                <div className="row-span-1 flex justify-start h-[300px] mt-14 sm:mt-0 relative bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url(" + Enox_Kassa + ")"}}>
                                </div>
                                <div className="row-span-1 flex justify-start h-[350px] relative">
                                    <div className=" px-6 py-4 pt-16">
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2"><FcOk /></div> Drickshantering enligt Skatteverkets nya krav
                                        </p>
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2"><FcOk /></div> Kortterminal kopplad till kassan
                                        </p>
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2"><FcOk /></div> Kunddisplay där du kan lägga upp företagsreklam eller tillbehör för merförsäljning
                                        </p>
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2"><FcOk /></div> Inbyggt fakturasystem
                                        </p>
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2"><FcOk /></div> Backoffice
                                        </p>
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2"><FcOk /></div> Elektroniskt kvitto (välj att antingen mejla kvittot eller arkivera med ett knapptryck)
                                        </p>
                                    </div>
                                </div>
                                <div className="row-span-1 flex justify-start h-[350px] relative bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url(" + Enox_ipad_iphon + ")"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-10 pt-14 lg:px-48 gap-8">
                <div className="lg:col-span-6 md:col-span-10 col-span-1 h-[100px] font-bold flex justify-center py-8 text-3xl font-lato ">Paketer</div>
                    <div className="relative lg:col-span-2 md:col-span-5 shadow-xl rounded-lg my-2 ease-in-out hover:shadow-2xl md:w-full w-[340px] mx-2 ">
                        <img className="bg-contain bg-center bg-no-repeat" src={kort_terminal_1}/>
                        <div className=" flex justify-center">
                            <h2 className="text-3xl font-bold text-gray-700 sm:text-4xl text-center font-lato">Kortterminal (Easy)</h2>
                        </div>
                        <div className=" px-6 py-4 grid grid-cols-10">
                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + icon_img + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Bordshantering</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + icon_img + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Sökfält inbyggt i kassan för att snabbt kunna söka upp kvitton, kunder & artiklar</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + icon_img + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Rapporter i pdf format skickat direkt till din mejladress & er ekonomiansvarig/revisor</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + icon_img + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Pay@Table (öppna upp notor vid bordet och ta betalt direkt i kortterminalen)</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + icon_img + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Artiklar kopplade till meddelanden</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + icon_img + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Bongsystem för köket (koppla hur många bongar du vill)</p>

                            <div className="col-span-5 flex text-sm font-lato text-gray-500 my-4 justify-center items-center duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <Link to="/kontakt" className='flex justify-center bg-gradient-to-tr bg-[#F01E82] text-white py-[6px] px-4 rounded-md w-[180px] mx-1'> Boka demo </Link>
                            </div>
                            <div className="col-span-5 flex text-sm font-lato text-gray-500 my-4 justify-center items-center duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <Link to="/kontakt" className='flex justify-center bg-gradient-to-tr bg-[#F01E82] text-white py-[6px] px-4 rounded-md w-[180px] mx-1'> Få offert </Link>
                            </div>
                        {/* <div className=" px-6 py-4">
                            <p className=" flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + icon_img + ")"}}></div> Bordshantering
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + icon_img + ")"}}></div> Sökfält inbyggt i kassan för att snabbt kunna söka upp kvitton, kunder & artiklar
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + icon_img + ")"}}></div> Rapporter i pdf format skickat direkt till din mejladress & er ekonomiansvarig/revisor
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + icon_img + ")"}}></div> Pay@Table (öppna upp notor vid bordet och ta betalt direkt i kortterminalen)
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + icon_img + ")"}}></div> Artiklar kopplade till meddelanden
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + icon_img + ")"}}></div> Bongsystem för köket (koppla hur många bongar du vill)
                            </p> */}
                        </div>
                    </div>

                    
                    <div className="relative lg:col-span-2 md:col-span-5 shadow-xl rounded-lg my-2 ease-in-out hover:shadow-2xl md:w-full w-[340px] mx-2 ">
                        <img className="bg-contain bg-center bg-no-repeat" src={kort_terminal_1}/>
                        <div className=" flex justify-center">
                            <h2 className="text-3xl font-bold text-gray-700 sm:text-4xl font-lato flex text-center">Kassa & kortterminal</h2>
                        </div>
                        <div className=" px-6 py-4 grid grid-cols-10">
                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + icon_img + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Drickshantering enligt Skatteverkets nya krav</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + icon_img + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Kortterminal kopplad till kassan</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + icon_img + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Kunddisplay där du kan lägga upp företagsreklam eller tillbehör för merförsäljning</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + icon_img + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Inbyggt fakturasystem</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + icon_img + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Backoffice</p>
                            
                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + icon_img + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Elektroniskt kvitto (välj att antingen mejla kvittot eller arkivera med ett knapptryck)</p>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1"></p>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1"></p>

                            <div className="col-span-5 flex text-sm font-lato text-gray-500 my-4 justify-center items-center duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <Link to="/kontakt" className='flex justify-center bg-gradient-to-tr bg-[#F01E82] text-white py-[6px] px-4 rounded-md w-[180px] mx-1'> Boka demo </Link>
                            </div>
                            <div className="col-span-5 flex text-sm font-lato text-gray-500 my-4 justify-center items-center duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <Link to="/kontakt" className='flex justify-center bg-gradient-to-tr bg-[#F01E82] text-white py-[6px] px-4 rounded-md w-[180px] mx-1'> Få offert </Link>
                            </div>
                            {/* <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + icon_img + ")"}}></div> Drickshantering enligt Skatteverkets nya krav
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + icon_img + ")"}}></div> Kortterminal kopplad till kassan
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + icon_img + ")"}}></div> Kunddisplay där du kan lägga upp företagsreklam eller tillbehör för merförsäljning
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + icon_img + ")"}}></div> Inbyggt fakturasystem
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + icon_img + ")"}}></div> Backoffice
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + icon_img + ")"}}></div> Elektroniskt kvitto (välj att antingen mejla kvittot eller arkivera med ett knapptryck)
                            </p> */}
                        </div>
                    </div>
                    

                    <div className="relative lg:col-span-2 md:col-span-5 shadow-xl rounded-lg my-2 ease-in-out hover:shadow-2xl md:w-full w-[340px] mx-2 lg:mx-2 md:mx-52 ">
                        <img className="bg-contain bg-center bg-no-repeat" src={kort_terminal_1}/>
                        <div className=" flex justify-center">
                            <h2 className="text-3xl font-bold text-gray-700 sm:text-4xl font-lato">Card 3</h2>
                        </div>
                        {/* <div className=" px-6 py-4"> */}
                        <div className=" px-6 py-4 grid grid-cols-10">
                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + icon_img + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Lagerhantering</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + icon_img + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Ordersystem med nummer (via skärm eller pappersformat)</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + icon_img + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Pucksystem där du kan ange pucknummer som skrivs ut på kvittot</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + icon_img + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Samla bongar för att skicka ordrar tillsammans</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + icon_img + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Bokningskalender med e-post bekräftelse</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + icon_img + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Presentkort/Rabattkort & Lunchkort (pappersform eller plastkort)</p>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1"></p>

                            <div className="col-span-5 flex text-sm font-lato text-gray-500 my-4 justify-center items-center duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <Link to="/kontakt" className='flex justify-center bg-gradient-to-tr bg-[#F01E82] text-white py-[6px] px-4 rounded-md w-[180px] mx-1'> Boka demo </Link>
                            </div>
                            <div className="col-span-5 flex text-sm font-lato text-gray-500 my-4 justify-center items-center duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <Link to="/kontakt" className='flex justify-center bg-gradient-to-tr bg-[#F01E82] text-white py-[6px] px-4 rounded-md w-[180px] mx-1'> Få offert </Link>
                            </div>
                            {/* <p className="flex mt-1 text-sm font-lato text-gray-500"> 
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + test_50 + ")"}}></div> <div className="mt-[3px] pr-1"></div> Lagerhantering
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + test_50 + ")"}}></div> <div className="mt-[3px] pr-1"></div> Ordersystem med nummer (via skärm eller pappersformat)
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + test_50 + ")"}}></div> <div className="mt-[3px] pr-1"></div> Pucksystem där du kan ange pucknummer som skrivs ut på kvittot
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + test_50 + ")"}}></div> <div className="mt-[3px] pr-1"></div> Samla bongar för att skicka ordrar tillsammans
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + test_50 + ")"}}></div> <div className="mt-[3px] pr-1"></div> Bokningskalender med e-post bekräftelse
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-2" style={{backgroundImage: "url(" + test_50 + ")"}}></div> Presentkort/Rabattkort & Lunchkort (pappersform eller plastkort)
                            </p>   */}
                        </div>
                    </div>
                </div>
                </div>


            


            {/* <div className="relative grid md:grid-cols-2 grid-cols-1 py-16 mx-28 h-[500px] rounded-lg"> */}

                {/* <div className="col-span-1 flex justify-center mx-2 border-2 rounded-lg">
                    <div className="grid grid-cols-2 gap-x-12">
                        <div className="col-span-1 w-[370px]">
                            <div className="grid grid-rows-3 my-4 border-r">
                                <div className="row-span-1 text-[#F01E82] font-bold text-[18px] flex justify-start mx-4">Virtual event</div>
                                <div className="row-span-1 text-[30px] mx-4 font-bold">Register for Sessions</div>
                                <div className="row-span-1 text-gray-500 mx-4">Stripe Sessions—our annual conference—is back on May 24. Join us for an exploration of the future of the internet economy and a first look at new Stripe products.</div>
                            </div>
                        </div>
                        <div className="col-span-1 w-[370px]">
                        <div className="grid grid-rows-3 my-4">
                            <div className="row-span-1 text-indigo-500 font-bold text-[18px] flex justify-start mx-4">Virtual event</div>
                            <div className="row-span-1 text-[30px] mx-4 font-bold">Register for Sessions</div>
                            <div className="row-span-1 text-gray-500 mx-4">Stripe Sessions—our annual conference—is back on May 24. Join us for an exploration of the future of the internet economy and a first look at new Stripe products.</div>
                    </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-span-1 flex mx-2 bg-cover bg-center bg-no-repeat w-[550px] h-[400px] rounded-lg bg-gray-50 " style={{backgroundImage: "url(" + Smart_cash_gradientBg + ")"}}>
                    <div className="grid grid-rows-3 my-8 items-center">
                        <div className="row-span-1 text-2xl font-bold text-[80px] text-white flex justify-center">Enox</div>
                        <div className="row-span-1 flex mx-8">
                            <div className="pt-20 mr-2">
                                <div className=" border-2 w-[160px] h-[160px] sm:w-[100px] sm:h-[100px] rounded-full bg-cover bg-center duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" style={{backgroundImage: "url(" + hehe1 + ")"}}/>
                            </div>
                            <div className="pt-16 mr-2">
                                <div className="border-2 w-[160px] h-[160px] sm:w-[100px] sm:h-[100px] rounded-full bg-cover bg-center duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" style={{backgroundImage: "url(" + hehe2 + ")"}}/>
                            </div>
                            <div className="pt-12 mr-2">
                                <div className="border-2 w-[160px] h-[160px] sm:w-[100px] sm:h-[100px] rounded-full bg-cover bg-center duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" style={{backgroundImage: "url(" + hehe3 + ")"}}/>
                            </div>
                            <div className="pt-8">
                                <div className="border-2 w-[160px] h-[160px] sm:w-[100px] sm:h-[100px] rounded-full bg-cover bg-center duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" style={{backgroundImage: "url(" + hehe4 + ")"}}/>
                            </div>
                        </div>
                        <div className="row-span-1 mx-4 pt-8 font-medium text-gray-700">
                                I vårt kassasystem har vi inte bara tänkt på alla viktiga funktioner våra kunder efterfrågar utan har även <br/>
                                
                        </div>
                    </div>
                </div> */}






            {/*     <div className="md:col-span-4 col-span-1 border-r border-dashed h-[100px] font-bold flex justify-center py-8 text-3xl">Varför Enox</div>

                <div className="mx-8 flex justify-center shadow-lg my-2 ease-in-out hover:shadow-2xl lg:mx-24 md:4 text-center rounded-lg h-[300px] bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url(" + Group_28 + ")"}}>
                    <div className="grid grid-rwos-3">
                        <div className="row-span-1 py-4 text-bold font-semibold text-xl border-b">
                            Integrationer
                        </div>
                        <div className="row-span-2">
                            <div className="grid grid-cols-4 gap-x-4">
                                <div className="col-span-4 flex justify-center text-center bg-center bg-no-repeat w-[330px] h-[80px]" style={{backgroundImage: "url(" + personalkollen_logo_blue_1 + ")"}}>
                                    
                                    
                                </div>
                                    <div className="col-span-2 flex text-center bg-center bg-no-repeat w-[140px] h-[100px]" style={{backgroundImage: "url(" + fortnox_logo_1 + ")"}}></div>
                                    <div className="col-span-2 flex text-center bg-center bg-no-repeat w-[140px] h-[100px]" style={{backgroundImage: "url(" + swish_logo_1 + ")"}}></div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-8 flex justify-center shadow-lg my-2 ease-in-out hover:shadow-2xl lg:mx-24 md:4 text-center rounded-lg h-[300px] bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url(" + Group_28 + ")"}}>
                <div className="grid grid-rwos-3">
                        <div className="row-span-1 py-4 text-bold font-semibold text-xl border-b h-[60px]">
                            Tjänster
                        </div>
                        <div className="row-span-2">
                            <div className="grid grid-cols-4 gap-x-4 mx-2">
                                
                                    <div className="col-span-2 w-auto h-[60px] " >
                                        <p className="flex mt-4 text-md font-medium text-gray-500">
                                            <div className="mt-[3px]"><FcOk /></div> Fri support mån-sön
                                        </p>
                                    </div>
                                    <div className="col-span-2 w-auto h-[60px]" >
                                        <p className="flex mt-4 text-md font-medium text-gray-500">
                                            <div className="mt-[3px]"><FcOk /></div> Anmälan till skatteverket
                                        </p>
                                    </div>
                                    <div className="col-span-2 w-auto h-[60px] " >
                                        <p className="flex mt-4 text-md font-medium text-gray-500">
                                            <div className="mt-[3px]"><FcOk /></div> Utbildning
                                        </p>
                                    </div>
                                    <div className="col-span-2 w-auto h-[60px] " >
                                        <p className="flex mt-4 text-md font-medium text-gray-500">
                                            <div className="mt-[3px]"><FcOk /></div> Programmering 
                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-red-700 mx-8 flex justify-center shadow-lg my-2 ease-in-out hover:shadow-2xl lg:mx-24 md:4 text-center rounded-lg h-[200px] ">hej</div> */}
               {/*  <div className="flex justify-center">
                    <InfoCard img={test_9} css="text-[#F01E82]" check={0} main_css={"w-[300px] h-[350px]"} title_2={"hehe"} description={"* w-[280px] h-[320px] md:w-[350px] md:h-[450px] *"}/>
                </div>
                <div className="flex justify-center">
                    <InfoCard img={test_9} css="text-[#F01E82]" check={0} main_css={"w-[300px] h-[350px]"} title_2={"hehe"} description={"* w-[280px] h-[320px] md:w-[350px] md:h-[450px] *"}/>
                </div>
                <div className="flex justify-center">
                    <InfoCard img={test_9} css="text-[#F01E82]" check={0} main_css={"w-[300px] h-[350px]"} title_2={"hehe"} description={"* w-[280px] h-[320px] md:w-[350px] md:h-[450px] *"}/>
                </div> */}
            {/* </div> */}
            
        <div className="flex justify-center items-center text-center">
            <div className="md:block hidden relative bg-gray-100 w-[800px] h-[500px] rounded-lg mt-10 bg-cover" style={{backgroundImage: "url(" + bg_kontakt_card + ")"}}>
                    <div className="">
                    <div className="bg-gray-50 w-[600px] h-[370px] mt-[100px] mx-[100px] ease-in-out hover:shadow-2xl rounded-lg py-6">
                        <div className="grid grid-cols-4" /* style={{backgroundImage: "url(" + group_8 + ")"}} */>
                        <div className="absolute top-[-40px] left-0 z-10 w-[75px] h-[75px] mt-[100px] mx-[350px] shadow-lg ease-in-out hover:shadow-2xl rounded-full py-6 bg-cover boreder-2 border-black-" style={{backgroundImage: "url(" + Sigill_rosa + ")"}}></div>
                            <div className="flex justify-center col-span-4 text-center">
                                <h2 className="flex justify-center text-gray-800 text-2xl font-bold tracking-tight mt-4">
                                    VILL DU VETA MER? <br /> SKICKA EN FÖRFRÅGAN IDAG.
                                </h2>
                            </div>
                            <div className="flex justify-center col-span-4 pb-8">
                                <h2 className="font-medium text-gray-700">
                                    Vi ringer up dig
                                </h2>
                            </div>
                            <div className="col-span-2 px-2 mx-2 w-full">
                                <input placeholder="NAMN/FÖRETAG" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
                            </div>
                            <div className="col-span-2 px-2 mx-2">    
                                <input placeholder="TELEFON" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
                            </div>
                            
                            <div className="col-span-4 px-2 mx-2 py-6">
                                <input placeholder="E-POST" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
                                <div className="col-span-4 py-8 flex justify-center">
                                    <button className="flex justify-center bg-[#F01E82] text-white py-[8px] px-4 rounded-md w-[220px]" >Skicka</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>


            {/* Mobile */}
            <div className="relative md:hidden flex justify-center px-2 bg-gray-50 mx-4 mt-8 ease-in-out hover:shadow-2xl rounded-lg py-6 bg-no-repeat bg-cover" style={{backgroundImage: "url(" + Group_16 + ")"}}>
                        <div className="grid grid-cols-4" /* style={{backgroundImage: "url(" + group_8 + ")"}} */>
                        {/* <div className="absolute top-[-40px] left-0 z-10 w-[75px] h-[75px] mt-[100px] mx-[350px] shadow-lg ease-in-out hover:shadow-2xl rounded-full py-6 bg-cover boreder-2 border-black-" style={{backgroundImage: "url(" + Sigill_rosa + ")"}}></div> */}
                            <div className="flex justify-center col-span-4 text-center">
                                <h2 className="flex justify-center text-gray-800 text-2xl font-bold tracking-tight mt-4">
                                    VILL DU VETA MER? <br /> SKICKA EN FÖRFRÅGAN IDAG.
                                </h2>
                            </div>
                            <div className="flex justify-center col-span-4 pb-8">
                                <h2 className="font-medium text-gray-700">
                                    Vi ringer up dig
                                </h2>
                            </div>
                            <div className="col-span-2 px-2 mx-2 w-full">
                                {/* <label className="block text-sm font-medium text-gray-700 py-2"> NAMN/FÖRETAG </label> */}
                                <input placeholder="NAMN/FÖRETAG" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
                            </div>
                            <div className="col-span-2 px-2 mx-2">    
                                {/* <label className="block text-sm font-medium text-gray-700 py-2"> TELEFON </label> */}
                                <input placeholder="TELEFON" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
                            </div>
                            
                            <div className="col-span-4 px-2 mx-2 py-6">
                                {/* <label className="block text-sm font-medium text-gray-700 py-2"> E-POST </label> */}
                                <input placeholder="E-POST" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />

                                <div className="col-span-4 py-8 flex justify-center">
                                    <button className="flex justify-center bg-[#F01E82] text-white py-[8px] px-4 rounded-md w-[220px]" >Skicka</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
        </div>
        } />
    )
}
