import React, { Component } from 'react';
import Card_std from './Card_std';

import { fadeIn, slideInUp } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

export default class Popup_std extends Component {
    anims = StyleSheet.create({
        
        fadeIn:{
            animationName: fadeIn,
            animationDuration: '0,8s'
        },
    })
    render() {
        return (
            <div className={"fixed h-screen z-50 inset-0 overflow-y-hidden w-screen font-lato " + css(this.anims.fadeIn)}>
                <div className="flex items-end justify-center min-h-full pb-20 text-center sm:block sm:p-0">
                    <div onClick={this.props.trigger} className={"inset-0 h-screen bg-black bg-opacity-25 transition-opacity "}>
                        <div onClick={this.props.trigger}  className={this.props.className1+"  flex flex-row text-left justify-center items-center transform transition-all  "}>
                            <Card_std onClick={(e) => e.stopPropagation()} ClassName={" rounded-md lg:w-1/2 lg:my-12 lg:h-1/2 w-screen "+this.props.cardClassName} inner={
                                (typeof(this.props.children)!=="undefined")?this.props.children:this.props.inner
                            }/>
                        </div>
                    </div>
                </div>
            </div>
    )
    }
}

