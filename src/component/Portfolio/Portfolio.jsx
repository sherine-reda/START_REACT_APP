import React, { useState } from 'react'
import './Portfolio.css'
import item1 from '../../assets/images/cabin.png';
import item2 from '../../assets/images/cake.png';
import item3 from '../../assets/images/circus.png';
import item4 from '../../assets/images/game.png';
import item5 from '../../assets/images/safe.png';
import item6 from '../../assets/images/submarine.png';
import Portfolioitems from './../PortfolioItems/Portfolioitems';

export default function Portfolio() {
  const [portfolioItem, setPortfolioItem] = useState([
    {image:item1 , title:'LOG CABIN'},
    {image:item2 , title:'TASTY CAKE'},
    {image:item3 , title:'CIRCUS TENT'},
    {image:item4 , title:'CONTROLLER'},
    {image:item5 , title:'LOCKED SAFE'},
    {image:item6 , title:'SUBMARINE'},

  ])
  return <>
   
   <section id='portfolio'>
    <img src="" alt="" />
  <div className="container pt-5 mt-5">
    <h2 className='text-center'>
    PORTFOLIO

    </h2>
    <div className="divider ">
      <div className="line"></div>
      <div className="icon"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></div>
      <div className="line"></div>
     </div>
     <div className="row g-5">
     {portfolioItem.map((item,index)=><Portfolioitems key={index}  {...item} />)}
     
      
     </div>
   </div>
  </section>
  </>
}
