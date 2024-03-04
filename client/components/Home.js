import React from 'react';
import { connect } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Welcome to Word Well!</h2>
                <Link to='/form-home'>Add a New Entry</Link>
                <br />
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);