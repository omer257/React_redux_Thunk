import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class userDetails extends React.Component {
    componentDidMount() {
        if (this.props.userId) {
            this.props.fetchUser(this.props.userId) 
        }
    }
    render() {   
        const user = this.props.user
        if(!user){
            return null;
        } 
        
    return <div>{this.props.user.name}</div>
    }
}
const mapStateToProps = (state,oldProps) => { 
    return { user: state.user.find((item)=>item.id===oldProps.userId) };
}
export default connect(mapStateToProps, { fetchUser: fetchUser })(userDetails);