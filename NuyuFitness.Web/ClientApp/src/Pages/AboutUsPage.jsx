import React from 'react';
import { Typography, Container, useTheme, Box } from '@mui/material';

const AboutPage = () => {
    const theme = useTheme();
    const primaryColor = theme.palette.primary.main;

    const containerStyle = {
        marginTop: '80px', // Adjust this value to control the distance from the top
    };

    const paragraphStyle = {
        marginBottom: '16px', // Spacing between paragraphs
    };

    const titleStyle = {
        color: primaryColor,
        marginTop: '16px',
        marginBottom: '32px',
        fontWeight:'bold'
    };

    return (
        <Container maxWidth="lg" style={containerStyle}>
            <Box>
                <Container>
                    <Typography variant="h3" component="h1" style={titleStyle}>
                        About nuYu
                    </Typography>
                    <Typography variant="body1" style={paragraphStyle}>
                        nuYu Fitness LLC is an integrated health and wellness company that focuses on Health Coaching, Personal Training, Nutritional Counseling, and Small Group Training for clients with a goal to safely and effectively lose weight and maintain overall good health. As an extension of offering lifestyle guidance nuYu can provide nutritional insight and the expertise of personal training customized to each client's needs.
                    </Typography>
                    <Typography variant="body1" style={paragraphStyle}>
                        Founded by Thomas DiOrio, a Marine, firefighter, and EMT, the business started with the aim of creating a healthier and more effective healthcare system. Tom was inspired by the need for a better solution after witnessing the current healthcare system create lifelong patients through a cycle of medication and limited support.
                    </Typography>
                    <Typography variant="body1" style={paragraphStyle}>
                        At nuYu, we believe that every step, every rep, every calorie, every pound, and every second counts, and that doing nothing should never be an option. Our goal is to provide a supportive, motivating, and results-driven environment where clients can reach their full potential.
                    </Typography>
                    <Typography variant="body1" style={paragraphStyle}>
                        Whether you're looking to improve your overall health, increase your energy levels, or reach a specific fitness goal, nuYu Fitness is here to help. Contact us today to learn more about our services and how we can help you achieve your best self.
                    </Typography>
                </Container>
            </Box>
        </Container>
    );
};

export default AboutPage;
