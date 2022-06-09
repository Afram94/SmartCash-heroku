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
import logo from "../Gfx/logo.png";
import Logo_10 from "../Gfx/Logo_10.png";
import Sigill_ljus from "../Gfx/Sigill_ljus.png";

import bild_1 from "../Gfx/bild_1.png";
import Footer from "../Gfx/Footer.jpg";
import Footer_logo from "../Gfx/Footer_logo.png";
import Footer_logo_1 from "../Gfx/Footer_logo_1.png";
import { getCookie, removeCookie, setCookie } from '../Components/CookieHandler';
import Cart_product from "../Components/Cart_product";
import SideBar from "../Components/SideBar";

import { slideInDown, slideInUp, slideInRight } from "react-animations"
import { StyleSheet, css } from 'aphrodite';

import {useTransition, animated, useSpring} from 'react-spring';

export default function Std_Master(props) {
  
  const [isSm, setIsSm] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  const [navbar, setNavbar] = useState(false)


  const changeBgColor = () => {
    if(window.scrollY >= 40){
      console.log(window.scrollY)
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBgColor);
  
  /* useEffect(() => {
      // Anything in here is fired on component unmount.
      console.log("alhehe")
      if (!getCookie("products")){
        setCookie("products",JSON.stringify([]));
      }
  },[]) */
  
  return (
    <div>
      
      {/*GetSideBar()*/}
      <GetSideBar></GetSideBar>

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

        
        <div className="absolute w-full py-4 items-center justify-center flex-wrap ">
          <div className="grid justify-center w-full col-start-1 col-end-4 grid-cols-4">
            <div className="col-span-1 w-full grid-cols-3 py-4 px-8 xl:px-4 hidden lg:flex justify-center items-center ">
              <Link to="/"><img src={Logo_10}  className='col-span-1 h-[120px]'  /></Link>
            </div>
            <div className="flex flex-row justify-center pb-4 items-center col-start-2 col-span-3">
              {/* <div className="grid-cols-3 hidden lg:flex ml-24 justify-center items-center backdrop-blur-sm rounded-lg h-[40px] pt-1 mb-10"> */}
              
              <div className={"safari_only grid-cols-3 hidden lg:flex 2xl:ml-[830px] xl:ml-[430px] 2xl:mb-[100px] xl:mb-[100px] justify-enx items-center h-[40px] pt-1 mb-10 blur-none"}>
                {NavBar(false, () => {})}
                </div>
            

              </div>
          </div>
        </div>

        {/* Navbar Mobile */}
        <div className='absolute w-full grid-cols-3 xl:px-4 flex lg:hidden '>
          <Link to="/"><img src={Logo_10} className='absolute my-4 mx-8 z-0' style={{height: "55px"}} /></Link>
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
        <div className='absolute left-22 top-[40px] lg:top-[60px] z-0 w-full justify-center text-center text-xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold font-lato ' style={{marginTop: "12vw"}}> {/* right-[10vw] md:right-[15vw] lg:right-[150px] xl:right-[250px] */}
          {props.Title}
        </div>

        {/* <img src={Smart_cash_gradientBg} className='w-full' resizeMode="repeat"/> */}
        <div className='w-full h-[400px] bg-black bg-cover bg-no-repeat inline -skew-y-6 font-lato' >
          <img src={props.img} className='w-full  h-[250px] sm:h-[650px] big_screen:h-[850px]' />
        </div>
      </div>
      <div>
        {props.inner}
      </div>
      <div className="relative grid lg:grid-cols-5 border-t bg-[#280028] border-gray-200  mt-28 h-[300]">  {/* md:mx-36 */}
      <div className="lg:col-span-2 col-span-3 md:w-full md:h-[300px] bg-no-repeat bg-cover " style={{backgroundImage: "url(" + Footer + ")"}}>
          {/* <img src={Footer} className="md:w-full md:h-[300px] object-cover" /> */}
      </div>
      {/* <div className="lg:col-span-1 col-span-1 md:w-full md:h-[300px] bg-no-repeat bg-contain " style={{backgroundImage: "url(" + Footer_logo + ")"}}></div> */}
        <div className="my-6 lg:col-span-3 col-span-3 px-6">
          <div className="grid grid-cols-8 lg:grid-cols-7 font-lato gap-x-6 lg:ml-16">
            <div className="col-span-4 md:col-span-2">
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
            <div className="col-span-4 md:col-span-3 ">
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
              <div className="md:col-span-2 col-span-6">
                  <div className="lg:col-span-1 col-span-1 md:w-full md:h-[195px] bg-no-repeat bg-contain " style={{backgroundImage: "url(" + Footer_logo_1 + ")"}}></div>
                  <h2 className="flex justify-center font_lato text-white font-bold text-[20px] 2xl:mr-[80px] big_screen:mr-[290px]">Hitta oss via</h2>
                  <div className="flex justify-center 2xl:mr-[90px] big_screen:mr-[310px]">
                    <a href="https://www.facebook.com/smartcashab" target="_blank" >
                    <div className='text-[#F01E82] hover:text-indigo-100 mx-4 mt-[2px] cursor-pointer'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true"><path d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1" fill="currentColor"></path></svg>
                    </div>
                    </a>

                    <div className='text-[#F01E82] hover:text-indigo-100 cursor-pointer'>
                      <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg>
                    </div>
                  </div>
                  
              </div>
          </div>
        </div>
        <div className="col-span-5 bg-[#F01E82] text-white font-lato">
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
/*
function GetSideBar()
{
  
  var cookie = JSON.parse(getCookie("products"))
  
  const [isCartOpen, setIsCartOpen] = useState(false)
  if(isCartOpen){
    return(
      <SideBar hide={()=>{setIsCartOpen(false)}} inner={""}/>
    )
  }

  return (
    <div className="fixed w-full h-full z-0">
      <div className="cursor-pointer z-50 rounded-full absolute bottom-10 right-10 w-[50px] h-[50px] bg-white shadow-md flex items-center justify-center " onClick={()=>{setIsCartOpen(true);}}>
        
        <div className="">
        {cookie.length > 0  ? <div className="text-white text-[16px] font-bold font-lato text-sm bg-[#F01E82] rounded-full w-6 h-6 text-center items-center flex justify-center">{cookie.length}</div> : <BsCart4 size={20} />}
        
        </div>
      </div>
    </div>
  )
}
*/
class GetSideBar extends React.Component 
{

  constructor(props){
    super(props);
    this.state = {
      isCartOpen:false
    }
  }

  render(){
    
    var cookie = JSON.parse(getCookie("products"))
    


    if(this.state.isCartOpen){
      return(
        <SideBar hide={()=>{this.setState({isCartOpen:false})}} inner={""}/>
      )
    }
  
    return (
      <div className="fixed w-full h-full z-0">
        <div className="cursor-pointer z-50 rounded-full absolute bottom-10 right-10 w-[50px] h-[50px] bg-white shadow-md flex items-center justify-center " onClick={()=>{this.setState({isCartOpen:true})}}>
          
          <div className="">
          {cookie.length > 0  ? <div className="text-white text-[16px] font-bold font-lato text-sm bg-[#F01E82] rounded-full w-6 h-6 text-center items-center flex justify-center">{cookie.length}</div> : <BsCart4 size={20} />}
          
          </div>
        </div>
      </div>
    )
  }
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
          <div className="text-white mx-3 font-bold uppercase cursor-pointer text-[14px] my-[2px] font-lato" onClick={() => {setToggle_products(!toggle_products); handleClick();}}>Produkter</div>
          
          
            {/* Product */}
            <div class={"w-16 overflow-hidden inline-block " + ((showProductArrow) ? "block ": "hidden ") + css(styles.slideInUp)} >
              <div class={"h-7 w-7 bg-white rotate-45 absolute top-[40px] left-[60px] " }></div>
            </div>
                {/* Offers */}
            <div class={"w-16 overflow-hidden inline-block " + ((showOfferAnimation) ? "block ": "hidden ") + css(styles.slideInUp)} >
              <div class={"h-7 w-7 bg-white rotate-45 absolute top-[40px] left-[180px]"}></div>
            </div>
          {/* <animated.div style={productAnimation}> */}
            <div className="absolute top-[35px] right-[50px]">
              <div className={"product_menu flex bg-white rounded-xl shadow-md h-auto w-[900px] my-4 py-2 " + ((toggle_products) ? "block " : "hidden ") + css(styles.slideInUp)}>
                <Link to="/restaurant-products" className='text-black mx-6 font-bold text-[14px] uppercase flex justify-self-center font-lato'> <div className="w-6 h-6 mr-1 pt-1"> <MdOutlineLocalDining /> </div>       Restaurang & Cafe     </Link>
                <Link to="/beauty-products" className='text-black mx-6 font-bold text-[14px] uppercase flex justify-self-center font-lato'> <div className="w-6 h-6 mr-1 pt-1"><MdOutlineVolunteerActivism/> </div>       Skönhet & Hälsa     </Link>
                <Link to="/restaurant-products" className='text-black mx-6 font-bold text-[14px] uppercase flex justify-self-center font-lato'> <div className="w-6 h-6 mr-1 pt-1"><MdAddShoppingCart/> </div>      Livsmedel & Kiosk     </Link>
                <Link to="/restaurant-products" className='text-black mx-6 font-bold text-[14px] uppercase flex justify-self-center font-lato'> <div className="w-6 h-6 mr-1 pt-1"> <MdOutlineLocalDining /> </div>       Alla produkter     </Link>
              </div>
            </div>
          {/* </animated.div> */}
        </div>

        
        <div className="flex flex-col">
          <div className="text-white mx-3 font-bold uppercase cursor-pointer text-[14px] my-[2px] font-lato " onClick={() => {setToggle_offer(!toggle_offer); setShowOfferAnimation(!showOfferAnimation);}}>Erbjudande</div>
          {/* <animated.div style={offerAnimation}> */}
            <div className="mr-24 absolute top-[35px] right-[700px]">
              <div className={"offer_menu flex bg-white rounded-xl shadow-md h-auto w-[650px] absolute my-4 py-2 " + ((toggle_offer) ? "block " : "hidden ") + css(styles.slideInUp)}>
                <Link to="/restaurant-and-cafe" className='text-black mx-8 text-[14px] font-bold uppercase font-lato'>       Restaurang & Cafe    </Link>
                <Link to="/beauty-and-health" className='text-black mx-8 text-[14px] font-bold uppercase font-lato'>       Skönhet & Hälsa    </Link>
                <Link to="/grocery-stores" className='text-black mx-8 text-[14px] font-bold uppercase font-lato'>       Livsmedel & Kiosk    </Link>
              </div>
            </div>
          {/* </animated.div> */}
        </div>
        
          
      
        <Link to="/inlosenavtal" className='text-white mx-3 font-bold uppercase text-lg text-[14px] font-lato'>       Inlösenavtal     </Link>
        <Link to="/om_oss" className='text-white mx-3 font-bold uppercase text-lg text-[14px] font-lato'>      Om  oss        </Link>
        <Link to="/kontakt" className='text-white mx-3 font-bold uppercase text-lg text-[14px] font-lato'>       Kontakt       </Link>
        
      
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


