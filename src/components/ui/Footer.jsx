import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import footerAdorment from '../../assets/Footer Adornment.svg';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        position: 'absolute',    //will need to remove this and bottom w=once we have enough data to push down our footer
        bottom: '0px',
        zIndex: 1999,



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
    }
}));


export default function Footer(props) {
    const classes = useStyles();

    return (
        <footer className={classes.footer} >
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
                            Mobile App Development

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
            <img src={footerAdorment} alt="black decorative slash" className={classes.adornment} />
        </footer>

    )

}