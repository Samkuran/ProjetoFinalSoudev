import React from 'react';
import Carousel from '../../components/Carousel';
import ColecoesDestaque from '../../components/ColecoesDestaque';
import OfertaDestaque from '../../components/OfertaDestaque';
import Footer from '../../components/Footer';
import Header from '../../components/Header';


export default function Home() {
    return (
        <>  
            <Header/>

            <Carousel />
            <ColecoesDestaque />
        

            <OfertaDestaque/>
            <Footer/>
        </>
    )
}
