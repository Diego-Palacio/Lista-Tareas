import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Fragment } from "react";

export const Tarea = ({tarea,index}) => {
   
    //bolleano que devuelve si la tarea ingresada es vacia
    let vacio= tarea !== "";

    return (
            <>

            { vacio? 
            
                <Card sx={{ maxWidth: 345, mt:2}}>
                    <CardActionArea> 
                        <CardContent>
                        
                        {tarea}     

                        </CardContent>
                    </CardActionArea>
                </Card> 
            :"" }
                
            </>            
        );
}
