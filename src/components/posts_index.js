import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 600,
        background: theme.palette.background.paper,
    }
});

class PostsIndex extends Component {
    
    componentDidMount(){
        this.props.fetchPosts();
        
    }
    renderPosts(){
        return _.map(this.props.posts, post => {
            return (
                <ListItem key={post.id}>
                    <ListItemText primary={post.title} />
                </ListItem>
            )
        });
    }

    render() {
        console.log(this.props);
        const { classes } = this.props;
        return(
            <div>
                {/* <h3>Posts</h3> */}
                
                <List >
                    {this.renderPosts()}
                </List>
            </div>    
        )
    }
}

// PostsIndex.PropTypes = {
//     classes: PropTypes.object.isRequired
// };
function mapStateToProps(state) {
    return { posts: state.posts }
}

// export default withStyles(styles)(connect(mapStateToProps, {fetchPosts})(PostsIndex));

export default connect(mapStateToProps)(PostsIndex);