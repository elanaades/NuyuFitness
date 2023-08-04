import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/Homepage';
import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage';
import OurTeamPage from './pages/OurTeamPage';
import JoinTheTeamPage from './pages/JoinTheTeamPage';
import NewClientOptionsPage from './pages/NewClientOptionsPage';
import NuyouthTrainingPage from './pages/NuyouthTrainingPage';
import PATCPage from './pages/PATCPage';
import RentalSpace from './Pages/RentalSpacePage';
import ServicesPricingPage from './pages/ServicesPricingPage';
import BlogPage from './pages/BlogPage';
import WorkoutsPage from './pages/WorkoutsPage';
import MacroCalculatorPage from './pages/MacroCalculatorPage';
import ClassSchedulePage from './pages/ClassSchedulePage';
import AppointmentsPage from './pages/AppointmentsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import LogoutPage from './pages/LogoutPage';
import { AuthContextComponent } from './components/UserAuth';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    return (

        <Router>
            <AuthContextComponent >
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path='/signup' element={<SignupPage />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/about-us" element={<AboutUsPage />} />
                        <Route path="/our-team" element={<OurTeamPage />} />
                        <Route path="/join-the-team" element={<JoinTheTeamPage />} />
                        <Route path="/new-client-options" element={<NewClientOptionsPage />} />
                        <Route path="/nuyouth-training" element={<NuyouthTrainingPage />} />
                        <Route path="/patc" element={<PATCPage />} />
                        <Route path="/rental-space" element={<RentalSpace />} />
                        <Route path="/services-pricing" element={<ServicesPricingPage />} />
                        <Route path="/blog" element={
                            <PrivateRoute>
                                <BlogPage />
                            </PrivateRoute>
                        } />
                        <Route path="/macro-calculator" element={
                            <PrivateRoute>
                                <MacroCalculatorPage />
                            </PrivateRoute>
                        } />
                        <Route path="/workouts" element={
                            <PrivateRoute>
                                <WorkoutsPage />
                            </PrivateRoute>
                        } />
                        <Route path="/schedule" element={<ClassSchedulePage />} />
                        <Route path="/appointments" element={<AppointmentsPage />} />
                        <Route path='/logout' element={
                            <PrivateRoute>
                                <LogoutPage />
                            </PrivateRoute>
                        } />
                    </Routes>
                </Layout>
            </AuthContextComponent >

        </Router>
    );
}

export default App;
