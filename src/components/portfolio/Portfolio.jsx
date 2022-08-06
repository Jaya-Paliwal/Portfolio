import React from 'react';
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/portfolio7.jpg";
import IMG8 from "../../assets/portfolio8.jpg";
import IMG9 from "../../assets/portfolio9.jpg";
import IMG10 from "../../assets/portfolio10.jpg";
import IMG11 from "../../assets/portfolio11.jpg";
import IMG12 from "../../assets/portfolio12.jpg";
import IMG13 from "../../assets/portfolio13.jpg";
import IMG14 from "../../assets/portfolio14.jpg";
import { useState } from 'react';

const data = [
  {
    id: 1,
    image: IMG5,
    title:'Traveling_app',
    category:'React',
    github:'https://github.com/Jaya-Paliwal/Traveling_app',
    demo:'https://jaya-paliwal.github.io/Traveling_app/'
  },
  {
    id: 2,
    image: IMG4,
    title:'Music-Player',
    category:'HTML',
    github:'https://github.com/Jaya-Paliwal/Music-Player.github.io',
    demo:'https://jaya-paliwal.github.io/Music-Player.github.io/'
  },
  
  {
    id: 3,
    image: IMG6,
    title:'Food_Recipe_APP',
    category:'React',
    github:'https://github.com/Jaya-Paliwal/Food_Recipe_APP',
    demo:'https://jaya-paliwal.github.io/Food_Recipe_APP/'
  },
  {
    id: 4,
    image: IMG1,
    title:'Pokemon-wiki-Project',
    category:'HTML',
    github:'https://github.com/Jaya-Paliwal/Pokemon-wiki-Project.github.io',
    demo:'https://jaya-paliwal.github.io/Pokemon-wiki-Project.github.io/'
  },
  {
    id: 5,
    image: IMG2,
    title:'Instagram-Page',
    category:'HTML',
    github:'https://github.com/Jaya-Paliwal/Instagram-Page.github.io',
    demo:'https://jaya-paliwal.github.io/Instagram-Page.github.io/'
  },
  {
    id: 6,
    image: IMG3,
    title:'Weather-App',
    category:'HTML',
    github:'https://github.com/Jaya-Paliwal/Weather-App.github.io',
    demo:'https://jaya-paliwal.github.io/Weather-App.github.io/'
  },
 
  {
    id: 7,
    image: IMG7,
    title:'Pet-shop',
    category:'HTML',
    github:'https://github.com/Jaya-Paliwal/Pet-shop.github.io',
    demo:'https://jaya-paliwal.github.io/Pet-shop.github.io/'
  },
  {
    id: 8,
    image: IMG8,
    title:'Netflix-clone-website',
    category:'HTML',
    github:'https://github.com/Jaya-Paliwal/Netflix-clone-website.github.io',
    demo:'https://jaya-paliwal.github.io/Netflix-clone-website.github.io/'
  },
  {
    id: 9,
    image: IMG9,
    title:'Dx-Ball_Game',
    category:'JS',
    github:'https://github.com/Jaya-Paliwal/Dx-Ball_Game.github.io',
    demo:'https://jaya-paliwal.github.io/Dx-Ball_Game.github.io/'
  },
  {
    id: 10,
    image: IMG10,
    title:'Drum-Web-App',
    category:'JS',
    github:'https://github.com/Jaya-Paliwal/Drum-Web-App.github.io',
    demo:'https://jaya-paliwal.github.io/Drum-Web-App.github.io/'
  },
  {
    id: 11,
    image: IMG11,
    title:'Racing-Car-Game',
    category:'JS',
    github:'https://github.com/Jaya-Paliwal/Racing-Car-Game.github.io',
    demo:'https://jaya-paliwal.github.io/Racing-Car-Game.github.io/'
  },
  {
    id: 12,
    image: IMG12,
    title:'Make-A-Building-Game',
    category:'JS',
    github:'https://github.com/Jaya-Paliwal/Make-A-Building-Game.github.io',
    demo:'https://jaya-paliwal.github.io/Make-A-Building-Game.github.io/'
  },
  {
    id: 13,
    image: IMG13,
    title:'Space-War-Game',
    category:'JS',
    github:'https://github.com/Jaya-Paliwal/Space-War-Game.github.io',
    demo:'https://jaya-paliwal.github.io/Space-War-Game.github.io/'
  },
  {
    id: 14,
    image: IMG14,
    title:'Tic-Tac-Toe-Game',
    category:'JS',
    github:'https://github.com/Jaya-Paliwal/Tic-Tac-Toe-Game.github.io',
    demo:'https://jaya-paliwal.github.io/Tic-Tac-Toe-Game.github.io/'
  }
]

const Portfolio = () => {
  const [items, setItems] = useState(data);

  const filterItem = (categItem) => {
     const updatedItems = data.filter((curElem) =>{
      return curElem.category === categItem;
     });
     setItems(updatedItems);
  }
  return (
    <section id='portfolio'>
   <h5>My Recent Work</h5>
   <h2>Portfolio</h2>
<div className='cat'>
   <div className="categery">
      <button className='btn btn-primary' onClick={() => setItems(data)}>All</button>
      <button className='btn btn-primary' onClick={() => filterItem('HTML')}>HTML/CSS/JS</button>
      <button className='btn btn-primary'  onClick={() => filterItem('JS')}>JS Game</button>
      <button className='btn btn-primary' onClick={() => filterItem('React')}>REACT/NextJS</button>
   </div>
   </div>

   <div className='container portfolio__container'>
   {
    items.map((elem) => {
      const {id, image, title, github, demo} = elem;
      return(
        <article key={id} className='portfolio__item'>
      <div className="portfolio__item-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
      <a href={github} className='btn' target="_blank">GitHub</a>
      <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
      </div>
    </article>
      )
    })
   }
   </div>
  </section>
  )
}

export default Portfolio
