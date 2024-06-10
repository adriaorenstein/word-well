import React from 'react';
import { fetchNewCharacter, clearCharacters } from '../../reducers/char_generator';
import { connect } from 'react-redux';

class Char_Generator extends React.Component {
    componentDidMount() {
       this.props.clearCharacters();
    }
    render() {
        return (
            <div>
                <img src="/assets/bg_generator.png" className="bg-generator-img" />
            <div className="bg-generator">
                <div className="generator-page">
                    <div onClick={() => this.props.fetchNewCharacter()}><img src="assets/gen_char.png" className="gen-btn gen-btn-char" /></div>
                        {(this.props.new_char) ?
                        <div className="generator-text">
                        <div className="single-char">
                            <div className="bold-names">
                            {this.props.new_char.first_name[0]} {this.props.new_char.last_name[0]} 
                            </div> is 10 years old and {this.props.new_char.gender[0]}.
                            They are {this.props.new_char.phys_traits.map((trait, i) => {
                                return (
                                    <span key={i}>
                                        <span>{trait}</span>
                                        {i === (this.props.new_char.phys_traits.length - 1) 
                                        ? <span>. </span>
                                        : i === (this.props.new_char.phys_traits.length - 2)
                                            ? <span> and </span>
                                            : <span>, </span>
                                        }
                                    </span>
                                )
                            })}
                            Others would describe them as {this.props.new_char.char_traits.map((trait, i) => {
                                return (
                                    <span key={i}>
                                        <span>{trait}</span>
                                        {i === (this.props.new_char.char_traits.length - 1) 
                                        ? <span>. </span>
                                        : i === (this.props.new_char.char_traits.length - 2)
                                            ? <span> and </span>
                                            : <span>, </span>
                                        }
                                    </span>
                                )
                            })}
                            They enjoy {this.props.new_char.likes.map((trait, i) => {
                                return (
                                    <span key={i}>
                                        <span>{trait}</span>
                                        {i === (this.props.new_char.likes.length - 1) 
                                        ? <span> </span>
                                        : i === (this.props.new_char.likes.length - 2)
                                            ? <span> and </span>
                                            : <span>, </span>
                                        }
                                    </span>
                                )
                            })} but dislike {this.props.new_char.dislikes.map((trait, i) => {
                                return (
                                    <span key={i}>
                                        <span>{trait}</span>
                                        {i === (this.props.new_char.dislikes.length - 1) 
                                        ? <span>. </span>
                                        : i === (this.props.new_char.dislikes.length - 2)
                                            ? <span> and </span>
                                            : <span>, </span>
                                        }
                                    </span>
                                )
                            })} 
                            They are skilled at {this.props.new_char.skills.map((trait, i) => {
                                return (
                                    <span key={i}>
                                        <span>{trait}</span>
                                        {i === (this.props.new_char.skills.length - 1) 
                                        ? <span>. </span>
                                        : i === (this.props.new_char.skills.length - 2)
                                            ? <span> and </span>
                                            : <span>, </span>
                                        }
                                    </span>
                                )
                            })}
                            They are motivated by {this.props.new_char.motivator.map((trait, i) => {
                                return (
                                    <span key={i}>
                                        <span>{trait}</span>
                                        {i === (this.props.new_char.motivator.length - 1) 
                                        ? <span>. </span>
                                        : i === (this.props.new_char.motivator.length - 2)
                                            ? <span> and </span>
                                            : <span>, </span>
                                        }
                                    </span>
                                )
                            })}
                            A unique quirk about them is that they {this.props.new_char.wildcard.map((trait, i) => {
                                return (
                                    <span key={i}>
                                        <span>{trait}</span>
                                        {i === (this.props.new_char.wildcard.length - 1) 
                                        ? <span>. </span>
                                        : i === (this.props.new_char.wildcard.length - 2)
                                            ? <span> and </span>
                                            : <span>, </span>
                                        }
                                    </span>
                                )
                            })}
                        </div>
                        </div>
                        : <div></div>
                    }
                </div>
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
        fetchNewCharacter: () => dispatch(fetchNewCharacter()),
        clearCharacters: () => dispatch(clearCharacters())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Char_Generator);