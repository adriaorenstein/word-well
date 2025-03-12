import React from 'react';
import { connect } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="bg-home">
                    <img src="assets/home/scroll.png" className="home-scroll"></img>

                    <img src="assets/home/home_header_text.png" className="home-scroll-header"></img>
                    <img src="assets/home/under_construction.png" className="home-scroll-img"></img>
                    <div className="home-scroll-text">
                        Our website is currently on the way! Stay tuned for all our features coming soon...

                        In the mean time, feel free to check out the <b>Prompt Generator</b>, available on the Tools page!</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // char_trait: state.char_generator.char_trait
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // fetchCharTrait: () => dispatch(fetchCharTrait())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);