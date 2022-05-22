import React from 'react'
import { Link } from 'react-router-dom';
import Std_Master from '../../Master/Std_Master'

import Enox_mac from '../../Gfx/Enox_mac.png'
import Enox_Kassa from '../../Gfx/Enox_Kassa.png'
import Enox_ipad_iphon from '../../Gfx/Enox_ipad_iphon.png'
import Enox_SmartCash_3 from '../../Gfx/Enox_SmartCash_3.png'

import bg_kontakt_card from '../../Gfx/bg_kontakt_card.png'
import Sigill_rosa from '../../Gfx/Sigill_rosa.png'
import Group_16 from '../../Gfx/Group_16.png'
import bild_1 from '../../Gfx/bild_1.png'

import kort_terminal_1 from '../../Gfx/kort_terminal_1.png'
import test_50 from "../../Gfx/test_50.png"

import { FcOk } from "react-icons/fc";


export default function RestaurantAndCafe() {
    return (
        <Std_Master Title="Livsmedel & Kiosk" img={bild_1} inner={
            <div>
            <div className="grid gap-y-24">
            <div className="grid grid-cols-5 w-full lg:px-48 items-center border-b gap-4">
                    <div className="lg:col-span-2 col-span-5 px-2 mx-2 relative font-lato">
                    <p class="hidden md:block text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Ett kassasystem framtaget för<br/> butiker inom skönhet & salong!</p>
                            <p class="block md:hidden text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Ett kassasystem framtaget för butiker inom skönhet & salong!</p>
                            <div className="md:w-full mt-4">
                                <h2 class="font-medium text-gray-500">
                                    I vårt kassasystem har vi inte bara tänkt på alla viktiga funktioner våra kunder efterfrågar utan har även <br/>
                                    jobbat på designen av kassorna då vi anser att det behöver se snyggt och prydligt ut för att matcha er butik.
                                    Med Enox kassasystem kan du enkelt hålla koll på ditt lager samt sköta era bokningar på ett enkelt & smidigt sätt.
                                    Här kan ni erbjuda era kunder e-postbekräftelser efter varje bokning. För att få reda på exakt
                                    vad du behöver så tveka inte att kontakta oss för en Demo helt kostnadsfritt.
                                </h2>

                            <div className="flex justify-end w-full py-8">
                                
                                <Link to="/kontakt" className='flex justify-center bg-gradient-to-tr from-[#F85DA7] via-[#FB58A5] to-[#F41F84] text-white py-[6px] px-4 rounded-md w-[180px]'> Boka demo </Link>
                                
                            </div>

                            </div>
                    </div>
                    <div className="lg:col-span-3 col-span-5 ">
                        <div className="col-span-1 md:h-[600px] h-[300px] bg-cover bg-no-repeat" style={{backgroundImage: "url(" + Enox_SmartCash_3 + ")"}}></div>
                    </div>
                </div>

                <div className="bg-gray-50 bg-contain bg-center"> {/* style={{backgroundImage: "url(" + bg_1 + ")"}} */}
                    <div className="grid md:grid-cols-2 grid-cols-1 lg:mx-60 py-8">
                    <div className="md:col-span-2 col-span-1 border-r border-dashed h-[100px] font-bold flex justify-center py-8 text-3xl">FUNKTIONER</div>
                        <div className="grid-cols-1 ">
                            <div className="grid grid-rows-3">
                                <div className="row-span-1 flex justify-start h-[350px] relative">
                                    <div className=" px-6 py-4">
                                        <p className=" flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2"><FcOk /></div> Bordshantering
                                        </p>
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2"><FcOk /></div> Sökfält inbyggt i kassan för att snabbt kunna söka upp kvitton, kunder & artiklar
                                        </p>
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2"><FcOk /></div> Rapporter i pdf format skickat direkt till din mejladress & er ekonomiansvarig/revisor
                                        </p>
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2"><FcOk /></div> Pay@Table ( öppna upp notor vid bordet och ta betalt direkt i kortterminalen)
                                        </p>
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2"><FcOk /></div> Artiklar kopplade till meddelanden
                                        </p>
                                        <p className="flex mt-2 text-md font-lato text-gray-500">
                                            <div className="mt-[3px] mr-2"><FcOk /></div> Bongsystem för köket (koppla hur många bongar du vill)
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
                                <div className="row-span-1 flex justify-start h-[350px] relative bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url(" + Enox_Kassa + ")"}}>
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
                    <div className="relative lg:col-span-2 md:col-span-5 shadow-xl rounded-lg my-2 ease-in-out hover:shadow-2xl md:w-full w-[370px] mx-2 ">
                        <img className="bg-contain bg-center bg-no-repeat" src={kort_terminal_1}/>
                        <div className=" flex justify-center">
                            <h2 className="text-4xl font-bold text-gray-700 sm:text-4xl font-lato">Kortterminal (Easy)</h2>
                        </div>
                        <div className=" px-6 py-4 grid grid-cols-10">
                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + test_50 + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Bordshantering</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + test_50 + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Sökfält inbyggt i kassan för att snabbt kunna söka upp kvitton, kunder & artiklar</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + test_50 + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Rapporter i pdf format skickat direkt till din mejladress & er ekonomiansvarig/revisor</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + test_50 + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Pay@Table (öppna upp notor vid bordet och ta betalt direkt i kortterminalen)</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + test_50 + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Artiklar kopplade till meddelanden</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + test_50 + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Bongsystem för köket (koppla hur många bongar du vill)</p>
                        {/* <div className=" px-6 py-4">
                            <p className=" flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + test_50 + ")"}}></div> Bordshantering
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + test_50 + ")"}}></div> Sökfält inbyggt i kassan för att snabbt kunna söka upp kvitton, kunder & artiklar
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + test_50 + ")"}}></div> Rapporter i pdf format skickat direkt till din mejladress & er ekonomiansvarig/revisor
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + test_50 + ")"}}></div> Pay@Table (öppna upp notor vid bordet och ta betalt direkt i kortterminalen)
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + test_50 + ")"}}></div> Artiklar kopplade till meddelanden
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + test_50 + ")"}}></div> Bongsystem för köket (koppla hur många bongar du vill)
                            </p> */}
                        </div>
                    </div>

                    
                    <div className="relative lg:col-span-2 md:col-span-5 shadow-xl rounded-lg my-2 ease-in-out hover:shadow-2xl md:w-full w-[370px] mx-2 ">
                        <img className="bg-contain bg-center bg-no-repeat" src={kort_terminal_1}/>
                        <div className=" flex justify-center">
                            <h2 className="text-4xl font-bold text-gray-700 sm:text-4xl font-lato flex text-center">Kassa & kortterminal</h2>
                        </div>
                        <div className=" px-6 py-4 grid grid-cols-10">
                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + test_50 + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Drickshantering enligt Skatteverkets nya krav</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + test_50 + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Kortterminal kopplad till kassan</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + test_50 + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Kunddisplay där du kan lägga upp företagsreklam eller tillbehör för merförsäljning</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + test_50 + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Inbyggt fakturasystem</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + test_50 + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Backoffice</p>
                            
                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + test_50 + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Elektroniskt kvitto (välj att antingen mejla kvittot eller arkivera med ett knapptryck)</p>

                            <div className="col-span-5 flex text-sm font-lato text-gray-500 my-4 justify-center items-center duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <Link to="/kontakt" className='flex justify-center bg-gradient-to-tr from-[#F85DA7] via-[#FB58A5] to-[#F41F84] text-white py-[6px] px-4 rounded-md w-[180px] mx-1'> Boka demo </Link>
                            </div>
                            <div className="col-span-5 flex text-sm font-lato text-gray-500 my-4 justify-center items-center duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <Link to="/kontakt" className='flex justify-center bg-gradient-to-tr from-[#F85DA7] via-[#FB58A5] to-[#F41F84] text-white py-[6px] px-4 rounded-md w-[180px] mx-1'> Få offert </Link>
                            </div>
                            {/* <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + test_50 + ")"}}></div> Drickshantering enligt Skatteverkets nya krav
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + test_50 + ")"}}></div> Kortterminal kopplad till kassan
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + test_50 + ")"}}></div> Kunddisplay där du kan lägga upp företagsreklam eller tillbehör för merförsäljning
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + test_50 + ")"}}></div> Inbyggt fakturasystem
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + test_50 + ")"}}></div> Backoffice
                            </p>
                            <p className="flex mt-1 text-sm font-lato text-gray-500">
                                <div className="bg-cover bg-no-repeat bg-center w-5 h-5 mb-[7px] pr-1 mr-1" style={{backgroundImage: "url(" + test_50 + ")"}}></div> Elektroniskt kvitto (välj att antingen mejla kvittot eller arkivera med ett knapptryck)
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
                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + test_50 + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Lagerhantering</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + test_50 + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Ordersystem med nummer (via skärm eller pappersformat)</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + test_50 + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Pucksystem där du kan ange pucknummer som skrivs ut på kvittot</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + test_50 + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Samla bongar för att skicka ordrar tillsammans</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + test_50 + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Bokningskalender med e-post bekräftelse</p>

                            <div className="col-span-1 bg-cover bg-no-repeat bg-center w-5 h-5 mt-[5px] ml-2" style={{backgroundImage: "url(" + test_50 + ")"}}></div>
                            <p className="col-span-9 flex text-sm font-lato text-gray-500 my-1">Presentkort/Rabattkort & Lunchkort (pappersform eller plastkort)</p>
                        
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

        <div className="flex justify-center items-center text-center">
            <div className="md:block hidden relative bg-gray-100 w-[800px] h-[500px] rounded-lg mt-10 bg-cover" style={{backgroundImage: "url(" + bg_kontakt_card + ")"}}>
                    <div className="">
                    <div className="bg-gray-50 w-[600px] h-[370px] mt-[100px] mx-[100px] ease-in-out hover:shadow-2xl rounded-lg py-6">
                        <div className="grid grid-cols-4" /* style={{backgroundImage: "url(" + group_8 + ")"}} */>
                        <div className="absolute top-[-40px] left-0 z-10 w-[75px] h-[75px] mt-[100px] mx-[350px] shadow-lg ease-in-out hover:shadow-2xl rounded-full py-6 bg-cover boreder-2 border-black-" style={{backgroundImage: "url(" + Sigill_rosa + ")"}}></div>
                            <div className="flex justify-center col-span-4 text-center">
                                <h2 className="flex justify-center text-gray-800 text-2xl font-bold tracking-tight mt-4 font-lato">
                                    VILL DU VETA MER? <br /> SKICKA EN FÖRFRÅGAN IDAG.
                                </h2>
                            </div>
                            <div className="flex justify-center col-span-4 pb-8">
                                <h2 className="font-medium text-gray-700 font-lato">
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
                            <div className="flex justify-center col-span-4 text-center">
                                <h2 className="flex justify-center text-gray-800 text-2xl font-bold tracking-tight mt-4 font-lato">
                                    VILL DU VETA MER? <br /> SKICKA EN FÖRFRÅGAN IDAG.
                                </h2>
                            </div>
                            <div className="flex justify-center col-span-4 pb-8">
                                <h2 className="font-medium text-gray-700 font-lato">
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


                   










            
            {/* <div class="lg:block hidden mt-10">
                <div class="relative w-[800px] h-[500px] bg-purple-400 z-0">
                    <div className="absolute top-0 left-0 z-10 bg-gray-50 w-[500px] h-[320px] mt-[100px] mx-[550px] ease-in-out hover:shadow-2xl rounded-lg py-6">
                        <div className="grid grid-cols-4">
                            <div className="flex justify-center col-span-4 text-center">
                                <h2 className="flex justify-center text-gray-800 text-3xl font-bold tracking-tight ">
                                    VILL DU VETA MER? SKICKA EN FÖRFRÅGAN IDAG.
                                </h2>
                            </div>
                            <div className="flex justify-center col-span-4 pb-4">
                                <h2 className="font-medium text-gray-700">
                                    Vi ringer up dig
                                </h2>
                            </div>
                            <div className="col-span-2 px-2 mx-2 w-full">
                                <label className="block text-sm font-medium text-gray-700 py-2"> NAMN/FÖRETAG </label>
                                <input className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2" />
                                <label className="block text-sm font-medium text-gray-700 py-2"> TELEFON </label>
                                <input className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2" />
                            </div>
                            <div className="col-span-2 px-2 mx-2">
                                <label className="block text-sm font-medium text-gray-700 py-2"> E-POST </label>
                                <input className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2" />
                                <div className="py-8">
                                    <button className="flex justify-center bg-gradient-to-tr from-[#fc61fc] to-[#ffbdff] text-white py-[8px] px-4 rounded-md w-[160px]" >Skicka</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>

            <div className="lg:hidden flex justify-center py-8 px-4">
                    <div className="bg-gray-50 w-[500px] h-[320px] ease-in-out hover:shadow-2xl rounded-lg py-6">
                        <div className="grid grid-cols-4">
                            <div className="flex justify-center col-span-4 text-center">
                                <h2 className="flex justify-center text-gray-800 lg:text-3xl text-2xl md:font-bold font-medium tracking-tight ">
                                    VILL DU VETA MER? SKICKA EN FÖRFRÅGAN IDAG.
                                </h2>
                            </div>
                            <div className="flex justify-center col-span-4 pb-4">
                                <h2 className="font-medium text-gray-700">
                                    Vi ringer up dig
                                </h2>
                            </div>
                            <div className="col-span-2 px-2 mx-2 w-full">
                                <label className="block text-sm font-medium text-gray-700 py-2"> NAMN/FÖRETAG </label>
                                <input className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2" />
                                <label className="block text-sm font-medium text-gray-700 py-2"> TELEFON </label>
                                <input className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2" />
                            </div>
                            <div className="col-span-2 px-2 mx-2">
                                <label className="block text-sm font-medium text-gray-700 py-2"> E-POST </label>
                                <input className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2" />
                                <div className="py-8">
                                    <button className="flex bg-gradient-to-tr from-[#fc61fc] to-[#ffbdff] text-white py-[8px] px-4 rounded-md w-[160px]" >Skicka</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
            </div> */}
            
        </div>
        } />
    )
}
