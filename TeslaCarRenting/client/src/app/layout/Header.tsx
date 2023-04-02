import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Badge, Icon, List, ListItem } from '@mui/material';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import { NavLink } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';
import NoCrashIcon from '@mui/icons-material/NoCrash';

const Links = [

    { title: 'cars', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
    

]

export default function Header() {
    return (
        <AppBar position='static' sx={{ mb: 4 , backgroundColor: 'rgba(255,200,100, 0.2)' }} >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>

                <Typography variant='h4' component={NavLink} to='/'
                    sx={{
                        color: 'inherit', textDecoration: 'none', '&:hover': {
                            color: 'lightblue'
                        },
                        '&.active': {
                            color: 'text.secondary'
                        }
}} >
                   <DriveEtaIcon fontSize='large' />
                    RentME!
                </Typography>

            
                <Box display='flex' alignItems='center' >

                    <IconButton component={NavLink} to='reservations' size='large' edge='start' color='inherit' sx={{ mr: 2 }}>
                        <Badge badgeContent='' color="success">
                            <NoCrashIcon />
                        </Badge>
                    </IconButton>



                    <List sx={{ display: 'flex' }}>
                        {Links.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={{
                                    color: 'inherit',
                                    typography: 'h6',
                                    '&:hover': {
                                        color: 'lightblue'
                                    },
                                    '&.active': {
                                        color: 'text.secondary'
                                    }
                                }}                    >

                                {title.toUpperCase()}
                            </ListItem>
                        ))}

                    </List>
                
                </Box>
            
            </Toolbar>
        </AppBar>
    )
}