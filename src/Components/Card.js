import React from 'react';

export default function Card(props) {
  return (
    <div className='relative p-2 mx-2 my-1 hover:bg-[#FFFFFF25]'>
      <div className=' w-[250px] h-[350px] md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[500px] bg-white rounded-b-2xl rounded-t-lg shadow-md bg-no-repeat bg-cover bg-center hover:shadow-lg hover:opacity-90 hover:cursor-pointer'
           style={{backgroundImage: 'url("' + props.img + '")'}} >
        <div className='w-full h-full flex items-end rounded-b-2xl rounded-t-lg'>
          {/* <div className='bg-[#ffffffe0] h-1/3 md:h-28 w-full rounded-b-2xl flex flex-col-reverse justify-center items-center'>
            <button className='w-3/5 md:w-2/5 text-base bg-indigo-500 p-3 rounded-lg font-medium text-white hover:bg-indigo-600'>Läs mer</button>
            <p className='text-xl m-2'>
              {props.title}
            </p>
          </div> */}
          <div className=' pt-28 h-1/3 md:h-28 w-full rounded-b-2xl flex flex-col-reverse justify-center items-center font-lato'>
            <button className='w-full md:w-[290px] text-base bg-gradient-to-tr from-[#3C0A3C] via-[#FB58A5] to-[#3C0A3C] p-3 font-medium text-white rounded-lg'>Läs mer</button>
            <p className='text-xl m-2'>
              {props.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
