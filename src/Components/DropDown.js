import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function DropDown() {
    const [click, setClick] = useState(false)
    const handelClick = () => setClick(!click)
    const [items] = React.useState([
        {
          title: "Restaurang",
          path: "/Resturang-product"
        },
        
        
      ]);
      return (
        <select>
          {items.map((item, index) =>{
            <li key={index}>
                
                {item.title}
            </li>
        })}
        </select>
      );
}
