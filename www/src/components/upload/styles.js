import { height, margin, maxHeight, minHeight, textAlign } from "@mui/system";

const styles = {
    input: {
        appearance: 'none',
        fontSize: '1.2rem',
    },

    greetingCard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '100%',
        margin: '0 auto',
        padding: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        backgroundImage: `url("/background.jpg")`,

        '@media (max-width: 768px)': {
            flexDirection: 'column',
        },
        '@media (min-width: 768px)': {
            width: '80vw',
            height: '26.25rem',
            padding: 0,
        },
    },

    cameraIcon: {
        position: 'absolute',
        top: '10px',
        left: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        padding: '5px',
        borderRadius: '50%',
        fontSize: '20px',
        cursor: 'pointer',
    },

    imageSection: {
        flex: 1,
        position: 'relative',
        minWidth: '65%',
        '@media (max-width: 768px)': {
            width: '100%',
        },

        '@media (min-width: 768px)': {
            height: '100%',
        },
    },

    previewImage: {
        width: '100%',
        borderRadius: '10px',
        objectFit: 'cover', // Ensures the image covers the container
    
        // Default settings (for mobile)
        aspectRatio: '16 / 9', // 16:9 aspect ratio for mobile (landscape)
    },
    

    formSection: {
        flex: 1,
        padding: '20px',
        '@media (max-width: 768px)': {
            width: '100%',
        },

        '@media (min-width: 768px)': {
            flex: 1,
            marginTop: '1rem',
        },
    },

    formGroup: {
        marginBottom: '1rem',
    },
};

export default styles;