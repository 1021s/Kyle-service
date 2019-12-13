import React from 'react';
import styled from 'styled-components';
import ModalDiv from './ModalDiv';
import ModalContent from './ModalContent';
import Close from '../../Heading/Close';
// import Send from '../../Heading/Send';
import Input from './Input';
import ContactButton from './ContactButton';

const Textarea = styled.textarea`
    resize: vertical;
    display: block;
    width: 100%;
    height: 57px;
    font-size: .8667rem;
    max-height: 100px;
    margin-top: 10px;
`;

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


class ContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      yourEmail: '',
      message: '',
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
    }, () => console.log(name, this.state[name]));
  }

  hideModal() {
    const { showModal } = this.props;
    showModal('contactModal');
  }

  contactAgent(event) {
    event.preventDefault();
    const { showModal } = this.props;
    this.setState({
      name: '',
      phone: '',
      yourEmail: '',
      message: '',
      finance: false,
    }, () => showModal('contactModal'));
  }

  render() {
    const { show } = this.props;
    const {
      name, phone, yourEmail, message, finance,
    } = this.state;
    const terms = 'By pressing Contact Agent, you agree that Zillow Group and real estate professionals may call/text you about your inquiry, which may involve use of automated means and prerecorded/artificial voices. You don\'t need to consent as a condition of buying any property, goods or services. Message/data rates may apply. You also agree to our Terms of Use. Zillow does not endorse any real estate professionals.';
    if (show) {
      return (
        <ModalDiv>
          <ModalContent>
          <Close close={this.hideModal} />
            <Padded>
              <H2>Contact Agent</H2>
              <form>
                <Input key="name" name="name" placeholder="Your Name" value={name} onChange={() => this.onChange(event)} size="60" style={{ backgroundImage: "url('https://img.icons8.com/material-sharp/15/000000/person-male.png')" }} />
                <br />
                <Input key="phone" name="phone" placeholder="Phone" onChange={() => this.onChange(event)} value={phone} size="60" style={{ backgroundImage: "url('https://img.icons8.com/android/15/000000/phone.png')"}} />
                <br />
                <Input key="yourEmail" name="yourEmail" placeholder="Email" value={yourEmail} onChange={() => this.onChange(event)} size="60" style={{ backgroundImage: "url('https://img.icons8.com/ios-filled/15/000000/send-mass-email.png')" }} />
                <Textarea name="message" value={message} onChange={() => this.onChange(event)} />
                <UL>
                  <ContactButton close={this.contactAgent}>Contact Agent</ContactButton>
                </UL>
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
    }
    return null;
  }
}

export default ContactModal;
