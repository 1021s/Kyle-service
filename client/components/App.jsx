import React from 'react';
import Axios from 'axios';
import Heading from './Heading/Heading';
import House from './House/House';
import Footer from './Contact/Footer';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            house: {}
        }
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

    render() {
        const { house } = this.state;
        const { Agent } = house;
        return (
            <div>
                <Heading />
                <House house={house} />
                <Footer Agent={Agent} />
            </div>
        )
    }
}



export default App;