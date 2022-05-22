import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

import Side_Master from '../Master/Side_Master'
import Kontakt_card from '../Components/Kontakt_card'
import Cart_product from '../Components/Cart_product'

import { getCookie, removeCookie } from '../Components/CookieHandler';

import Inputfield_std from '../Components/Inputfield_std'
import Btn_std from '../Components/Btn_std'
import Kontakt_1 from '../Gfx/Kontakt_1.png'
import Kontakt_2 from '../Gfx/Kontakt_2.png'
import image_8 from '../Gfx/image_8.png'

import swal from 'sweetalert';

export default function CheckOut() {
    
    const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [msg, setMsg] = useState("")

  const [productName, setProductName] = useState([])
  const [count, setCount] = useState([])

  function sendEmail(){
    axios.post("http://127.0.0.1:8000/contact/", {
      "message":
      ("Name: " + name + "<br/>" + 
      "LastName: " + lastName + "<br/>" +
      "Email: " + email  + "<br />" + 
      "Phone: " + phone + "<br/>" +
      "productName: " + productName + "<br/>" +
      "Message: " + msg)
    }).then(response => {
        clear()
        removeCookie('products')
        //console.log(response)
    })
  }

  useEffect(() => {
    var cookie = JSON.parse(getCookie("products"));
    cookie.map((obj, key) => {
        console.log(obj.name)
        /* setProductName(obj.name) */
        setProductName(prevState => [...prevState, obj.name, "total:", obj.count] );
        /* setCount(obj.count) */
    })
  }, []);

  const clear = () => {
    setName("")
    setLastName("")
    setEmail("")
    setPhone("")
    setMsg("")
    setProductName("")
    window.location.reload();
  }

  function sweetalertNotification(){
    swal({
        title: "Vi har tagit emot din beställning",
        text: "vi ska kontakta dig så fort som möjligt",
        icon: "success",
    })
}

    function getCartProds() {
        var cookie = JSON.parse(getCookie("products"));
        
        var toRet = cookie.map((obj, key) => {
            return(
            <div key={key}>
              <div className="relative h-[110px] grid grid-cols-6 " name={obj.name} price={obj.price} img={obj.img} count={obj.count} id={key}>
                  <div className="col-span-2">
                    <img className="bg-contain" src={obj.img} />
                  </div>
                  <div className="col-span-4 font-lato">
                    <div className="flex justify-start text-gray-700 rounded-lg mx-2 mt-2 font-bold text-[18px] w-auto text-center">{obj.name} </div>
                    <div className="flex justify-start text-gray-500 rounded-lg mx-2 mt-2 font-medium text-sm text-[14px] w-auto text-center">{obj.count} stycke</div>
                  </div>
                  {/* <div className="col-span-2">
                  </div> */}
                  </div>
              </div>
            
          )
        });
      
        return toRet;
    }
    
    return (
        <Side_Master inner={
    <div className="flex justify-center" >
        <div className="grid md:grid-cols-7 grid-cols-1 h-auto w-[1200px] font-lato">
        <div className="md:col-span-7 col-span-1 h-[100px] font-bold flex justify-center py-8 text-3xl text-[#F01E82]">Check out</div>
            <div className="relative col-span-4 mx-4 flex justify-center py-4 shadow-lg my-2 ease-in-out hover:shadow-2xl rounded-lg">
                <div className="grid grid-cols-4 w-full bg-cover md:bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url(" + Kontakt_2 + ")"}}>
                <div className="relative col-span-4 text-sm font-medium flex justify-center text-[#F01E82] text-[20px] py-4">Vi ringer up dig</div>
                    {/* <div className="col-span-4 text-[#F01E82] flex justify-center text-[25px] font-bold">Fyll i dina information</div> */}
                    <div className="col-span-2  mx-4 flex justify-center h-[200px]">
                        <div className="grid grid-rows-2">
                            <div className="row-span-1">
                                <div className="my-4">
                                    <Inputfield_std value={(e)=>{setName(e)}} title="First name" placeholder="First name" className="mx-4" />
                                </div>
                                <div className="my-4">
                                    <Inputfield_std value={(e)=>{setLastName(e)}} title="Last name" placeholder="Last name" className="mx-4" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-span-2  mx-4 flex justify-center h-[200px]">
                    <div className="grid grid-rows-2">
                            <div className="row-span-1">
                                <div className="my-4">
                                    <Inputfield_std value={(e)=>{setEmail(e)}} title="Email" placeholder="Email" className="mx-4" />
                                </div>
                                <div className="my-4">
                                    <Inputfield_std value={(e)=>{setPhone(e)}} title="Phone" placeholder="Phone" className="mx-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4  flex justify-center py-4 items-center">
                        <div className="col-span-4 px-2 mx-2 w-[465px]">    
                        <label className="block text-sm font-medium text-gray-700 "> NAMN/FÖRETAG </label>
                            <textarea onChange={(e)=>{setMsg(e.target.value)}} rows="5" placeholder="Meddelande" className="resize-none w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
                        </div>
                    </div>
                    <div className="col-span-4 px-2 mx-2 py-6">
                    <div className="col-span-4 py-8 flex justify-center">
                    <Btn_std ClassName={ name.length && lastName.length && email.length && email.length && msg.length != 0 ? "flex bg-[#F01E82] text-white py-[6px] px-4 rounded-md w-[200px] font-medium pt-2" : "opacity-25 cursor-not-allowed"} trigger={ name.length && lastName.length && email.length && email.length && msg.length != 0 ? () => {sendEmail(); sweetalertNotification()} : console.log("Empty input")} inner={"Skicka"} />
                        {/* <button onClick={()=>sendEmail()} className="flex justify-center bg-[#F01E82] text-white py-[8px] px-4 rounded-md w-[220px]" >Skicka</button> */}
                    </div>
                </div>
                </div>
            </div>
            <div className="relative col-span-3 mx-8 flex py-4 flex-col shadow-lg my-2 ease-in-out hover:shadow-2xl rounded-lg w-[350px] h-[600px] overflow-auto">
                <h2 className="py-4 mb-6 border-b text-sm font-medium flex justify-center text-[#F01E82] text-[20px] font-lato">Produkter du valde</h2>
                <div className="mx-8">
                    {getCartProds()}
                </div>
            </div>
        </div>
    </div>
    }/>
    )
}