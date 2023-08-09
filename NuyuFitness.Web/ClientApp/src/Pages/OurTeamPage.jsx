import React from 'react';
import { Container, Grid, Typography, useTheme } from '@mui/material';
import TeamMember from './TeamMember';
import Don from '../assets/Don.jpg';
import Elana from '../assets/Elana.jpg';
import Tom from '../assets/Tom.jpg';
import Kayli from '../assets/Kayli.jpg';
import Vin from '../assets/Vin.jpg';
import Maryam from '../assets/Maryam.jpeg';

const teamMembers = [
    {
        photo: Tom,
        firstName: 'Tom',
        title: 'Founder/Coach',
        description: 'Tom is an accomplished individual with a passion for helping others improve their health.  With a background as a Marine, firefighter, and EMT, as well as multiple certifications in health coaching and personal training, Tom brings a unique blend of skills and experiences to his clients. His background and ongoing education make him a valuable resource for clients. He is dedicated to helping people unlock their inner power and achieve their health and fitness goals.',
    },
    {
        photo: Elana,
        firstName: 'Elana',
        title: 'Operations Director/Coach',
        description: 'Elana brings a wealth of experience and positive energy to our team. With her professional background and current studies in software development, she is able to wear many hats while keeping things running smoothly on a day-to-day basis and keep us on course for the long haul. As a certified wellness coach, she is passionate about helping others achieve their health and wellness goals.',
    },
    {
        photo: Kayli,
        firstName: 'Kayli',
        title: 'Front Desk/Coach',
        description: 'Kayli brings a smile and positive energy to the front desk. She currently earned her Personal Trainer certification and is eager to further her journey in the health and wellness industry. Her warm personality, commitment to excellence, and eagerness to learn, make Kayli a valuable asset to the nuYu Fitness team.',
    },
    {
        photo: Vin,
        firstName: 'Vin',
        title: 'Coach',
        description: 'My passion for fitness started as just a hobby back when I was only 16 but turned into a passion. Today I hold a B.S. in Kinesiology from Penn State University with a background in physical therapy. I am a Certified Personal Trainer and Certified Nutrition Coach through National Academy of Sports Medicine. I have competed in one show (Summer Shredding Classic) and took 1st place for my class. Fitness is my passion! Being able to do this as a profession is a dream come true.I love helping people create a sustainable lifestyle as well as fitness goals such as losing weight, building muscle, increase mobility, and overall confidence.Nothing makes me happier than seeing you succeed.I am friendly and personable and would love to get to know each and everyone of you!',
    },
    {
        photo: Don,
        firstName: 'Don',
        title: 'Coach',
        description: 'Don has been in the fitness industry as a trainer and group exercise instructor since 2012. He has worked at multiple gyms and studios, and enjoys learning new techniques, movements, and relevant information.Don uses functional movements and exercises as a way to build up fitness for real life, and he is passionate about helping others achieve a healthy lifestyle. Don enjoys obstacle course racing, gardening, and cooking, and loves coming up with creative workouts to challenge clients in different ways.',
    },
    {
        photo: Maryam,
        firstName: 'Maryam',
        title: 'Operations Director/Coach',
        description: 'Hi! I am passionate about helping people reach their fitness goals and believe everyone deserves to feel happy and confident in their own body.I create custom fitness plans that are realistic and effective, and work with my clients to instill values of consistency and self- belief.With my support, guidance, and encouragement, I am confident we can help you become the best version of yourself.',
    },
];

const OurTeamPage = () => {
    const theme = useTheme();

    const titleStyle = {
        fontStyle: 'italic',
        color: theme.palette.primary.main,
    };

    const teamContainerStyle = {
        mt: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const responsiveTeamContainer = {
        ...teamContainerStyle,
        padding: '20px', 
        '@media (max-width: 600px)': { 
            padding: '10px', 
        },
    };

    return (
        <Container maxWidth="xl" sx={responsiveTeamContainer}> 
            <br />
            <Typography variant="h3" color="primary" fontWeight="bold" gutterBottom sx={{ textAlign: 'center' }}>
                Our Team
            </Typography>
            <Grid container spacing={3} sx={{ mt: 3 }}>
                {teamMembers.map((member, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <TeamMember
                            photo={member.photo}
                            firstName={member.firstName}
                            title={member.title}
                            description={member.description}
                            titleStyle={titleStyle}
                        />
                    </Grid>
                ))}
            </Grid>
            <br /> <br />
        </Container>
    );
};

export default OurTeamPage;