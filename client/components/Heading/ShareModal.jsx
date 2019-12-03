import React from 'react';
import Send from './Send';
import styled from 'styled-components';
import ModalDiv from './ModalDiv';
import ModalContent from './ModalContent';

const Textarea = styled.textarea`
    resize: none;
    width: 400px;
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
    }

    onChange(e) {
        const { target } = e;
        const { value, name } = target;
        this.setState({
            [name]: value,
        });
    }

    render() {
        const { show } = this.props;
        if (show) {

            return (
                <ModalDiv>
                    <ModalContent>
                        <form>
                            <label><b>Recipient's email</b></label><br />
                            <input name='email' type='text' value={this.state.email} onChange={() => this.onChange(event)} size="59" /><br />
                            Separate multiple addresses with a comma. <br />
                            <label><b>Your email</b></label><br />
                            <input name='yourEmail' type='text' value={this.state.yourEmail} onChange={() => this.onChange(event)} size="59" /><br />
                            <label><b>Include message (optional)</b></label><br />
                            <Textarea name='message' value={this.state.message} onChange={() => this.onChange(event)} />
                            <br /><br/><br/>
                            <Send />
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