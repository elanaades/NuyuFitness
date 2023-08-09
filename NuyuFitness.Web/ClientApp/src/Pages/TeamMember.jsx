import React from 'react';
import { Typography, Avatar, Box } from '@mui/material';

const TeamMember = ({ photo, firstName, title, description, titleClassName }) => {
    return (
        <Box p={3}> {/* Adding padding */}
            <Avatar alt={firstName} src={photo} sx={{ width: 275, height: 275, margin: '0 auto', marginBottom: 2 }} />
            <Typography variant="h5" align="center" className={titleClassName}>
                {firstName.toUpperCase()}
            </Typography>
            <Typography variant="body1" align="center" fontStyle="italic" sx={{marginBottom: 1 }}>
                {title}
            </Typography>
            <Typography variant="body2" align="center">
                {description}
            </Typography>
        </Box>
    );
};

export default TeamMember;
