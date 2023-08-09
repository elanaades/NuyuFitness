import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Container,
    Typography,
    Link,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
} from '@mui/material';

const ServicesPricingPage = () => {
    const pricingOptions = [
        { name: 'Fit Club', weekly: '$40', monthly: '$175' },
        { name: 'Fit Club Public Service Rate', weekly: '$33', monthly: '$144' },
        { name: 'Fit Club Students & Seniors (62+)', weekly: '$32', monthly: '$135' },
        { name: '2x/Week', weekly: '$30', monthly: '$120' },
    ];

    const additionalOptions = [
        { name: 'Month-to-Month Unlimited', monthly: '$180' },
        { name: 'Bulk Package', monthly: '$180 (for 10)' },
        { name: 'Drop In Rate', weekly: '$20', monthly: '' }, // Added the Drop In Rate option
    ];

    const personalTrainingOptions = [
        { name: 'Single Session', sixtyMin: '$110', fortyFiveMin: '$82.50', thirtyMin: '$55' },
        { name: 'Build Your Own Package (4 session minimum)', sixtyMin: '$99', fortyFiveMin: '$74.25', thirtyMin: '$49.50' },
        { name: 'Monthly Contract', sixtyMin: '-', fortyFiveMin: '-', thirtyMin: '$50' },
        { name: 'Bi-Weekly Contract', sixtyMin: '-', fortyFiveMin: '-', thirtyMin: '$45' },
        { name: 'Weekly Contract (senior single session rate)', sixtyMin: '$80', fortyFiveMin: '$60', thirtyMin: '$40' },
    ];

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <br />
            <Typography variant="h3" color="primary" fontWeight="bold" gutterBottom>
                Services & Pricing
            </Typography>
            <Typography variant="h6" gutterBottom>
                New Clients, Click{' '}
                <Link component={RouterLink} to="/new-client-options" color="textPrimary">
                    Here
                </Link>{' '}
                for Intro Offers!
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ fontStyle: 'italic' }}>
                Online Coaching & Training Available!
            </Typography>
            <Box>
                <TableContainer component={Paper} sx={{ mt: 4 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ bgcolor: '#f5f5f5', fontWeight: 'bold' }}>Small Group Training (Contract Options)</TableCell>
                                <TableCell align="center" sx={{ bgcolor: '#f5f5f5', fontWeight: 'bold' }}>Weekly Billing</TableCell>
                                <TableCell align="center" sx={{ bgcolor: '#f5f5f5', fontWeight: 'bold' }}>Monthly Billing</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pricingOptions.map((option) => (
                                <TableRow key={option.name}>
                                    <TableCell>{option.name}</TableCell>
                                    <TableCell align="center">{option.weekly}</TableCell>
                                    <TableCell align="center">{option.monthly}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box sx={{ mt: 4 }}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ bgcolor: '#f5f5f5', fontWeight: 'bold' }}>Small Group Training (Pay As You Go Options)</TableCell>
                                    <TableCell align="center" sx={{ bgcolor: '#f5f5f5', fontWeight: 'bold' }}>Rate</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {additionalOptions.map((option) => (
                                    <TableRow key={option.name}>
                                        <TableCell>{option.name}</TableCell>
                                        <TableCell align="center">
                                            {option.weekly || option.monthly}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box sx={{ mt: 4 }}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ bgcolor: '#f5f5f5', fontWeight: 'bold' }}>Personal Training/Coaching</TableCell>
                                    <TableCell align="center" sx={{ bgcolor: '#f5f5f5', fontWeight: 'bold' }}>60m</TableCell>
                                    <TableCell align="center" sx={{ bgcolor: '#f5f5f5', fontWeight: 'bold' }}>45m</TableCell>
                                    <TableCell align="center" sx={{ bgcolor: '#f5f5f5', fontWeight: 'bold' }}>30m</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {personalTrainingOptions.map((option) => (
                                    <TableRow key={option.name}>
                                        <TableCell>{option.name}</TableCell>
                                        <TableCell align="center">{option.sixtyMin}</TableCell>
                                        <TableCell align="center">{option.fortyFiveMin}</TableCell>
                                        <TableCell align="center">{option.thirtyMin}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
            <br /> <br />
        </Container>
    );
};

export default ServicesPricingPage;
