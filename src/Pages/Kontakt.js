import React from 'react';
import Kontakt_card from '../Components/Kontakt_card';

import Side_Master from '../Master/Side_Master';
import Std_Master from '../Master/Std_Master';

import bild_1 from "../Gfx/bild_1.png"

export default function Home() {
  return(
    <Std_Master img={bild_1} inner={
      <div>

        <div className="z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:ml-10 mx-5 font-extrabold text-warm-gray-900 sm:text-4xl lg:text-4xl">Kontakta oss</h1>
          <p className="mt-6 sm:ml-11 ml-6 text-xl text-warm-gray-500 max-w-3xl"> Vi ser fram emot att höra från dig </p>
        </div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:px-8">
          <Kontakt_card />

          
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full md:w-3/5 grid-rows-3">
            <div className="row-span-1 flex justify-center items-center flex-col text-center my-4 ">
              <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">Smartcash</p>
              <p className="text-text-xl text-gray-500">Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque.</p>
            </div>

            <div className="row-span-1 sm:grid-cols-3 flex-wrap my-4 grid md:w-full gap-4">
              <div className="col-span-1 flex justify-center items-center flex-col">
                <div className="bg-[url('https://images.unsplash.com/photo-1638913975386-d61f0ec6500d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80')] 
                w-[200px] h-[200px] sm:w-[120px] sm:h-[120px] rounded-full bg-cover bg-center" />
                <h3 className="text-lg leading-6 font-medium">Afram</h3>
                <p className="text-gray-600 text-sm">@smartcash.se</p>
                <p className="bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-indigo-500">Developer</p>
              </div>
              <div className="col-span-1 flex justify-center items-center flex-col">
                <div className="bg-[url('https://images.unsplash.com/photo-1622790698141-94e30457ef12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80')] 
                w-[200px] h-[200px] sm:w-[120px] sm:h-[120px] rounded-full bg-cover bg-center" />
                <h3 className="text-lg leading-6 font-medium">Afram</h3>
                <p className="text-gray-600 text-sm">@smartcash.se</p>
                <p className="bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-indigo-500">Developer</p>
              </div>
              <div className="col-span-1 flex justify-center items-center flex-col">
                <div className="bg-[url('https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1702&q=80')] 
                w-[200px] h-[200px] sm:w-[120px] sm:h-[120px] rounded-full bg-cover bg-center" />
                <h3 className="text-lg leading-6 font-medium">Afram</h3>
                <p className="text-gray-600 text-sm">@smartcash.se</p>
                <p className="bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-indigo-500">Developer</p>
              </div>
            </div>

            <div className="row-span-1 sm:grid-cols-3 flex-wrap my-4 grid md:w-full gap-4">
              <div className="col-span-1 flex justify-center items-center flex-col">
                <div className="bg-[url('https://images.unsplash.com/photo-1591994843349-f415893b3a6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] 
                w-[200px] h-[200px] sm:w-[120px] sm:h-[120px] rounded-full bg-cover bg-center" />
                <h3 className="text-lg leading-6 font-medium">Afram</h3>
                <p className="text-gray-600 text-sm">@smartcash.se</p>
                <p className="bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-indigo-500">Developer</p>
              </div>
              <div className="col-span-1 flex justify-center items-center flex-col">
                <div className="bg-[url('https://images.unsplash.com/photo-1643101807569-a0db23e1c748?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] 
                w-[200px] h-[200px] sm:w-[120px] sm:h-[120px] rounded-full bg-cover bg-center" />
                <h3 className="text-lg leading-6 font-medium">Afram</h3>
                <p className="text-gray-600 text-sm">@smartcash.se</p>
                <p className="bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-indigo-500">Developer</p>
              </div>
              <div className="col-span-1 flex justify-center items-center flex-col">
                <div className="bg-[url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] 
                w-[200px] h-[200px] sm:w-[120px] sm:h-[120px] rounded-full bg-cover bg-center" />
                <h3 className="text-lg leading-6 font-medium">Afram</h3>
                <p className="text-gray-600 text-sm">@smartcash.se</p>
                <p className="bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-indigo-500">Developer</p>
              </div>
            </div>

          </div>

        </div>

      </div>
      
    } />
  );
}
