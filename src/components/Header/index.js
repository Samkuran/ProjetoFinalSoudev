import React from "react";
import { Grid } from "@mui/material";

import "./style.css"
import Navbar from "../Navbar";
import Menu from "../Menu";

export default function Header (){
    return (
        <>
             <Grid direction="column" className='headerP' >
                <Navbar />
                <Menu />
            </Grid>
        </>
    )
}