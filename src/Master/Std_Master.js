import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp, IoIosClose } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdOutlineLocalDining, MdOutlineVolunteerActivism, MdAddShoppingCart } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";



/* Images */
import Smart_cash_text from "../Gfx/Smart_cash_text.svg";
import Smart_cash_gradientBg from "../Gfx/Smart_cash_gradientBg.svg";
import Gasell_smartcash from "../Gfx/Gasell_smartcash.png";
import image_9 from "../Gfx/image_9.png";
import image_10 from "../Gfx/image_10.png";
import UC_dark from "../Gfx/UC_dark.png";

import Logotyp from "../Gfx/Logotyp.png";
import Logo_Vit from "../Gfx/Logo_Vit.png";
import Sigill_ljus from "../Gfx/Sigill_ljus.png";

import bild_1 from "../Gfx/bild_1.png";
import Footer from "../Gfx/Footer.png";
import { getCookie, removeCookie } from '../Components/CookieHandler';
import Cart_product from "../Components/Cart_product";
import SideBar from "../Components/SideBar";

import { slideInDown, slideInUp, slideInRight } from "react-animations"
import { StyleSheet, css } from 'aphrodite';

import {useTransition, animated, useSpring} from 'react-spring';

export default function Std_Master(props) {
  
  const [isSm, setIsSm] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  
  return (
    <div>

      {GetSideBar()}

      {/* Navbar */}
      <div>
        {/* <div className='absolute w-full py-4 flex items-center justify-center flex-wrap'>
          <div className=' w-full xl:w-4/5 grid-cols-3 py-4 px-8 xl:px-4 hidden lg:flex justify-center items-center '>
          
            <Link to="/"><img src={Logo_Vit}  className='col-span-1 ' style={{height: "20px"}} /></Link>  */}{/* src={Logotyp} */}
          
            

          {/* {NavBar(false, () => {})}
          
            <div className=' p-2 flex backdrop-blur-lg bg-[#FFFFFF20] rounded-full flex-wrap justify-center self-end '>
              <img src={Gasell_smartcash} style={{height: "1.5vw"}} />
              <img src={UC_dark} style={{height: "1.5vw"}} />
            </div>
          
            
          </div>
          
        </div> */}

        {/* <div className="absolute w-full items-center justify-center flex-wrap">
          <div className="grid justify-center w-full col-start-1 col-end-4 grid-cols-4 bg-gray-300 bg-opacity-50 h-[80px]"> 
            <div className="col-span-1 w-full grid-cols-3 py-4 px-8 xl:px-4 hidden lg:flex justify-center items-center ">
            <Link to="/"><img src={Sigill_ljus}  className='col-span-1 mr-24' style={{height: "90px"}} /></Link>
            </div>
            <div className="flex flex-row justify-center pb-4 items-center col-start-2 col-span-3">
              <div className="grid-cols-3 hidden lg:flex ml-24 justify-center items-center h-[40px] mb-6 pt-1">
                {NavBar(false, () => {})} */}



                {/* TO DELETE */}
                {/* <div className=' p-2 flex backdrop-blur-lg bg-[#FFFFFF20] rounded-full flex-wrap justify-center self-end mb-10'> */}
                {/* <div className='backdrop-blur-lg bg-[#FFFFFF20] rounded-full flex h-[50px] px-4 pt-1'>
                  <img className='mx-2' src={image_10} style={{height: "2.0vw"}} />
                  <img src={image_9} style={{height: "2.2vw"}} />
                  </div> */}
                  {/* TO DELETE */}



              {/*   </div>
            </div>
          </div> */}



          {/* TO DELETE */}
          {/* </div> */}
          {/* <div className="col-span-1 w-full xl:w-4/5 grid-cols-3 py-4 px-8 xl:px-4 hidden lg:flex justify-center items-center">
          <div className=' p-2 flex backdrop-blur-lg bg-[#FFFFFF20] rounded-full flex-wrap justify-center self-end mb-10'>
              <img src={Gasell_smartcash} style={{height: "1.5vw"}} />
              <img src={UC_dark} style={{height: "1.5vw"}} />
            </div>
          </div> */}
          {/* TO DELETE */}


          
        {/* </div> */}

        
        <div className="absolute w-full py-4 items-center justify-center flex-wrap">
          <div className="grid justify-center w-full col-start-1 col-end-4 grid-cols-4">
            <div className="col-span-1 w-full grid-cols-3 py-4 px-8 xl:px-4 hidden lg:flex justify-center items-center ">
            <Link to="/"><img src={Sigill_ljus}  className='col-span-1 ' style={{height: "90px"}} /></Link>
            </div>
            <div className="flex flex-row justify-center pb-4 items-center col-start-2 col-span-3">
              <div className="grid-cols-3 hidden lg:flex ml-24 justify-center items-center backdrop-blur-xl rounded-lg h-[40px] pt-1">
                {NavBar(false, () => {})}
                </div>
            </div>
          </div>
        </div>

        {/* Navbar Mobile */}
        <div className='absolute w-full grid-cols-3 xl:px-4 flex lg:hidden '>
          <Link to="/"><img src={Logotyp} className='absolute my-4 mx-8 z-0' style={{height: "27px"}} /></Link>
          <div className='w-full '>
            {/* <IoIosArrowDown className='absolute right-0 my-4 mx-6 ' color='white' size={40} onClick={() => {setMobileNav(!mobileNav)}} /> */}
            
            <button className='absolute right-0 my-4 mx-6 text-white' onClick={() => {setMobileNav(!mobileNav)}} >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <div className={(!mobileNav ? "hidden" : "")}>
              {NavBar(true, () => {setMobileNav(!mobileNav)})}
            </div>
          </div>
        </div>

        {/* Page name */}
        <div className='absolute left-22 -top-5 z-0 w-full justify-center text-center text-xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold font-lato ' style={{marginTop: "12vw"}}> {/* right-[10vw] md:right-[15vw] lg:right-[150px] xl:right-[250px] */}
          {props.Title}
        </div>

        {/* <img src={Smart_cash_gradientBg} className='w-full' resizeMode="repeat"/> */}
        <div className='w-full h-[400px] bg-black bg-cover bg-no-repeat inline -skew-y-6 font-lato ' >
          <img src={props.img} className='w-full h-full' />
        </div>
      </div>
      <div>
        {props.inner}
      </div>
      <div className="relative grid grid-cols-3 border-t bg-[#280028] border-gray-200  mt-28 h-[300]">  {/* md:mx-36 */}
      <div className="lg:col-span-2 col-span-3">
          <img src={Footer} className="md:w-full md:h-[300px] object-cover" />
        </div>
        <div className="my-6 lg:col-span-1 col-span-3 px-6">
          <div className="grid grid-cols-2 font-lato">
            <div className="col-span-1">
              <h2 className="text-sm font-extrabold tracking-tight text-gray-300 uppercase">
                INFORMATION
              </h2>
              <p className="mt-1 font-medium text-sm text-gray-300">
                Boka demo
              </p>
                  <h2 className="mt-6 text-sm font-extrabold tracking-tight text-gray-300 uppercase">
                    KONTAKT
                  </h2>
                  <p className="mt-1 font-medium text-sm text-gray-300">
                    Smart Cash Sverige AB
                  </p>
                  <p className="mt-1 font-medium text-sm text-gray-300">
                    Kiselgatan 19
                  </p>
                  <p className="mt-1 font-medium text-sm text-gray-300">
                    602 23 Norrköping
                  </p>
                  <p className="mt-1 font-medium text-sm text-gray-300">
                    011-470 90 00
                  </p>
            </div>
            <div className="col-span 1 ">
                  <h2 className="text-sm font-extrabold tracking-tight text-gray-300 uppercase">
                    SUPPORT
                  </h2>
                  <p className="mt-1 font-medium text-sm text-gray-300">
                    Kassaregister och kortterminaler: 011- 470 90 00
                  </p>
                  <p className="mt-1 font-medium text-sm text-gray-300">
                    PC-Kassor: 011-18474
                  </p>
                  <p className="mt-1 font-medium text-sm text-gray-300">
                    support@smartcash.se
                  </p>
                  <div className="mt-12">
                      <button className="flex bg-[#F01E82] text-white py-[12px] px-4 rounded-md w-[160px]" > <Link to="/kontakt"> Skicka direkt </Link> <div className="mt-1 ml-4"> <AiOutlineArrowRight /> </div> </button>
                  </div>
              </div>

          </div>
        </div>
        <div className="col-span-3 bg-pink-600 text-white font-lato">
          <div className="text-center">
            <p className="text-base font-medium text-white sm:text-white xl:text-center">
                © 2021 Smart Cash Sverige AB 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GetSideBar()
{
  const [isCartOpen, setIsCartOpen] = useState(false)

  if(isCartOpen){
    return(
      <SideBar hide={()=>{setIsCartOpen(false)}} inner={getCartProds()}/>
    )
  }

  return (
    <div className="fixed w-full h-full z-0">
      <div className="cursor-pointer z-50 rounded-full absolute bottom-10 right-10 w-[50px] h-[50px] bg-white shadow-md flex items-center justify-center " onClick={()=>{setIsCartOpen(true)}}>
        <BsCart4 size={20} />
      </div>
    </div>
  )
}

function NavBar(isSm, trigger)
{
  const styles = StyleSheet.create({
    slideInUp: {
        animationName: slideInUp,
        animationDuration: '1s'
    },
    slideInDown: {
      animationName: slideInDown,
      animationDuration: '1s'
  },
  slideInRight: {
    animationName: slideInRight,
    animationDuration: '1s'
}
})
  
  const [toggle_products, setToggle_products] = useState(false)
  const [toggle_offer, setToggle_offer] = useState(false)
  const [showProductArrow, setShowProductArrow] = useState(false)
  const [showOfferAnimation, setShowOfferAnimation] = useState(false)
  const [toggle_checkout, setToggle_checkout] = useState(false)

/* const transition = useTransition(toggle_products, {
    from:{ x:-100, y:800 , opacity:0 },
    enter:{ x:0, y:-20, opacity:1 },
    leave:{ x:200, y:1200, opacity:0 },
  }); */

  /* To Delete */
  const productAnimation = useSpring({
    config: {
      duration: 250,
      rotate: true
    },
    opacity: toggle_products ? 1 : 0,
    transform: toggle_products ? `translateY(0)` : `translateY(-100)`
  })

  /* To Delete */
  const offerAnimation = useSpring({
    config: {
      duration: 250,
      rotate: true
    },
    opacity: toggle_offer ? 1 : 0,
    transform: toggle_offer ? `translateY(0)` : `translateY(-100)`
  })

 function handleClick() {
    setShowProductArrow(!showProductArrow);
}

    /* This iseEffect close the popup when we click outside of it */
      useEffect(() => {
        var specifiedProductElement = document.querySelector('.product_menu');
        var specifiedOfferElement = document.querySelector('.offer_menu');

        function handleClickOutside(event) {
          if(specifiedProductElement.contains(event.target)){
            console.log('hehe')
            setToggle_products(true);
          }
          if(specifiedOfferElement.contains(event.terget)){
            console.log('haha')
            setToggle_offer(true);
          }
          if(!specifiedProductElement.contains(event.target) && !specifiedOfferElement.contains(event.target)){
            setToggle_products(false)
            setShowProductArrow(false);
            setToggle_offer(false);
            setShowOfferAnimation(false);
          }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);


  
  return(
    
    <div className="z-10">
      <div className={'flex flex-cols px-4 col-span-1 w-full justify-center ' + (isSm ? "hidden" : "")} style={{marginRight: "7%"}}>
        {/* <Link to="/restaurant-products" className="text-white mx-8 font-bold uppercase"> Restaurang-products </Link> */}
        
        <div className="flex flex-col">
          <div className="text-white mx-3 font-bold uppercase cursor-pointer text-lg font-lato" onClick={() => {setToggle_products(!toggle_products); handleClick();}}>Produkter</div>
          
          
            {/* Product */}
            <div class={"w-16 overflow-hidden inline-block " + ((showProductArrow) ? "block ": "hidden ") + css(styles.slideInUp)} >
              <div class={"h-7 w-7 bg-white rotate-45 absolute top-[48px] left-[60px] " }></div>
            </div>
                {/* Offers */}
            <div class={"w-16 overflow-hidden inline-block " + ((showOfferAnimation) ? "block ": "hidden ") + css(styles.slideInUp)} >
              <div class={"h-7 w-7 bg-white rotate-45 absolute top-[48px] left-[200px]"}></div>
            </div>
          {/* <animated.div style={productAnimation}> */}
            <div className="absolute top-[40px] right-[-10px]">
              <div className={"product_menu flex bg-white rounded-xl shadow-md h-auto w-[940px] my-4 py-2 " + ((toggle_products) ? "block " : "hidden ") + css(styles.slideInUp)}>
                <Link to="/restaurant-products" className='text-black mx-6 font-bold uppercase flex justify-self-center font-lato'> <div className="w-6 h-6 mr-1 pt-1"> <MdOutlineLocalDining /> </div>       Restaurang & Cafe     </Link>
                <Link to="/beauty-products" className='text-black mx-6 font-bold uppercase flex justify-self-center font-lato'> <div className="w-6 h-6 mr-1 pt-1"><MdOutlineVolunteerActivism/> </div>       Skönhet & Hälsa     </Link>
                <Link to="/restaurant-products" className='text-black mx-6 font-bold uppercase flex justify-self-center font-lato'> <div className="w-6 h-6 mr-1 pt-1"><MdAddShoppingCart/> </div>      Livsmedel & Kiosk     </Link>
                <Link to="/restaurant-products" className='text-black mx-6 font-bold uppercase flex justify-self-center font-lato'> <div className="w-6 h-6 mr-1 pt-1"> <MdOutlineLocalDining /> </div>       Alla produkter     </Link>
              </div>
            </div>
          {/* </animated.div> */}
        </div>

        
        <div className="flex flex-col">
          <div className="text-white mx-3 font-bold uppercase cursor-pointer text-lg font-lato " onClick={() => {setToggle_offer(!toggle_offer); setShowOfferAnimation(!showOfferAnimation);}}>Erbjudande</div>
          {/* <animated.div style={offerAnimation}> */}
            <div className="mr-24 absolute top-[40px] right-[700px]">
              <div className={"offer_menu flex bg-white rounded-xl shadow-md h-auto w-[700px] absolute my-4 py-2 " + ((toggle_offer) ? "block " : "hidden ") + css(styles.slideInUp)}>
                <Link to="/restaurant-and-cafe" className='text-black mx-8 font-bold uppercase font-lato'>       Restaurang & Cafe    </Link>
                <Link to="/beauty-and-health" className='text-black mx-8 font-bold uppercase font-lato'>       Skönhet & Hälsa    </Link>
                <Link to="/grocery-stores" className='text-black mx-8 font-bold uppercase font-lato'>       Livsmedel & Kiosk    </Link>
              </div>
            </div>
          {/* </animated.div> */}
        </div>
        
          
      
        <Link to="/inlosenavtal" className='text-white mx-3 font-bold uppercase text-lg font-lato'>       Inlösenavtal     </Link>
        <Link to="/om_oss" className='text-white mx-3 font-bold uppercase w-20 text-lg font-lato'>      Om  oss        </Link>
        <Link to="/kontakt" className='text-white mx-3 font-bold uppercase text-lg font-lato'>       Kontakt       </Link>
        
      
      </div>

  

      {/* <div className={'w-screen bg-white absolute h-screen z-10 ' + (isSm ? "" : "hidden ") + css(styles.slideInDown)}> */}
      <div className={' md:mx-12 mx-4 my-4 rounded-lg bg-white absolute z-10 md:w-[700px] md:h-[500px] w-[360px] h-[500px] ' + (isSm ? "" : "hidden ") + css(styles.slideInDown)}>
      
        <div className={'grid-rows-5 grid px-4 row-span-1 w-full items-center self-center '} style={{marginRight: "7%"}}>
        <div className="flex flex-col w-full">
          <div className=" mx-8 font-bold uppercase cursor-pointer flex justify-start text-gray-400 mt-4">Produkter </div>
          <div className=" h-auto w-auto grid md:grid-cols-2 grid-cols-1">
            <div className="col-span-1 ml-4 md:my-2">
              <Link to="/restaurant-products" className='text-black mx-6 flex justify-self-center my-1 font-lato '> <div className="w-6 h-6 mr-1 pt-1"> <MdOutlineLocalDining /> </div>       Restaurang & Cafe     </Link>
              <Link to="/beauty-products" className='text-black mx-6 flex justify-self-center my-1 font-lato '> <div className="w-6 h-6 mr-1 pt-1"><MdOutlineVolunteerActivism/> </div>       Skönhet & Hälsa     </Link>
            </div>
            <div className="col-span-1 ml-4 md:my-2">
              <Link to="/restaurant-products" className='text-black mx-6 flex justify-self-center my-1 font-lato '> <div className="w-6 h-6 mr-1 pt-1"><MdAddShoppingCart/> </div>      Livsmedel & Kiosk     </Link>
              <Link to="/restaurant-products" className='text-black mx-6 flex justify-self-center my-1 font-lato '> <div className="w-6 h-6 mr-1 pt-1"> <MdOutlineLocalDining /> </div>       Alla produkter     </Link>
            </div>
          </div>
      </div>
      <div className="flex flex-col w-full">
          <div className=" mx-8 font-bold uppercase cursor-pointer flex justify-start text-gray-400 ">Erbjudande </div>
            <div className="ml-4 md:my-4 flex-col">
                <Link to="/restaurant-and-cafe" className='text-black mx-6 flex justify-self-center my-1 font-lato'>       Restaurang & Cafe    </Link>
                <Link to="/beauty-and-health" className='text-black mx-6 flex justify-self-center my-1 font-lato'>       Skönhet & Hälsa    </Link>
                <Link to="/grocery-stores" className='text-black mx-6 flex justify-self-center my-1 font-lato'>       Livsmedel & Kiosk    </Link>
            </div>
      </div>
      <div className="flex flex-col w-full">
          <Link to="/inlosenavtal" className='mx-8 font-bold uppercase cursor-pointer flex justify-start text-gray-700'>Inlösenavtal</Link>
          <Link to="/om_oss" className='mx-8 my-2 font-bold uppercase cursor-pointer flex justify-start text-gray-700'>Om oss</Link>
          <Link to="/kontakt" className='mx-8 font-bold uppercase cursor-pointer flex justify-start text-gray-700'>Kontakt</Link>
          <IoIosClose size={70} className='w-full justify-center' onClick={trigger} />
        </div>
      </div>
          {/* <Link to="/inlosenavtal" className='text-black text-center h-28 font-bold uppercase'>Inlösenavtal</Link>
          <Link to="/om_oss" className='text-black text-center h-28 font-bold uppercase'>Om oss</Link>
        <Link to="/kontakt" className='text-black text-center h-28 font-bold uppercase'>Kontakt</Link>
        <IoIosClose size={70} className='w-full justify-center' onClick={trigger} /> */}
        {/* <div className={'grid-rows-5 grid px-4 row-span-1 w-full justify-center items-center self-center py-14 '} style={{marginRight: "7%"}}>
        <div className="flex flex-col">
          <div className="text-black mx-8 font-bold uppercase cursor-pointer flex justify-center" onClick={() => setToggle_products(!toggle_products)}>Produkter {(toggle_products) ? <IoIosArrowUp className=' ' color='black' size={40} /> : <IoIosArrowDown className=' ' color='black' size={40} />} </div>
          <div className={" bg-white rounded-xl shadow-md h-auto w-auto " + ((toggle_products) ? "block " : "hidden ") + css(styles.slideInRight)}> 
            <Link to="/" className='text-black mx-8 uppercase flex justify-self-center py-2'>        Restaurang & Cafe     </Link>
            <Link to="/" className='text-black mx-8 uppercase flex justify-self-center py-2'>        Skönhet & Hälsa     </Link>
            <Link to="/" className='text-black mx-8 uppercase flex justify-self-center py-2'>        Livsmedel & Kiosk     </Link>
            <Link to="/" className='text-black mx-8 uppercase flex justify-self-center py-2'>        Alla produkter     </Link>
          </div>
      </div>
          <Link to="/erbjudande" className='text-black text-center h-28 font-bold uppercase'>Erbjudande</Link>
          <Link to="/inlosenavtal" className='text-black text-center h-28 font-bold uppercase'>Inlösenavtal</Link>
          <Link to="/om_oss" className='text-black text-center h-28 font-bold uppercase'>Om oss</Link>
          <Link to="/kontakt" className='text-black text-center h-28 font-bold uppercase'>Kontakt</Link>
        </div>
        <IoIosClose size={70} className='w-full justify-center' onClick={trigger} /> */}
      </div>
    </div>
  );
}

function getCartProds() {
  var cookie = JSON.parse(getCookie("products"));
  
  var toRet = cookie.map((obj, key) => {
    return(
      <div key={key}>
        <Cart_product name={obj.name} price={obj.price} img={obj.img} count={obj.count} id={key}/>
      </div>
    )
  });

  return toRet;
}
