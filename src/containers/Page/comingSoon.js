import React, { Component } from 'react';
import Countdown from 'react-count-down';
import Image from '../../image/rob.png';
import IntlMessages from '../../components/utility/intlMessages';
import FourZeroFourStyleWrapper from './404.style';

export default class extends Component {
  render() {
    const options = {
      endDate: '03/01/2019 10:55 AM',
      prefix: 'until my birthday!'
    };
    return (
      <FourZeroFourStyleWrapper className="nn404Page">
        <div className="nn404Content">
          <h1>
            <IntlMessages id="comingsoon.title" />
          </h1>
          <h3>
            <IntlMessages id="comingsoon.subTitle" />
          </h3>
          <Countdown options={options} />
        </div>

        <div className="nn404Artwork">
          <img alt="#" src={Image} />
        </div>
      </FourZeroFourStyleWrapper>
    );
  }
}
