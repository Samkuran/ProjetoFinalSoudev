import React from 'react';
import { Card, Grid, Stack, Button, Container, Fab, Breadcrumbs, Typography, Link } from '@mui/material';
import { useParams } from 'react-router-dom';
import tenis01 from './img/tenis01.png';
import tenis02 from './img/tenis02.png';
import tenis03 from './img/tenis03.png';
import tenis04 from './img/tenis04.png';
import tenis05 from './img/tenis05.png';
import star from './img/star.png';
import { ChevronLeft, ChevronRight, Height, Star, StarOutline } from '@mui/icons-material';
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";



export default function DetalhesProduto(){
        const {id} = useParams();
        const[atual, setAtual] = React.useState(0);
        const[color, setColor] = React.useState();
        const[tamanho, setTamanho] = React.useState();

        const imagens = [
            tenis01,
            tenis02,
            tenis03,
            tenis04,
            tenis05,
        ];

        const Items = () => {

            return imagens.map((cada, posicao) => {
                return (
                        <Grid item xs={2.4}>
                        <Card className='card-produtos-inferior' onClick={() => setAtual(posicao)} sx={(atual === posicao) && {border: "2px solid #C92071"}}>
                                <img src={cada} width="100%" alt="" />
                            </Card>
                        </Grid>
                    
                );
                
            });

        }

        function anterior(){
            if(atual === 0){
                setAtual(imagens.length - 1);
            } else {
                setAtual(atual - 1);
            }
        }

        function proximo(){
            if(atual < imagens.length - 1){
                setAtual(atual + 1);
            } else {
                setAtual(0)
            }
            
        }

        // const [nome, setNome] = React.useState();

        React.useEffect(() => {
            let intervalo = setInterval(proximo, 3000);

            return() => clearInterval(intervalo);
        });

        function handleClick(event) {
            event.preventDefault();
            console.info('You clicked a breadcrumb.');
        }
 
        return (
            <div>
            <Header />

            <div className="product-details">
                 {id}
                <Container>
                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Typography color="text.primary">Home</Typography>
                            <Link underline="hover" color="inherit" href="/">
                            Produtos
                            </Link>
                            <Link underline="hover" color="inherit" href="/">
                            Tênis
                            </Link>
                            <Link underline="hover" color="inherit" href="/">
                            Nike
                            </Link>
                            <Link underline="hover" color="inherit" href="/">
                            Tênis Nike Revolution 6 Next Nature Masculino
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <br></br>
                    <Grid container spacing={3}>
                        <Grid item xs={7}>
                            <Card className='card-produtos' align="center">
                                <Stack direction="row" sx={{justifyContent: "space-between", alignItems: "center"}}>
                                    <ChevronLeft className='posicao-slider' sx={{fontSize: "60px"}} onClick={anterior}/>
                                        <img className='posicao-tenis' width="400px" src={imagens[atual]} alt="" />
                                    <ChevronRight className='posicao-slider' sx={{fontSize: "60px"}} onClick={proximo}/>
                                </Stack>
                            </Card>
                           <br></br>
                            <Grid container spacing={2}>
                                <Items />
                            </Grid>
                        </Grid>
                        <Grid item xs={5}>
                           <div className='title'>
                           Tênis Nike Revolution <br></br>6 Next Nature Masculino
                           </div>
                           <div className='ref'>
                           Casual | Nike | REF:38416711
                            </div>
                            <Grid container spacing={1}>
                                <Grid item sx={3}>
                                    <div className='reviews'>
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <StarOutline />
                                    </div>
                                </Grid>
                                <Grid item sx={1}>
                                   <Card className='nivel-estrelas'>
                                        <div className='conteudo-nivel'>
                                            <p>4.7<img src={star} /></p>
                                        </div>
                                   </Card>
                                   
                                </Grid>
                                <Grid item sx={2} className='texto-avaliacao'>
                                   (90 avaliações)
                                </Grid>
                                
                            </Grid>
                           
                            <div className='valor'>
                                <p><span className='texto-preco'>R$219,00</span> <s className='riscado'>219</s></p>
                            </div>
                            <div>
                                <p className='titulo-descricao-produto'>Descrição do produto</p>
                                <p className='descricao-texto-produto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            </div>
                            <p className='titulo-detalhes'>Tamanho:{tamanho}</p>
                            <Grid container spacing={1}>
                                <Grid item xs={1}>
                                    <Card className='tamanhos conteudo-tamanho' onClick={() => setTamanho('39')}>
                                            39
                                    </Card>
                                </Grid>
                                <Grid item xs={1}>
                                    <Card className='tamanhos conteudo-tamanho' onClick={() => setTamanho('40')}>
                                            40
                                    </Card>
                                </Grid>
                                <Grid item xs={1}>
                                    <Card className='tamanhos conteudo-tamanho' onClick={() => setTamanho('41')}>
                                            41
                                    </Card>
                                </Grid>
                                <Grid item xs={1}>
                                    <Card className='tamanhos conteudo-tamanho' onClick={() => setTamanho('42')}>
                                            42
                                    </Card>
                                </Grid>
                                <Grid item xs={1}>
                                    <Card className='tamanhos conteudo-tamanho' onClick={() => setTamanho('43')}>
                                            43
                                    </Card>
                                </Grid>
                            </Grid>
                            <p className='titulo-detalhes'>Cor: <small>{color}</small></p>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <Fab className='itens-cores1' sx={{width: "35px", height: "20px", backgroundColor:"#6FEEFF"}} onClick={() => setColor('Azul')}></Fab>
                                </Grid>
                                <Grid item>
                                    <Fab className='itens-cores2' sx={{width: "35px", height: "20px", backgroundColor:"#FF6969"}} onClick={() => setColor('Rosa')}></Fab>
                                </Grid>
                                <Grid item>
                                    <Fab className='itens-cores3' sx={{width: "35px", height: "20px", backgroundColor:"#5E5E5E"}} onClick={() => setColor('Cinza')}></Fab>
                                </Grid>
                                <Grid item>
                                    <Fab className='itens-cores4' sx={{width: "35px", height: "20px", backgroundColor:"#6D70B7"}} onClick={() => setColor('Roxo')}></Fab>
                                </Grid>
                            </Grid>
                            <br></br>
                            <div>
                                <Button className='buy button-comprar'>COMPRAR</Button>
                            </div>
                            
                        </Grid>
                    </Grid>
                    <br /><br />
                </Container>                   
            </div>
            <Footer />
            </div>
 
        )
}
 
