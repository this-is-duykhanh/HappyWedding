import { Link, Typography } from '@mui/material';
import * as React from 'react';

export default function Footer(props) {
    return (
        <Typography
            variant="body2"
            align="center"
            {...props}
            sx={[
                {
                    color: 'text.secondary',
                },
                ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
            ]}
        >
            {'Copyright © '}
            <Link color="inherit" href="https://www.facebook.com/this.is.duykhanh">
                Duy Khanh Developer
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
