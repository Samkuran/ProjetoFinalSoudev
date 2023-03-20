import React from "react";
import vetor from "./Vector.png";
import {TextField, InputAdornment, Button, Badge, Container, IconButton, Grid} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./styles.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Navbar (){

    const theme = createTheme({
        palette: {
          secondary: {
            main: '#C92071',
          },
        },
      });

    return(
        <>
        <Container>

           <Grid container direction="row">

            <Grid item id="conjlogo" xs={3}>
                <img id="vetor" alt="logo da Digital College" src={vetor}/>
                <a href="newtab" id="logo">Digital Store</a>
            </Grid>

            <Grid item xs={5}>
                <ThemeProvider theme={theme}>
                    <TextField color="secondary" fullWidth
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><SearchIcon/></InputAdornment>,}}
                        label="Pesquisar produto..."/>    
                </ThemeProvider>
            </Grid>

            <Grid item xs={3}>
                <div className="conjCadastro">
                <a href="newtab" className="cadastro">Cadastre-se</a>

                <Button sx={{
                    width: 114, 
                    height: 40,
                    color: "white",
                    bgcolor: "#C92071",
                    "&:hover": {
                        color: "white",
                        bgcolor: "#7c1447",
                        transition: 300,
                    },
                }}>Entrar</Button>
                </div>
            </Grid>

            <Grid item xs={1} sx={{display: "flex", justifyContent: "end"}}>

            <ThemeProvider theme={theme}>
                <IconButton color="secondary" aria-label="add to shopping cart">
                    <Badge badgeContent={0} showZero color="secondary">
                        <ShoppingCartOutlinedIcon sx={{color: "#C92071", width: "33px"}}/>
                    </Badge>
                </IconButton>
            </ThemeProvider>
            </Grid>

        </Grid>

   </Container>
        </>
    );
}
