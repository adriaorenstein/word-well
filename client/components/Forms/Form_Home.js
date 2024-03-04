import React from 'react';
import { connect } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

class Form_Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Add a new entry to the database.</h2>
                <Link to='add-char-entry'>Add Character Traits</Link>
                <Outlet />
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
export default connect(mapStateToProps, mapDispatchToProps)(Form_Home);