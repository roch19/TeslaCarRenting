import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Car } from "../../app/models/car";

interface Props {
    car: Car;
}

export default function CarCard({ car }: Props) {
    return (

        <Card
            sx={{ backgroundColor: 'rgba(255,255,255, 0.6)' } }        >
            <CardHeader
                avatar={
                    <Avatar>
                        {car.make.charAt(0).toUpperCase()}

                    </Avatar>
                }
                title={car.make}
                titleTypographyProps={{
                    sx: {fontWeight: 'bold', color: 'primary.main' }
                }}
            />
            <CardMedia 
                sx={{ height: 140, backgroundSize:'contain' }}
                image={car.picture}
                title={car.model}
            />
            <CardContent>
                <Typography gutterBottom color='secoundary' variant="h5" >
                    {car.numberOfSits}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {car.make} / {car.id} / {car.model}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
       
}