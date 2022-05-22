import React, { Component } from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

export default class Btn_std extends Component {

    constructor(props)
    {
        super(props);

        this.state={
        };
    }

    getClass =()=>{
        return "rounded-lg w-32 h-12 shadow-sm hover:shadow-lg "
    }

    callBack=(e)=>{
        this.props.click();
    }

    render() {

        const bg = (this.props.bg==="0"?"bg-[#FC1F74] ":"bg-[#FFFFFF] ");
        const text = (this.props.bg==="1"?"text-[#FC1F74]":"text-[#FFFFFF]");

        return (
            <div className={this.props.css}>
                <button
                    className={"flex rounded-lg h-10 shadow-sm hover:shadow-md bg-[#F01E82] text-white py-[6px] px-4 w-[200px] font-medium pt-2 " +
                    
                    (this.props.ClassName)}
                    onClick={this.props.trigger}
                >
                  {this.props.inner}
                <div className="mt-1 ml-4 "><AiOutlineArrowRight /></div>
                </button>

            </div>
        )
    }
}
