/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Moment from 'moment';
import ModalDiv from './ModalDiv';
import ModalContent from './ModalContent';
import Close from '../../Heading/Close';
import DateButtonList from '../TourExtras/DateButtonList';
import DropDown from '../TourExtras/DropDown';
import RequestTour from '../TourExtras/RequestTour';
import Input from '../ContactModal/Input';
import Change from '../TourExtras/Change';


const Textarea = styled.textarea`
    resize: vertical;
    width: 100%;
    height: 50px;
    max-height: 100px;
    margin-top: 10px;
`;

// const StyledSpan = styled.span`
// width: 424px;

// `;

const H2 = styled.h2`
font-size: 28px;
line-height: 1.3;
font-weight: 600;
`;

const Padded = styled.div`
flex-grow: 1;
padding: 20px;
text-align: left;
`;

const P = styled.p`
margin-top: 10px;
margin-bottom: 15px;
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
line-height: 1.5
font-size: 10px;
font-weight: 400;
color: #54545A;
`;
const UL = styled.ul`
display: flex;
width: 100%;
padding-left: 0;
list-style: none;
align-items: center;
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
      selector: '',
      toggle: false,
    };
    this.onChange = this.onChange.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.contactAgent = this.contactAgent.bind(this);
    this.clickDate = this.clickDate.bind(this);
    this.switchModal = this.switchModal.bind(this);
    this.SwitchLeft = this.SwitchLeft.bind(this);
    this.SwitchRight = this.SwitchRight.bind(this);
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
      Hour += 1;
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

  SwitchLeft() {
    const { currentDates, dates } = this.state;
    if (currentDates[0].get('date') !== Moment().get('date')) {
      const min = dates.map((date) => date.get('date')).indexOf(currentDates[0].get('date'));
      if (min >= 3) {
        this.setState({
          currentDates: dates.slice(min - 3, min),
        });
      } else {
        this.setState({
          currentDates: dates.slice(0, 3),
        });
      }
    }
  }

  SwitchRight() {
    const { currentDates, dates } = this.state;
    const length = currentDates.length - 1;
    if (currentDates[length].get('date') !== dates[dates.length - 1].get('date')) {
      const max = dates.map((date) => date.get('date')).indexOf(currentDates[length].get('date'));
      if (dates.length - max >= 3) {
        this.setState({
          currentDates: dates.slice(max + 1, max + 4),
        });
      } else {
        this.setState({
          currentDates: dates.slice(dates.length - 3, dates.length),
        });
      }
    }
  }


  render() {
    const { show } = this.props;
    const {
      name, phone, yourEmail, message, finance, currentDate, toggle, currentDates, times, selector,
    } = this.state;
    const terms = 'By pressing Contact Agent, you agree that Zillow Group and real estate professionals may call/text you about your inquiry, which may involve use of automated means and prerecorded/artificial voices. You don\'t need to consent as a condition of buying any property, goods or services. Message/data rates may apply. You also agree to our Terms of Use. Zillow does not endorse any real estate professionals.';
    let modal;
    const dateModal = (
      <ModalDiv>
        <ModalContent>
          <Close close={this.hideModal} />
          <Padded>
            <H2>Take a tour</H2>
            <DateButtonList dates={currentDates} currentDate={currentDate} clickDate={this.clickDate} SwitchLeft={this.SwitchLeft} SwitchRight={this.SwitchRight} />
            <br />
            <DropDown times={times} handleChange={this.onChange} />
            <RequestTour close={this.switchModal}>Request tour</RequestTour>
          </Padded>
        </ModalContent>
      </ModalDiv>
    );
    const formModal = (
      <ModalDiv>
        <ModalContent>
          <Close close={this.contactAgent} />
          <Padded>
            <H2>Contact Agent</H2>
            <form>
              <Input key="name" name="name" placeholder="Your Name" value={name} onChange={() => this.onChange(event)} size="60" style={{ backgroundImage: "url('https://img.icons8.com/material-sharp/15/000000/person-male.png')" }} />
              <br />
              <Input key="phone" name="phone" placeholder="Phone" onChange={() => this.onChange(event)} value={phone} size="60" style={{ backgroundImage: "url('https://img.icons8.com/android/15/000000/phone.png')" }} />
              <br />
              <Input key="yourEmail" name="yourEmail" placeholder="Email" value={yourEmail} onChange={() => this.onChange(event)} size="60" style={{ backgroundImage: "url('https://img.icons8.com/ios-filled/15/000000/send-mass-email.png')" }} />
              <br />
              <Textarea name="message" value={message} onChange={() => this.onChange(event)} />
              <h5>{`${Moment({ date: currentDate }).format('dddd, MMMM Do')} at ${selector}`}</h5>
              <Change onClick={this.switchModal} />
              <RequestTour close={this.contactAgent}>Contact Agent</RequestTour>
              <br />
              <input name="finance" checked={finance} type="checkbox" onChange={() => this.onChange(event)} />
              <label>I want financing information</label>
            </form>
            <P>
              {terms}
            </P>
          </Padded>
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
