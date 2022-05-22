import React from 'react'

export default function NewCard(props) {
    return (
        <div className="relative bg-white shadow-lg duration-500 ease-in-out hover:shadow-2xl border-6 md:w-[350px] sm:w-3/4 my-4 mx-4 h-100 rounded-lg py-4 px-4 font-lato">
            {props.children}
        </div>
    )
}
