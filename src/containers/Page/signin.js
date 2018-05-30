import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../components/uielements/input';
import Button from '../../components/uielements/button';
import authAction from '../../redux/auth/actions';
import IntlMessages from '../../components/utility/intlMessages';
import SignInStyleWrapper from './signin.style';

const { login } = authAction;

class SignIn extends Component {
  state = {
    redirectToReferrer: false,
    username: null,
    password: null
  };
  componentWillReceiveProps(nextProps) {
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      nextProps.isLoggedIn === true
    ) {
      this.setState({ redirectToReferrer: true });
    }
  }
  handleLogin = () => {
    const { login } = this.props;
    const {username, password } = this.state;
    if(username && password)
      login({username, password});
    this.setState({username: null, password: null})
  }
  onChange = (e) => {
    if(e.target.name === 'username') {
      this.setState({username: e.target.value})
    }
    if(e.target.name === 'password') {
      this.setState({password: e.target.value})
    }
  }
  render() {
    const from = { pathname: '/dashboard' };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <SignInStyleWrapper className="nnSignInPage">
        <div className="nnLoginContentWrapper">
          <div className="nnLoginContent">
            <div className="nnLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.signInTitle" />
              </Link>
            </div>

            <form className="nnSignInForm">
              <div className="nnInputWrapper">
                <Input size="large" type="email" placeholder="Username" name="username" onBlur={this.onChange} autoComplete="off" />
              </div>

              <div className="nnInputWrapper">
                <Input size="large" type="password" placeholder="Password" name="password" onBlur={this.onChange}/>
              </div>

              <div className="nnInputWrapper nnLeftRightComponent">
                <Button type="primary" onClick={this.handleLogin}>
                  <IntlMessages id="page.signInButton" />
                </Button>
              </div>

              <p className="nnHelperText">
                <IntlMessages id="page.signInPreview" />
              </p>

              <div className="nnCenterComponent nnHelperWrapper">
                <Link to="/forgotpassword" className="nnForgotPass">
                  <IntlMessages id="page.signInForgotPass" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default connect(
  state => ({
    isLoggedIn: state.Auth.get('token') !== null ? true : false,
  }),
  { login }
)(SignIn);
