import { Fragment, useEffect, useState } from "react";
import { Avatar, Button, List, ListItem, ListItemText } from "@mui/material";
import { Car } from "../../app/models/car";
import { ListItemAvatar } from "@mui/material";
import CarList from "./CarList";


export default function Catalog() {
    const [cars, setCars] = useState<Car[]>([])


    useEffect(() => {
        fetch('http://localhost:5000/teslaCarRenting/CarsControler')
            .then(response => response.json())
            .then(data => setCars(data))
    }, []) //need to use [] as table it will be done once  

    return (
        <>
            <CarList cars={cars} />
        </>
        )
}