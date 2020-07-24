import React from 'react';
import '@/assets/css/base.css'
import '@/components/layout/style/layout.scss'
import LoyoutCom from './components/index'
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';
import Login from '@/components/login/Login';
//饥渴233333333333333333333333333333
// 热热特特通天塔

export default class App extends React.Component {
  state = {
    isLogin: localStorage.getItem('token')
  }

  loginHandle=()=>{
    console.log(24);
    this.setState({
      isLogin:localStorage.getItem('token')
    });
  }

  render() {
    return (
      <HashRouter>
        <div className="app" >
          <Provider store={store}>
            {
              this.state.isLogin ? <LoyoutCom></LoyoutCom> : <Login loginHandle={this.loginHandle} />
            }

          </Provider>
        </div>
      </HashRouter>
    );
  }
}

