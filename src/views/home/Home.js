import React, { Component } from 'react';

import { connect } from 'react-redux';
import { changMsg } from '@/store/actions-test';

//将stroe中的数据变成组件中的数据
function mapStateToProps(state) {
    return {
        msg: state.msg
    };
}

function mapActionToProps(dispatch) {
    return {
        // change: (playload) => dispatch(changMsg(playload))
        change: function (playload) {
            return dispatch(changMsg(playload));
        }
    }
}



class Home extends Component {
    Handle = () => {
        console.log(1243);
        this.props.change('132444');
    }
    render() {

        console.log();
        return (
            <div>
                <h1>{this.props.msg}</h1>
                <button onClick={this.Handle}>按钮</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapActionToProps)(Home);