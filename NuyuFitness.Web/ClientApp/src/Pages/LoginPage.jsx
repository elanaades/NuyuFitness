import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import getAxios from '../components/AuthAxios'
import { useAuth } from '../components/UserAuth';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isValidLogin, setIsValidLogin] = useState(true);
    const { setUser } = useAuth();
    const navigate = useNavigate();

    const onTextChange = e => {
        const copy = { ...formData };
        copy[e.target.name] = e.target.value;
        setFormData(copy);
    }

    const onFormSubmit = async e => {
        try {
            e.preventDefault();
            const { data } = await getAxios().post('/api/account/login', formData);
            const { token } = data;
            localStorage.setItem('auth-token', token);
            setIsValidLogin(true);
            const { data: user } = await getAxios().get('/api/account/getcurrentuser');
            setUser(user);
            navigate('/');
        }
        catch (e) {
            setIsValidLogin(false);
        }
    }

    return (
        <Container maxWidth="lg" sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 1, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <Typography variant="h5" gutterBottom>
                    Log in to your account
                </Typography>
                {!isValidLogin && <Typography variant="body2" color="error">Invalid username/password. Please try again.</Typography>}
                <form onSubmit={onFormSubmit}>
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
                        Login
                    </Button>
                </form>
                <Box mt={2}>
                    <Link to="/signup" variant="body2">
                        Sign up for a new account
                    </Link>
                </Box>
            </Box>
        </Container>
    );
}


export default Login;