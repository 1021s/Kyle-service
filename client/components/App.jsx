import React from 'react';
import Axios from 'axios';
import Heading from './Heading/Heading';
import House from './House/House';
import Footer from './Contact/Footer';
import ShareModal from './Heading/ShareModal';
import ContactModal from './Contact/ContactModal/ContactModal';
import TourModal from './Contact/TourModal/TourModal';
import TextDiv from './TextDiv';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      house: {},
      shareModal: false,
      contactModal: false,
      tourModal: false,
    };
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    const url = window.location.href;
    const params = url.split('?');
    const Listing_id = params[1];
    this.getHouse(Listing_id);
  }

  getHouse(Listing_id) {
    Axios.get(`/api/listings/${Listing_id}`)
      .then((res) => res.data)
      .then((data) => data[0])
      .then((house) => this.setState({
        house,
      }))
      .catch((err) => console.log(err))
      .then(() => console.log('done'));
  }

  showModal(name) {
    this.setState({
      // eslint-disable-next-line react/destructuring-assignment
      [name]: !this.state[name],
    }, () => console.log(this.state[name], name));
  }

  render() {
    const {
      house, shareModal, contactModal, tourModal,
    } = this.state;
    const { Agent } = house;
    return (
      <TextDiv>
        <Heading showModal={this.showModal} />
        <hr />
        <House house={house} />
        <Footer Agent={Agent} showModal={this.showModal} />
        <ShareModal show={shareModal} showModal={this.showModal} />
        <ContactModal show={contactModal} showModal={this.showModal} />
        <TourModal show={tourModal} showModal={this.showModal} />
        <hr />
      </TextDiv>
    );
  }
}


export default App;
