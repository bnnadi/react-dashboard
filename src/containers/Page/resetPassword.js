import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/uielements/input';
import Button from '../../components/uielements/button';
import IntlMessages from '../../components/utility/intlMessages';
import ResetPasswordStyleWrapper from './resetPassword.style';

export default class extends Component {
  render() {
    return (
      <ResetPasswordStyleWrapper className="nnResetPassPage">
        <div className="nnFormContentWrapper">
          <div className="nnFormContent">
            <div className="nnLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.resetPassTitle" />
              </Link>
            </div>

            <div className="nnFormHeadText">
              <h3>
                <IntlMessages id="page.resetPassSubTitle" />
              </h3>
              <p>
                <IntlMessages id="page.resetPassDescription" />
              </p>
            </div>

            <div className="nnResetPassForm">
              <div className="nnInputWrapper">
                <Input
                  size="large"
                  type="password"
                  placeholder="New Password"
                />
              </div>

              <div className="nnInputWrapper">
                <Input
                  size="large"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="nnInputWrapper">
                <Button type="primary">
                  <IntlMessages id="page.resetPassSave" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ResetPasswordStyleWrapper>
    );
  }
}
