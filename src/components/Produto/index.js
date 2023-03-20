import React from 'react';
import { Card, CardContent, Container, Grid } from '@mui/material';

import "./styles.css";
import sapato1 from "./../ProdutosEmAlta/IMG/sapato1.png";

export default function Produto () {
    return (
        <>
            <Grid item xs={3} className='sapatoalta'>
                
                <Card sx={{ minWidth: 292, height: "321px", alignItems: "center", margin: 0, padding: 0}}>
                        <img src={sapato1} alt="" className='fotosapato'/>
                </Card>
                <div className='textoSmall'>
                    <span>Tênis</span>
                    <h3>K-Swiss V8 - Masculino</h3>
                    <small className='precoantigo' xs={3}>R$200</small>
                    <small xs={3}><strong>R$100</strong></small>
                </div>
            </Grid>
        </>
    )
};
