import React from 'react';
import { connect } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

class Nav_Bar_Full extends React.Component {
    render() {
        return (
            <div className="nav-bar-2">
                <Link to='/'>
                    <img src="assets/transparent.png" className="nav-btn-2 nav-btn-home-2" />
                </Link>
                <Link to='/char-generator'>
                    <img src="assets/transparent.png" className="nav-btn-2 nav-btn-generate-2" />
                </Link>
                <Link to='/form-home'>
                    <img src="assets/transparent.png" className="nav-btn-2 nav-btn-contribute-2" />
                </Link>
                <Link to='/games-home'>
                    <img src="assets/transparent.png" className="nav-btn-2 nav-btn-games-2" />
                </Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(Nav_Bar_Full);