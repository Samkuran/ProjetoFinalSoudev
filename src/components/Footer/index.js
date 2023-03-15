import { Container, Grid } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./style.css";

import vetor from "./Vectorfooter.png";

export default function Footer () {
    return (
        <>
            <footer style={{backgroundColor: "#1F1F1F", color: "white"}}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <div className="conjfooter">
                                <img alt="logo da Digital College" className="logofooter1" src={vetor}/>
                                <a href="newtab" className="logofooter2">Digital Store</a>
                            </div>
                            <p className="textofooter">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                            </p>
                            <div className="iconesfooter">
                                <FacebookIcon/>
                                <InstagramIcon/>
                                <TwitterIcon/>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <h4>Informação</h4>
                            <a href="newtab">Sobre Drip Store</a>
                            <a href="newtab">Segurança</a>
                            <a href="newtab">Wishlist</a>
                            <a href="newtab">Blog</a>
                            <a href="newtab">Trabalhe conosco</a>
                            <a href="/meus-pedidos">Meus Pedidos</a>
                        </Grid>
                        <Grid item xs={2.5}>
                            <h4>Categorias</h4>
                            <a href="newtab">Camisetas</a>
                            <a href="newtab">Calças</a>
                            <a href="newtab">Bonés</a>
                            <a href="newtab">Headphones</a>
                            <a href="newtab">Tênis</a>
                        </Grid>
                        <Grid item xs={2.5}>
                            <h4>Contato</h4>
                            <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                            <p>(85) 3051-3411</p>
                        </Grid>
                    </Grid>
                    <hr/>
                    <span>@ 2022 Digital College</span>
                </Container>
            </footer>
        </> 
    )
}