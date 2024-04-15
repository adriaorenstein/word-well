import React from 'react';
import { connect } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

class Games_Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Play games while you procrastinate... er... ponder the depths of your mind.</h2>
                <Link to='char-a-pillar'>Play Char-a-pillar</Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(Games_Home);