import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../image/rob.png';
import IntlMessages from '../../components/utility/intlMessages';
import FourZeroFourStyleWrapper from './404.style';

export default class extends Component {
  render() {
    return (
      <FourZeroFourStyleWrapper className="nn404Page">
        <div className="nn404Content">
          <h1>
            <IntlMessages id="page404.title" />
          </h1>
          <h3>
            <IntlMessages id="page404.subTitle" />
          </h3>
          <p>
            <IntlMessages id="page404.description" />
          </p>
          <button type="button">
            <Link to="/dashboard">
              <IntlMessages id="page404.backButton" />
            </Link>
          </button>
        </div>

        <div className="nn404Artwork">
          <img alt="#" src={Image} />
        </div>
      </FourZeroFourStyleWrapper>
    );
  }
}
