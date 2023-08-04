import React from 'react';
import { Typography, Avatar } from '@mui/material';

const TeamMember = ({ photo, firstName, title, description, titleClassName }) => {
    return (
        <div>
            <Avatar alt={firstName} src={photo} sx={{ width: 300, height: 300, margin: '0 auto' }} />
            <Typography variant="h5" align="center" className={titleClassName}>
                {firstName.toUpperCase()}
            </Typography>
            <Typography variant="body1" align="center" fontStyle="italic">
                {title}
            </Typography>
            <Typography variant="body2" align="center">
                {description}
            </Typography>
        </div>
    );
};

export default TeamMember;
