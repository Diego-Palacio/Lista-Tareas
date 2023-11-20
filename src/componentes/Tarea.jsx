import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Fragment } from "react";

export const Tarea = ({tarea,index}) => {
   

    return (
            <>

                <Card sx={{ maxWidth: 345, mt:2}}>
                <CardActionArea> 
                    <CardContent>

                        <li key={index}> {tarea} </li>

                    </CardContent>
                </CardActionArea>
                </Card>
            </>            
        );
}
