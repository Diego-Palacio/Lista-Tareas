import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Fragment } from "react";

export const Tarea = () => {
   

    return (
            <>
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea> 
                    <CardContent>

                    <Typography gutterBottom variant="h5" component="div">
                        Titulo de tarea
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        Desarrollo de la tarea
                    </Typography>

                    </CardContent>
                </CardActionArea>
                </Card>
            </>            
        );
}
