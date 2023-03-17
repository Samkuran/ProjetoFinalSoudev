import { Avatar, Container, Grid } from "@mui/material";
import "./styles.css";
import camisetas from "./camiseta.svg";
import calcas from "./calca.svg";
import bones from "./bone (4).svg";
import tenisi from "./teniss.svg";
import fones from "./fone.svg";
import camisetasrosa from "./camisetaROSA.svg";
import calcasrosa from "./calcaROSA.svg";
import bonesrosa from "./boneROSA.svg";
import tenisirosa from "./tenissROSA.svg";
import fonesrosa from "./foneROSA.svg";
import { Link } from "react-router-dom";
import React from "react";

export default function ColecoesDestaqueIcones (){

    const colecoes = [
  { nome: "Camisetas", imagem: camisetas },
  { nome: "Calças", imagem: calcas },
  { nome: "Bonés", imagem: bones },
  { nome: "Headphones", imagem: fones},
  { nome: "Tênis", imagem: tenisi },
];

const Sections = () => {
    return colecoes.map((cada) => {
        return (

            <Grid item className="iconeslinks">
                <Avatar sx={{ bgcolor: "white", height: "104px", width: "104px" }}>
                        <img src={cada.imagem}></img>
                </Avatar>
                <Link to="">{cada.nome}</Link>
            </Grid>
        );
    }); 
}

    const [iproduto, setIproduto] = React.useState (0)

    return (
        <>
          <div className="bgGray">
             <Container>
                    <h3>Coleções em destaque</h3>
                    <Grid container  direction="row" justifyContent="center" alignItems="center"  spacing={2}> 
                        <Sections/>
                    </Grid>
             </Container>
          </div>
        </>
    )
}