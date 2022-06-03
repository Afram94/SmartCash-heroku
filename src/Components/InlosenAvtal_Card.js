import React, {useState} from 'react';
import axios from 'axios';
import Inputfield_std from './Inputfield_std';
import Btn_std from './Btn_std';

import group_bg from '../Gfx/group_bg.png';
import inlosenavtal_bg from '../Gfx/inlosenavtal_bg.png';

export default function InlosenAvtal_Card(props) {

  const [name, setName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [orgNumber, setOrgNumber] = useState("")
  const [address, setAddress] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [industryType, setIndustryType] = useState("")
  const [personNumber, setPersonNumber] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")

  function sendEmail(){
    axios.post("http://127.0.0.1:8000/contact/", {
      "message":
      ("Name: " + name + "<br/>" + 
      "Title: " + companyName + "<br/>" +
      "Org number: " + orgNumber + "<br/>" +
      "Adress: " + address + "<br/>" +
      "Kontonummer: " + accountNumber + "<br/>" +
      "Typ av bransch: " + industryType + "<br/>" +
      "personnummer: " + personNumber + "<br/>" +
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
    setCompanyName("")
    setOrgNumber("")
    setAddress("")
    setAccountNumber("")
    setIndustryType("")
    setPersonNumber("")
    setEmail("")
    setPhone("")
    setMsg("")
    window.location.reload();
  }


  console.log(props)
  return (
    <div className=" w-full h-[800px] bg-contain " style={{backgroundImage: "url(" + inlosenavtal_bg + ")"}}>

      
      <div className={"h-[780px] lg:relative py-6 px-6 rounded-2xl transition duration-500 hover:shadow-2xl hover:bg-white max-w-xl mx-auto flex justify-center " + props.className}>
        <div className="grid grid-cols-4 w-full gap-y-8 gap-x-6">
          <div className="col-span-4 h-auto text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl font-lato">
              Ansök Direkt!
            </h2>
            </div>
          <div className="col-span-4 h-auto text-center">
            <p className="mt-4 text-lg leading-6 text-gray-500 font-lato">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
            </p>
          </div>
          <div className="relative col-span-2 px-2 py-2 font-lato">
            <div className="py-4">
              <label className="block text-sm font-medium text-gray-700" >KONTAKTPERSON</label>
              <input onChange={(e)=>{setName(e.target.value)}} className="mt-2 py-1 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-200 rounded-md"/>
            </div>
            <div className="py-4">
              <label className="block text-sm font-medium text-gray-700" >ORGANISATIONSNUMMER</label>
              <input onChange={(e)=>{setOrgNumber(e.target.value)}} className= "mt-2 py-1 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-200 rounded-md"/>
            </div>
            <div className="py-4">
              <label className="block text-sm font-medium text-gray-700" >TELEFON</label>
              <input onChange={(e)=>{setPhone(e.target.value)}} className= "mt-2 py-1 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-200 rounded-md"/>
            </div>
            <div className="py-4">
              <label className="block text-sm font-medium text-gray-700" >ADRESS</label>
              <input onChange={(e)=>{setAddress(e.target.value)}} className= "mt-2 py-1 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-200 rounded-md"/>
            </div>
            <div className="py-4">
              <label className="block text-sm font-medium text-gray-700" >KONTONUMMER</label>
              <input onChange={(e)=>{setAccountNumber(e.target.value)}} className= "mt-2 py-1 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-200 rounded-md"/>
            </div>
          </div>
          <div className="relative col-span-2 px-2 py-2">
            <div className="py-4">
              <label className="block text-sm font-medium text-gray-700" >FÖRETAGSNAMN</label>
              <input onChange={(e)=>{setCompanyName(e.target.value)}} className= "mt-2 py-1 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-200 rounded-md"/>
            </div>
            <div className="py-4">
              <label className="block text-sm font-medium text-gray-700" >TYP AV BRANSCH</label>
              <input onChange={(e)=>{setIndustryType(e.target.value)}} className= "mt-2 py-1 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-200 rounded-md"/>
            </div>
            <div className="py-4">
              <label className="block text-sm font-medium text-gray-700" >EMAIL</label>
              <input onChange={(e)=>{setEmail(e.target.value)}} className= "mt-2 py-1 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-200 rounded-md"/>
            </div>
            <div className="py-4">
              <label className="block text-sm font-medium text-gray-700" >PERSONNUMMER</label>
              <input onChange={(e)=>{setPersonNumber(e.target.value)}} className= "mt-2 py-1 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-200 rounded-md"/>
            </div>
            <div className="py-[43px]">
                <button onClick={()=>sendEmail()} className="flex justify-center bg-gradient-to-tr bg-[#F01E82] text-white py-[6px] px-4 rounded-md w-full" > Skicka direkt </button>
            </div>
          </div>
        </div>

      </div>

    </div>
      /* <div className='md:px-4 py-4 justify-center w-full md:w-[650px] flex md:m-4 '>
        <div className=' grid-rows-4 w-full justify-center items-center flex flex-col bg-white shadow-lg md:mx-8 py-8 rounded-2xl gap-2 flex-wrap mb-14'>
          <div className='row-start-1 row-span-1' >
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"> Ansök Direkt! </h2>
          </div>
          <div className='flex justify-center row-start-2 row-span-3 grid-rows-5 flex-wrap'>
            <div className=' row-span-1 flex gap-8 mt-4 flex-wrap items-center justify-center text-sm'>
              <Inputfield_std title="KONTAKTPERSON" placeholder="kontakt-person" className=" font-medium h-[60px]" />
              <Inputfield_std title="FÖRETAGSNAMN" placeholder="företags-namn" className="font-medium h-[60px]" />
            </div>
            <div className=' row-span-1 flex gap-8 mt-4 flex-wrap items-center justify-center text-sm'>
              <Inputfield_std title="ORGANISATIONSNUMMER" placeholder="organisations-nummer" className="font-medium h-[60px]" />
              <Inputfield_std title="TYP AV BRANSCH" placeholder="typ-av-bransch" className="font-medium h-[60px]" />
            </div>
            <div className=' row-span-1 flex gap-8 mt-4 flex-wrap items-center justify-center text-sm'>
              <Inputfield_std title="TELEFON" placeholder="telefon" className="font-medium h-[60px]" />
              <Inputfield_std title="EMAIL" placeholder="e-mail" className="font-medium h-[60px]" />
            </div>
            <div className=' row-span-1 flex gap-8 mt-4 flex-wrap items-center justify-center text-sm'>
              <Inputfield_std title="ADRESS" placeholder="adress" className="font-medium h-[60px]" />
              <Inputfield_std title="PERSONNUMMER" placeholder="person-nummer" className="font-medium h-[60px]" />
            </div>
            <div className=' row-span-1 flex gap-8 mt-4 flex-wrap items-center justify-center text-sm'>
              <Inputfield_std title="KONTONUMMER" placeholder="konto-nummer" className="font-medium h-[60px]" />
              <Btn_std inner="skicka" css="mx-12 mt-8" bg="0" />
            </div>
          </div>
        </div>
      </div> */
    
  )
}
