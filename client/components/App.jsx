import React from 'react';
import Axios from 'axios';
import Heading from './Heading/Heading';
import House from './House/House';
import Footer from './Contact/Footer';
import ShareModal from './Heading/ShareModal';
import ContactModal from './Contact/ContactModal/ContactModal';
import TourModal from './Contact/TourModal/TourModal';


const sampleHouse = {
  Details: { Room_count: 4, Bathroom_count: 2, Square_footage: 1075 },
  Address: {
    House_number: 7006, Street_number: 102, Street: 'Boulevard W', City: 'Seattle', State: 'WA', ZIP_code: 98153,
  },
  _id: '5de570f7a88aff0b7f572305',
  Listing_id: '000',
  Price: 671635,
  Zestimate: true,
  Agent: true,
  Saved: false,
  __v: 0,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      house: sampleHouse,
      shareModal: false,
      contactModal: false,
      tourModal: false,
    };
    this.showModal = this.showModal.bind(this);
  }

  //   componentDidMount() {
  //     Axios.get('/api/listings/002')
  //       .then((res) => res.data)
  //       .then((data) => data[0])
  //       .then((house) => this.setState({
  //         house,
  //       }))
  //       .catch((err) => console.log(err))
  //       .finally(() => console.log('done!'));
  //   }

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
      <div>
        <Heading showModal={this.showModal} />
        <House house={house} />
        <Footer Agent={Agent} showModal={this.showModal} />
        <ShareModal show={shareModal} showModal={this.showModal} />
        <ContactModal show={contactModal} showModal={this.showModal} />
        <TourModal show={tourModal} showModal={this.showModal} />
      </div>
    );
  }
}


export default App;
