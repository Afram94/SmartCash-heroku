import React from 'react'
import { Link } from 'react-router-dom';
import Std_Master from '../../Master/Std_Master'
import Enox_1 from '../../Gfx/Enox_1.jpeg'
import Mac from '../../Gfx/Mac.png'
import undraw_1 from '../../Gfx/undraw_1.png'
import undraw_2 from '../../Gfx/undraw_2.png'
import undraw_3 from '../../Gfx/undraw_3.png'
import kort_terminal from '../../Gfx/kort_terminal.png'
import Enox_SmartCash from '../../Gfx/Enox_SmartCash.gif'
import undraw_4 from '../../Gfx/undraw_4.png'
import Enox_SmartCash_1 from '../../Gfx/Enox_SmartCash_1.gif'
import group_8 from '../../Gfx/group_8.png'
import Sigill_rosa from '../../Gfx/Sigill_rosa.png'
import bg_kontakt_card from '../../Gfx/bg_kontakt_card.png'
import Group_16 from "../../Gfx/Group_16.png"
import EnoxSmartCash_12 from "../../Gfx/EnoxSmartCash_12.png"
import Enox_SmartCash_2 from "../../Gfx/Enox_SmartCash_2.png"
import kort_terminal_1 from '../../Gfx/kort_terminal_1.png'
import test_50 from "../../Gfx/test_50.png"
import test_51 from "../../Gfx/test_51.png"
import test_54 from "../../Gfx/test_54.png"
import test_53 from "../../Gfx/test_53.png"
import bild_1 from '../../Gfx/bild_1.png'
import icon_img from '../../Gfx/icon_img.png'

import NewCard from '../../Components/NewCard'
import { FcOk } from "react-icons/fc";

import { useNavigate } from 'react-router-dom';
/* import Fade from 'react-reveal/Fade'; */



