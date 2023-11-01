import { Divider } from "@material-ui/core";
import Rightsidebar from "../rightsidebar/rightsidebar";
import useStyles from "./styles";

function Layout() {
    const classes = useStyles();
    return (<div className={classes.root}>
        <Rightsidebar />
        <Divider orientation="vertical" className={classes.divider}/>
        <div className={classes.main}>main part</div>
        <div className={classes.left}>
                منوی سمت چپ
        </div>
    </div>)
}

export default Layout;