import { Box, TextField, Button, Grid, useMediaQuery, Input, IconButton, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useTheme } from '@mui/material/styles';
import { useState, useRef } from 'react';
import styles from './styles';
import { createGreeting } from '~/services/greetingService';
import { useNavigate } from 'react-router-dom';

export default function MainGrid() {
    const [previewImage, setPreviewImage] = useState(
        'https://via.placeholder.com/400x300', // Default placeholder image
    );

    const [selectedImage, setSelectedImage] = useState(null);

    const [collectData, setCollectData] = useState({
        sender: '',
        message: '',
    });

    const navigate = useNavigate();

    const senderRef = useRef(null);
    const messageRef = useRef(null);

    const [errors, setErrors] = useState({ sender: '', message: '' });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);

            const reader = new FileReader();
            reader.onload = (event) => setPreviewImage(event.target.result);
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCollectData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission (optional)
    const handleSubmit = async (e) => {
        e.preventDefault();

        let formIsValid = true;
        const newErrors = {};

        if (!collectData.sender) {
            newErrors.sender = 'Please enter your name';
            formIsValid = false;
        }
        if (!collectData.message) {
            newErrors.message = 'Please enter your greeting';
            formIsValid = false;
        }

        setErrors(newErrors);

        if (!formIsValid) {
            if (newErrors.sender) senderRef.current.focus();
            else if (newErrors.message) messageRef.current.focus();
            return;
        }

        try {

            if (selectedImage instanceof File) {
                collectData.image = selectedImage
            }

            const data = await createGreeting(collectData);
            navigate('/thankyou')
            return

        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <Box sx={{ ...styles.greetingCard }}>
            {/* Left Section - Image */}
            <Box sx={{ ...styles.imageSection }}>
                <label htmlFor="imageUpload">
                    <img src={previewImage} alt="Selected" style={{ ...styles.previewImage }} />
                    <IconButton component="span" sx={{ ...styles.cameraIcon }}>
                        <CameraAltIcon />
                    </IconButton>
                </label>

                <Input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                />
            </Box>

            {/* Right Section - Form */}
            <Box sx={{ ...styles.formSection }}>
                <Box sx={{ ...styles.formGroup }}>
                    <TextField
                        placeholder="Nhập tên của bạn..."
                        label="Tên của bạn"
                        name="sender"
                        fullWidth
                        margin="dense"
                        value={collectData.sender}
                        onChange={handleChange}
                        error={!!errors.sender}
                        helperText={errors.sender}
                        inputRef={senderRef}
                        InputProps={{
                            sx: {
                                ...styles.input,
                            },
                        }}
                    />
                </Box>

                <Box sx={{ ...styles.formGroup }}>
                    <TextField
                        label="Lời chúc"
                        name="message"
                        placeholder="Nhập lời chúc..."
                        multiline
                        rows={isMobile ? 4 : 6}
                        fullWidth
                        margin="dense"
                        value={collectData.message}
                        onChange={handleChange}
                        variant="outlined"
                        error={!!errors.message}
                        helperText={errors.message}
                        inputRef={messageRef}
                        InputProps={{
                            sx: {
                                ...styles.input,
                            },
                        }}
                    />
                </Box>
                <Grid container>
                    <Grid item xs={12} md={3}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            endIcon={<SendIcon />}
                            maxWidth="sm"
                            fullWidth
                            onClick={handleSubmit}
                        >
                            Gửi
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
