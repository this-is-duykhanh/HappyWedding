import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";
import GreetingTable from "./greetingTable";

import { IconButton } from "@mui/material";

import { Link } from "react-router-dom";

import PostAddIcon from "@mui/icons-material/PostAdd";

export default function MainGrid() {
    return (
        <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
            {/* cards */}


            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                Tất cả lời chúc
            </Typography>

            <IconButton component={Link} to="/upload" color="inherit"  sx={{ display: "flex", alignItems: "center", width: "fit-content", mb: 2 }}>
                <i className="bi bi-box-seam"></i>
                <Typography variant="body2" sx={{ ml: 1, display: 'flex', alignItems: 'center' }}>
                Gửi lời chúc<PostAddIcon sx={{ ml: 0.5, scale: 0.9 }} />
                    
                </Typography>
            </IconButton>

            <Grid container spacing={2} columns={12}>
                <Grid size={{ xs: 12, lg: 12 }}>
                    {/* ADD TABLE */}
                    <GreetingTable />
                </Grid>
                <Grid size={{ xs: 12, lg: 3 }}>
                    <Stack
                        gap={2}
                        direction={{ xs: "column", sm: "row", lg: "column" }}
                    ></Stack>
                </Grid>
            </Grid>
        </Box>
    );
}
