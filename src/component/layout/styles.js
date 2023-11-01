import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        height: '100vh',
        width: '100%',
        display: 'flex'
    },
    divider: {
        height: '100%',
        width: '2px !important',
        backgroundColor: '#7EBAFF !important',
        filter: 'opacity(0.5)'
    },
    main: {
        backgroundColor: '#BDC3C7', 
        flex: 1
    },
    left: {
        backgroundColor: '#BDC3C7',
        width: '25%'
    }
})

export default useStyles;