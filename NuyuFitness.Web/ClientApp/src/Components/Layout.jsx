import React, { useEffect, useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Grid,
    Button,
    Paper,
    Popper,
    Grow,
    ClickAwayListener,
    MenuList,
    MenuItem,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    IconButton,
    useMediaQuery,
    useTheme,
    Collapse,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import nuYuLogo from '../assets/nuYuLogo.png';
import { useAuth } from '../components/UserAuth';

const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true); //not working properly. Do I need? If user data takes a while to fetch...
    const { user } = useAuth();
    const isLoggedIn = !!user;

    const [submenuOpen, setSubmenuOpen] = React.useState(false);
    const submenuRef = React.useRef(null);

    const [resourcesMenuOpen, setResourcesMenuOpen] = React.useState(false);
    const resourcesMenuRef = React.useRef(null);

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleSubmenuOpen = () => {
        setSubmenuOpen(true);
    };

    const handleSubmenuClose = () => {
        setSubmenuOpen(false);
    };

    const handleResourcesMenuOpen = () => {
        setResourcesMenuOpen(true);
    };

    const handleResourcesMenuClose = () => {
        setResourcesMenuOpen(false);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const closeDrawer = () => {
        setMobileOpen(false);
    };

    const theme = useTheme();
    const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        if (user) {
            setIsLoading(false);
        }
    }, [user]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppBar position="sticky" sx={{ backgroundColor: '#f5f5f5' }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
                        <img src={nuYuLogo} alt="Gym Logo" height="90px" style={{ marginBottom: '-30px' }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                        {isMobileScreen ? (
                            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerToggle}
                                    edge="end"
                                    sx={{ mr: 2 }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        ) : (
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                {/* Navigation Links */}
                                <Button component={Link} to="/" color="inherit" sx={{ textTransform: 'none' }}>
                                    Home
                                </Button>
                                <Button component={Link} to="/about-us" color="inherit" sx={{ textTransform: 'none' }}>
                                    About Us
                                </Button>
                                <Button component={Link} to="/our-team" color="inherit" sx={{ textTransform: 'none' }}>
                                    Our Team
                                </Button>
                                <Button
                                    color="inherit"
                                    onMouseEnter={handleSubmenuOpen}
                                    onMouseLeave={handleSubmenuClose}
                                    sx={{ textTransform: 'none' }}
                                    ref={submenuRef}
                                >
                                    Services & Pricing
                                </Button>
                                <Popper
                                    open={submenuOpen}
                                    anchorEl={submenuRef.current}
                                    role={undefined}
                                    placement="bottom-start"
                                    transition
                                    disablePortal
                                    style={{ zIndex: 1 }}
                                >
                                    {({ TransitionProps }) => (
                                        <Grow {...TransitionProps} style={{ transformOrigin: 'left top' }}>
                                            <Paper>
                                                <ClickAwayListener onClickAway={handleSubmenuClose}>
                                                    <MenuList
                                                        autoFocus={false}
                                                        id="submenu-menu"
                                                        onKeyDown={handleSubmenuClose}
                                                        onMouseEnter={handleSubmenuOpen}
                                                        onMouseLeave={handleSubmenuClose}
                                                    >
                                                        <MenuItem
                                                            component={Link}
                                                            to="/services-pricing"
                                                            color="inherit"
                                                            onClick={handleSubmenuClose}
                                                            sx={{ textTransform: 'none', fontSize: '14px' }}
                                                        >
                                                            Services & Pricing
                                                        </MenuItem>
                                                        <MenuItem
                                                            component={Link}
                                                            to="/new-client-options"
                                                            color="inherit"
                                                            onClick={handleSubmenuClose}
                                                            sx={{ textTransform: 'none', fontSize: '14px' }}
                                                        >
                                                            New Client Options
                                                        </MenuItem>
                                                        <MenuItem
                                                            component={Link}
                                                            to="/nuyouth-training"
                                                            color="inherit"
                                                            onClick={handleSubmenuClose}
                                                            sx={{ textTransform: 'none', fontSize: '14px' }}
                                                        >
                                                            nuYouth Training
                                                        </MenuItem>
                                                        <MenuItem
                                                            component={Link}
                                                            to="/rental-space"
                                                            color="inherit"
                                                            onClick={handleSubmenuClose}
                                                            sx={{ textTransform: 'none', fontSize: '14px' }}
                                                        >
                                                            Personal Trainer Rental Space
                                                        </MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>

                                <Button component={Link} to="/schedule" color="inherit" sx={{ textTransform: 'none' }}>
                                    Class Schedule
                                </Button>
                                <Button component={Link} to="/appointments" color="inherit" sx={{ textTransform: 'none' }}>
                                    Appointments
                                </Button>
                                <Button component={Link} to="/contact" color="inherit" sx={{ textTransform: 'none' }}>
                                    Contact
                                </Button>
                                <Button component={Link} to="/join-the-team" color="inherit" sx={{ textTransform: 'none' }}>
                                    Join the Team!
                                </Button>
                                <Button component={Link} to="/PATC" color="inherit" sx={{ textTransform: 'none' }}>
                                    PATC
                                </Button>
                                {/* Resources */}
                                <Button
                                    color="inherit"
                                    onMouseEnter={handleResourcesMenuOpen}
                                    onMouseLeave={handleResourcesMenuClose}
                                    sx={{ textTransform: 'none' }}
                                    ref={resourcesMenuRef}
                                >
                                    {isLoggedIn ? <LockOpenOutlinedIcon fontSize="smaller" /> : <LockOutlinedIcon fontSize="smaller" />} Resources
                                </Button>
                                <Popper
                                    open={resourcesMenuOpen}
                                    anchorEl={resourcesMenuRef.current}
                                    role={undefined}
                                    placement="bottom-start"
                                    transition
                                    disablePortal
                                    style={{ zIndex: 1 }}
                                >
                                    {({ TransitionProps }) => (
                                        <Grow {...TransitionProps} style={{ transformOrigin: 'left top' }}>
                                            <Paper>
                                                <ClickAwayListener onClickAway={handleResourcesMenuClose}>
                                                    <MenuList
                                                        autoFocus={false}
                                                        id="resources-menu"
                                                        onKeyDown={handleResourcesMenuClose}
                                                        onMouseEnter={handleResourcesMenuOpen}
                                                        onMouseLeave={handleResourcesMenuClose}
                                                    >
                                                        {/* Blog */}
                                                        <MenuItem
                                                            component={Link}
                                                            to="/blog"
                                                            color="inherit"
                                                            onClick={handleResourcesMenuClose}
                                                            sx={{ textTransform: 'none', fontSize: '14px' }}
                                                        >
                                                            Blog
                                                        </MenuItem>
                                                        {/* Macro Calculator */}
                                                        <MenuItem
                                                            component={Link}
                                                            to="/macro-calculator"
                                                            color="inherit"
                                                            onClick={handleResourcesMenuClose}
                                                            sx={{ textTransform: 'none', fontSize: '14px' }}
                                                        >
                                                            Macro Calculator
                                                        </MenuItem>
                                                        {/* Workouts */}
                                                        <MenuItem
                                                            component={Link}
                                                            to="/workouts"
                                                            color="inherit"
                                                            onClick={handleResourcesMenuClose}
                                                            sx={{ textTransform: 'none', fontSize: '14px' }}
                                                        >
                                                            Workouts
                                                        </MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>

                                {isLoggedIn && (
                                    <Button component={Link} to="/logout" color="inherit" sx={{ textTransform: 'none' }}>
                                        Logout
                                    </Button>
                                )}
                                {!isLoggedIn && (
                                    <Button component={Link} to="/signup" color="inherit" sx={{ textTransform: 'none' }}>
                                        Signup
                                    </Button>
                                )}
                                {!isLoggedIn && (
                                    <Button component={Link} to="/login" color="inherit" sx={{ textTransform: 'none' }}>
                                        Login
                                    </Button>
                                )}
                            </Box>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <List>
                    {/* Navigation Links */}
                    <ListItem button component={Link} to="/" onClick={closeDrawer}>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component={Link} to="/about" onClick={closeDrawer}>
                        <ListItemText primary="About Us" />
                    </ListItem>
                    <ListItem button component={Link} to="/our-team" onClick={closeDrawer}>
                        <ListItemText primary="Our Team" />
                    </ListItem>
                    <ListItem button onClick={handleSubmenuOpen}>
                        <ListItemText primary="Services & Pricing" />
                    </ListItem>
                    <Collapse in={submenuOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem
                                button
                                component={Link}
                                to="/services-pricing"
                                onClick={() => {
                                    closeDrawer();
                                    handleSubmenuClose();
                                }}
                                sx={{ paddingLeft: '32px' }}
                            >
                                <ListItemText primary="Services & Pricing" />
                            </ListItem>
                            <ListItem
                                button
                                component={Link}
                                to="/new-client-options"
                                onClick={() => {
                                    closeDrawer();
                                    handleSubmenuClose();
                                }}
                                sx={{ paddingLeft: '32px' }}
                            >
                                <ListItemText primary="New Client Options" />
                            </ListItem>
                            <ListItem
                                button
                                component={Link}
                                to="/nuyouth-training"
                                onClick={() => {
                                    closeDrawer();
                                    handleSubmenuClose();
                                }}
                                sx={{ paddingLeft: '32px' }}
                            >
                                <ListItemText primary="nuYouth Training" />
                            </ListItem>
                            <ListItem
                                button
                                component={Link}
                                to="/rental-space"
                                onClick={() => {
                                    closeDrawer();
                                    handleSubmenuClose();
                                }}
                                sx={{ paddingLeft: '32px' }}
                            >
                                <ListItemText primary="Trainer Rental Space" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button component={Link} to="/schedule" onClick={closeDrawer}>
                        <ListItemText primary="Class Schedule" />
                    </ListItem>
                    <ListItem button component={Link} to="/appointments" onClick={closeDrawer}>
                        <ListItemText primary="Appointments" />
                    </ListItem>
                    <ListItem button component={Link} to="/contact" onClick={closeDrawer}>
                        <ListItemText primary="Contact" />
                    </ListItem>
                    <ListItem button component={Link} to="/join-the-team" onClick={closeDrawer}>
                        <ListItemText primary="Join the Team!" />
                    </ListItem>
                    <ListItem button component={Link} to="/PATC" onClick={closeDrawer}>
                        <ListItemText primary="PATC" />
                    </ListItem>
                    {/* Mobile Resources Menu */}
                    <ListItem
                        button
                        onClick={() => {
                            handleResourcesMenuOpen();
                        }}
                    >
                        {isLoggedIn ? <LockOpenOutlinedIcon fontSize="smaller" /> : <LockOutlinedIcon fontSize="smaller" />}
                        <ListItemText primary="Resources" />
                    </ListItem>
                    <Collapse in={resourcesMenuOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button component={Link} to="/blog" onClick={closeDrawer}>
                                <ListItemText sx={{ paddingLeft: '32px' }} primary="Blog" />
                            </ListItem>
                            <ListItem button component={Link} to="/macro-calculator" onClick={closeDrawer}>
                                <ListItemText sx={{ paddingLeft: '32px' }} primary="Macro Calculator" />
                            </ListItem>
                            <ListItem button component={Link} to="/workouts" onClick={closeDrawer}>
                                <ListItemText sx={{ paddingLeft: '32px' }} primary="Workouts" />
                            </ListItem>
                        </List>
                    </Collapse>
                    {isLoggedIn && (
                        <ListItem button component={Link} to="/logout" onClick={closeDrawer}>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    )}
                    {!isLoggedIn && (
                        <ListItem button component={Link} to="/signup" onClick={closeDrawer}>
                            <ListItemText primary="Signup" />
                        </ListItem>
                    )}
                    {!isLoggedIn && (
                        <ListItem button component={Link} to="/login" onClick={closeDrawer}>
                            <ListItemText primary="Login" />
                        </ListItem>
                    )}
                </List>
            </Drawer>

            {/* Content */}
            {children}
            <footer style={{ backgroundColor: '#f5f5f5', padding: '20px', textAlign: 'center', marginTop: 'auto' }}>
                <Typography variant="body2" color="textSecondary">
                    nuYu Health & Wellness LLC {new Date().getFullYear()}
                </Typography>
            </footer>
        </div>
    );
};

export default Layout;
