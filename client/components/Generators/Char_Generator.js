import React from 'react';
import { fetchNewCharacter, clearCharacters } from '../../reducers/char_generator';
import { connect } from 'react-redux';

class Char_Generator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chars: []
        };

        this.genNewChar = this.genNewChar.bind(this);
    }

    componentDidMount() {
       this.props.clearCharacters();
    }

    async genNewChar() {   
        await this.props.fetchNewCharacter();
        console.log(this.props.new_char);
        this.setState ({
            chars: [...this.state.chars, this.props.new_char]
        })
    }

    render() {
        console.log(this.state.chars);
        return (
            <div>
                <img src="/assets/bg_generator.png" className="bg-generator-img" />
            <div className="bg-generator">
                <div className="generator-page">
                    <div onClick={() => this.genNewChar()}><img src="assets/gen_char.png" className="gen-btn gen-btn-char" /></div>
                        {(this.props.new_char) ?
                        <div className="generator-text">
                            { this.state.chars.map((char, i) => {
                                return (
                                    <div key={i}>
                                        <div className="single-char">
                                            <div className="bold-names">
                                            {char.first_name[0]} {char.last_name[0]} 
                                            </div> is 10 years old and {char.gender[0]}.
                                            They are {char.phys_traits.map((trait, i) => {
                                                return (
                                                    <span key={i}>
                                                        <span>{trait}</span>
                                                        {i === (char.phys_traits.length - 1) 
                                                        ? <span>. </span>
                                                        : i === (char.phys_traits.length - 2)
                                                            ? <span> and </span>
                                                            : <span>, </span>
                                                        }
                                                    </span>
                                                )
                                            })}
                                            Others would describe them as {char.char_traits.map((trait, i) => {
                                                return (
                                                    <span key={i}>
                                                        <span>{trait}</span>
                                                        {i === (char.char_traits.length - 1) 
                                                        ? <span>. </span>
                                                        : i === (char.char_traits.length - 2)
                                                            ? <span> and </span>
                                                            : <span>, </span>
                                                        }
                                                    </span>
                                                )
                                            })}
                                            They enjoy {char.likes.map((trait, i) => {
                                                return (
                                                    <span key={i}>
                                                        <span>{trait}</span>
                                                        {i === (char.likes.length - 1) 
                                                        ? <span> </span>
                                                        : i === (char.likes.length - 2)
                                                            ? <span> and </span>
                                                            : <span>, </span>
                                                        }
                                                    </span>
                                                )
                                            })} but dislike {char.dislikes.map((trait, i) => {
                                                return (
                                                    <span key={i}>
                                                        <span>{trait}</span>
                                                        {i === (char.dislikes.length - 1) 
                                                        ? <span>. </span>
                                                        : i === (char.dislikes.length - 2)
                                                            ? <span> and </span>
                                                            : <span>, </span>
                                                        }
                                                    </span>
                                                )
                                            })} 
                                            They are skilled at {char.skills.map((trait, i) => {
                                                return (
                                                    <span key={i}>
                                                        <span>{trait}</span>
                                                        {i === (char.skills.length - 1) 
                                                        ? <span>. </span>
                                                        : i === (char.skills.length - 2)
                                                            ? <span> and </span>
                                                            : <span>, </span>
                                                        }
                                                    </span>
                                                )
                                            })}
                                            They are motivated by {char.motivator.map((trait, i) => {
                                                return (
                                                    <span key={i}>
                                                        <span>{trait}</span>
                                                        {i === (char.motivator.length - 1) 
                                                        ? <span>. </span>
                                                        : i === (char.motivator.length - 2)
                                                            ? <span> and </span>
                                                            : <span>, </span>
                                                        }
                                                    </span>
                                                )
                                            })}
                                            A unique quirk about them is that they {char.wildcard.map((trait, i) => {
                                                return (
                                                    <span key={i}>
                                                        <span>{trait}</span>
                                                        {i === (char.wildcard.length - 1) 
                                                        ? <span>. </span>
                                                        : i === (char.wildcard.length - 2)
                                                            ? <span> and </span>
                                                            : <span>, </span>
                                                        }
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
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