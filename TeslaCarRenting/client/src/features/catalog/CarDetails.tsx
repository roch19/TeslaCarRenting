import { Button, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { error } from "console";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Car } from "../../app/models/car";

export default function CarDetails() {

    const { id } = useParams<{ id: string }>();

    const [car, setCar] = useState<Car | null>(null);
    const [loading, setLoading] = useState(true); 


    useEffect(() => {
        axios.get(`http://localhost:5000/teslaCarRenting/CarsControler/${id}`)
            .then(response => setCar(response.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [id])

    if (loading) return <h3>Loading...</h3>

    if(!car) return <h3>Car not found</h3>

    return (
        <Grid container spacing={6}>
            <Grid item xs={6}>
                <img src={car.picture} alt={car.make} style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h3'>{car.make}</Typography>
                <Divider sx={{ mb: 2 }} />
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Model</TableCell>
                                <TableCell>{car.model}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Seating Capacity</TableCell>
                                <TableCell>{car.numberOfSits}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Color</TableCell>
                                <TableCell>{car.color}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Location</TableCell>
                                <TableCell>location</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Price</TableCell>
                                <TableCell>$</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>
                                    <Button size="large">Rent right now</Button>
                                </TableCell>
                                
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}