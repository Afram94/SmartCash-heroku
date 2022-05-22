import React, {useState} from 'react'

export default function Inputfield_std(props) {
  const [value, setValue] = useState("")
  return (
    <div className={"font-lato " + props.className}>
        <p className="py-1 ml-1 block text-sm font-medium text-gray-700 ">{props.title}</p>
        <input onChange={(e) => {props.value(e.target.value)}} placeholder={props.placeholder} autoComplete={props.auto} className='w-full rounded-lg px-4 py-2 shadow-md border border-gray-100 text-gray-900' />
    </div>
  )
}
