import React from "react";
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, MenuItem, Radio, RadioGroup, Select} from '@mui/material';
import { Container} from "@mui/system";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./style.css";
import Produto from "../Produto";


export default function BuscarProdutos(){
    const theme = createTheme({
        palette: {
          secondary: {
            main: '#C92071',
          },
        },
      });

    return(
        <>
        <div className="bgGray">
            <Container><ThemeProvider theme={theme}>
                <div className="buscarProdutos">
                    <h3>Resultados para “Tênis” - <span>389 produtos</span></h3>
                    <FormControl sx={{width: "332px", height: "60px", marginTop: "40px"}}>  
                    
                        <Select color="secondary" labelId="demo-simple-select-label" defaultValue={1} sx={{color: "#474747"}}>
                            <MenuItem value={1}><strong>Ordenar por:</strong> mais relevantes</MenuItem>
                            <MenuItem value={2}><strong>Ordenar por:</strong> mais populares</MenuItem>
                            <MenuItem value={3}><strong>Ordenar por:</strong> maior preço</MenuItem>
                            <MenuItem value={4}><strong>Ordenar por:</strong> menor preço</MenuItem>
                        </Select>
                    
                    </FormControl>
                </div>
                <Grid container>
                    <Grid item xs={3}>
                        <div className="filtrarProdutos">
                            <div>
                                <h3>Filtrar por</h3>
                                <hr/>

                                <FormGroup>
                                    <FormLabel component="legend" sx={{marginTop: '20px', marginBottom: '10px'}}>Marka</FormLabel>
                                    <FormControlLabel className="label-custom" control={<Checkbox defaultChecked color="secondary" sx={{'& .MuiSvgIcon-root':{ fontSize: 30 }}}/>} label="Adiddas" />
                                    <FormControlLabel className="label-custom" control={<Checkbox color="secondary" sx={{'& .MuiSvgIcon-root':{ fontSize: 30 }}}/>} label="Calenciaga"/>
                                    <FormControlLabel className="label-custom" control={<Checkbox defaultChecked color="secondary" sx={{'& .MuiSvgIcon-root':{ fontSize: 30 }}}/>} label="K-Swiss"/>
                                    <FormControlLabel className="label-custom" control={<Checkbox color="secondary" sx={{'& .MuiSvgIcon-root':{ fontSize: 30 }}}/>} label="Nike"/>
                                    <FormControlLabel className="label-custom" control={<Checkbox color="secondary" sx={{'& .MuiSvgIcon-root':{ fontSize: 30 }}}/>} label="Puma"/>
                                </FormGroup>

                                <FormGroup>
                                    <FormLabel component="legend" sx={{marginTop: '20px', marginBottom: '10px'}}>Categoria</FormLabel>
                                    <FormControlLabel className="label-custom" control={<Checkbox defaultChecked color="secondary" sx={{'& .MuiSvgIcon-root':{ fontSize: 30 }}}/>} label="Esporte e lazer" />
                                    <FormControlLabel className="label-custom" control={<Checkbox color="secondary" sx={{'& .MuiSvgIcon-root':{ fontSize: 30 }}}/>} label="Casual" />
                                    <FormControlLabel className="label-custom" control={<Checkbox color="secondary" sx={{'& .MuiSvgIcon-root':{ fontSize: 30 }}}/>} label="Utilitário" />
                                    <FormControlLabel className="label-custom" control={<Checkbox color="secondary" sx={{'& .MuiSvgIcon-root':{ fontSize: 30 }}}/>} label="Corrida" />
                                </FormGroup>

                                <FormGroup>
                                    <FormLabel component="legend" sx={{marginTop: '20px', marginBottom: '10px'}}>Gênero</FormLabel>
                                    <FormControlLabel className="label-custom" control={<Checkbox defaultChecked color="secondary" sx={{'& .MuiSvgIcon-root':{ fontSize: 30 }}}/>} label="Masculino" />
                                    <FormControlLabel className="label-custom" control={<Checkbox defaultChecked color="secondary" sx={{'& .MuiSvgIcon-root':{ fontSize: 30 }}}/>} label="Feminino" />
                                    <FormControlLabel className="label-custom" control={<Checkbox color="secondary" sx={{'& .MuiSvgIcon-root':{ fontSize: 30 }}}/>} label="Unisex" />
                                </FormGroup>

                                <FormControl>
                                    <FormLabel sx={{marginTop: '20px', marginBottom: '10px'}}>Estado</FormLabel>
                                    <RadioGroup  defaultValue="novo">
                                        <FormControlLabel value="novo" control={<Radio color="secondary"/>} label="Novo" />
                                        <FormControlLabel value="usado" control={<Radio color="secondary"/>} label="Usado" />
                                    </RadioGroup>
                                    </FormControl>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <div className="produtoInd">
                        <Produto/>
                        <Produto/>
                        <Produto/>
                        </div>
                        <div className="produtoInd">
                        <Produto/>
                        <Produto/>
                        <Produto/>
                        </div>
                        <div className="produtoInd">
                        <Produto/>
                        <Produto/>
                        <Produto/>
                        </div>
                    </Grid>
                </Grid>
            </ThemeProvider></Container>
        </div>
        </>
    )
}