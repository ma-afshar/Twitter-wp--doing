import { Grid } from "@material-ui/core";
import useStyles from "./styles";

function Rightsidebar() {
    const classes = useStyles();
    return (<div className={classes.root}>
        <Grid
            container
            direction={"row"}
            alignItems={"center"}
            className={classes.logo}
        >
            <Grid item className={classes.logoimg}>
                <img src="images/twitter.jpg" alt="twitter" className={classes.img}/>
            </Grid>
            <Grid item className={classes.logotype}>
                <p >توییتر فارسی</p>
            </Grid>
        </Grid>
    </div>);
}

export default Rightsidebar;