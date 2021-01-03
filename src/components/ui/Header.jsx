import { AppBar, Button, Menu, MenuItem, Tab, Tabs, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

function Header() {

    const useStyles = makeStyles(theme => ({
        toolbarMargin: {
            ...theme.mixins.toolbar,
            marginBottom: '3em'
        },
        logo: {
            height: '6em'
        },
        tabContainer: {
            marginLeft: 'auto'
        },

        tab: {
            ...theme.typography.tab,
            textTransform: 'none',
            marginLeft: '25px'
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
            color:'white'


        }
    }))
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const changeHandler = (event, value) => {
        setValue(value)
    }

    const [anchorEl, setAnchorEl] = useState(null);

    const [open, setOpen] = useState(false)

    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true)
    }

    const handleClose = (event) => {
        setAnchorEl(false)
        setOpen(false)

    }

    const handleMenuClickItem  = (event, index)=>{
        setAnchorEl(null)
        setOpen(false)
        setSelectedIndex(index)
    }

    const menuOptions = [{name:'Services', link:'/services'},{name:'Custom Software Development',link:'/customsoftware'}, {name:'Mobile App Development', link:'/mobileapps'}, {name:'Website Development', link:'/websites'}]

    useEffect(() => {
        if (window.location.pathname === '/' && value !== 0) {
            setValue(0)
        } else if (window.location.pathname === '/services' && value !== 1) {
            setValue(1)
        } else if (window.location.pathname === '/revolution' && value !== 2) {
            setValue(2)
        } else if (window.location.pathname === '/about' && value !== 3) {
            setValue(3)
        } else if (window.location.pathname === '/contact' && value !== 4) {
            setValue(4)
        } else if (window.location.pathname === '/estimate' && value !== 5) {
            setValue(5)
        }
     
    
      
    switch (window.location.pathname){

        case "/":
            if(value !== 0){
                setValue(0)
            }
            break;

        case "/services":
            if(value !== 1){
                setValue(1)
                setSelectedIndex(0)
            }
            break;

        case '/mobileapps':
            if(value !== 1){
                setValue(1)
                setSelectedIndex(2)
            }

            break;

        case '/customsoftware':
            if(value !== 1){
                setValue(1)
                setSelectedIndex(1)
            }
            break;

        case '/about':

        if(value !== 3){
            setValue(3)
            
        }
        break;

        case '/contact':
            if(value !== 4){
                setValue(4)
            }
            break;
        
        case '/revolution':
            if(value !== 2){
                setValue(2)
            }
            break;

        case '/estimate':
            if(value !== 5){
                setValue(5)
            }
            break;

        case '/websites':

        if(value !==1){
            setValue(1)
            setSelectedIndex(3)
        }
        break;


            default:
                break
    }
    
    
    
 }, [value])





    return (
        <>
            <AppBar>
                <Toolbar disableGutters>
                    <img src={logo} alt="compnay logo" className={classes.logo} />
                    <Tabs className={classes.tabContainer} value={value} onChange={changeHandler} indicatorColor="primary">
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

                  {  menuOptions.map((option, index) =>( 
                      <MenuItem key={option} classes={{root:classes.menuItem}} component={Link} to={option.link} onClick = {event =>{
                          handleMenuClickItem(event, index);
                          setValue(1);
                          handleClose();
                      }}
                      selected = {index === selectedIndex &&  value === 1}
                      >
                      {option.name}
                      </MenuItem>
                  ))}
                  


                      
                    </Menu>
                </Toolbar>
            </AppBar>
            {/* This will create an empty space or push down the text which is getting coverd under the appbar */}
            <div className={classes.toolbarMargin} />
        </>
    )
}

export default Header
