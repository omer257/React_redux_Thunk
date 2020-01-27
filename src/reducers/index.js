import {combineReducers} from 'redux';
import PostsReducer from './Posts';
import UserReducer from './User';


export default combineReducers({posts:PostsReducer,user:UserReducer});