import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Button,
    Grid,
    Paper,
    ImageList,
    ImageListItem,
    Divider
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, styled } from '@mui/material/styles';
import Photo1 from '../assets/GymPhotos/Photo1.jpg';
import Photo2 from '../assets/GymPhotos/Photo2.jpg';
import Photo3 from '../assets/GymPhotos/Photo3.jpg';
import Photo4 from '../assets/GymPhotos/Photo4.jpg';
import Photo5 from '../assets/GymPhotos/Photo5.jpg';
import Photo6 from '../assets/GymPhotos/Photo6.jpg';
import Photo7 from '../assets/GymPhotos/Photo7.jpg';
import Photo8 from '../assets/GymPhotos/Photo8.jpg';
import Photo9 from '../assets/GymPhotos/Photo9.jpg';
import Photo10 from '../assets/GymPhotos/Photo10.jpg';
import Photo11 from '../assets/GymPhotos/Photo11.jpg';
import Photo12 from '../assets/GymPhotos/Photo12.jpg';



const photos = [
    Photo1,
    Photo2,
    Photo3,
    Photo4,
    Photo5,
    Photo6,
    Photo7,
    Photo8,
    Photo9,
    Photo10,
    Photo11,
    Photo12,
];


const ImageContainer = styled(ImageListItem)({
    cursor: 'pointer',
    transition: 'transform 0.2s, opacity 0.2s, box-shadow 0.2s',
    '&:hover': {
        opacity: 0.9,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },

});

