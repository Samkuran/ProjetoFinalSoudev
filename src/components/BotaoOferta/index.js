import { Button } from "@mui/material";

export default function BotaoOferta () {

    return (
        <Button sx={{
                width: 200, 
                height: 40,
                marginTop: 1,
                color: "#F5F5F5",
                bgcolor: "#C92071",
                fontSize: 14,
                "&:hover": {
                    color: "white",
                    bgcolor: "#7c1447",
                    transition: 300,
                },
            }}>
                
               Ver oferta
            
            </Button>
    )
}

