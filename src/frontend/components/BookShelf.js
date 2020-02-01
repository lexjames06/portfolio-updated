import React from 'react'
import html from '../assets/svgs/HTML.svg'
import css from '../assets/svgs/CSS.svg'
import javascript from '../assets/svgs/JavaScript.svg'
import react from '../assets/svgs/React.svg'
import node from '../assets/svgs/NodeJs.svg'
import express from '../assets/svgs/ExpressJs.svg'
import mongo from '../assets/svgs/MongoDB.svg'
import basketball from '../assets/svgs/Basketball.svg'
import './BookShelf.css'

export default function BookShelf() {
    let images = [html, css, javascript, react, node, express, mongo, basketball];
    return(
      <div className='BookShelfElement'>
        <div className='BookShelfItems'>
          {
            images.map(image => (
              <div className='item' key={image}>
                <img src={image} alt='' className='item-image' />
              </div>
            ))
          }
        </div>
        <div className='BookShelf'></div>
      </div>
    );
}