import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Box, Typography, TextField, Button } from '@mui/material';

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const onTextChange = e => {
        const copy = { ...formData };
        copy[e.target.name] = e.target.value;
        setFormData(copy);
    }

    const onFormSubmit = async e => {
        e.preventDefault();
        await axios.post('/api/account/signup', formData);
        navigate('/login');
    }

    return (
        <Container maxWidth="lg" sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 1, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <Typography variant="h5" gutterBottom>
                    Sign up for a new account
                </Typography>
                <form onSubmit={onFormSubmit}>
                    <TextField
                        onChange={onTextChange}
                        value={formData.firstName}
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        onChange={onTextChange}
                        value={formData.lastName}
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        onChange={onTextChange}
                        value={formData.email}
                        type="text"
                        name="email"
                        placeholder="Email"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        onChange={onTextChange}
                        value={formData.password}
                        type="password"
                        name="password"
                        placeholder="Password"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Signup
                    </Button>
                </form>
            </Box>
        </Container>
    );

}

export default Signup;