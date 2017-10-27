import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';

class PostsShow extends Component {

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.fetchPost(id);   
    }
    onDeleteClick(){
        const id = this.props.match.params.id;
        
        // call action creator
        this.props.deletePost(id, () => {
            this.props.history.push('/');            
        });
    }
    render() {
        const { post } = this.props;
        if (!post) {
            return(
                <div> loading...</div>
            )
        }
        return(
            <div>
                <h3>{post.title}</h3>
                <h6>{post.categories}</h6>
                <p>{post.content}</p>

                <Link to="/">
                    <Button 
                    color="primary" >
                    Back 
                    </Button>
                </Link>
                <Button 
                    color="primary" 
                    onClick={this.onDeleteClick.bind(this)}
                    >
                    Delete Post 
                </Button>
            </div>

        )
    }
}

function mapStateToProps({ posts }, ownProps){
    return { post: posts[ownProps.match.params.id]}
}
export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);