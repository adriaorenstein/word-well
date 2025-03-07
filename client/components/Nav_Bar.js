import React from 'react';
import { connect } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

class Nav_Bar extends React.Component {
    render() {
        return (
            <div className="nav-bar">
                <Link to='/'>
                    <img src="assets/nav/logo.png" className="nav-logo"></img>
                </Link>
                <Link to='/in-progress'>
                    <img src="assets/nav/forum_btn.png" className="nav-btn" />
                </Link>
                <Link to='/in-progress'>
                    <img src="assets/nav/contests_btn.png" className="nav-btn" />
                </Link>
                <Link to='/in-progress'>
                    <img src="assets/nav/blog_btn.png" className="nav-btn" />
                </Link>
                <Link to='/in-progress'>
                    <img src="assets/nav/groups_btn.png" className="nav-btn" />
                </Link>
                <Link to='/in-progress'>
                    <img src="assets/nav/library_btn.png" className="nav-btn" />
                </Link>
                <Link to='/tools'>
                    <img src="assets/nav/tools_btn.png" className="nav-btn" />
                </Link>
                <Link to='/in-progress'>
                    <img src="assets/nav/signin_btn.png" className="nav-btn nav-btn-signin" />
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
export default connect(mapStateToProps, mapDispatchToProps)(Nav_Bar);