import React from 'react';
import { Container, Grid } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Produto from '../Produto';
import "./styles.css";

export default function ProdutosAlta () {
    return (
        <>
            <div className='bgGray'>
            <Container>
                <div className='titulolinkpdt'>
                    <h3>Produtos em alta</h3>
                    <a href='' className='linkpdtalta'>Ver todos <ArrowRightAltIcon /></a>
                </div>
                
                <Grid container>
                <Produto />
                <Produto />
                <Produto />
                <Produto />
                <Produto />
                <Produto />
                <Produto />
                <Produto />
                </Grid>
            </Container>
        </div>
    </>
    )
}