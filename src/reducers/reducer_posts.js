import { FETCH_POSTS, FETCH_POST, CREATE_POST, DELETE_POST } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action){
    switch (action.type){
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, "id");
        case FETCH_POST: 
            const post = action.payload.data;

            // old javascript version:
            // const newState = { ...state};
            // newState[post.id] = post;
            // return newState;

            // es6 syntax: 
            return {...state, [action.payload.data.id]: action.payload.data}

        case CREATE_POST:
            console.log(action.payload.data);
            return action.payload.data;
        case DELETE_POST: 
            return _.omit(state, action.payload)
        default:
            return state;
    }
}
