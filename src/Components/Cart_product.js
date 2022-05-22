import React, {useState, useEffect} from 'react'

import { spliceCookie } from '../Components/CookieHandler';

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

import { getCookie , setCookie} from './CookieHandler';

function Increment(index){
    var cookie  = JSON.parse(getCookie("products"));

    var newArr  = [];
    var toRet   = 0;
    var updateCookie = cookie.map((obj,key)=>{
        if(key == index){
            obj.count++;
            toRet = obj.count;
            String(obj.count)
        }
        newArr.push(obj);
    })
    setCookie("products", JSON.stringify(newArr));
    return toRet
}

function Decrement(index){
    var cookie  = JSON.parse(getCookie("products"));

    var newArr  = [];
    var toRet   = 0;
    var updateCookie = cookie.map((obj,key)=>{
        if(key == index){
            obj.count--;
            toRet = obj.count;
            String(obj.count)
        }
        newArr.push(obj);
    })
    setCookie("products", JSON.stringify(newArr));
    return toRet
}

export default function Cart_product(props) {
    const [count, setCount] = useState(null)

    useEffect(() => {
        setCount(props.count)
    }, []);

    return (
        <div className="grid grid-cols-2 my-2 mx-1 py-2 z-50 shadow-lg ease-in-out hover:shadow-2xl rounded-lg">
            <div className="w-[130px] h-[130px] col-span-1 bg-contain bg-center bg-no-repeat mr-[140px]" style={{backgroundImage: "url(" + props.img + ")"}} />
            <div className="col-span-1 flex flex-col">
                <div className="flex justify-center">
                    <p className="font-bold">{props.name}</p>
                </div>
                <div className="w-full my-4 py-4 px-4 bg-slate-100 shadow-md flex flex-col items-center justify-center rounded-md">
                    <div className="grid grid-cols-3 items-center text-center gap-x-4">
                        <div className={"col-span-1 bg-[#f5bad6] rounded-lg w-8 h-8 py-1 px-2 cursor-pointer hover:-translate-y-1 hover:scale-110" + (parseInt(props.price) * count <= 0 ? ' hidden' : '')} onClick={()=>{setCount(Decrement(props.id));}}> <div className="py-1"><AiOutlineMinus /> </div></div>{/* <p  className={"px-4 py-2 cursor-pointer"+ (parseInt(props.price) * count <= 0 ? ' hidden' : '')}>-</p> */}
                        <div className=""><p>{count}</p></div>
                        <div className={"col-span-1 bg-[#f5bad6] rounded-lg w-8 h-8 py-1 px-2 cursor-pointer hover:-translate-y-1 hover:scale-110" + (parseInt(props.price) * count)} onClick={()=>{setCount(Increment(props.id));}}> <div className="py-1"><AiOutlinePlus /> </div></div>
                    </div>
                </div>
                <div className="flex justify-center">
                    {/* <p className="font-bold">price:  {parseInt(props.price) * count  }</p> */}
                </div>
                <div className="flex justify-center">
                    <p onClick={()=>{spliceCookie(props.id)}} className="px-4 py-2 cursor-pointer hover:-translate-y-1 hover:scale-110" ><div className="py-1"><BsTrash /> </div></p>
                </div>
            </div>
        </div>
    )
}
