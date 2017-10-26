import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles, MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        width: '100%',
        fontFamily: 'Avenir'
    },
    typography: {
        fontFamily: 'Avenir',
        textTransform: 'capitalize',
        
        
    }
});
const style = {
    fontFamily: 'Avenir',
    textTransform: 'capitalize'
}

function TopNav(props){
    const { classes } = props;
    return(
        <div className={classes.root}>
            <AppBar position="static" color="default" >

                <Toolbar>
                    <Typography  className={classes.typography}  type="title" color="inherit">
                        Blog App
                    </Typography>
                    <Link to="/posts/new"
>
                        <Button 
                            color="default" 
                            /* className={classes.typography} */
                            style={style}
                            
                            >
                            Post New
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar> 
        </div>
    )
}

TopNav.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles, style)(TopNav);
// export default(TopNav);