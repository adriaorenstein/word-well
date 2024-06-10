import React from 'react';
import { connect } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                <img src="/assets/bg_home.png" className="bg-generator-img" />
                <div className="bg-home">
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