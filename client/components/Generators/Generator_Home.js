import React from 'react';
import { connect } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

class Generator_Home extends React.Component {
    render() {
        return (
            <div className="bg-generator">
                <Link to='/char-generator'><img src="assets/gen_char.png" className="gen-btn gen-btn-char" /></Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(Generator_Home);