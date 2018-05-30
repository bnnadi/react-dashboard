import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/uielements/input';
import Button from '../../components/uielements/button';
import IntlMessages from '../../components/utility/intlMessages';
import ForgotPasswordStyleWrapper from './forgotPassword.style';

export default class extends Component {
  render() {
    return (
      <ForgotPasswordStyleWrapper className="nnForgotPassPage">
        <div className="nnFormContentWrapper">
          <div className="nnFormContent">
            <div className="nnLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.forgetPassTitle" />
              </Link>
            </div>

            <div className="nnFormHeadText">
              <h3>
                <IntlMessages id="page.forgetPassSubTitle" />
              </h3>
              <p>
                <IntlMessages id="page.forgetPassDescription" />
              </p>
            </div>

            <div className="nnForgotPassForm">
              <div className="nnInputWrapper">
                <Input size="large" placeholder="Email" type="email" name="email"  autoComplete="off"/>
              </div>

              <div className="nnInputWrapper">
                <Button type="primary">
                  <IntlMessages id="page.sendRequest" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ForgotPasswordStyleWrapper>
    );
  }
}
