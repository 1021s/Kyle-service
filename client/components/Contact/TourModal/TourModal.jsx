/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Moment from 'moment';
import ModalDiv from './ModalDiv';
import ModalContent from './ModalContent';
import Close from '../../Heading/Close';
import Send from '../../Heading/Send';
import DateButtonList from '../TourExtras/DateButtonList';
import DropDown from '../TourExtras/DropDown';
import RequestTour from '../TourExtras/RequestTour';

const Textarea = styled.textarea`
    resize: vertical;
    width: 350px;
    height: 50px;
    max-height: 100px;
    margin-top: 10px;
`;

const StyledSpan = styled.span`
width: 424px;

`;

class TourModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      yourEmail: '',
      message: '',
      dates: [],
      finance: false,
      currentDate: Moment().get('date'),
      currentDates: [],
      times: [],
      currentTime: '',
      toggle: false,
    };
    this.onChange = this.onChange.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.contactAgent = this.contactAgent.bind(this);
    this.clickDate = this.clickDate.bind(this);
    this.switchModal = this.switchModal.bind(this);
  }

  componentDidMount() {
    this.generateDates();
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
    const { dates } = this.state;
    showModal('tourModal');
    this.setState({
      currentDate: Moment().get('date'),
      currentDates: dates.slice(0, 3),
      toggle: false,
    });
  }

  generateDates() {
    const now = Moment();
    const dates = [];
    const date = now.get('date');

    for (let i = date; i < date + 7; i += 1) {
      dates.push(Moment({ date: i }));
    }
    this.setState({
      dates,
      currentDates: dates.slice(0, 3),
    }, () => this.generateTimes());
  }

  checkNow(date) {
    const now = Moment();
    if (date === now.get('date')) {
      return true;
    }
    return false;
  }

  generateTimes() {
    const { currentDate } = this.state;
    const times = [];
    let Hour = 9;
    if (this.checkNow(currentDate)) {
      const minute = Moment().get('minute');
      Hour = Moment().get('hour');
      Hour += 2;
      if (minute > 30) {
        Hour += 1;
      } else {
        times.push(Moment({
          hour: Hour,
          minute: 30,
        }).format('h:mm A'));
        Hour += 1;
      }
    }
    for (let hour = Hour; hour < 19; hour += 1) {
      times.push(Moment({ hour }).format('h:mm A'));
      times.push(Moment({
        hour,
        minute: 30,
      }).format('h:mm A'));
    }
    times.push(Moment({ hour: 19 }).format('h:mm A'));
    this.setState({
      times,
    });
  }

  clickDate(date) {
    this.setState({
      currentDate: date,
    }, () => this.generateTimes());
  }

  contactAgent() {
    event.preventDefault();
    const { showModal } = this.props;
    const { dates } = this.state;
    this.setState({
      name: '',
      phone: '',
      yourEmail: '',
      message: '',
      finance: false,
      currentDate: Moment().get('date'),
      currentDates: dates.slice(0, 3),
      toggle: false,
    }, () => showModal('tourModal'));
  }

  switchModal() {
    const { toggle } = this.state;
    this.setState({
      toggle: !toggle,
    });
  }


  render() {
    const { show } = this.props;
    const {
      name, phone, yourEmail, message, finance, currentDate, toggle, currentDates, times,
    } = this.state;
    let modal;
    const dateModal = (
      <ModalDiv>
        <ModalContent>
          <Close close={this.hideModal} />
          <br />
          <h3>Take a tour</h3>

          <DateButtonList dates={currentDates} currentDate={currentDate} clickDate={this.clickDate} />
          <br />
          <DropDown times={times} />
          <RequestTour contact={this.switchModal} />
        </ModalContent>
      </ModalDiv>
    );
    const formModal = (
      <ModalDiv>
        <ModalContent>
          <Close close={this.contactAgent} />
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
    if (toggle ? modal = formModal : modal = dateModal);
    if (show) {
      return modal;
    }
    return null;
  }
}

TourModal.propTypes = {
  show: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default TourModal;
