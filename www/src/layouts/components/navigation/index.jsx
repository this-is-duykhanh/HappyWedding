import { PhoneInTalk as  PhoneInTalkIcon } from '@mui/icons-material';
import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';


const Navigation = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open);
    };

    return (
        <AppBar position="fixed" className="custom-navbar" color="default">
            <Toolbar>
                {/* Logo */}
                {/* <IconButton component={Link} to="/" edge="start" color="inherit" aria-label="logo">
                    <img src="/image/logo1.png" alt="Logo" width="150" height="50" />
                </IconButton> */}

                <Box
                    sx={{
                        // display: { 
                        //     xs: 'none', 
                        //     md: 'flex' 
                        // },

                        display: 'flex',
                        alignItems: 'center',
                    }}
                >

                    {/* Home */}
                    <IconButton
                        component={Link}
                        to="/"
                        color="inherit"
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        {/* Icon */}
                        <i className="bi bi-house-door"></i>

                        {/* Typography */}
                        <Typography variant="body2" sx={{ ml: 1, display: 'flex', alignItems: 'center' }}>
                            Trang chủ
                            <HomeIcon sx={{ ml: 0.5, scale: 0.9 }} />
                        </Typography>
                    </IconButton>

                    
                    <IconButton
                        component={Link}
                        to="/contact"
                        color="inherit"
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        {/* Icon */}
                        <i className="bi bi-cart2"></i>

                        {/* Typography */}
                        <Typography variant="body2" sx={{ ml: 1, display: 'flex', alignItems: 'center' }}>
                            Liên lạc
                            <PhoneInTalkIcon sx={{ ml: 0.5, scale: 0.9 }} />
                        </Typography>
                    </IconButton>

                    
                </Box>

                {/* Menu Icon */}
                {/* <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                        marginLeft: 'auto',
                    }}
                >
                    <MenuIcon />
                </IconButton> */}

                {/* Drawer */}
                <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                    <Box
                        sx={{ width: 250, padding: 2 }}
                        role="presentation"
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.stopPropagation()}
                    >
                        <List>
                            <ListItem button component={Link} to="/upload">
                                <ListItemText primary="Upload" />
                            </ListItem>

                            <ListItem button component={Link} to="/contact">
                                <ListItemText primary="Contact" />
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
