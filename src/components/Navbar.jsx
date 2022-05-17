import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';


import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';




const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    backgroundColor: "white",
    '&:hover': {
        // backgroundColor: alpha(theme.palette.common.white, 0.25),
        backgroundColor: "white",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '100%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );



    //  for select bar start
    const [age, setAge] = React.useState('');
    let headerIconFontTextSize = 15;
    let headerIconFontSize = headerIconFontTextSize + 5;

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    //  for select bar end


    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={
                    {
                        backgroundColor: "#feee00",
                        color: "black"
                    }
                }
                >
                    <Toolbar>
                        <IconButton
                        // size="large"
                        // edge="start"
                        // color="inherit"
                        // aria-label="open drawer"
                        // sx={{ mr: 2 }}
                        >
                            {/* <MenuIcon /> */}
                            <img src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg" alt="noon" className=""></img>
                        </IconButton>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label" sx={{
                                    display: "flex",
                                    alignItems: "center !important",
                                    justifyContent: "space-between",
                                    textAlign: "center !important"
                                }}>
                                    <img src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg"
                                        alt="country-ae"
                                        className="sc-67fa2173-6 fvKQmp"
                                        style={{
                                            width: "25px",
                                            border: "none !important",
                                        }}
                                        sx={{
                                            // overflow: "hidden",
                                            // lineHeight: "1.5em",
                                            // height: "3em",
                                        }}
                                    />
                                    Deliver To Dubai
                                </InputLabel>
                                <Select
                                    // labelId="demo-simple-select-label"
                                    // id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    // onChange={handleChange}
                                >
                                    {/* <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem> */}
                                </Select>
                            </FormControl>
                        </Box>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="What are you looking for?"
                                inputProps={{ 'aria-label': 'search' }}
                                style={{width: "100%"}}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                {/* <Badge badgeContent={4} color="error">
                                    <MailIcon />
                                </Badge> */}
                                <div role="button" className='' style={{fontSize: headerIconFontTextSize+"px"}}>العربية</div>
                                {/* <div class="sc-9ffcfabb-3 jmwtuO"></div> */}
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit">
                                {/* <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
                                </Badge> */}
                                {/* <div className="sc-9ffcfabb-1 kLvRoV"> */}
                                    {/* <div className="sc-cadb8642-0 WGlol"> */}
                                        <button type="button" className="trigger" style={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor:"#feee00", padding:"5px", border:"none"}}>
                                            <span id="dd_header_signInOrUp" className="userText" style={{fontSize: headerIconFontTextSize+"px"}}>Sign In</span>
                                            <img src="https://z.nooncdn.com/s/app/com/noon/icons/user_thin.svg" alt="Open Login Modal" className="" style={{ width: headerIconFontSize+"px" }} />
                                        </button>
                                    {/* </div> */}
                                {/* </div> */}

                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                {/* <AccountCircle /> */}
                                <div style={{}}>
                                <a title="Cart" className="cartLink" style={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor:"#feee00", padding:"5px", border:"none"}}>
                                    <span className="" style={{fontSize: headerIconFontTextSize+"px"}}>Cart</span>
                                    <div className="cartIconContainer">
                                        <img src="https://z.nooncdn.com/s/app/com/noon/icons/cart.svg" alt="cart" style={{ width: (headerIconFontSize+2)+"px" }} class="sc-afe2674f-1 fVZjyG"/>
                                    </div>
                                </a>
                                </div>
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box>
        </div >
    )
}

export default Navbar