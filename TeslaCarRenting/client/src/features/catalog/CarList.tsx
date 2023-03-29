import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Car } from "../../app/models/car";
import CarCard from "./CarCard";


interface Props {
    cars: Car[];
}

export default function CarList({ cars }: Props) {
    return (
        <Grid container spacing={4} >
            {cars.map((car: any) => (
                <Grid item xs={4} key={car.id} >
                    <CarCard car={car} />
                </Grid>
            ))}
            
        </Grid>
    )
}