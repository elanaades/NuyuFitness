import React, { createContext, useContext, useEffect, useState } from 'react';
import getAxios from './AuthAxios';
import { CircularProgress, Box } from '@mui/material';

const AuthContext = React.createContext();

const AuthContextComponent = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            const { data } = await getAxios().get('/api/account/getcurrentuser');
            setUser(data);
            setIsLoading(false);
        }
        getUser();
    }, []);


    if (isLoading) {
        return <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <CircularProgress color="success" />
        </Box>
    }

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);


export { AuthContextComponent, useAuth };