import React from 'react';
import Lottie from 'react-lottie'
import { makeStyles, useTheme } from '@material-ui/core/styles';

import animationData from '../animations/landinganimation/data'
import { Button, Card, CardContent, Grid, Typography, useMediaQuery } from '@material-ui/core';
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackgroud from '../assets/infoBackground.svg';
import CallToAction from './ui/CallToAction';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({

    animation: {
        maxWidth: '50em',
        minWidth: '21em',
        marginTop: '2.5em',
        marginLeft: '10%',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '30em'
        }

    },
    buttonContainer: {
        marginTop: '1rem'
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: '1rem',
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: '0.9rem',
        height: 45,
        width: 145,
        color: theme.palette.common.blue,
        

    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.8rem',
        height: 37,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em'
        }
    },
    mainContainer: {
        marginTop: '5em',

        [theme.breakpoints.down('md')]: {
            marginTop: '3em'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '2em'
        },
        marginRight:0

    },
    heroTextContainer: {
        minWidth: '21em',
        marginLeft: '1em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    },
    specialText: {
        fontFamily: 'pacifico',
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: '1em'
    },
    icon: {
        marginLeft: '2em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: '12em',
        [theme.breakpoints.down('sm')]: {
            padding: 25
        }
    },
    revolutionBackground: {
        backgroundImage:`url(${revolutionBackground})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height:'100%',
        width:'100%'
    },
    revolutionCard: {
        position:'absolute',
        boxShadow:theme.shadows[10],
        borderRadius:15,
        padding:'10em',
        [theme.breakpoints.down('sm')]:{
            paddingTop:'8em',
            paddingBottom:'8em',
            paddinLeft:0,
            paddingRight:0,
            borderRadius:0,
            width:'100%'
        }

    },

    infoBackground: {
        backgroundImage:`url(${infoBackgroud})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height:'100%',
        width:'100%'

    },
}));

