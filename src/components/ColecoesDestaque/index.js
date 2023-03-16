import { Container, Button, Paper, Stack } from "@mui/material";
import Grid from '@mui/material/Grid';
import ColecoesDestaqueIcones from "../ColecoesDestaqueIcones";
import camiseta from './img/camiseta.png' 
import tenis from './img/tenis.png'
import fones from './img/fone.png'

import "./style.css";
import { blue } from "@mui/material/colors";


export default function ColecoesDestaque () {
    return (
        <>
        <div className="bg">
            <Container>

            <h1>Coleções em destaque</h1>

            <Stack>
                <Paper sx={{ background:blue }} elevation={2}>
                    <img src={camiseta} style={{width:"30%"}} />
                </Paper>
                <h2>Novo drop Supreme</h2>
                <Button sx={{ background: blue[400]}}>Comprar</Button>
            </Stack>
                    <div className="icone">
                    <ColecoesDestaqueIcones/>
                    <br/>
                    </div>         
                </Container>
            </div>
        </>
    )
}