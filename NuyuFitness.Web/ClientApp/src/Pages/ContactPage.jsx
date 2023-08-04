import React, { useState } from 'react';
import axios from 'axios';
import {
    Typography,
    Container,
    Box,
    Card,
    CardContent,
    Grid,
    TextField,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Button,
    Link,
    IconButton,
} from '@mui/material';
import { Instagram, Facebook } from '@mui/icons-material';



const services = [
    "Personal Training",
    "Small Group Training",
    "Nutrition",
    "Trainer Space Rental",
    "Health Coaching",
];


const ContactPage = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedServices, setSelectedServices] = useState([]);
    const [otherNotes, setOtherNotes] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (e) => {
        setIsSubmitting(true);
        e.preventDefault();
        await axios.post('/api/ContactPage/add', {
            firstName,
            lastName,
            email,
            phone,
            services: selectedServices.join(', '),
            otherNotes,
        })
        resetForm();
        setIsSubmitting(false);

    };

    const handleCheckboxChange = svc => {
        if (selectedServices.includes(svc)) {
            setSelectedServices(selectedServices.filter(s => s !== svc));
        } else {
            setSelectedServices([...selectedServices, svc]);
        }
    };

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setSelectedServices([]);
        setOtherNotes('');
    }

    const isFormValid = !!firstName && !!lastName && !!email && !!phone && selectedServices.length !== 0;

    return (
        <Container maxWidth="lg">
            <Box mt={3}>
                {/* Contact Section */}
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Contact Information
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    615-2 West Park Avenue
                                    <br />
                                    Oakhurst, NJ 07755
                                    <br />
                                    <span style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>
                                        (Located on the 2nd Floor in the Park Avenue Tennis Center)
                                    </span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body1">
                                    732.201.2074
                                </Typography>
                                <Typography variant="body1">
                                    <Link href="mailto:info@nuyufit.com" color="inherit">
                                        info@nuyufit.com
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Box display="flex" alignItems="center">
                                    <Instagram />
                                    <IconButton component={Link} href="https://www.instagram.com" target="_blank">
                                        {/* Add Instagram icon here */}
                                    </IconButton>
                                    <Facebook />
                                    <IconButton component={Link} href="https://www.facebook.com" target="_blank">
                                        {/* Add Facebook icon here */}
                                    </IconButton>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

                {/* Space between the two cards */}
                <Box mt={3} />

                {/* Form Section */}
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h4" component="h2" color="primary" gutterBottom>
                            You have questions, we have answers!
                        </Typography>
                        <form onSubmit={onSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        label="First Name"
                                        fullWidth
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        label="Last Name"
                                        fullWidth
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        label="Phone"
                                        fullWidth
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        label="Email"
                                        fullWidth
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">What services are you interested in? (please select at least one service)</Typography>
                                    {services.map(s => {
                                        return (
                                            <FormControlLabel
                                                key={s}
                                                control={
                                                    <Checkbox
                                                        value={s}
                                                        checked={selectedServices.includes(s)}
                                                        onChange={() => handleCheckboxChange(s)}
                                                    />
                                                }
                                                label={s}
                                            />
                                        );
                                    })}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Anything else you'd like to hear about?"
                                        fullWidth
                                        multiline
                                        value={otherNotes}
                                        onChange={(e) => setOtherNotes(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" onClick={onSubmit} disabled={!isFormValid || isSubmitting}>
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Box>
            <br />
        </Container>
    );
};

export default ContactPage;
