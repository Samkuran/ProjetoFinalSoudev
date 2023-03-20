import React from 'react';
import { Container, Grid } from '@mui/material';

import "./styles.css";
import sapato1 from "./../ProdutosEmAlta/IMG/sapato1.png";

export default function Produto () {
    return (
        <>
            <Grid item xs={3} className='sapatoalta'>
                <img src={sapato1} alt="" className='fotosapato' />
                <span>Tenis Nike</span>
                  <small className='precoantigo' xs={3}>R$200</small>
                <small xs={3}>R$100</small>
            </Grid>
        </>
    )
};
