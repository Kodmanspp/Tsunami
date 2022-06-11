import React from 'react';
import {nanoid} from 'nanoid';
import images from '../../assets/crypto-icons';
import CryptoCard from '../cryptoCard';
import cl from './style.module.scss';

images.splice(5, 0, false);

console.log(images)
const CardList = () => (
  <div className={cl.cardList}>
    <div className={`${cl.cards} container`}>
      {images.map((item)=><CryptoCard key={nanoid()} img={item}/>)}
    </div>
  </div>
);

export default CardList;
