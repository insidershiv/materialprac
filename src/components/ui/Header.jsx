import { AppBar, Button, Icon, IconButton, List, ListItem, ListItemText, Menu, MenuItem, SwipeableDrawer, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';

import logo from '../../assets/logo.svg'

function Header(props) {

    const useStyles = makeStyles(theme => ({
        toolbarMargin: {
            ...theme.mixins.toolbar,
            marginBottom: '3em',
            [theme.breakpoints.down('md')]: {
                marginBottom: '2em'
            },
            [theme.breakpoints.down('xs')]: {
                marginBottom: '1.25em'
            }
        },
        logo: {
            height: '8em',
            [theme.breakpoints.down('md')]: {
                height: '7em'
            },
            [theme.breakpoints.down('xs')]: {
                height: '5.5em'
            }


        },
        logoContainer: {
            padding: 0,
            "&:hover": {
                backgroundColor: 'transparent'
            }
        },
        tabContainer: {
            marginLeft: 'auto'
        },

        tab: {
            ...theme.typography.tab,
            textTransform: 'none',
            marginLeft: '25px',
            minWidth: 10
        },
        button: {
            height: '45px',
            borderRadius: '50px',
            textTransform: 'none',
            marginLeft: '50px',
            marginRight: '25px',
            color: 'white'

        },
        menu: {
            backgroundColor: theme.palette.common.blue,
            color: "white"
        },
        menuItem: {
            ...theme.typography.tab,
            opacity: 0.7,
            '&:hover': {
                opacity: 1
            },
            color: 'white'


        },
        drawer : {
            backgroundColor: theme.palette.common.blue,
            color:'white'
        },
        drawerIcon:{
            height:'50px',
            width:'50px',
        },
        drawerItem: {
            ...theme.palette.tab,
            color:'white'
        },
        drawerIconContainer: {
            '&:hover': {
                background:'transparent'
            },
            marginLeft:'auto'
        }
    }))
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const  [openDrawer, setOpenDrawer] = useState(false);

    const changeHandler = (event, newValue) => {
        props.setValue(newValue)
    }



    const [anchorEl, setAnchorEl] = useState(null);

    const [open, setOpenMenu] = useState(false)


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        setOpenMenu(true)
    }

    const handleClose = (event) => {
        setAnchorEl(false)
        setOpenMenu(false)

    }

    const handleMenuClickItem = (event, index) => {
        setAnchorEl(null)
        setOpenMenu(false)
        props.setSelectedIndex(index)
    }

    const menuOptions = [{ name: 'Services', link: '/services' }, { name: 'Custom Software Development', link: '/customsoftware' }, { name: 'iOS/Android App Development', link: '/mobileapps' }, { name: 'Website Development', link: '/websites' }]

    useEffect(() => {
        if (window.location.pathname === '/' && props.value !== 0) {
            props.setValue(0)
        } else if (window.location.pathname === '/services' && props.value !== 1) {
            props.setValue(1)
        } else if (window.location.pathname === '/revolution' && props.value !== 2) {
            props.setValue(2)
        } else if (window.location.pathname === '/about' && props.value !== 3) {
            props.setValue(3)
        } else if (window.location.pathname === '/contact' && props.value !== 4) {
            props.setValue(4)
        } else if (window.location.pathname === '/estimate' && props.value !== 5) {
            props.setValue(5)
        }



        switch (window.location.pathname) {

            case "/":
                if (props.value !== 0) {
                    props.setValue(0)
                }
                break;

            case "/services":
                if (props.value !== 1) {
                    props.setValue(1)
                    props.setSelectedIndex(0)
                }
                break;

            case '/mobileapps':
                if (props.value !== 1) {
                    props.setValue(1)
                    props.setSelectedIndex(2)
                }

                break;

            case '/customsoftware':
                if (props.value !== 1) {
                    props.setValue(1)
                    props.setSelectedIndex(1)
                }
                break;

            case '/about':

                if (props.value !== 3) {
                    props.setValue(3)

                }
                break;

            case '/contact':
                if (props.value !== 4) {
                    props.setValue(4)
                }
                break;

            case '/revolution':
                if (props.value !== 2) {
                    props.setValue(2)
                }
                break;

            case '/estimate':
                if (props.value !== 5) {
                    props.setValue(5)
                }
                break;

            case '/websites':

                if (props.value !== 1) {
                    props.setValue(1)
                    props.setSelectedIndex(3)
                }
                break;


            default:
                break
        }



    },)


    const tabs = (
        <>
            <Tabs className={classes.tabContainer} value={props.value} onChange={changeHandler} indicatorColor="primary">
                <Tab className={classes.tab} component={Link} to="/" label="Home" />
                <Tab className={classes.tab} component={Link} to="/services" label="Services" aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup={anchorEl ? true : undefined} onMouseOver={(event) => handleClick(event)} />
                <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution" />
                <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
                <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
            </Tabs>
            <Button variant="contained" className={classes.button} color="secondary" component={Link} to="/estimate">
                Free Estimate
              </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}

                elevation={0}
                classes={{ paper: classes.menu }}
            >

                {menuOptions.map((option, index) => (
                    <MenuItem key={index} classes={{ root: classes.menuItem }} component={Link} to={option.link} onClick={event => {
                        handleMenuClickItem(event, index);
                        props.setValue(1);
                        handleClose();
                    }}
                        selected={index === props.selectedIndex && props.value === 1}
                    >
                        {option.name}
                    </MenuItem>
                ))}




            </Menu>

        </>

    )

    const drawer = (
        <>

            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose = {()=>setOpenDrawer(false)} onOpen ={()=>setOpenDrawer(true)} classes={{paper:classes.drawer}}>
              
                <List>

            <ListItem component={Link} to ="/"  divider button onClick ={()=>{setOpenDrawer(false); props.setValue(0)}} selected={props.value ===0}>
           
           <ListItemText disableTypography className={classes.drawerItem}>Home </ListItemText>
            </ListItem>

            <ListItem component={Link} to ="/services"  divider button onClick ={()=>{setOpenDrawer(false); props.setValue(1)}} selected={props.value ===1}>
                <ListItemText disableTypography className={classes.drawerItem}> Sevices </ListItemText>
            
            </ListItem>
            <ListItem component={Link} to ="/revolution"  divider button onClick ={()=>{setOpenDrawer(false);props.setValue(2)}} selected={props.value===2}>
                <ListItemText disableTypography className={classes.drawerItem}> The Revolution </ListItemText>
            
            </ListItem>
            <ListItem component={Link} to ="/about"  divider button onClick ={()=>{setOpenDrawer(false); props.setValue(3)}} selected={props.value ===3}>
                <ListItemText disableTypography className={classes.drawerItem}>About </ListItemText>
           
            </ListItem>
            <ListItem component={Link} to ="/contact"  divider button onClick ={()=>{setOpenDrawer(false); props.setValue(4)}} selected={props.value ===4}>
                <ListItemText disableTypography className={classes.drawerItem}>Contact Us</ListItemText>
           
            </ListItem>
            <ListItem component={Link} to ="/estimate"  divider button onClick ={()=>{setOpenDrawer(false); props.setValue(5)}} selected={props.value ===5}>
                <ListItemText disableTypography className={classes.drawerItem}>Free Estimate</ListItemText>
           
            </ListItem>
                </List>



                </SwipeableDrawer>
                <IconButton  onClick={()=>setOpenDrawer(!openDrawer)} disableRipple className = {classes.drawerIconContainer}>

                    <MenuIcon className = {classes.drawerIcon}/>

                    </IconButton>

        </>
    );




    return (
        <>
            <AppBar>
                <Toolbar disableGutters>
                    <Button
                        component={Link}
                        to="/"
                        disableRipple
                        onClick={() => props.setValue(0)}
                        className={classes.logoContainer}
                    >


                        <img src={logo} alt="compnay logo" className={classes.logo} />
                    </Button>

                    {matches ? drawer : tabs}
                </Toolbar>
            </AppBar>
            {/* This will create an empty space or push down the text which is getting coverd under the appbar */}
            <div className={classes.toolbarMargin} />
        </>
    )
}

export default Header
