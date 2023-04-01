import { Box, FormControl, InputLabel, List, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from "@mui/material";
import * as React from "react";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';


   

export default function HomePage() {
    const [locationS, setStartLocation] = React.useState('');

    const handleChangeLocationStart = (event: SelectChangeEvent) => {
        setStartLocation(event.target.value as string);
    };

    const [locationE, setEndLocation] = React.useState('');
    const handleChangeLocationStop = (event: SelectChangeEvent) => {
        setEndLocation(event.target.value as string);
    };
 

    return (

        <Toolbar>
            <List>
                <Typography variant='h2' textAlign="center" fontFamily="">
                    Rent now Tesla car in Mallorca and take more pleasure from exploring
                </Typography>

                <Box position = 'static' sx={{ m: 4, backgroundColor: 'rgba(255,200,100, 0.5)' }} >
                    <FormControl sx={{ minWidth: 200, m: 1, backgroundColor: 'rgba(255,255,255, 1)' }} >
                        <InputLabel id="selectRentLocationLabel">Rent</InputLabel>
                        <Select
                            labelId="selectRentLocationLabel"
                            id="selectRentLocation"
                            value={locationS}
                            label="location"
                            onChange={handleChangeLocationStart}
                        >
                            <MenuItem value="Palma Aiport" >Palma Aiport</MenuItem>
                            <MenuItem value="PPalma City Center">Palma City Center</MenuItem>
                            <MenuItem value="Alcudia" >Alcudia</MenuItem>
                            <MenuItem value="Manacor" >Manacor</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ minWidth: 200, m: 1, backgroundColor: 'rgba(255,255,255, 1)' }}>
                        <InputLabel id="selectLeaveLocationLabel">Leave</InputLabel>
                        <Select
                            labelId="selectLeaveLocationLabel"
                            id="selectLeaveLocation"
                            value={locationE}
                            label="location"
                            onChange={handleChangeLocationStop}
                        >
                            <MenuItem value="Palma Aiport" >Palma Aiport</MenuItem>
                            <MenuItem value="PPalma City Center">Palma City Center</MenuItem>
                            <MenuItem value="Alcudia" >Alcudia</MenuItem>
                            <MenuItem value="Manacor" >Manacor</MenuItem>
                        </Select>
                    </FormControl>
                    {/*<LocalizationProvider dateAdapter={AdapterDayjs}>*/}
                    {/*    <DemoContainer components={['DateRangePicker']}>*/}
                    {/*        <DemoItem label="No elo" component="DateRangePicker">*/}
                    {/*            <DateRangePicker calendars={1}/>*/}
                    {/*        </DemoItem>*/}
                    {/*    </DemoContainer>*/}
                    {/*</LocalizationProvider>*/}
                   
                </Box>
            </List>


            {/*<LocalizationProvider dateAdapter={AdapterDayjs}>*/}
            {/*    <DemoContainer components={['DateRangePicker', 'DateRangePicker', 'DateRangePicker']}*/}
            {/*    >*/}
            {/*        <DemoItem label="1 calendar" component="DateRangePicker">*/}
            {/*            <DateRangePicker calendars={1} />*/}
            {/*        </DemoItem>*/}
            {/*        <DemoItem label="2 calendars" component="DateRangePicker">*/}
            {/*            <DateRangePicker calendars={2} />*/}
            {/*        </DemoItem>*/}
            {/*        <DemoItem label="3 calendars" component="DateRangePicker">*/}
            {/*            <DateRangePicker calendars={3} />*/}
            {/*        </DemoItem>*/}
            {/*    </DemoContainer>*/}
            {/*</LocalizationProvider>*/}
          

        </Toolbar >


    )
}