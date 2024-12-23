import { Box, TextField, Button, Grid, useMediaQuery, Input, IconButton,CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useTheme } from '@mui/material/styles';
import { useState, useRef } from 'react';
import styles from './styles';
import { createGreeting } from '~/services/greetingService';
import { useNavigate } from 'react-router-dom';
import imageCompression from 'browser-image-compression';


export default function MainGrid() {
    const [previewImage, setPreviewImage] = useState(
        '/main.jpg', // Default placeholder image
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

    const [loading, setLoading] = useState(false);

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


        setLoading(true);
        try {

            const formData = new FormData();
            formData.append('sender', collectData.sender);
            formData.append('message', collectData.message);
            if (selectedImage instanceof File) {

                const options = {
                    maxSizeMB: 1,
                    maxWidthOrHeight: 1920,
                    useWebWorker: true,
                };

                const compressedFile = await imageCompression(selectedImage, options);
                
                formData.append('image', compressedFile);
            }
    
            // Pass the FormData to the API service
            const data = await createGreeting(formData);
            console.log('Data created:', data);
            navigate('/thankyou')

        } catch (error) {
            console.error('Error fetching data:', error);
            alert('Lỗi khi gửi lời chúc', error.message);
        }
        finally {
            setLoading(false); // Stop loading
        }

    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    // const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

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
                            endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                            maxWidth="sm"
                            fullWidth
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Gửi'}
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
