import { Button, Grid, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import React from 'react';
import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({

    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.8rem',
        height: 37,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em'
        }
    },
    background:{
        backgroundImage:`url(${background})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height:'60em',
        width:'100%',
        backgroundAttachment:'fixed',
      
        [theme.breakpoints.down('md')]:{
            backgroundImage:`url(${mobileBackground})`,
            backgroundAttachment:'inherit'
        }

    },

    estimateButton:{
    ...theme.typography.estimate,
    borderRadius:50,
    height:80,
    width:205,
    backgroundColor:theme.palette.common.orange,
    fontSize:'1rem',
    marginRight:'5em',
    marginLeft:'2em' ,
    [theme.breakpoints.down('sm')]:{
        marginLeft:0,
        marginRight:0
    }  
    }

}));

function CallToAction(props) {
    
        const classes = useStyles();
        const theme = useTheme();
        const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        
        <Grid container  alignItems="center" className={classes.background} justify= {matchesSM ? 'center' : 'space-between'} direction= {matchesSM ? 'column' : 'row'}>

            <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center': undefined }}>

        <Grid container direction="column">

        <Grid item>

        <Typography variant="h2">
            Simple Software. <br/> Revolutionary Results.

        </Typography>
        <Typography variant="subtitle2">
        Take advantage of 21st century.
        </Typography>
        <Grid container item justify="center">
                      
                      <Button variant="outlined" component={Link} onClick= {()=>{props.setValue(2);}} to="/revolution" className={classes.learnButton}>
                                  <span style={{ marginRight: 10 }}> Learn More</span>

                              </Button>
                                    
                      </Grid>
            </Grid>

        </Grid>

            </Grid>

            <Grid item >
                <Button variant="contained" component={Link} to="/estimate" onClick= {()=>{props.setValue(5);}} className={classes.estimateButton}>Free Estimte</Button>
            </Grid>
            


        </Grid>

    )
}

export default CallToAction