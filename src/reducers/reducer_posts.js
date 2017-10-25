import { FETCH_POSTS } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action){
    switch (action.type){
        case FETCH_POSTS:
            // console.log(action.payload.data); // this will be AN ARRAY OF POSTS [post1, post2, ...], but we awnat {4: post, 5: post}
            return _.mapKeys(action.payload.data, "id");
        default:
        return state;
    }
}
