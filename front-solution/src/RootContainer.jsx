import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchToDoListRequest } from './store/actions';
class RootContainer extends Component {
    componentDidMount(){
        this.props.fetchToDoListRequest();
    }
    render() { 
        return ( 
            <div className="root-container">
                {this.props.responseResult && 
                    this.props.toDoList.map(i => {
                        return <p key={i.id}>{i.body}</p>
                    })
                }
                <h2>Test env</h2>
                <i className="fa fa-times"></i>
            </div>
        )
    }
}
 
const mapStateToProps = state => {
    return {
        toDoList: state.TestReducer.toDoList,
        responseError: state.TestReducer.responseError,
        responseResult: state.TestReducer.responseResult
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchToDoListRequest: () => dispatch(fetchToDoListRequest())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);