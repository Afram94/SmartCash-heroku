import React from 'react'

export default function Home_card() {
  return (
    <div className='w-full py-8 flex justify-center items-center'>

      <div className='relative grid-col-6 w-3/5 h-[400px] hidden 2md:grid'>
        <div className='col-start-1 col-span-1 bg-gradient-to-b from-pink-300 via-purple-400 to-indigo-400 bg-opacity-75 rounded-l-xl'>
          <div className='w-full p-4 flex flex-col font-lato'>
            <p className='text-xl font-bold text-white'>Kolla igenom vad vi har att erbjuda!</p>
            <p className='mt-5 mb-5 w-[250px] text-gray-200 flex-wrap'>Vi har 6st paket som du kan välja mellan! Varje Paket innehåller olika produkter för att det ska vara enklare för dig att hitta det du behöver för ditt företag.</p>
            <a class="mt-6 flex-shrink-0 flex bg-white bg-opacity-0 py-3 px-4 border border-white border-opacity-25 rounded-md items-center justify-center text-base font-medium text-white hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full" href="erbjudande" data-v-0dd2ab72="">Erbjudande</a>
          </div>
        </div>
        <div className='col-start-2 col-span-4 bg-cover bg-right-bottom rounded-r-xl'
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"}}>
        </div>
      </div>

      <div className='grid-rows-2 w-full md:w-3/5 h-[400px] grid 2md:hidden'>
        <div className='row-start-1 row-span-1 bg-cover bg-right-bottom rounded-t-xl'
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"}}>
        </div>
        <div className='row-start-2 row-span-1 bg-gradient-to-b from-pink-300 via-purple-400 to-indigo-400 bg-opacity-75 rounded-b-xl h-[300px]'>
          <div className='w-full p-4 flex flex-col justify-center font-lato'>
            <p className='text-xl font-bold text-white'>Kolla igenom vad vi har att erbjuda!</p>
            <p className='mt-5 mb-5 w-[250px] text-gray-200 flex-wrap'>Vi har 6st paket som du kan välja mellan! Varje Paket innehåller olika produkter för att det ska vara enklare för dig att hitta det du behöver för ditt företag.</p>
            <a class="mt-6 flex-shrink-0 flex bg-white bg-opacity-0 py-3 px-4 border border-white border-opacity-25 rounded-md items-center justify-center text-base font-medium text-white hover:bg-opacity-10 sm:mt-0 lg:ml-0 lg:w-full" href="erbjudande" data-v-0dd2ab72="">Erbjudande</a>
          </div>
        </div>
      </div>

    </div>
  )
}
