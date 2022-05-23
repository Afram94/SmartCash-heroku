import React from 'react'
import NewCard from '../Components/NewCard'
import Hörnsymbol_rosa from '../Gfx/Hörnsymbol_rosa.png'
import test_7 from '../Gfx/test_7.png'
import { AiOutlineArrowRight } from "react-icons/ai";

export default function InfoCard(props) {
    return (
        <div style={{backgroundImage: "url(" + props.img + ")"}} className={"grid grid-rows-3 my-4 bg-cover bg-no-repeat w-[280px] h-[320px] md:w-[350px] md:h-[450px] shadow-lg duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 px-6 py-6 rounded-lg text-white mx-2 " + " " + (props.main_css)}>
            {/* hover:-translate-y-1 hover:scale-110 */}
        {/* <div className="grid grid-cols-3 text-black relative shadow-lg duration-500 ease-in-out hover:shadow-2xl border-6  sm:w-3/4 my-4  h-100 rounded-lg py-4"> */}
            
                <div className={"font-lato " + (props.content_css)}>
                    <div className="row-span-1 pt-12">{props.title}</div>
                        <div className="row-span-1 font-bold text-2xl">{props.title_2}
                    <p className="font-medium text-sm ">{props.description}</p>
                    </div>
                </div>
                <div className={"mt-52 row-span-3 flex justify-start h-[42px] mb-8 " + " " + (props.css) + " " + (props.check == "0" ? 'hidden' : '')}>
                      <button className="relative flex items-center bg-white  py-[12px] px-4 rounded-md w-[180px] font-bold text-[#962896] hover:bg-[#F01E82] hover:text-white text-center justify-center font-lato " >Läs mer <div className="mt-1 ml-4"> <AiOutlineArrowRight /> </div> </button>
                </div>
            
        {/* </div> */}
        </div>
    )
}
