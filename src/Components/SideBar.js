import React, { useState, Component, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { slideInRight } from "react-animations"
import { StyleSheet, css } from 'aphrodite';
import {getCookie} from '../Components/CookieHandler';
import Cart_product from './Cart_product';

class CartProds extends Component {


    render() {
        let prods = [];
        var cookie = JSON.parse(getCookie("products"));

        for(let i = 0;i<cookie.length;i++){
            let obj = cookie[i];
            //console.log(cookie[i])
            //console.log(obj)
            //console.log(obj.name)
            prods.push(
                <div key={i}>
                    <Cart_product updateList={()=>{this.setState({temp:"xd"})}} name={obj.name} price={obj.price} img={obj.img} count={obj.count} id={i}/>
                </div>);
        }
    
        return <div>{prods}</div>;
    }
  }


export default function SideBar(props) {

    const [temp,setTemp] = useState("");

    const styles = StyleSheet.create({
        slideInRight: {
            animationName: slideInRight,
            animationDuration: '1s'
        }
    })

    return (
        <div className="fixed w-full h-full bg-[#00000080] z-40" >
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full h-full">
                
                <div className="h-full z-30 hidden sm:flex lg:col-span-3 md:col-span-1 col-span-1" onClick={() => {props.hide()}} />
                
                <div className={"w-full h-full overflow-auto bg-slate-100 md:px-4 md:py-4 col-span-1 " + css(styles.slideInRight)}> {/* lg:w-[385px] md:w-[315px] w-[385px] */}
                    <div className={"flex flex-col w-full h-full items-center py-4"} style={{backgroundImage: "url(" + props.img + ")"}}>
                        <div onClick={() => {props.hide()}} className="md:hidden flex ml-64 text-[#F01E82] text-[20px]">X</div>
                        <p className="text-[30px] font-sans border-b my-4 text-[#F01E82] font-lato ">Valda produkter</p>
                        <CartProds></CartProds>
                        <div className="flex justify-center py-24">
                            <button className="flex bg-[#F01E82] text-white py-[12px] px-4 rounded-md w-[250px] justify-center" > <Link to="/check-out"> Slutför </Link> <div className="mt-1 ml-4">  </div> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
