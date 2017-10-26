import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import {
    Checkbox,
    RadioGroup,
    Select,
    TextField,
    Switch,
  } from 'redux-form-material-ui';

const styles = theme => ({
    textField:{
        font: 'Avenir'
        // color: 'pink'
    }
})
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { createPost } from '../actions';
class PostsNew extends Component{

    onSubmit(values){
        this.props.createPost(values, () => {

            this.props.history.push('/');
        });
    }
    render(){
        const { classes, handleSubmit } = this.props;
        return (
            <form  
                onSubmit={handleSubmit(this.onSubmit.bind(this))}
            >

                    <Field
                        name="title"
                        component={TextField}
                        fullWidth
                        label="Title"
                        helperText="Required"
                        className={classes.textField}
                    />  
                    
                    <Field
                        name="categories"
                        component={TextField}
                        fullWidth
                        label="Category"
                        helperText="Required"

                    />  
                    <Field
                        name="content"
                        component={TextField}
                        fullWidth
                        label="Content"    
                        helperText="Make it really long"
                        multiline='true'
                        rows='5'
                    />  
                    <Button 
                        color="inherit" 
                        type="submit"
                        >
                        Submit 
                    </Button>
                    <Link to="/"
>
                        <Button 
                            color="primary" 
                            >
                            Cancel 
                        </Button>
                    </Link>
            </form>
        )
    }
}

function validate(values){
    const errors = {};
    // validate inputs from values
    // if (values.title.length < 3){
    //     errors.title = "make your title longer"
    // }
    if (!values.title){
        errors.title = "Enter a title";
    }
    if (!values.category){
        errors.category = "Enter a category";
    } 
    if (!values.content){
        errors.content = "Enter some content";
    }    
    // if errors is empty, form is fine to submit. 
    // if errors has ANY properties, redux-form assumes form is invalid
    return errors;
    
}

// export default reduxForm({
//     // validate: validate,
//     validate,
//     form: 'PostsNewForm'
// })(PostsNew);

PostsNew.PropTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(reduxForm({
    // validate: validate,
    validate,
    form: 'PostsNewForm'
})(
    connect(null, {createPost})(PostsNew))
);

// reduxForm from redux-form is basically same as connect from redux
// ***What redux-form does for us and why/how to use it***
// 1. Identify different pieces of form state
//  a) title b) category c) content
// 2. make a field component for each of those pieces of state
// 3. user changes a field input
// 4. Redux-form handles the changes (redux-form!)
// 5. User submites form 
// 6. We (WE!) validate inputs and handle submtiting form to API


