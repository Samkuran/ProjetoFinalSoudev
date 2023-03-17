import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Botao from '../BotaoOferta';
import "./style.css";
import tenis from "./tenisdestaque.png";



export default function OfertaDestaque (){
    return(
        <>
        <Container sx={{marginTop: 11}}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                        <div className='elipse'> <img className='tenisoferta' src={tenis}/> </div>
                </Grid>
                <Grid item xs={6}>
                    <a href="" className='linkoferta'>Oferta especial</a>
                    <h1 className='titulo'>Air Jordan edição de colecionador</h1>
                    <p className='descricao'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    <Botao texto="Ver oferta"/>
                </Grid>
            </Grid>
        </Container>
        </>
    );
} 