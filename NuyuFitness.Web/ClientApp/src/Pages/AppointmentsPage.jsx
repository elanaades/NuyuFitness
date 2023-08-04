import React, { useEffect } from 'react';
import { Container } from '@mui/material';

const AppointmentsPage = () => {
    useEffect(() => {
        const healcodeScript = document.createElement('script');
        healcodeScript.src = 'https://widgets.mindbodyonline.com/javascripts/healcode.js';
        healcodeScript.type = 'text/javascript';
        document.head.appendChild(healcodeScript);

        return () => {
            document.head.removeChild(healcodeScript);
        };
    }, []);

    return (
        <Container style={{ minHeight: 'calc(100vh - 64px - 56px)', paddingBottom: '56px' }}>
            <br />
            <br />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <div style={{ width: '80%', maxWidth: '1200px', height: '900px' }}>
                    <healcode-widget
                        data-type="appointments"
                        data-widget-partner="object"
                        data-widget-id="0485688f323"
                        data-widget-version="0"
                        style={{ width: '100%', height: '100%' }}
                    ></healcode-widget>
                </div>
            </div>
        </Container>
    );
};

export default AppointmentsPage;
