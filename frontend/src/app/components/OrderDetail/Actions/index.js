import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* components */
import Button from 'app.dump/Button';
/* local components */
import Modal from './Modal';

const actionPropTypes = {
  button: PropTypes.string.isRequired,
  dialog: PropTypes.object.isRequired
};

class Actions extends Component {
  state = {
    showReject: false,
    showAccept: false,
    proceeded: false
  };

  static propTypes = {
    ui: PropTypes.shape({
      accept: { ...actionPropTypes },
      reject: { ...actionPropTypes }
    }).isRequired
  };

  handleShowReject = () => this.setState({ showReject: true });
  handleHideReject = () => this.setState({ showReject: false });
  handleShowAccept = () => this.setState({ showAccept: true });
  handleHideAccept = () => this.setState({ showAccept: false });
  proceed = () => this.setState({ proceeded: true });

  render() {
    if (!this.props.ui || this.state.proceeded) return null;

    const { ui: { accept, reject } } = this.props;

    return (
      <div className="text-right">
        {this.state.showAccept && <Modal accept proceed={this.proceed} closeDialog={this.handleHideAccept} { ...accept.dialog } />}
        {this.state.showReject && <Modal proceed={this.proceed} closeDialog={this.handleHideReject} { ...reject.dialog } />}

        <Button
          text={accept.button}
          type="success"
          btnClass="mr-2"
          onClick={this.handleShowAccept}
        />

        <Button
          text={reject.button}
          type="danger"
          onClick={this.handleShowReject}
        />
      </div>
    );
  }
}

export default Actions;
