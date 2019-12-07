import React from 'react';
import styled from 'styled-components';
import Send from './Send';
import ModalDiv from './ModalDiv';
import ModalContent from './ModalContent';
import Close from './Close';

const Textarea = styled.textarea`
    resize: none;
    width: 380px;
    height: 75px;
    line-height: 1.5;
    padding: 4px 6px 2px;
    margin-bottom: 15px;
    border: 1px solid #A7A6AB;
    background-color: white;
    box-shadow: inset 0 2px 2px #F9F9FB,
      0 0 0 #62aef7;
`;

const H2 = styled.h2`
font-size: 28px;
line-height: 1.3;
font-weight: 600;
`;

const Padded = styled.div`
padding: 20px;
`;

const P = styled.p`
margin-bottom: 15px;
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
line-height: 1.5
font-size: 12px;
font-weight: 400;
color: #54545A;
`;

const Link = styled.a`
line-height: 1.5;
cursor: pointer;
text-decoration: none;
font-size: 93.75%
color: #006AFF;
font-weight: 300;
`;

const Span = styled.span`
margin-left: auto;
`;

const Div = styled.div`
display: flex;
padding-bottom: 30px;
`;

class ShareModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      yourEmail: '',
      message: 'Check out this home I found on Zillow.',
    };
    this.onChange = this.onChange.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.shareHouse = this.shareHouse.bind(this);
  }

  onChange(e) {
    const { target } = e;
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  hideModal() {
    const { showModal } = this.props;
    showModal('shareModal');
  }

  shareHouse(event) {
    event.preventDefault();
    const { showModal } = this.props;
    this.setState({
      email: '',
      yourEmail: '',
      message: 'Check out this home I found on Zillow.',
    }, () => showModal('shareModal'));
  }

  render() {
    const { show } = this.props;
    if (show) {
      return (
        <ModalDiv>
          <ModalContent>
            <Close close={this.hideModal} />
            <Padded>
            <H2>Email this home</H2>
            <form>
              <label><b>Recipient's email</b></label>
              <br />
              <input name="email" type="text" value={this.state.email} onChange={() => this.onChange(event)} size="51" placeholder="Enter email" />
              <P>Separate multiple addresses with a comma.</P>
              {' '}
              <label><b>Your email</b></label>
              <br />
              <input name="yourEmail" type="text" value={this.state.yourEmail} onChange={() => this.onChange(event)} size="51" placeholder="Enter email" />
              <br />
              <br />
              <label><b>Include message (optional)</b></label>
              <br />
              <Textarea name="message" value={this.state.message} onChange={() => this.onChange(event)} />
              <Div>
                <Send close={this.shareHouse}>Send email</Send>
                <Span>
                  <Link href="https://bit.ly/2DVghkg" target="blank">Get shareable link</Link>
                </Span>
              </Div>
            </form>
            </Padded>
          </ModalContent>
        </ModalDiv>
      );
    }
    return null;
  }
}

export default ShareModal;
