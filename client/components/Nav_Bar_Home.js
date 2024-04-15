import React from 'react';
import { connect } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

class Nav_Bar_Home extends React.Component {
    render() {
        return (
            <div className="nav-bar">
                <Link to='/'>
                    <img src="assets/transparent.png" className="nav-btn nav-btn-home" />
                </Link>
                <Link to='/generator-home'>
                    <img src="assets/transparent.png" className="nav-btn nav-btn-generate" />
                </Link>
                <Link to='/form-home'>
                    <img src="assets/transparent.png" className="nav-btn nav-btn-contribute" />
                </Link>
                <Link to='/games-home'>
                    <img src="assets/transparent.png" className="nav-btn nav-btn-games" />
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
export default connect(mapStateToProps, mapDispatchToProps)(Nav_Bar_Home);