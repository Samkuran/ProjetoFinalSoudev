import { Button, Container, Paper, Stack } from "@mui/material";
import Grid from '@mui/material/Grid';
import ColecoesDestaqueIcones from "../ColecoesDestaqueIcones";
import camiseta from './img/camiseta.png' 
import tenis from './img/tenis.png'
import fone from './img/fone.png'
import { blue } from "@mui/material/colors";
import "./style.css";
import { height } from "@mui/system";


export default function ColecoesDestaque () {
    return (
        <>
        <div className="bgGray">
            <Container>
            <h2 className="textprimary">Coleções em destaque</h2>
                <br/>
                <Grid container justifyContent="center" alignContent="center">
                
                    <Grid item xs={4}>
                    
                    
            <Stack>
                <Paper sx={{ background:"#D8E3F2", width:"405px", height:"251px" }} elevation={2}>
                    <div className="papers">
                        <div className="textoesq"> 
                        <h3 className="text secundary">Novo drop <br/>Supreme</h3>
                <Button sx={{
                width: 153, 
                height: 48,
                marginTop: 1,
                bgcolor: "#F5F5F5",
                color: "#C92071",
                textTransform: 'none',
                fontWeight: "X-Small Bold",
                fontSize: 14,
                }}>Comprar</Button>             
                    </div>

                    <div className="imgdir"><img src={camiseta} style={{width:"95%"}} ></img>/</div>
                    </div> 
                </Paper>  
            </Stack>

                    <div className="icone">
                    
                    <br/>
                    </div>  
                    </Grid> 
                    <Grid item xs={4}>
                            
            <Stack>
                <Paper sx={{ background:"#D8E3F2", width:"405px", height:"251px" }} elevation={2}>
                    <div className="papers">
                        <div className="textoesq"> 
                        <h3 className="text secundary">Coleção <br/>Adidas</h3>
                <Button sx={{
                width: 153, 
                height: 48,
                marginTop: 1,
                bgcolor: "#F5F5F5",
                color: "#C92071",
                textTransform: 'none',
                fontWeight: "X-Small Bold",
                fontSize: 14,
                }}>Comprar</Button>             
                </div>

                <div className="imgdir"><img src={tenis} style={{width:"95%"}} ></img>/</div>
                </div> 
                </Paper>
            </Stack>

                    <div className="icone">
                    
                    <br/>
                    </div>  
                    </Grid>
                    <Grid item xs={4}>       
            <Stack>
                <Paper sx={{ background:"#D8E3F2", width:"405px", height:"251px" }} elevation={2}>

                <div className="papers">
                        <div className="textoesq"> 
                        <h3 className="text secundary">Novo <br/>Beats Bass</h3>
                <Button sx={{
                width: 153, 
                height: 48,
                marginTop: 1,
                bgcolor: "#F5F5F5",
                color: "#C92071",
                textTransform: 'none',
                fontWeight: "X-Small Bold",
                fontSize: 14,
                }}>Comprar</Button>
                </div>

                <div className="imgdir"><img src={fone} style={{width:"95%"}} ></img></div>
                </div> 
                </Paper> 
            </Stack>

                    <div className="icone">
                    
                    <br/>
                    </div>  
                    </Grid>

                    <ColecoesDestaqueIcones/>
                    
                </Grid>

            
                </Container>
            </div>
        </>
    )
}