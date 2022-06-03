import React from 'react'
import download from "../Gfx/download.jpeg";
import Kassa from "../Gfx/Kassa.png";
import Product_card from '../Components/Product_card'
import Side_Master from '../Master/Side_Master'
import Std_Master from '../Master/Std_Master'

import bild_1 from "../Gfx/bild_1.png"

export default function Beauty_products() {
    return (
        <Std_Master img={bild_1} inner={
            <div className="">
                <div className="z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8 font-lato">
                    <h1 className="text-4xl sm:ml-10 mx-5 font-extrabold text-warm-gray-900 sm:text-4xl lg:text-4xl">Skönhet & Hälsa</h1>
                    <p className="mt-6 sm:ml-11 ml-6 text-xl text-warm-gray-500 max-w-3xl"> Vi ser fram emot att höra från dig </p>
                </div>
                <div className="md:flex sm:flex flex-wrap -z-50 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8 justify-center items-center">
                    <Product_card img={Kassa} price="100Kr" title="Kassa 1" ribbon="16800 Kr" description="molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"/>
                    <Product_card img={Kassa} price="110Kr" title="Kassa 2" ribbon="16800 Kr" description="molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"/>
                    <Product_card img={Kassa} price="100Kr" title="Kassa 3" ribbon="16800 Kr" description="molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"/>
                    <Product_card img={Kassa} price="110Kr" title="Kassa 4" ribbon="16800 Kr" description="molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"/>
                    <Product_card img={Kassa} price="100Kr" title="Kassa 5" ribbon="16800 Kr" description="molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"/>
                    <Product_card img={Kassa} price="100Kr" title="Kassa 6" ribbon="16800 Kr" description="molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"/>
                    <Product_card img={Kassa} price="100Kr" title="Kassa 7" ribbon="16800 Kr" description="molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"/>
                    <Product_card img={Kassa} price="100Kr" title="Kassa 8" ribbon="16800 Kr" description="molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"/>
                    <Product_card img={Kassa} price="100Kr" title="Kassa 9" ribbon="16800 Kr" description="molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"/>
                </div>
            </div>
        } />
    )
}