export default function LandingPage(props) {

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (


        <Grid container direction="column" className={classes.mainContainer}>
            {/* HeroContainer Begins Here */}
            <Grid item>

                <Grid container justify="flex-end" alignItems="center" direction="row">

                    <Grid sm item className={classes.heroTextContainer}>

                        <Typography variant="h2" align="center">
                            Bringing West Cost Technology<br /> To the Midwest
                        </Typography>




                        <Grid container direction="row" justify="center" className={classes.buttonContainer}>

                            <Grid item >

                                <Button component={Link} to="/estimate" onClick= {()=>props.setValue(5)} variant="contained" className={classes.estimateButton}> Free Estimate</Button>

                            </Grid>

                            <Grid item>

                                <Button component={Link} to="/revolution" onClick= {()=>props.setValue(2)} variant="outlined" className={classes.learnButtonHero}>Learn More</Button>


                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>

                        <Lottie options={defaultOptions} height={'100%'} width={'100%'}></Lottie>

                    </Grid>
                </Grid>
            </Grid>
            {/* End OF Hero Container Section */}


            {/* Starting of custom Software Section */}

            <Grid item>
                {" "}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? 'center' : undefined}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}>


                        <Typography variant="h4">
                            Custom Software Development

        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
        </Typography>
                        <Typography variant="subtitle1">

                            Complete Digital Solutions, From investigation to {" "}
                            <span className={classes.specialText}>Celebration</span>
                        </Typography>

                        <Button variant="outlined" component={Link} to="/customsoftware" onClick= {()=>{props.setValue(1); props.selectedIndex(1)}} className={classes.learnButton}>
                            <span style={{ marginRight: 10 }}> Learn More</span>

                        </Button>

                    </Grid>
                    <Grid item>
                        <img src={customSoftwareIcon} className={classes.icon} alt="customeSoftwareICon" />

                    </Grid>
                </Grid>

            </Grid>


            {/* iOS/Android App Development Section */}




            <Grid item>
                {" "}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? 'center' : 'flex-end'}>
                    <Grid item style={{ textAlign: matchesSM ? 'center' : undefined }}>


                        <Typography variant="h4">
                            iOS/Android App Development

        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement.
        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create a standalone app {matchesSM ? null : <br />}
        with either mobile platform
                   </Typography>

                        <Button variant="outlined" component={Link} to="/mobileapps" onClick= {()=>{props.setValue(1); props.selectedIndex(2)}} className={classes.learnButton}>
                            <span style={{ marginRight: 10 }}> Learn More</span>

                        </Button>

                    </Grid>
                    <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
                        <img src={mobileAppsIcon} className={classes.icon} alt="customeSoftwareICon" />

                    </Grid>
                </Grid>

            </Grid>

            {/* End of Mobile APP development Section */}



            {/* Websites Section Begins Here */}


            <Grid item>
                {" "}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? 'center' : undefined}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}>


                        <Typography variant="h4">
                            Website Development

        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
        </Typography>
                        <Typography variant="subtitle1">
                            Optimize for Search Engines, built for speed.
                   </Typography>

                        <Button variant="outlined" component={Link} to="/wbsites" onClick= {()=>{props.setValue(1); props.selectedIndex(3)}} className={classes.learnButton}>
                            <span style={{ marginRight: 10 }}> Learn More</span>

                        </Button>

                    </Grid>
                    <Grid item >
                        <img src={websitesIcon} className={classes.icon} alt="customeSoftwareICon" />

                    </Grid>
                </Grid>

            </Grid>


            {/* Revolution section starts here */}

            <Grid item>
                <Grid container style={{height:'100em', marginTop:'12em'}} alignItems="center" justify="center">
                   
                <Card className={classes.revolutionCard}>

                    <CardContent>

                        <Grid container direction="column" style={{textAlign:"center"}}>

                            <Grid item >
                                <Typography variant="h3" gutterBottom>
                                    The Revolution

        </Typography>

                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">
                                    Visionary insights coupled with cutting-edge technology is recipe
                                    for revolution.

                </Typography>
                                <Button variant="outlined" component={Link} to="/revolution" onClick= {()=>{props.setValue(1)}} className={classes.learnButton}>
                                    <span style={{ marginRight: 10 }}> Learn More</span>

                                </Button>

                            </Grid>


                        </Grid>

                    </CardContent>

                </Card>
                <div className={classes.revolutionBackground} />
                </Grid>
            </Grid>


            {/* Revolution Ended Here */}

            {/*Information Section Begins Here */}

            <Grid item>

                <Grid container direction="row" style={{height:'80em'}} alignItems="center">

                    <Grid item container style={{position:'absolute', textAlign:matchesXS ? 'center' : 'inherit'}} direction= {matchesXS ? 'column': 'row'}>

                   

                    <Grid item sm style={{marginLeft: matchesXS ? 0 : matchesSM ? '2em': '5em'}}>

                        <Grid container style ={{marginBottom : matchesSM ? '10em' : 0}} direction="column" >

                        <Typography variant="h2" style={{color:'white'}}>
                            About Us


                        </Typography>

                        <Typography variant = "subtitle2">
        Let's get personal.
                            
                        </Typography>
                        <Grid item>
                      
                        <Button variant="outlined" component={Link} to="/about" className={classes.learnButton} onClick= {()=>{props.setValue(3)}} style={{color:'white', borderColor:'white', padding:'1em'}}>
                                    <span style={{ marginRight: 10 }}> Learn More</span>

                                </Button>
                                      
                        </Grid>
                        </Grid>

                    </Grid>


                    <Grid item sm style={{marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em', textAlign: matchesXS ? 'center' :'right'}} >

                <Grid container direction="column" >

                    <Typography variant="h2" style={{color:'white'}}>
                      Contact Us


                    </Typography>

                        <Typography variant = "subtitle2">
                   Say hello !
    
                    </Typography>
                    <Grid item>

            <Button variant="outlined" component={Link} to="/contact" className={classes.learnButton} onClick= {()=>{props.setValue(4)}} style={{color:'white', borderColor:'white', padding:'1em'}}>
            <span style={{ marginRight: 10 }}> Learn More</span>

                </Button>
              
                </Grid>
                </Grid>

                    </Grid>



                    </Grid>
                    <div className={classes.infoBackground} />


                </Grid>
                </Grid>

                <Grid item>

        <CallToAction setValue ={props.setValue}/>
                </Grid>

        </Grid>






    )
}