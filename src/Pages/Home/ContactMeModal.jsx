import { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Typography,
    Box
} from '@mui/material';

const ContactMeModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
            onClose(); // Close modal after submission
        }, 1500);
    };

    return (
        <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Contact Me</DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                    <TextField
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                    {submitted && (
                        <Typography variant="body2" color="success.main">
                            Message sent successfully!
                        </Typography>
                    )}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button type="submit" onClick={handleSubmit} variant="contained" disabled={submitted}>
                    {submitted ? 'Sending...' : 'Send'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ContactMeModal;
