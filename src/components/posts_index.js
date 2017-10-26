import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index.js';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import pink from 'material-ui/colors/pink';
import createPalette from 'material-ui/styles/createPalette';
// const styles = (theme: Object) => ({
//     root: {
//       display: 'flex',
//       justifyContent: 'right',
//       alignItems: 'right',
//       position: 'relative',
//       textDecoration: 'overline',
//     },
//     button: {
//       transition: theme.transitions.create('background-color', {
//         duration: theme.transitions.duration.shortest,
//       }),
//       '&:hover': {
//         textDecoration: 'underline',
//         backgroundColor: 'pink',
//         // Reset on mouse devices
//         '@media (hover: none)': {
//           backgroundColor: 'pink',
//         },
//       },
//     }
//   });
  
const theme = (() => {


    return createMuiTheme({
       
        typography: {
            fontFamily: 'Avenir',
            textDecoration: 'underline',
        },
        button:{
            background: '#d3d3d3'
        }
    });

})();

const styles = {
    textTransform: 'capitalize',
    color: '#d4d4d4'
}

class PostsIndex extends Component {
    
    
    componentDidMount(){
        this.props.fetchPosts();
        
    }
    renderPosts(){
        const { classes } = this.props;
        
        return _.map(this.props.posts, post => {
            return (
                <div key={post.id}  >

                    <ListItem button 
                    /*
                        classes={{
                            root: classes.root,
                            button: classes.button

                            // className, e.g. `OverridesClasses-root-X`
                            // label: classes.label, // className, e.g. `OverridesClasses-label-X`
                        }}
                        */
                    >
                        <ListItemText style={styles} primary={post.title}  
                  

              
                        
                        />
                    </ListItem>
                </div>
            )
        });
    }

    render(){
        const { classes } = this.props;
        return(
            <MuiThemeProvider theme={theme} >
                <List >
                    {this.renderPosts()}
                </List>
            </MuiThemeProvider>

        )
    }

}

PostsIndex.PropTypes = {
    classes: PropTypes.object.isRequired
};
function mapStateToProps(state) {
    return { posts: state.posts }
}


// export default connect(mapStateToProps, { fetchPosts })(PostsIndex);

export default withStyles(theme, styles)(connect(mapStateToProps, { fetchPosts })(PostsIndex));