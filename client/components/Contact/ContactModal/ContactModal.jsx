import React from 'react';
import ModalDiv from './ModalDiv';
import ModalContent from './ModalContent';
import Close from '../../Heading/Close';
import Send from '../../Heading/Send';
import styled from 'styled-components';

const Textarea = styled.textarea`
    resize: vertical;
    width: 350px;
    height: 50px;
    max-height: 100px;
    margin-top: 10px;
`;

class ContactModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            yourEmail: '',
            message: '',
            finance: false
        }
        this.onChange = this.onChange.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    onChange(e) {
        const { target } = e;
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        }, ()=> console.log('name:', this.state[name]));
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
            finance: false
        }, () => showModal('ContactModal'));
    }

    render() {
        const { show } = this.props;
        if (show) {

            return (
                <ModalDiv>
                    <ModalContent>
                        <Close close={this.hideModal} />
                        <h1><b>Contact Agent</b></h1>
                        <form>
                            <input name='name' type='text' value={this.state.name} onChange={() => this.onChange(event)} size="50" /><br />
                            <input name='phone' type='text' value={this.state.phone} onChange={() => this.onChange(event)} size="50" /><br />
                            <input name='yourEmail' type='text' value={this.state.yourEmail} onChange={() => this.onChange(event)} size="50" /><br />
                            <Textarea name='message' value={this.state.message} onChange={() => this.onChange(event)} />
                            <br /><br />
                            <input name='finance' checked={this.state.finance} type='checkbox' onChange={() => this.onChange(event)}/>
                            <label>I want financing information</label>
                        </form>
                    </ModalContent>
                </ModalDiv>
            );
        } else {
            return null;
        }
    }
}






export default ContactModal;