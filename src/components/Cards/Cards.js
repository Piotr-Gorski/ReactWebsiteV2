import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Doświadczmy razem tych wszystkich pięknych wrażeń</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Wodospad schowany w głębi amazonśkiej dźungli'
              label='Przygoda'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Wyspy Balii położone w Indonezji. Wspólna medytacja?'
              label='Natura'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Zwiedzanie niezbadanych wód Atlantyku'
              label='Tajemnica'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Doświadcz futbolu na szczycie góry Himilajów'
              label='Wyjątkowość'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Przejedż przez Saharę na wielbłądzie'
              label='Adrenalina'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
