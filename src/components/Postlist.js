import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserDetails from './UserDetails';

class Postlist extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    postsLists = () => {
        return this.props.posts.map((item) => {
            return <div className="item" key={item.id}>
                <i className="large github middle aligned icon"></i>
                <div className="content">
                    <div className="header">{item.title}</div>
                    <div className="description">{item.body}</div>
                    <div><UserDetails userId={item.userId} /></div>
                </div>
            </div>
        })
    }
    render() {
        if (!this.props.posts[0]) {
            return "Loading";
        } 
        return <div className="ui relaxed divided list">{this.postsLists()}</div>

    }
}
const mapReduxToPros = (store) => {
    // console.log(store)
    return { posts: store.posts };
}
export default connect(mapReduxToPros, { fetchPosts })(Postlist);