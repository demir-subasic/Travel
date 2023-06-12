import React, {useEffect} from 'react';
import './main.css';
import img from '../assets/bora.jpg';
import img2 from '../assets/machu.jpg';
import img3 from '../assets/great.jpg';
import img4 from '../assets/cappadocia.jpg';
import img5 from '../assets/guanajuato.jpg';
import img6 from '../assets/cique.jpg';
import img7 from '../assets/angkor.jpg';
import img8 from '../assets/tajmahal.jpg';
import img9 from '../assets/bali.jpg'
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Main = () => {

  const Data = [
    {
      id: 1,
      imgSrc: img,
      destTitle: 'Bora Bora',
      location: 'New Zeland',
      grade: 'CULTURAL RELAX',
      fees: '$700',
      description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxorious stays and aventurous activities.'
    },
    {
      id: 2,
      imgSrc: img2,
      destTitle: 'Machu Picchu',
      location: 'Peru',
      grade: 'CULTURAL RELAX',
      fees: '$600',
      description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourist as the sunrise from the Sun Gate is simply spectacular.'
    },
    {
      id: 3,
      imgSrc: img3,
      destTitle: 'Great Barrier Reef',
      location: 'Australia',
      grade: 'CULTURAL RELAX',
      fees: '$700',
      description: 'One of the most remarkable Australian natural gifts is the Grat Barrier Reef. The hallmark of this place is "lavish" and "beuty". Always interesting to be in this place.'
    },
    {
      id: 4,
      imgSrc: img4,
      destTitle: 'Cappadocia',
      location: 'Turkey',
      grade: 'CULTURAL RELAX',
      fees: '$800',
      description: 'According to the World Toursim Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known fro its luxurios stays and adventurous activities.'
    },
    {
      id: 5,
      imgSrc: img5,
      destTitle: 'Guanajuato',
      location: 'Mexico',
      grade: 'CULTURAL RELAX',
      fees: '$1100',
      description: 'A city in central Mexico, Guanjuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.'
    },
    {
      id: 6,
      imgSrc: img6,
      destTitle: 'Cique Terre',
      location: 'Italy',
      grade: 'CULTURAL RELAX',
      fees: '$840',
      description: 'The vibrant hues of the houses are its benchmark and explain the beuty of this place. Also, if you are a foodie and love seafood, you wil be exhilarated with the choice you are about to get here. Happy exploring great food! '
    },
    {
      id: 7,
      imgSrc: img7,
      destTitle: 'Angkor Wat',
      location: 'Cambodia',
      grade: 'CULTURAL RELAX',
      fees: '$790',
      description: 'Angkot was represents the entire range of Khmer art from the 9th to the 15th century. This temple is consired the heary and soul of Cambodia. This place is known for its luxurious stays and adventurous activities.'
    },
    {
      id: 8,
      imgSrc: img8,
      destTitle: 'Taj Mahal',
      location: 'India',
      grade: 'CULTURAL RELAX',
      fees: '$900',
      description: 'An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah JAhan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities.'
    },
    {
      id: 9,
      imgSrc: img9,
      destTitle: 'Bali Island',
      location: 'Indonesia',
      grade: 'CULTURAL RELAX',
      fees: '$500',
      description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesan archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.'
    }
  ]

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <section className="main container section">

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited desnitations</h3>
      </div>

      <div className="secContent grid">

        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
           return (
            <div key={id} data-aos="fade-up" className="singleDestination">
             
             <div className="imageDiv">
              <img src={imgSrc} alt={destTitle} />
             </div>

             <div className="cardInfo">
              <h4 className="destTitle">{destTitle}</h4>
              <span className="continent flex">
                <HiOutlineLocationMarker className='icon'/>
                <span className="name">{location}</span>
              </span>

              <div className="fees flex">
                <div className="grade">
                  <span>{grade}<small className='one'>+1</small></span>
                </div>
                <div className="price">
                 <h5>{fees}</h5>
                </div>
              </div>

              <div className="desc">
                <p>{description}</p>
              </div>

              <button className='btn flex'>
                DETAILS <HiOutlineClipboardCheck className='icon'/>
              </button>
              
             </div>
            </div>
           )
          })
        }
         
      </div>
    </section>
  )
}

export default Main