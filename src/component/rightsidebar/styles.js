import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: '18%',
        padding: '23px 17px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
    },
    logo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoimg: {
        width: '50px',
        height: '50px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cotain'
    },
    img: {
        width: '50px',
        height: '50px'  
    },
    logotype: {
        fontSize: '1.25rem',
        marginRight: '5px'
    }

})

export default useStyles;