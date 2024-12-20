import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Page404 () {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                textAlign: 'center',
                backgroundColor: '#f8f9fa',
                padding: isMobile ? '20px' : '40px',
            }}
        >
            <Typography
                variant={isMobile ? 'h2' : 'h1'}
                component="h1"
                fontWeight="bold"
                sx={{ color: '#d3d3d3', fontSize: isMobile ? '8rem' : '10rem', lineHeight: 1 }}
            >
                404
            </Typography>
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    color: '#333',
                    marginTop: '-1rem',
                    fontWeight: '500',
                    fontSize: isMobile ? '1.5rem' : '2.5rem',
                }}
            >
                Không tìm thấy trang
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
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
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
                Về trang chủ
            </Button>
        </Box>
    )
}