/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalDiv from './ModalDiv';
import ModalContent from './ModalContent';
import Close from '../../Heading/Close';
import Send from '../../Heading/Send';

const Textarea = styled.textarea`
    resize: vertical;
    width: 350px;
    height: 50px;
    max-height: 100px;
    margin-top: 10px;
`;

class TourModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      yourEmail: '',
      message: '',
      date: '',
      finance: false,
    };
    this.onChange = this.onChange.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.contactAgent = this.contactAgent.bind(this);
  }

  onChange(e) {
    const { target } = e;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  hideModal() {
    const { showModal } = this.props;
    showModal('ContactModal');
  }

  contactAgent() {
    const { showModal } = this.props;
    this.setState({
      name: '',
      phone: '',
      yourEmail: '',
      message: '',
      finance: false,
    }, () => showModal('ContactModal'));
  }

  render() {
    const { show } = this.props;
    const {
      name, phone, yourEmail, message, finance,
    } = this.state;
    if (show) {
      return (
        <ModalDiv>
          <ModalContent>
            <Close close={this.hideModal} />
            <h1><b>Contact Agent</b></h1>
            <form>
              <input name="name" type="text" value={name} onChange={() => this.onChange(event)} size="50" />
              <br />
              <input name="phone" type="text" value={phone} onChange={() => this.onChange(event)} size="50" />
              <br />
              <input name="yourEmail" type="text" value={yourEmail} onChange={() => this.onChange(event)} size="50" />
              <br />
              <Textarea name="message" value={message} onChange={() => this.onChange(event)} />
              <br />
              <Send close={this.contactAgent}>Contact Agent</Send>
              <br />
              <input name="finance" checked={finance} type="checkbox" onChange={() => this.onChange(event)} />
              <label>I want financing information</label>
            </form>
          </ModalContent>
        </ModalDiv>
      );
    }
    return null;
  }
}

TourModal.propTypes = {
  show: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default TourModal;
