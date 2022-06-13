import React, {useState} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

import Inputfield_std from './Inputfield_std'
import Btn_std from './Btn_std'
import Kontakt_1 from '../Gfx/Kontakt_1.png'
import Kontakt_2 from '../Gfx/Kontakt_2.png'
import Group_16 from '../Gfx/Group_16.png'
import bg_kontakt_card from '../Gfx/bg_kontakt_card.png'
import Sigill_rosa from '../Gfx/Sigill_rosa.png'


export default function Kontakt_card() {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [msg, setMsg] = useState("")

  function sendEmail(){
    axios.post("http://192.168.1.188:8000/contact/", {
      "message":
      ("Name: " + name + "<br/>" + 
      "LastName: " + lastName + "<br/>" +
      "Email: " + email  + "<br />" + 
      "Phone: " + phone + "<br/>" +
      "Message: " + msg)
    }).then(response => {
      clear()
      console.log(response)
    })
  }

  const clear = () => {
    setName("")
    setLastName("")
    setEmail("")
    setPhone("")
    setMsg("")
    window.location.reload();
  }

  return (
    <div>
      <div className="flex justify-center items-center text-center">
            <div className="lg:block hidden relative bg-gray-100 w-[1000px] h-[700px] rounded-lg mt-10 bg-cover" style={{backgroundImage: "url(" + bg_kontakt_card + ")"}}>
                    <div className="">
                    <div className="bg-gray-50 w-[800px] h-[500px] mt-[100px] mx-[100px] ease-in-out hover:shadow-2xl rounded-lg py-6">
                        <div className="grid grid-cols-4 mx-12" /* style={{backgroundImage: "url(" + group_8 + ")"}} */>
                        <div className="absolute top-[-40px] left-0 z-10 w-[75px] h-[75px] mt-[100px] mx-[460px] shadow-lg ease-in-out hover:shadow-2xl rounded-full py-6 bg-cover boreder-2 border-black-" style={{backgroundImage: "url(" + Sigill_rosa + ")"}}></div>
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
                            <div className="col-span-2 px-2 w-full">
                                <Inputfield_std value={(e)=>{setName(e)}} placeholder="NAMN/FÖRETAG" className="w-full text-xs rounded-md px-2" />
                            </div>
                            <div className="col-span-2 px-2 w-full">    
                                <Inputfield_std value={(e)=>{setLastName(e)}} placeholder="EFTERNAMN/FÖRETAG" className="w-full text-xs rounded-md px-2" />
                            </div>
                            
                            <div className="col-span-2 px-2 w-full py-6">
                                <Inputfield_std value={(e)=>{setEmail(e)}} placeholder="E-POST" className="w-full text-xs rounded-md px-2" />
                            </div>
                            <div className="col-span-2 px-2 w-full py-6">
                                <Inputfield_std value={(e)=>{setPhone(e)}} placeholder="TELEFON" className="w-full text-xs rounded-md px-2" />
                            </div>

                            <div className="col-span-4 px-2 mx-2 py-6">
                              <textarea onChange={(e)=>{setMsg(e.target.value)}} rows="4" placeholder="MEDDELANDE" className="w-[400px] resize-none p-2 text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md px-2" />
                                <div className="col-span-4 py-8 flex justify-center">
                                    {/* <button className="flex justify-center bg-[#F01E82] text-white py-[8px] px-4 rounded-md w-[220px]" >Skicka</button> */}
                                    <Btn_std ClassName={ name.length && lastName.length && email.length && email.length && msg.length != 0 ? "flex bg-[#F01E82] text-white py-[6px] px-4 rounded-md w-[200px] font-medium pt-2" : "opacity-25 cursor-not-allowed"} trigger={ name.length && lastName.length && email.length && email.length && msg.length != 0 ? () => sendEmail() : console.log("Empty input")} inner={"Skicka"} />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>


            {/* Mobile */}
            <div className="relative lg:hidden flex justify-center px-2 bg-gray-50 mx-4 mt-8 ease-in-out hover:shadow-2xl rounded-lg py-6 bg-no-repeat bg-cover bg-center" style={{backgroundImage: "url(" + Group_16 + ")"}}>
                        {/* <div className="absolute top-[-140px] left-0 z-10 w-[75px] h-[75px] mt-[100px] mx-[400px] shadow-lg ease-in-out hover:shadow-2xl rounded-full py-6 bg-cover boreder-2 border-black-" style={{backgroundImage: "url(" + Sigill_rosa + ")"}}></div> */}
                        <div className="grid grid-cols-4 w-full md:mx-12" /* style={{backgroundImage: "url(" + group_8 + ")"}} */>
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
                            <div className="col-span-2 md:px-2 md:mx-2 w-full">
                                <Inputfield_std value={(e)=>{setName(e)}} placeholder="First name" className="w-full text-xs rounded-md px-2" />
                            </div>
                            <div className="col-span-2 md:px-2 md:mx-2 w-full">
                                
                                <Inputfield_std value={(e)=>{setLastName(e)}} placeholder="Last name" className="w-full text-xs rounded-md px-2" />
                            </div>
                            <div className="col-span-2 md:px-2 md:mx-2 w-full py-6">
                                <Inputfield_std value={(e)=>{setEmail(e)}} placeholder="Email" className="w-full text-xs rounded-md px-2" />
                            </div>
                            <div className="col-span-2 md:px-2 md:mx-2 w-full py-6">
                                <Inputfield_std value={(e)=>{setPhone(e)}} placeholder="Phone" className="w-full text-xs rounded-md px-2" />
                            </div>
                            <div className="col-span-4 md:px-2 md:mx-2 py-6">
                                    <textarea onChange={(e)=>{setMsg(e.target.value)}} rows="4" placeholder="Meddelande" className="w-full resize-none p-2 text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md px-2" />
                                <div className="col-span-4 py-8 flex justify-center">
                                  
                                <Btn_std ClassName={ name.length && lastName.length && email.length && email.length && msg.length != 0 ? "flex bg-[#F01E82] text-white py-[6px] px-4 rounded-md w-[200px] font-medium pt-2" : "opacity-25 cursor-not-allowed"} trigger={ name.length && lastName.length && email.length && email.length && msg.length != 0 ? () => sendEmail() : console.log("Empty input")} inner={"Skicka"} />
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
    /* <div className='lg:relative w-full md:h-[600px] flex justify-center mb-8'>
      <div className='grid-cols-6 w-full h-full flex-wrap shadow-lg duration-500 ease-in-out hover:shadow-2xl hidden md:grid'>
        <div className='col-start-1 col-span-2 p-4 grid-rows-2 grid px-16 md:bg-cover bg-contain bg-center' style={{backgroundImage: "url(" + Kontakt_1 + ")"}}>
          <div className='row-span-1 flex flex-col'>
            <p className='text-white mb-4 mt-10 text-lg font-medium'>Kontakt info</p>
            <p className='mb-4 mt-6 text-base text-indigo-50 max-w-3xl'>Kiselgatan 19 Norrköping, 60223 Sverige</p>
            <p className='mb-4 mt-6 text-base text-indigo-50 max-w-3xl'>011 – 470 90 00</p>
            <p className='mb-4 mt-6 text-base text-indigo-50 max-w-3xl'>info@smartcash.se</p>
          </div>
          <div className='row-span-1 flex flex-wrap gap-4 '>
            <div className='text-indigo-200 hover:text-indigo-100'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true"><path d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1" fill="currentColor"></path></svg>
            </div>

            <div className='text-indigo-200 hover:text-indigo-100'>
              <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg>
            </div>
          </div>
        </div>
        <div className='col-start-3 col-span-4 bg-slate-50 grid-rows-5 lg:px-8 py-4 gap-4 grid bg-cover bg-center' style={{backgroundImage: "url(" + Kontakt_2 + ")"}}>
          <div className='row-start-1 row-span-1 py-6'>
            <h3 className='text-lg font-medium text-gray-900 px-4'>Skicka ett meddelande</h3>
          </div>
          <div className='row-start-2 row-span-1 flex'>
            <Inputfield_std value={(e)=>{setName(e)}} placeholder="First name" className="mx-4" />
            <Inputfield_std value={(e)=>{setLastName(e)}} placeholder="Last name" className="mx-4" />
          </div>
          <div className='row-start-3 row-span-1 flex'>
            <Inputfield_std value={(e)=>{setEmail(e)}} placeholder="Email" className="mx-4" />
            <Inputfield_std value={(e)=>{setPhone(e)}} placeholder="Phone" className="mx-4" />
          </div>
          <div className='row-start-4 row-span-1 flex'>
            
            <div className="col-span-4 px-2 mx-2 py-2 w-[465px]">    
                <textarea onChange={(e)=>{setMsg(e.target.value)}} rows="4" placeholder="Meddelande" className="resize-none w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
            </div>
           
          </div>
          <div className='mt-[26px] ml-4'>
            <Btn_std ClassName={ name.length && lastName.length && email.length && email.length && msg.length != 0 ? "flex bg-[#F01E82] text-white py-[6px] px-4 rounded-md w-[200px] font-medium pt-2" : "opacity-25 cursor-not-allowed"} trigger={ name.length && lastName.length && email.length && email.length && msg.length != 0 ? () => sendEmail() : console.log("Empty input")} inner={"Skicka"} />
          </div>
        </div>
      </div> */
      
      /* <div className='grid-row-2 flex-wrap w-full md:hidden flex justify-center'>
        <div className='row-start-1 row-span-1 grid px-16 w-full'>
          <div className='row-span-1 flex flex-col bg-cover' style={{backgroundImage: "url(" + Kontakt_1 + ")"}}>
            <p className='text-white mb-4 mt-10 text-lg font-medium'>Kontakt info</p>
            <p className='mb-4 mt-6 text-base text-indigo-50 max-w-3xl'>Kiselgatan 19 Norrköping, 60223 Sverige</p>
            <p className='mb-4 mt-6 text-base text-indigo-50 max-w-3xl'>011 – 470 90 00</p>
            <p className='mb-4 mt-6 text-base text-indigo-50 max-w-3xl'>info@smartcash.se</p>
          <div className='row-span-1 flex flex-wrap gap-4 '>
            <div className='text-indigo-200 hover:text-indigo-100'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true"><path d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1" fill="currentColor"></path></svg>
            </div>
            <div className='text-indigo-200 hover:text-indigo-100'>
              <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg>
            </div>
          </div>
          </div>
        </div>
        <div className='col-start-3 col-span-4 bg-slate-50 grid-rows-5 px-8 py-4 gap-4 flex flex-wrap w-full flex-col row-start-2 row-span-1'>
          <div className='row-start-1 row-span-1 py-6'>
            <h3 className='text-lg font-medium text-gray-900'>Skicka ett meddelande</h3>
          </div>
          <div className='row-start-2 row-span-1 flex flex-col justify-center w-full'>
            <Inputfield_std value={(e)=>{setName(e)}} title="First name" className="mx-4" />
            <Inputfield_std value={(e)=>{setLastName(e)}} title="Last name" className="mx-4" />
          </div>
          <div className='row-start-3 row-span-1 flex flex-col justify-center'>
            <Inputfield_std value={(e)=>{setEmail(e)}} title="Email" className="mx-4" />
            <Inputfield_std value={(e)=>{setPhone(e)}} title="Phone" className="mx-4" />
          </div>
          <div className='row-start-4 row-span-1 flex flex-col justify-center'>
            <Inputfield_std value={(e)=>{setMsg(e)}} title="Message" className="mx-4" />
          </div>
          <div className='row-start-5 row-span-1 flex px-4 justify-center'>
            <Btn_std trigger={() => sendEmail()} inner="Skicka" />
          </div>
        </div>
      </div> */

        /* <div className="relative md:hidden flex justify-center px-2 bg-gray-50 mx-4 mt-8 ease-in-out hover:shadow-2xl rounded-lg py-6 bg-no-repeat md:bg-cover bg-cover bg-center" style={{backgroundImage: "url(" + Group_16 + ")"}}>
            <div className="grid grid-cols-4">
            
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
                <div className="col-span-2 px-2 mx-2 w-full py-2">
                    <input onChange={(e)=>{setName(e.target.value)}} placeholder="First name" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
                </div>
                <div className="col-span-2 px-2 mx-2 w-full py-2">
                    <input onChange={(e)=>{setLastName(e.target.value)}} placeholder="Last name" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
                </div>
                <div className="col-span-2 px-2 mx-2 w-full py-2">
                    <input onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
                </div>
                <div className="col-span-2 px-2 mx-2 w-full py-2">
                    <input onChange={(e)=>{setPhone(e.target.value)}} placeholder="Telefeon" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
                </div>
                <div className="col-span-4 px-2 mx-2 py-2">    
                    <textarea onChange={(e)=>{setMsg(e.target.value)}} rows="4" placeholder="Message" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
                </div>


                <div className="col-span-4 px-2 mx-2 py-6">
                    <div className="col-span-4 py-8 flex justify-center">
                    <Btn_std ClassName={ name.length && lastName.length && email.length && email.length && msg.length != 0 ? "flex bg-[#F01E82] text-white py-[6px] px-4 rounded-md w-[200px] font-medium pt-2" : "opacity-25 cursor-not-allowed"} trigger={ name.length && lastName.length && email.length && email.length && msg.length != 0 ? () => sendEmail() : console.log("Empty input")} inner={"Skicka"} />
                        
                    </div>
                </div>
            </div>
      </div>
  </div> */
    
  )
}
