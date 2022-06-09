import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import NewCard from '../Components/NewCard'
import { FaHeart, FaRegHeart, AiOutlinePlusCircle } from 'react-icons/fa';
import { BiPlusMedical } from 'react-icons/bi';
import { getCookie , setCookie} from './CookieHandler';
import Symbol_1 from '../Gfx/Symbol_1.png'

import swal from 'sweetalert';


export default function Product_card(props) {

const [value,setValue] = useState();


function sweetalertNotification(){
    swal({
        title: "Produkt added",
        text: "Du kan kolla upp det i varukory",
        icon: "success",
        button: "Aww yiss!",
        timer: 2000
        })
        setTimeout(function(){
            //window.location.reload(1);
         }, 2000);
}

    return (
        <NewCard>
        <div>
            <div className="font-lato">
                        <div class="absolute transform bg-[#F01E82] text-center items-center pt-6 text-sm text-white font-semibold py-2 rounded-full top-[32px] w-[70px] h-[70px]">
                            {props.ribbon}
                        </div>
                <div className="relative overflow-hidden py-4 mt-4 md:grid">
                    <div class="absolute left-0 top-0 h-16 w-16">
                        {/* <div class="absolute transform -rotate-45 bg-pink-400 text-center text-sm text-white font-semibold py-2 rounded-lg left-[-34px] top-[32px] w-[170px]">
                            {props.ribbon}
                        </div> */}

                    </div>
                    {/* <div class="absolute left-0 top-0 h-16 w-16 bg-pink-400">01</div> */}
                    <div className="w-full h-full flex justify-center items-center mb-4 col-span-1 bg-cover bg-center">
                        <img className=" w-40 h-40 object-contain" src={props.img} />
                    </div>
                </div>
                <div>
                    <div className=" pt-2 flex flex-col justify-center h-full w-auto gap-y-2 bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url(" + Symbol_1 + ")"}}>
                        <h1 className="my-6 flex justify-center font-bold text-xl ">{props.title}</h1>
            
                        <p className=" text-sm" >{props.description}</p>

                        <div className="flex flex-row items-end justify-between h-12">
                        
                        <div className="">
                                {/* <p>{props.price}</p> */}
                            </div>
                            <div className="">
                                <div onClick={()=>{
                                    sweetalertNotification()
                                    console.log("knas")
                                    let customProduct = {name:props.title,price:props.price,img:props.img,count:1};
                                    if(getCookie("products").length>0){ //cookie?
                                        //yey there was a cookie :)
                                       //lets add to it
                                       let products = JSON.parse(getCookie("products"));
                       
                                       products.push(customProduct);
                       
                                       setCookie("products",JSON.stringify(products));
                                       //console.log(products.length)
                                       /* setTimeout(function(){
                                        window.location.reload(1);
                                     }, 2000); */
                                     
                                   }
                                   else{
                                        //there was no cookie :(
                                       //lets create a cookie
                                       let prod = [];
                                       prod.push(customProduct);
                                       setCookie("products",JSON.stringify(prod));
                                   }
                                   props.update();
                                }} className='text-black border-6 py-3 px-3 flex shadow-lg rounded-full cursor-pointer hover:-translate-y-1 hover:scale-110 ' to=""> <BiPlusMedical /></div>
                            </div>
                            {/* <div className="text-sm font-bold border-6 py-2 px-2 shadow-lg rounded-lg text-pink-500">
                                <p>{props.price}</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
        </NewCard>
    )
}
