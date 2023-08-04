import React, { useEffect } from 'react';
import { useAuth } from '../components/UserAuth';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { setUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const doLogout = async () => {
            setUser(null);
            localStorage.removeItem('auth-token');
            setUser(null);
            navigate('/');
        }
        doLogout();
    }, []);

    return (<></>);
}

export default Logout;