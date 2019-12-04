import React from 'react';
import Axios from 'axios';
import Heading from './Heading/Heading';
import House from './House/House';
import Footer from './Contact/Footer';
import ShareModal from './Heading/ShareModal';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            house: {},
            ShareModal: false
        }
        this.showModal = this.showModal.bind(this);
    }

    componentDidMount() {
        Axios.get('/api/listings/002')
            .then(res => res.data)
            .then(data => data[0])
            .then(house => this.setState({
                house: house
            }))
            .catch((err) => console.log(err))
            .finally(() => console.log('done!'));
    }

    showModal(name) {
        this.setState({
            [name]: !this.state[name]
        }, () => console.log(name));
    }

    render() {
        const { house } = this.state;
        const { Agent } = house;
        return (
            <div>
                <Heading showModal={this.showModal} />
                <House house={house} />
                <Footer Agent={Agent} show={this.showModal} />
                <ShareModal show={this.state.ShareModal} showModal={this.showModal} />
                {/* <ContactModal show={this.state.ContactModal} showModal={this.showModal}/>
                <TourModal show={this.state.TourModal} showModal={this.showModal} /> */}
            </div>
        )
    }
}



export default App;