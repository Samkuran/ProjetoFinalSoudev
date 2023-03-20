import React from 'react';
import { Container, Grid } from '@mui/material';

import "./styles.css";
import Sapato2 from "./../ProdutosEmAlta/IMG/Sapato2.svg";

export default function ProdutosAlta () {
    return (
        <>
            <Container>
                <h3>Produtos em alta</h3>
                <Grid container>
                    <Grid item xs={3} className='sapatoalta'>
                    <img src={Sapato2} alt="" className='fotosapato' />
                    <span>Tenis Nike</span>
                    <small className='precoantigo' xs={3}>R$200</small>
                    <small xs={3}>R$100</small>
                    </Grid>

                    <Grid item xs={3}>
                    <img src={Sapato2} alt="" />
                    <span>Tenis Nike</span>
                    <small className='precoantigo' xs={3}>R$200</small>
                    <small xs={3}>R$100</small>
                    </Grid>

                    <Grid item xs={3}>
                    <img src={Sapato2} alt="" />
                    <span>Tenis Nike</span>
                    <small className='precoantigo' xs={3}>R$200</small>
                    <small xs={3}>R$100</small>
                    </Grid>

                    <Grid item xs={3}>
                    <img src={Sapato2} alt="" />
                    <span>Tenis Nike</span>
                    <small className='precoantigo' xs={3}>R$200</small>
                    <small xs={3}>R$100</small>
                    </Grid>

                    <Grid item xs={3}>
                    <img src={Sapato2} alt="" />
                    <span>Tenis Nike</span>
                    <small className='precoantigo' xs={3}>R$200</small>
                    <small xs={3}>R$100</small>
                    </Grid>

                    <Grid item xs={3}>
                    <img src={Sapato2} alt="" />
                    <span>Tenis Nike</span>
                    <small className='precoantigo' xs={3}>R$200</small>
                    <small xs={3}>R$100</small>
                    </Grid>

                    <Grid item xs={3}>
                    <img src={Sapato2} alt="" />
                    <span>Tenis Nike</span>
                    <small className='precoantigo' xs={3}>R$200</small>
                    <small xs={3}>R$100</small>
                    </Grid>

                    <Grid item xs={3}>
                    <img src={Sapato2} alt="" />
                    <span>Tenis Nike</span>
                    <small className='precoantigo' xs={3}>R$200</small>
                    <small xs={3}>R$100</small>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}