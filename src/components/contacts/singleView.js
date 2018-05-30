import React, { Component } from 'react';
import { ContactCardWrapper } from './contactCard.style';

export default class extends Component {
  render() {
    const { contact, otherAttributes } = this.props;
    const name = contact.name ? contact.name : 'No Name';
    const extraInfos = [];
    otherAttributes.forEach(attribute => {
      const value = contact[attribute.value];
      if (value) {
        extraInfos.push(
          <div className="nnContactCardInfos" key={attribute.value}>
            <p className="nnInfoLabel">{`${attribute.title}`}</p>
            <p className="nnInfoDetails">{value}</p>
          </div>
        );
      }
    });
    return (
      <ContactCardWrapper className="nnContactCard">
        <div className="nnContactCardHead">
          <div className="nnPersonImage">
            {contact.avatar ? <img alt="#" src={contact.avatar} /> : ''}
          </div>
          <h1 className="nnPersonName">{name}</h1>
        </div>
        <div className="nnContactInfoWrapper">{extraInfos}</div>
      </ContactCardWrapper>
    );
  }
}
