import { Button } from "@mui/material";

export default function BotaoOferta (props) {

    return (
        <Button sx={{
                width: 200, 
                height: 40,
                marginTop: 1,
                color: "#F5F5F5",
                bgcolor: "#C92071",
                textTransform: 'none',
                fontWeight: "X-Small Bold",
                fontSize: 14,
                "&:hover": {
                    color: "white",
                    bgcolor: "#7c1447",
                    transition: 300,
                },
            }}>
                
               {props.texto}
            
            </Button>
    )
}

