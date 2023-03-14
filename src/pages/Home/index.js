import React from 'react';
import Navbar from '../../components/Navbar';
import Menu from '../../components/Menu';
import Carousel from '../../components/Carousel';
import ColecoesDestaque from '../../components/ColecoesDestaque';
import OfertaDestaque from '../../components/OfertaDestaque';


export default function Home() {
    return (
        <>
            <Navbar />
            <Menu />
            <Carousel />
            <ColecoesDestaque />
            <OfertaDestaque/>
        </>
    )
}
