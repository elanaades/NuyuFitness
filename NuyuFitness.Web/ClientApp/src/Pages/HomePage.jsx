import React, { useEffect } from 'react';
import { Box, Typography, Button, Container, Card, CardContent, useTheme, alpha } from '@mui/material';
import { Link } from 'react-router-dom';
import ClassStockPhoto from '../assets/ClassStockPhoto.jpg';
import inBodyImage from '../assets/inBodyImage.png';

const HomePage = () => {
    const theme = useTheme();
    const primaryColor = theme.palette.primary.main;
    const fadedPrimaryColor = alpha(primaryColor, 0.5);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://d1yw3duy3i4qiv.cloudfront.net/js/sdk-v1.js';
        script.async = true;
        document.body.appendChild(script);

        // Initialize the widget after the script is loaded
        script.onload = () => {
            FRED.init({
                locationId: "a80e45ef-bf76-46c0-9c14-4cb8cceac7fc",
                perPage: 5,
                layout: "list",
                background: "ffffff",
                titleHexColor: "98bF64",
                starHexColor: "fcc415"
            });
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);


    return (
        <Box >
            {/* Hero/Banner Section */}
            <Box bgcolor="#f5f5f5" py={4}>
                <br />
                <br />
                <br />

                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography
                            variant="h4"
                            component="h1"
                            sx={{
                                fontWeight: 'bold',
                                fontStyle: 'italic', // Added fontStyle property
                                textAlign: 'left',
                                marginLeft: '8%',
                                marginRight: '10%',
                                marginBottom: '-20px'
                            }}
                            gutterBottom
                        >
                            <Box component="span" fontSize="clamp(24px, 5vw, 40px)">
                                are you ready for
                            </Box>
                        </Typography>

                        <Typography variant="h1" color="primary" sx={{ fontWeight: 'bold', fontSize: 'clamp(60px, 15vw, 200px)', textAlign: 'center', marginBottom: '0.5rem' }} gutterBottom>
                            a new you
                        </Typography>
                        <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: 'clamp(30px, 5vw, 70px)', textAlign: 'center', marginBottom: '1rem'}} gutterBottom>
                            Happier. Healthier. Stronger.
                        </Typography>
                    </Box>

                    <br />
                    <br />
                    <br />

                    <Box mt={4} sx={{ textAlign: 'center' }}>
                        <Typography variant="body1" sx={{ fontSize: 'clamp(18px, 4vw, 24px)', marginBottom: '1.5rem' }}>
                            Schedule a Free 90-Minute Consultation
                        </Typography>

                        <Button
                            component={Link}
                            to="/appointments"
                            variant="contained"
                            color="primary"
                            sx={{
                                maxWidth: '200px',
                                display: 'block',
                                margin: '0 auto',
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.light,
                                },
                            }}
                        >
                            Schedule Now
                        </Button>
                    </Box>
                </Container>
                <br />
                <br />
            </Box>


            {/* Services Section */}
            <br />
            <Box py={4} sx={{ width: '100%' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" component="h3" gutterBottom align="center">
                        SERVICES
                    </Typography>
                    <Box
                        display="flex"
                        justifyContent="center"
                        flexWrap="wrap"
                        mt={4}
                        sx={{
                            gap: '16px',
                            '> *': {
                                flex: '1 1 300px',
                                maxWidth: '100%',
                            },
                        }}
                    >
                        {/* Service Card 1 */}
                        <Card sx={{ width: '100%', mb: 2, borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
                            <CardContent>
                                <Typography variant="h5" component="h3" gutterBottom>
                                    PERSONAL TRAINING
                                </Typography>
                                <Typography variant="body1">
                                    Individualized workouts designed to help you reach your specific health & fitness goals.
                                </Typography>
                            </CardContent>
                        </Card>

                        {/* Service Card 2 */}
                        <Card sx={{ width: '100%', mb: 2, borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
                            <CardContent>
                                <Typography variant="h5" component="h3" gutterBottom>
                                    SMALL GROUP TRAINING
                                </Typography>
                                <Typography variant="body1">
                                    45 minute sessions with various styles and formats.
                                    A fun way to get in your daily exercise!
                                    Don’t be shy, all classes can be modified and scaled for skill and ability.
                                </Typography>
                            </CardContent>
                        </Card>

                        {/* Service Card 3 */}
                        <Card sx={{ width: '100%', mb: 2, borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
                            <CardContent>
                                <Typography variant="h5" component="h3" gutterBottom>
                                    SEMI-PRIVATE TRAINING
                                </Typography>
                                <Typography variant="body1">
                                    Personal Training with a twist; exercise with friends in a private 2-4 on 1 setting for some extra motivation.
                                </Typography>
                            </CardContent>
                        </Card>

                        {/* Service Card 4 */}
                        <Card sx={{ width: '100%', mb: 2, borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
                            <CardContent>
                                <Typography variant="h5" component="h3" gutterBottom>
                                    NUTRITION
                                </Typography>
                                <Typography variant="body1">
                                    Work with a Certified Health & Nutrition Coach and Weight Loss Specialist to reach your goals safely and permanently.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box display="flex" justifyContent="center" mt={4}>
                        <Button
                            component={Link}
                            to="/services-pricing"
                            variant="contained"
                            color="primary"
                            sx={{
                                '&:hover': {
                                    backgroundColor: fadedPrimaryColor,
                                },
                            }}
                        >
                            View All Pricing
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* Promo Section */}
            <Box bgcolor="#f5f5f5" py={4}>
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h3" gutterBottom align="center">
                        PROMOS
                    </Typography>
                    <Box
                        display="flex"
                        justifyContent="center"
                        flexWrap="wrap"
                        gap="16px"
                        mb={4}
                    >
                        {/* Card 1 */}
                        <Card
                            sx={{
                                flex: '1 1 400px',
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                backgroundColor: '#fff',
                            }}
                        >
                            <CardContent>
                                <Typography
                                    variant="h4"
                                    component="h2"
                                    gutterBottom
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    Refer a Friend
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    *Discount applied for each referral with an active Fit Club Membership
                                    <br />
                                    (i.e. 2 referrals is $10 off, 3 referrals is $15 off, etc)
                                </Typography>
                            </CardContent>
                        </Card>

                        {/* Card 2 */}
                        <Card
                            sx={{
                                flex: '1 1 400px',
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                backgroundColor: '#fff',
                            }}
                        >
                            <CardContent>
                                <Typography
                                    variant="h4"
                                    component="h2"
                                    gutterBottom
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    New Client Promo's
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    2 Weeks of Unlimited Classes
                                    <br />
                                    OR
                                    <br />
                                    1 Month of Unlimited Classes for Only $112
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Container>
            </Box>

            {/* Learn Your Body Section */}
            <Container maxWidth="lg">
                <br />
                <Box display="flex" justifyContent="center" alignItems="center" py={4}>
                    <Box display="flex" justifyContent="center" alignItems="center" width="40%" pr={4}>
                        <img src={inBodyImage} alt="InBody Composition Scale" style={{ width: '100%', height: 'auto' }} />
                    </Box>
                    <Box width="50%">
                        <Typography variant="h2" color='primary' gutterBottom>
                            Learn Your Body
                        </Typography>
                        <Typography variant="h6" fontWeight='bold' gutterBottom>
                            Try Our InBody Composition Scale
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Total body water data can be divided into intracellular water and extracellular water, values important
                            for understanding a user’s fluid distribution in medical, wellness, and fitness contexts.
                            <br /><br />
                            The InBody 570 body composition analyzer goes beyond traditional body composition analysis, measuring fat, muscle, and
                            total body water.
                        </Typography>
                        <br />
                        <Button component={Link} to="/schedule" variant="contained" color="primary">
                            Schedule
                        </Button>
                    </Box>
                </Box>
            </Container>

            {/* Widget Section */}

            <Box bgcolor="#f5f5f5" py={4} >
                <Container maxWidth="lg">
                    <div data-fred-widget-reviews></div>
                </Container>
            </Box>

        </Box>
    );
};

export default HomePage;
