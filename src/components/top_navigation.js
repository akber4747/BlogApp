import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
      marginTop: theme.spacing.unit * 3,
      width: '100%',
    },
  });

function TopNav(props){
    const { classes } = props;
    return(
        <div className={classes.root} >
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography type="title" color="inherit">
                        Welcome to the Blog
                    </Typography>
                </Toolbar>
            </AppBar> 
        </div>
    )
}

TopNav.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(TopNav);