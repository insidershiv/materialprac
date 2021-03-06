import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const arcGrey = '#868686';

export default createMuiTheme({
    palette: {
        common: {
            blue: arcBlue,
            orange: arcOrange
        },
        primary: {
            main: arcBlue
        },
        secondary: {
            main: arcOrange
        }
    },

    typography: {
        tab: {
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: '1rem',
        },
        h2: {
            fontFamily: 'Raleway',
            lineHeight: 1.5,
            fontWeight: '700',
            fontSize: '2.5rem',
            color: arcBlue

        },
        h3: {
            fontSize: '2.5rem',
            color: arcBlue,
            fontFamily: 'pacifico',
        },
        h4: {
            fontFamily: 'Raleway',
            fontSize: '2.5rem',
            color: arcBlue,
            fontWeight: 700
        },
        subtitle1: {
            fontSize: '1.25rem',
            fontWeight: '300',
            color: arcGrey
        },
        subtitle2: {
            color: 'white',
            fontSize: '2.5rem',
            fontWeight: '300',
        }
        ,
        learnButton: {
            borderColor: arcBlue,
            borderWidth: 2,
            borderRadius: 50,
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            textTransform: 'none',
           
        },
        estimate: {
            fontFamily: 'pacifico',
            fontsize: '1rem',
            textTransform: 'none',
            color: 'white',
        }

    },


});