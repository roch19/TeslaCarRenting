import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Car } from "../../app/models/car";
import PersonIcon from '@mui/icons-material/Person';
import ColorLensIcon from '@mui/icons-material/ColorLens';

interface Props {
    car: Car;
}

export default function CarCard({ car }: Props) {
    return (

        <Card
            sx={{ backgroundColor: 'rgba(255,255,255, 0.6)' } }        >
            {/*<CardHeader*/}
            {/*    avatar={*/}
            {/*        <Avatar>*/}
            {/*            {car.make.charAt(0).toUpperCase()}*/}

            {/*        </Avatar>*/}
            {/*    }*/}
            {/*    title={car.make}*/}
            {/*    titleTypographyProps={{*/}
            {/*        sx: {fontWeight: 'bold', color: 'primary.main' }*/}
            {/*    }}*/}
            {/*/>*/}
            <CardMedia 
                sx={{ height: 140, backgroundSize:'contain' }}
                image={car.picture}
                title={car.model}
            />
            
            <CardContent>
                <Grid container spacing={6}>
                    <Grid item xs={6}>
                <Typography gutterBottom color='secoundary' fontWeight='bold' variant="h6" >
                    {car.make} {car.model}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    <PersonIcon /> {car.numberOfSits} / <ColorLensIcon /> {car.color}
                    </Typography>
                       </Grid>
                
                    <Grid item xs={6}>
                        <Typography alignContent="d" variant="h5" color="green" marginTop="2">
                            100$/ day
                        </Typography>
                    </Grid>
                </Grid>

            </CardContent>
            <CardActions>

                <Button component={Link} to={`/catalog/${car.id}`} size="medium" color="success">Details</Button>
            </CardActions>
        </Card>
    )
       
}