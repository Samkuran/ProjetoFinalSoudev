import React from "react";
import vetor from "./Vector.png";
import {TextField, InputAdornment, Button, Badge, Container} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./styles.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



export default function Navbar (){

    return(
        <>
        <Container>
            <div className="header">
            <section id="conjlogo">
                <img id="vetor" alt="logo da Digital College" src={vetor}/>
                <a href="newtab" id="logo">Digital Store</a>
            </section>
            
            <TextField color="secondary"
            InputProps={{
                endAdornment: <InputAdornment position="end"><SearchIcon/></InputAdornment>,}}
            sx={{
                width: 560,
                marginLeft: 3,
                }}
            label="Pesquisar produto..."/>    

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
        <div className="carrinho">
            <Badge badgeContent={4}>
                <ShoppingCartOutlinedIcon sx={{color: "#C92071",}}/>
            </Badge>
        </div>
           
           
        </div>
   </Container>
        </>
    );
}
