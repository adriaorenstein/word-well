import React from 'react';
import { fetchNewCharacter } from '../../reducers/char_generator';
import { connect } from 'react-redux';

class Char_Generator extends React.Component {
    componentDidMount() {
       // this.props.fetchCharTrait();
        this.props.fetchNewCharacter();
    }
    render() {
        return (
            <div className="bg-generator">
                <div className="generator-text">
                    <hr className="generator-line"></hr>
                    <div className="generator-label">Name</div>
                    {this.props.new_char.first_name.map((trait, i) => {
                        return (
                            <div key={i}>
                                <div>{trait}</div>
                            </div>
                        )
                    })}
                    {this.props.new_char.last_name.map((trait, i) => {
                        return (
                            <div key={i}>
                                <div>{trait}</div>
                            </div>
                        )
                    })}

                    <div className="generator-label">Gender</div>
                    {this.props.new_char.gender.map((trait, i) => {
                        return (
                            <div key={i}>
                                <div>{trait}</div>
                            </div>
                        )
                    })}

                    <div className="generator-label">Physical Traits</div>
                    {this.props.new_char.phys_traits.map((trait, i) => {
                        return (
                            <div key={i}>
                                <div>{trait}</div>
                            </div>
                        )
                    })}

                    <div className="generator-label">Character Traits</div>
                    {this.props.new_char.char_traits.map((trait, i) => {
                        return (
                            <div key={i}>
                                <div>{trait}</div>
                            </div>
                        )
                    })} 

                    <div className="generator-label">Likes</div>
                    {this.props.new_char.likes.map((trait, i) => {
                        return (
                            <div key={i}>
                                <div>{trait}</div>
                            </div>
                        )
                    })}

                    <div className="generator-label">Dislikes</div>
                    {this.props.new_char.dislikes.map((trait, i) => {
                        return (
                            <div key={i}>
                                <div>{trait}</div>
                            </div>
                        )
                    })}

                    <div className="generator-label">Skills</div>
                    {this.props.new_char.skills.map((trait, i) => {
                        return (
                            <div key={i}>
                                <div>{trait}</div>
                            </div>
                        )
                    })}

                    <div className="generator-label">Motivator</div>
                    {this.props.new_char.motivator.map((trait, i) => {
                        return (
                            <div key={i}>
                                <div>{trait}</div>
                            </div>
                        )
                    })}

                    <div className="generator-label">Wildcard</div>
                    {this.props.new_char.wildcard.map((trait, i) => {
                        return (
                            <div key={i}>
                                <div>{trait}</div>
                            </div>
                        )
                    })}
                    <hr className="generator-line"></hr>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        // char_trait: state.char_generator.char_trait
        // <h5>Char Trait: {this.props.char_trait.element}</h5>

        // <h5>{Object.entries(this.props.new_char).forEach(([trait_type, trait_val]) => {
        //     trait_val.map((trait) => {
        //         return (
        //             <div>
        //                 <h5></h5>
        //             </div>
        //         )
        //     })
        // })}</h5>

        new_char: state.char_generator.new_char
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNewCharacter: () => dispatch(fetchNewCharacter())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Char_Generator);