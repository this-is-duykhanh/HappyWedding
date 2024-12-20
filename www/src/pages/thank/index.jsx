import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Thank(){

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Responsive check

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                textAlign: 'center',
                backgroundColor: '#f0f4f8',
                padding: isMobile ? '20px' : '40px',
            }}
        >
            <Typography
                variant={isMobile ? 'h3' : 'h2'}
                component="h1"
                fontWeight="bold"
                sx={{
                    color: '#28a745',
                    fontSize: isMobile ? '4rem' : '6rem',
                    lineHeight: 1.2,
                    marginBottom: '1rem',
                }}
            >
                Thank You!
            </Typography>
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    color: '#333',
                    marginTop: '1rem',
                    fontWeight: '500',
                    fontSize: isMobile ? '1.2rem' : '2rem',
                }}
            >
                Your request has been successfully submitted.
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    color: '#666',
                    marginTop: '1rem',
                    fontSize: isMobile ? '0.9rem' : '1.1rem',
                    maxWidth: '500px',
                }}
            >
                We will get back to you as soon as possible. In the meantime, feel free to explore more of our website!
            </Typography>
            <Button
                variant="contained"
                sx={{
                    marginTop: '2rem',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#0056b3' },
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    textTransform: 'none',
                }}
                component={Link}
                to="/"
            >
                Go to Homepage
            </Button>
        </Box>
    );
}