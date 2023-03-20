import React from 'react';
import { Container, Grid } from '@mui/material';

import "./styles.css";
import Produto from '../Produto';

export default function ProdutosAlta () {
    return (
        <>
            <div className='bgGray'>
            <Container>
                <h3>Produtos em alta</h3>
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