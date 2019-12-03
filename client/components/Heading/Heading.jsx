import React from 'react';
import More from './More';
import Save from './Save';
import Share from './Share';
import ShareModal from './ShareModal';


class Heading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shareModal: false
        }
        this.showModal = this.showModal.bind(this);
    }

    showModal() {
        this.setState({
            shareModal: !this.state.shareModal
        }, () => console.log('It\'s modal time!'));
    }

    render() {
        return (
            <div>
                {/* <img src="https://www.zillowgroupmedia.com/wp-content/uploads/2019/05/Zillow_Home-Symbol_Blue_RGB.png" height="26px" width="26px"/> */}
                <img src="http://zillow.mediaroom.com/download/Zillow_Wordmark_Blue_RGB+lrg.png" alt="Zillow Wordmark" height="26px" width="100px" />
                <Save />
                <Share showModal={this.showModal} />
                <More />
                <ShareModal show={this.state.shareModal} />
            </div>
        );
    }
}


export default Heading;