const RentalSpacePage = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>
            <br /><br/>
            {/* Title */}
            <Container maxWidth="lg">
                <Box py={4}>
                    <Typography
                        variant="h3"
                        component="h1"
                        color="primary"
                        align="center"
                        fontWeight="bold"
                        gutterBottom
                    >
                        Trainer Access Options
                    </Typography>
                </Box>
            </Container>

            {/* Cards Section */}
            <Box py={4}>
                <Container maxWidth="lg">
                    <Box py={4} display="flex" justifyContent="center">
                        <Container maxWidth="lg">
                            <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} gap={2}>
                                {/* Card 1 */}
                                <Paper
                                    sx={{
                                        width: '100%',
                                        p: 2,
                                        textAlign: 'center',
                                        flex: 1,
                                        background: 'none',
                                        boxShadow: 'none',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                    }}
                                    elevation={0}
                                >
                                    <Typography variant="h5" component="h2" sx={{ marginBottom: 1 }}>
                                        $20 per session
                                    </Typography>
                                    <Box component="ul" sx={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                                        <li>
                                            <Typography variant="body1" sx={{ fontSize: '14px' }}>
                                                Full Access to studio (see details below)
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" sx={{ fontSize: '14px' }}>
                                                Flexible payment options
                                            </Typography>
                                        </li>
                                    </Box>
                                </Paper>

                                {isMobile ? (
                                    // Horizontal Divider for mobile
                                    <Divider sx={{ width: '100%', mt: 2, mb: 2 }} > OR </Divider>
                                ) : (
                                    // Vertical Divider for desktop
                                    <Divider orientation="vertical" flexItem >OR </Divider>
                                )}

                                {/* Card 2 */}
                                <Paper
                                    sx={{
                                        width: '100%',
                                        p: 2,
                                        textAlign: 'center',
                                        flex: 1,
                                        background: 'none',
                                        boxShadow: 'none',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                    }}
                                    elevation={0}
                                >
                                    <Typography variant="h5" component="h2" sx={{ marginBottom: 1 }}>
                                        $180 (10 Pack)
                                    </Typography>
                                    <Box component="ul" sx={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                                        <li>
                                            <Typography variant="body1" sx={{ fontSize: '14px' }}>
                                                $18/session rate
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" sx={{ fontSize: '14px' }}>
                                                10 sessions to use however you see fit
                                            </Typography>
                                        </li>
                                    </Box>
                                </Paper>

                                {isMobile ? (
                                    // Horizontal Divider for mobile
                                    <Divider sx={{ width: '100%', mt: 2, mb: 2 }} > OR </Divider>
                                ) : (
                                    // Vertical Divider for desktop
                                    <Divider orientation="vertical" flexItem >OR </Divider>
                                )}

                                {/* Card 3 */}
                                <Paper
                                    sx={{
                                        width: '100%',
                                        p: 2,
                                        textAlign: 'center',
                                        flex: 1,
                                        background: 'none',
                                        boxShadow: 'none',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                    }}
                                    elevation={0}
                                >
                                    <Typography variant="h5" component="h2" sx={{ marginBottom: 1 }}>
                                        $450/month
                                    </Typography>
                                    <Box component="ul" sx={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                                        <li>
                                            <Typography variant="body1" sx={{ fontSize: '14px' }}>
                                                Unlimited access - $15/day rate
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" sx={{ fontSize: '14px' }}>
                                                *Save 20% with a 6 month contract
                                            </Typography>
                                        </li>
                                    </Box>
                                </Paper>

                            </Box>
                        </Container>
                    </Box>
                </Container>
            </Box >


            <Box textAlign="center" py={4}>
                <Button
                    component={Link}
                    to="/contact"
                    variant="contained"
                    color="primary"
                >
                    Click Here to Get Started
                </Button>
            </Box>

            <Box textAlign="center" py={4}>
                <Typography
                    variant="body1"
                    fontWeight="bold"
                    sx={{ textTransform: 'uppercase' }}
                >
                    More Details Below
                </Typography>
            </Box>


            <Box bgcolor="#f5f5f5" py={4}>
                <Container maxWidth="xl">
                    <ImageList cols={isMobile ? 2 : 6} rowHeight="auto" gap={2}>
                        {photos.map((photo, index) => (
                            <ImageListItem key={index}>
                                <ImageContainer>
                                    <img src={photo} alt={`Thumbnail ${index + 1}`} style={{ width: '100%' }} />
                                </ImageContainer>
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Container>

                <br /><br />

                <Container maxWidth="xl">
                    <Typography variant="body1" fontWeight="bold" sx={{ textAlign: 'center', marginBottom: 2 }} gutterBottom>
                        Your pass includes Full Access to all equipment and amenities of the studio to include:
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 1 }} gutterBottom>
                        over 3,000 sqft including furnished waiting area
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 1 }} gutterBottom>
                        Bluetooth speaker system and Sonos control (priority of sound system is given to scheduled classes)
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 4 }} gutterBottom>
                        private bathrooms, locker rooms, and showers, water cooler
                    </Typography>

                    <Typography variant="body1" fontWeight="bold" sx={{ textAlign: 'center', marginBottom: 2 }} gutterBottom>
                        Equipment list:
                    </Typography>

                    <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 1 }}>Kettlebells, Dumbbells, Bars and Plates, Squat Racks w/ Pull Up Bars, Reverse Hyper - 90° Back Extension</Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 1 }}>Adjustable Benches, TRX Suspension Training System, Assault Bike</Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 1 }}>Mats, Foam Rollers, HyperVolt Massage Gun, Stretching Table, Stability Balls, Medicine Balls, Resistance Bands and Tubes, Bosu Ball</Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 1 }}>Hurdles, Agility Ladder, Jump Ropes, Stackable Plyo Boxes, Slam Balls, SandBags, Battle Ropes, Heavy Bags w/ Gloves and Mitts</Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 1 }}>InBody 570 (available by appointment for an additional $20 fee per scan)</Typography>

                </Container>


                <br /><br />

                <Container maxWidth="xl">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <CardContent>
                                <Typography
                                    variant="body1"
                                    sx={{ color: 'primary.main', textAlign: 'center', marginBottom: 2 }}
                                    fontWeight="bold"
                                    gutterBottom
                                >
                                    All Trainers and Clients thereof must:
                                </Typography>
                                <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 1 }} gutterBottom>
                                    Sign liability waivers upon first time use (to be maintained
                                    and updated as necessary)
                                </Typography>
                                <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 1 }} gutterBottom>
                                    Respect the equipment, space, and our neighbors at all times
                                </Typography>
                                <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 1 }} gutterBottom>
                                    Clean and return all equipment as necessary
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CardContent>
                                <Typography
                                    variant="body1"
                                    sx={{ color: 'primary.main', textAlign: 'center' }}
                                    fontWeight="bold"
                                    gutterBottom
                                >
                                    Trainers must also:
                                </Typography>
                                <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 2 }} gutterBottom>
                                    Submit valid personal trainer certification (to be
                                    maintained and updated as necessary)
                                </Typography>
                                <Typography variant="body1" sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 1 }} gutterBottom>
                                    Submit Liability Insurance declaring:
                                </Typography>

                                <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 1 }}>
                                    minimum coverage (per occurrence) of $1,000,000
                                </Typography>

                                <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 1 }}>
                                    nuYu Fitness, 615-2 West Park Ave, Oakhurst, NJ, 07755
                                    as additionally insured
                                </Typography>

                            </CardContent>
                        </Grid>
                    </Grid>
                </Container>

                <Box textAlign="center" py={4}>
                    <Button
                        component={Link}
                        to="/contact"
                        variant="contained"
                        color="primary"
                    >
                        Click Here to Get Started
                    </Button>
                </Box>
            </Box>

        </Box>
    );
};

export default RentalSpacePage;
