import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from "@mui/material";
import React from "react";



export default function GreetingDetailDialog({ open, onClose, greeting }) {
    const { sender, message, image, createdAt } = greeting;

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>Chi tiết lời chúc</DialogTitle>
            <DialogContent>
                <Typography variant="body1" gutterBottom>
                    { <img src={image? `${process.env.REACT_APP_BASE_URL}/images/${image}` : '/main.jpg'} alt="Ảnh" style={{width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', borderRadius:'10px'}}/> }

                </Typography>

                <Typography variant="body1" gutterBottom>
                    <strong>Tên người gửi:</strong> {sender}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong>Nội dung:</strong> {message}
                </Typography>
             
                <Typography variant="body1" gutterBottom>
                    <strong>Ngày tạo:</strong> {createdAt}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Đóng
                </Button>
            </DialogActions>
        </Dialog>
    );
}