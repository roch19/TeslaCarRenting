import { Box, FormControl, InputLabel, List, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from "@mui/material";
import * as React from "react";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DatePicker, LocalizationProvider, MobileTimePicker  } from '@mui/x-date-pickers-pro';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


   

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

        <Toolbar sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          

}}>
            <List  >
                <Typography variant='h2' fontWeight='bold' textAlign="center" color= 'rgb(80,80,80)'>
                    Rent now Tesla car in Mallorca and take more pleasure from exploring
                </Typography>

                <Box position='static' sx={{ m: 4, display: 'flex', borderColor: 'text.primary', border: 1,  borderRadius: '16px' }} >
                    <FormControl sx={{ minWidth: 200, maxHeight: 55, m: 2, backgroundColor: 'transparent' }} >
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
                    <FormControl sx={{ minWidth: 200, maxHeight: 55, m: 2, backgroundColor: 'transparent' }}>
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

                    <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['SingleInputDateRangeField']}  >
                                <DateRangePicker slots={{ field: SingleInputDateRangeField }} sx={{ position: 'relative', m: 1, backgroundColor: 'transparent' }} />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>

                    <LocalizationProvider dateAdapter={AdapterDayjs} sx={{  position: 'relative' }} >

                        
                        <DemoContainer components={['StartTimePicker']} >
                            <MobileTimePicker 
                                label={''}
                                views={['hours', 'minutes']}
                                sx={{ maxHeight: 55, m: 1, backgroundColor: 'transparent' }}
                            />
                        </DemoContainer>

                        


                        <DemoContainer components={['StartTimePicker']} >
                            <MobileTimePicker 
                                label={''}
                                views={['hours', 'minutes']}
                                sx={{ maxHeight: 55, m: 1, backgroundColor: 'transparent' }}
                            />

                        </DemoContainer>
                    </LocalizationProvider>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                       
                    </LocalizationProvider>
                    <IconButton >
                        <SearchIcon sx={{ fontSize: 40, m: 1, backgroundColor: 'transparent' }} />
                    </IconButton>
                </Box>
            </List>
            
        </Toolbar >
   


    )
}