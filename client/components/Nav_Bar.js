import React from 'react';
import { connect } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

class Nav_Bar extends React.Component {
    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                <Link to='/form-home'>Add a New Entry</Link>
                <Link to='/generator-home'>Start a Sprint</Link>
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