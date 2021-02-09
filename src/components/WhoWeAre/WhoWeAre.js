    import React from 'react';
    import './WhoWeAre.css';
    import CardItem from '../Cards/CardItem';

    function WhoWeAre() {
        return (
        <div className='cards'>
            <h1>Potrafimy zarazić pasją bez kichania!</h1>
            <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                <CardItem
                    src='images/sonic.jpg'
                    text='Mimo tego, ze jego nos odrywa się około 7cm od ziemi, to wcale nie przeszkadza mu to w tym, żeby być bardzo uważnym i spostrzegawczym podróżnikiem. Potrafi wcisnąc się w każdą szczelinę i znaleźć ukryte sćieżki.'
                    label='Jeż Alojzy'
                    path='/aboutUs'
                />
                <CardItem
                    src='images/fox.jpg'
                    text='Alfred to bardzo odważny i zaradny podróżnik. Potrafi zadbać o pożywienie i schronienie dla siebie i swoich bliskich. Świetnie tropi nory użyteczne do noclegów. Przeważnie nic nie mówi, ale jeśli będziesz miał szczęście, to dowiesz się co mówi lis!'
                    label='Lis Alfred'
                    path='/aboutUs'
                />
                </ul>
            </div>
            </div>
        </div>
        );
    }
    
    export default WhoWeAre;
    