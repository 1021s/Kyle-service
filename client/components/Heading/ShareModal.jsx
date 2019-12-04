import React from 'react';
import Send from './Send';
import styled from 'styled-components';
import ModalDiv from './ModalDiv';
import ModalContent from './ModalContent';
import Close from './Close';

const Textarea = styled.textarea`
    resize: none;
    width: 350px;
    height: 50px;
`;

class ShareModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            yourEmail: '',
            message: 'Check out this home I found on Zillow.'
        }
        this.onChange = this.onChange.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    onChange(e) {
        const { target } = e;
        const { value, name } = target;
        this.setState({
            [name]: value,
        });
    }

    hideModal() {
        const {showModal} = this.props;
        this.setState({
            email: '',
            yourEmail: '',
            message: 'Check out this home I found on Zillow.'
        }, () => showModal());
    }

    render() {
        const { show } = this.props;
        if (show) {

            return (
                <ModalDiv>
                    <ModalContent>
                    <Close close={this.hideModal}/>
                        <h1><b>Email this home</b></h1>
                        <form>
                            <label><b>Recipient's email</b></label><br />
                            <input name='email' type='text' value={this.state.email} onChange={() => this.onChange(event)} size="50" /><br />
                            Separate multiple addresses with a comma. <br /><br/>
                            <label><b>Your email</b></label><br />
                            <input name='yourEmail' type='text' value={this.state.yourEmail} onChange={() => this.onChange(event)} size="50" /><br/><br/>
                            <label><b>Include message (optional)</b></label><br />
                            <Textarea name='message' value={this.state.message} onChange={() => this.onChange(event)} />
                            <br /><br/><br/>
                            <Send close={this.hideModal}/>
                        </form>
                    </ModalContent>
                </ModalDiv>
            );
        } else {
            return null;
        }
    }
}

export default ShareModal;