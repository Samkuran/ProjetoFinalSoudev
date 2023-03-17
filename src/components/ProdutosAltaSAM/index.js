import { Container, Grid } from "@mui/material";
import ProdutosSoloSAM from "../ProdutosSoloSAM";

export default function ProdutosAltaSAM (){
    return (
        <>
            <Container>
                <h3>Produtos em alta</h3>
                <Grid container>
            
                <Grid item xs={3}>
                    <ProdutosSoloSAM/>
                </Grid>

                <Grid item xs={3}>
                    <ProdutosSoloSAM/>
                </Grid>

                <Grid item xs={3}>
                    <ProdutosSoloSAM/>
                </Grid>

                <Grid item xs={3}>
                    <ProdutosSoloSAM/>
                </Grid>
           
                </Grid>
            </Container>
        </>
    )
}