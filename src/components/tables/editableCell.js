import React, { Component } from 'react';
import Input from '../uielements/input';
import { Icon } from 'antd';

export default class extends Component {
  state = {
    value: this.props.value,
    editable: false
  };
  handleChange = event => {
    const value = event.target.value;
    this.setState({ value });
  };
  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(
        this.state.value,
        this.props.columnsKey,
        this.props.index
      );
    }
  };
  edit = () => {
    this.setState({ editable: true });
  };
  render() {
    const { value, editable } = this.state;
    return (
      <div className="nnEditData">
        {editable ? (
          <div className="nnEditDataWrapper">
            <Input
              value={value}
              onChange={this.handleChange}
              onPressEnter={this.check}
            />
            <Icon type="check" className="nnEditIcon" onClick={this.check} />
          </div>
        ) : (
          <p className="nnDataWrapper">
            {value || ' '}
            <Icon type="edit" className="nnEditIcon" onClick={this.edit} />
          </p>
        )}
      </div>
    );
  }
}
