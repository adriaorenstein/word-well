import React from 'react';
import { connect } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

class Tools extends React.Component {
    render() {
        return (
            <div className="tools-container">
                <div className="bg-tools">
                    <Link to='/prompt-gen'><img src="assets/tools/gen_icon.png" className="tools-icon"></img></Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(Tools);