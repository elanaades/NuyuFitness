import React from 'react';
import { Typography, Container, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const JoinTheTeamPage = () => {
    const theme = useTheme();
    const primaryColor = theme.palette.primary.main;

    const containerStyle = {
        marginTop: '80px', // Adjust this value to control the distance from the top
    };

    const titleStyle = {
        color: primaryColor,
    };

    const boldStyle = {
        fontWeight: 'bold',
    };

    return (
        <Container maxWidth="lg" style={containerStyle}>
            <Typography variant="h3" component="h1" style={{ ...boldStyle, ...titleStyle }}>
                We’re Hiring!
            </Typography>
            <br />
            <Typography variant="h6" component="h2" style={boldStyle}>
                Certified Personal Trainer for Growing Wellness Company
            </Typography>
            <br />
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
                <span>– You are passionate about health and fitness</span>
                <br />
                <span>– You are looking for a long term career in the wellness industry</span>
                <br />
                <span>– You are committed to excellence in everything you do</span>
                <br />
                <span>– You are self motivated with a growth mindset</span>
                <br />
                <span>– You want to be part of a top tier team</span>
            </Typography>
            <br />
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
                <span style={{ ...boldStyle }}>About nuYu:</span>
                <br /><br />
                We are the premier wellness company in Ocean Township. We are dedicated (arguably obsessed) with improving the lives of our clients
                and assisting them with their health and wellness goals through fitness and nutrition programs.
                We provide a fun, clean environment, new equipment, and innovative solutions which include one-on-one training and coaching, small group training classes, and specialized workshops.
                We are looking for someone that is enthusiastic, highly motivated, and passionate about coaching. Bottom line, you’ll be part of an elite team that is leading the industry in every capacity.
                <br /><br />
                We promote and train from within, and there are several growth opportunities on the horizon.
                We want someone who enjoys working with people and making a difference in the lives of others, because that’s what we do in our studio.
                <br /><br />
                Our hiring process consists of various steps that are designed to provide insight into your knowledge, skills, abilities, experience, personality, and more.
                You will be entrusted with our clients and we do not take that lightly. We will take our time in selecting the right candidate and in return we will invest in you and your career.
            </Typography>
            <br />
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
                <span style={{ ...boldStyle }}>Tasks You’ll Be Expected to Perform</span>
                <br /><br />
                <span>– Assessing Client Needs</span>
                <br />
                <span>– Program Planning and Design</span>
                <br />
                <span >– Scheduling and Coaching Sessions</span>
                <br />
                <span>– Tracking Client Progress</span>
                <br />
                <span>– Health and Fitness Education</span>
                <br />
                <span>– Maintain a Positive Attitude</span>
                <br />
                <span>– Small Group Training (optional)</span>
            </Typography>
            <br />
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
                <span style={{ ...boldStyle }}>Minimum Training/Skills Required</span>
                <br /><br />
                <span >– Current Personal Trainer Certification with 3 years experience (also looking for 1 position with no experience required)</span>
                <br />
                <span >– Current CPR/AED</span>
                <br />
                <span >– High school diploma or equivalent</span>
            </Typography>
            <br />
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
                <span style={{ ...boldStyle }}>Hiring Process</span>
                <br /><br />
                <span >– Initial Interview</span>
                <br />
                <span>– 2 Mock Training Sessions</span>
                <br />
                <span>– 1 Class Assist (optional)</span>
                <br />
                <span>– 1 Class Lead (optional)</span>
                <br />
                <span>– Final Interview</span>
            </Typography>
            <br />
            <Typography variant="body1">
                <span style={{ ...boldStyle }}>TO APPLY:</span>
                <br />
                Email your resume to <span>
                    <Link href="mailto:info@nuyufit.com" color="inherit">
                        info@nuyufit.com
                    </Link></span> with one paragraph about yourself and what you’re looking for.
            </Typography>
            <br />
        </Container>
    );
};

export default JoinTheTeamPage;
