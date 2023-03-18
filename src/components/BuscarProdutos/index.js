import React from "react";
import { FormControl, InputLabel, NativeSelect} from '@mui/material';
import { Container} from "@mui/system";


export default function BuscarProdutos(){

    const [select, setSelect] = React.useState('');

    const handleChange = (event) => {
        setSelect(event.target.value);
      };
  

    return(
        <>
            <Container>
                <div>
                    <h3>Resultados para “Tênis” - <span>389 produtos</span></h3>
                    <FormControl>  
                    <NativeSelect
                    defaultValue={1}>
                    <option value={1}>Ordenar por: Relevância</option>
                    <option value={2}>Ordenar por: Popularidade</option>
                    <option value={3}>Ordenar por: Preço (crescente)</option>
                    <option value={4}>Ordenar por: Preço (decrescente)</option>
                    </NativeSelect>
                    </FormControl>
                </div>
            </Container>
        </>
    )
}