export default function RestaurantAndCafe() {
    const history = useNavigate();
    return (
        <Std_Master Title="RESTAURANG & CAFE" img={bild_1} inner={
            <div>
            <div className="grid gap-y-24">
                <div className="grid grid-cols-5 w-full lg:px-48 items-center border-b gap-4">
                    <div className="lg:col-span-2 col-span-5 px-2 mx-2 font-lato">
                    <p class="hidden md:block xl:text-[25px] 2xl:text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl ">Ett kassasystem skapad för<br/> Restaurang, Bar Caféverksamhet!</p>
                            <p class="block md:hidden text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Ett kassasystem skapad för Restaurang, Bar Caféverksamhet!</p>
                            <div className="md:w-full mt-4">
                                <h2 class="font-medium text-gray-500">
                                    Med vårt kassasystem Enox kan du räkna med en stor effektivisering i användandet av ditt nya kassasystem. <br/>
                                    Med Enox kassasystem kan du enkelt använda bordskartan för att spara bordsbeställningar, dela era notor och bonga beställningar till köket.
                                    Här erbjuds en kassa som verkligen underlättar din försäljning. Boka tid för en demo helt kostnadsfritt.
                                </h2>

                                <div className="flex justify-end w-full py-8 relative">
                                {/* <button type="button" className="" onClick={() => history(-1)} >he</button> */}
                                <Link to="/kontakt" className='flex justify-center bg-gradient-to-tr bg-[#F01E82] text-white py-[6px] px-4 rounded-md w-[180px]'> Boka demo </Link>
                            </div>
            
                            </div>
                    </div>
                    <div className="lg:col-span-3 col-span-5 ">
                        <div className="col-span-1 md:h-[600px] xl:h-[500px] 2xl:h-[600px] h-[300px] bg-cover bg-no-repeat" style={{backgroundImage: "url(" + Enox_SmartCash_2 + ")"}}></div>
                    </div>
                    </div>

                <div className="grid grid-cols-3 pt-12 ">
                
                {/* <div className="col-span-1 h-[600px] bg-contain bg-no-repeat" style={{backgroundImage: "url(" + Enox_SmartCash_1 + ")"}}></div> */}
                
                    <div className="col-span-6 h-[100px] font-bold flex justify-center py-8 text-3xl font-lato mb-12">En del av våra funktioner</div>
                    <div className="col-span-3"> 
                        <div className=" flex justify-center mx-2 rounded-lg">
                            <div className="grid md:grid-cols-6 grid-cols-1 lg:grid-cols-3 ">
                                <div className="lg:col-span-1 md:col-span-3 ">
                                    <div className="grid grid-cols-8 my-4 md:ml-8">
                                        {/* <div className="row-span-1 text-[30px] mx-4 font-bold">Register for Sessions</div> */}
                                        {/* <div className="col-span-1 w-[30px] mt-[110px] h-[160px] flex justify-center items-center text-center"></div> */}
                                        <div className="col-span-7 text-gray-500 ">
                                        <div className="my-4 text-black mx-4 flex justify-center text-[30px] font-lato">Virtual event</div>
                                        <div className="mt-12">
                                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                                <div className="mt-[3px] pr-1"><div className="bg-black w-[6px] h-[6px] mt-1 mr-2 rounded-full"></div></div> Lagerhantering
                                            </p>
                                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                                <div className="mt-[3px] pr-1"><div className="bg-black w-[6px] h-[6px] mt-1 mr-2 rounded-full"></div></div> Ordersystem med nummer (via skärm eller pappersformat)
                                            </p>
                                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                                <div className="mt-[3px] pr-1"><div className="bg-black w-[6px] h-[6px] mt-1 mr-2 rounded-full"></div></div> Pucksystem där du kan ange pucknummer som skrivs ut på kvittot
                                            </p>
                                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                                <div className="mt-[3px] pr-1"><div className="bg-black w-[6px] h-[6px] mt-1 mr-2 rounded-full"></div></div> Samla bongar för att skicka ordrar tillsammans
                                            </p>
                                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                                <div className="mt-[3px] pr-1"><div className="bg-black w-[6px] h-[6px] mt-1 mr-2 rounded-full"></div></div> Bokningskalender med e-post bekräftelse
                                            </p>
                                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                                <div className="mt-[3px] pr-1"><div className="bg-black w-[6px] h-[6px] mt-1 mr-2 rounded-full"></div></div> Presentkort/Rabattkort & Lunchkort (pappersform eller plastkort)
                                            </p>
                                            </div>
                                        </div>
                                        <div className="col-span-1 md:border-r lg:border-r w-[30px] mt-[110px] h-[160px] flex justify-center items-center text-center"></div>
                                    </div>
                                </div>
                                <div className="lg:col-span-1 md:col-span-3">
                                    <div className="grid grid-cols-8 my-4">
                                        {/* <div className="row-span-1 text-indigo-500 font-bold text-[18px] mx-4">Virtual event</div>
                                        <div className="row-span-1 text-[30px] mx-4 font-bold">Register for Sessions</div> */}
                                        
                                        <div className="col-span-7 text-gray-500">
                                            
                                                <div className="my-4 text-black mx-4 flex justify-center text-[30px] font-lato">Virtual event</div>
                                            <div className="mt-12">

                                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                                <div className="mt-[3px] pr-1"><div className="bg-black w-[6px] h-[6px] mt-1 mr-2 rounded-full"></div></div> Drickshantering enligt Skatteverkets nya krav
                                            </p>
                                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                                <div className="mt-[3px] pr-1"><div className="bg-black w-[6px] h-[6px] mt-1 mr-2 rounded-full"></div></div> Kortterminal kopplad till kassan
                                            </p>
                                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                                <div className="mt-[3px] pr-1"><div className="bg-black w-[6px] h-[6px] mt-1 mr-2 rounded-full"></div></div> Kunddisplay där du kan lägga upp företagsreklam eller tillbehör för merförsäljning
                                            </p>
                                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                                <div className="mt-[3px] pr-1"><div className="bg-black w-[6px] h-[6px] mt-1 mr-2 rounded-full"></div></div> Inbyggt fakturasystem
                                            </p>
                                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                                <div className="mt-[3px] pr-1"><div className="bg-black w-[6px] h-[6px] mt-1 mr-2 rounded-full"></div></div> Backoffice
                                            </p>
                                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                                <div className="mt-[3px] pr-1"><div className="bg-black w-[6px] h-[6px] mt-1 mr-2 rounded-full"></div></div> Elektroniskt kvitto (välj att antingen mejla kvittot eller arkivera med ett knapptryck)
                                            </p>
                                            </div>
                                        </div>
                                        <div className="col-span-1 lg:border-r w-[30px] mt-[110px] h-[160px] flex justify-center items-center text-center"></div>
                                    </div>
                                </div>
                                {/* <div className="col-span-1 border-r h-[150px] w-[10px]"></div> */}
                                <div className="lg:col-span-1 md:col-span-6 flex justify-center md:ml-24 lg:ml-0" >
                                    <div className="grid grid-cols-8 my-4">
                                        {/* <div className="row-span-1 text-indigo-500 font-bold text-[18px] mx-4">Virtual event</div>
                                        <div className="row-span-1 text-[30px] mx-4 font-bold">Register for Sessions</div> */}
                                        <div className="col-span-7 text-gray-500">
                                        
                                        <div className="my-4 text-black mx-4 flex justify-center text-[30px] font-lato">Virtual event</div>
                                        <div className="mt-12">
                                            <p className=" flex mt-1 text-sm font-lato  text-gray-500">
                                                <div className="mt-[3px] pr-1"><div className="bg-black w-[6px] h-[6px] mt-1 mr-2 rounded-full"></div></div> Bordshantering
                                            </p>
                                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                                <div className="mt-[3px] pr-1"><div className="bg-black w-[6px] h-[6px] mt-1 mr-2 rounded-full"></div></div> Sökfält inbyggt i kassan för att snabbt kunna söka upp kvitton, kunder & artiklar
                                            </p>
                                            <p className="flex mt-1 text-sm font-lato text-gray-500 mr-4">
                                                <div className="mt-[3px] pr-1"><div className="bg-black w-[6px] h-[6px] mt-1 mr-2 rounded-full"></div></div> Rapporter i pdf format skickat direkt till din mejladress & er ekonomiansvarig/revisor
                                            </p>
                                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                                <div className="mt-[3px] pr-1"><div className="bg-black w-[6px] h-[6px] mt-1 mr-2 rounded-full"></div></div> Pay@Table ( öppna upp notor vid bordet och ta betalt direkt i kortterminalen)
                                            </p>
                                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                                <div className="mt-[3px] pr-1"><div className="bg-black w-[6px] h-[6px] mt-1 mr-2 rounded-full"></div></div> Artiklar kopplade till meddelanden
                                            </p>
                                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                                <div className="mt-[3px] pr-1"><div className="bg-black w-[6px] h-[6px] mt-1 mr-2 rounded-full"></div></div> Bongsystem för köket (koppla hur många bongar du vill)
                                            </p>
                                            </div>
                                        </div>
                                    <div className="col-span-1 w-[30px] mt-[110px] h-[160px] flex justify-center items-center text-center"></div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-10 pt-14 lg:px-48 gap-8">
                <div className="lg:col-span-6 md:col-span-10 col-span-1 h-[100px] font-bold flex justify-center py-8 text-3xl font-lato ">Paketer</div>
                    <div className="relative lg:col-span-2 md:col-span-5 shadow-xl rounded-lg my-2 ease-in-out hover:shadow-2xl md:w-full w-[370px] mx-2 ">
                        <img className="bg-contain bg-center bg-no-repeat" src={kort_terminal_1}/>
                        <div className=" flex justify-center">
                            <h2 className="text-4xl font-bold text-gray-700 sm:text-4xl font-lato">Kortterminal (Easy)</h2>
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

                    
                    <div className="relative lg:col-span-2 md:col-span-5 shadow-xl opacity-100 rounded-lg my-2 ease-in-out hover:shadow-2xl md:w-full w-[370px] mx-2 ">
                        <img className="bg-contain bg-center bg-no-repeat" src={kort_terminal_1}/>
                        <div className=" flex justify-center">
                            <h2 className="text-4xl font-bold text-gray-700 sm:text-4xl font-lato flex text-center">Kassa & kortterminal</h2>
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
                    

                    <div className="relative lg:col-span-2 md:col-span-5 shadow-xl rounded-lg my-2 ease-in-out hover:shadow-2xl md:w-full w-[370px] mx-2 lg:mx-2 md:mx-52 ">
                        <img className="bg-contain bg-center bg-no-repeat" src={kort_terminal_1}/>
                        <div className=" flex justify-center">
                            <h2 className="text-4xl font-bold text-gray-700 sm:text-4xl font-lato">Card 3</h2>
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
            </div>


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
