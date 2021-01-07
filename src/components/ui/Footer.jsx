import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import footerAdorment from '../../assets/Footer Adornment.svg';
import { Grid, Hidden } from '@material-ui/core';
import { Link } from 'react-router-dom'
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
         position: 'absolute',    //will need to remove this and bottom w=once we have enough data to push down our footer
        // bottom: '0px',
        // zIndex: 1999,



    },
    adornment: {

        width: '25em',
        [theme.breakpoints.down('md')]: {
            width: '21em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '12em'
        },
        bottom: '0',
        verticalAlign: 'bottom'

    },

    mainContainer: {
        position: 'absolute',
    },
    link: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        fontSize: '0.75rem',
        textDecoration: 'none'
    },
    gridItem:{
        margin:'3.5em'
    },
    icon:{
        height:'4em',
        width:'4em',

        [theme.breakpoints.down('md')]:{
            height:'3em',
            width:'3em'    
        },

        [theme.breakpoints.down('xs')]:{
            height:'2.5em',
            width:'2.5em'
        }

    },
    socialContainer:{
        position:'absolute',
        marginTop:'-6em',
        right:'1.5em',

        [theme.breakpoints.down('xs')]:{
            right:'1em'
        }

    }
}));


export default function Footer(props) {
    const classes = useStyles();

    return (
        <footer className={classes.footer} >
            <Hidden mdDown>

           
            <Grid container justify="center" className={classes.mainContainer}>

                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/" onClick={()=>props.setValue(0)} className={classes.link}>
                            HOME
                        </Grid>


                    </Grid>

                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/services" onClick={()=>{props.setValue(1); props.setSelectedIndex(0)}} className={classes.link}>
                            Services

                        </Grid>
                        <Grid item component={Link} to="/customsoftware" onClick={()=>{props.setValue(1);props.setSelectedIndex(1)}} className={classes.link}>
                            Custome Software Development

                        </Grid>

                        <Grid item component={Link} to="/mobileapps"className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(2)}}>
                            iOS/Android App Development

                        </Grid>

                        <Grid item component={Link} to="/websites" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}}>
                            Website Development

                        </Grid>

                    </Grid>

                </Grid>

                <Grid item className={classes.gridItem}>

                    <Grid container direction="column" spacing={2}>

                        <Grid item component={Link} to="/revolution"className={classes.link} onClick={()=> props.setValue(2)}>
                            The Revolution

                        </Grid>
                        <Grid item className={classes.link}>
                            Vision

                        </Grid>

                        <Grid item className={classes.link}>
                            technology

                        </Grid>

                        <Grid item className={classes.link}>
                            Process

                        </Grid>

                    </Grid>


                </Grid>

                <Grid item className={classes.gridItem}>

                    <Grid container direction="column" spacing={2}>

                        <Grid item component={Link} to="/about" className={classes.link} onClick={() =>{props.setValue(3)}}>
                        About Us

                        </Grid>

                        <Grid item className={classes.link}>
                        History

                        </Grid>
                        <Grid item component={Link} to="/contact" className={classes.link}>
                        Team

                        </Grid>

                    </Grid>


                </Grid>

                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2} onClick={() =>{props.setValue(4)}}>

                    <Grid item className={classes.link}>
                        Contact Us
                    </Grid>
                        
                    </Grid>

                </Grid>
            </Grid>
            </Hidden>
            <img src={footerAdorment} alt="black decorative slash" className={classes.adornment} />

            <Grid container justify="flex-end" className={classes.socialContainer} spacing={2}>

                <Grid item component={'a'} rel="noopener noreferrer" href="https://www.facebook.com">
        <img src={facebook} alt="Social Icon" className={classes.icon}/>


                </Grid>
                <Grid item component={'a'} rel="noopener noreferrer" href="https://www.instagram.com">
        <img src={instagram} alt="Social Icon" className={classes.icon}/>


                </Grid>
                <Grid item component={'a'} rel="noopener noreferrer" href="https://www.twitter.com">
        <img src={twitter} alt="Social Icon" className={classes.icon}/>


                </Grid>



            </Grid>


        </footer>

    )

}