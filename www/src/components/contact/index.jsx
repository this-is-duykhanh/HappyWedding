import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';

import Avatar from '@mui/material/Avatar';

import { Link } from 'react-router-dom';

const styles = {
    button: {
        width: '100%',
        maxWidth: '300px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '30px',
        padding: '10px 20px',
        fontSize: '16px',
        color: '#333',
        textAlign: 'left',
        marginBottom: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
    },
};

const SocialButton = ({ to, icon, label }) => (
    <IconButton
        component={Link}
        to={to}
        color="inherit"
        sx={{
            ...styles.button,
        }}
    >
        {icon}
        <Typography variant="body2" sx={{ ml: 1 }}>
            {label}
        </Typography>

        <Typography variant="body2" sx={{ ml: 1 }}>
            ...
        </Typography>
    </IconButton>
);

export default function MainGrid() {
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: { sm: '100%', md: '1700px' },
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                paddingTop: 4,
                flexGrow: 1,
            }}
        >
            {/* cards */}

            <Avatar alt="Remy Sharp" src="/avatar.jpg" sx={{ width: 100, height: 100, mb: 2}} />

            {/* Name and Tagline */}
            <Typography component="div" variant="h4" sx={{ mb: 2 }}>
                Thúy Mai
            </Typography>

            <Typography component="div" variant="h5" sx={{ mb: 2, fontSize: '16px', color: '#666' }}>
                Chasing dream ❤️
            </Typography>

            {/* Contact Buttons */}

            <SocialButton to="https://www.facebook.com/maipy998" icon={<FacebookOutlinedIcon />} label="Facebook" />

            <SocialButton
                to="https://www.tiktok.com/@mymeoo98"
                icon={
                    <svg
                        fill="#000000"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="24px"
                        height="24px"
                    >
                        <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
                    </svg>
                }
                label="TikTok"
            />

            <SocialButton to="/instagram.com" icon={<InstagramIcon />} label="Instagram" />
            <SocialButton to="/gmail.com" icon={<EmailIcon />} label="Gmail" />
        </Box>
    );
}
