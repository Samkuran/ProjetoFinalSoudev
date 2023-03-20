import React from 'react';
import Carousel from '../../components/Carousel';
import ColecoesDestaque from '../../components/ColecoesDestaque';
import OfertaDestaque from '../../components/OfertaDestaque';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProdutosAlta from '../../components/ProdutosEmAlta';



export default function Home() {
    return (
        <>  
            <Header/>
            <Carousel />
            <ColecoesDestaque />
            <ProdutosAlta/>
            <OfertaDestaque/>
            <Footer/>
        </>
    )
}
