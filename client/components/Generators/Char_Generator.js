import React from 'react';
import { fetchNewCharacter, clearCharacters, fetchPlotWord } from '../../reducers/char_generator';

import { connect } from 'react-redux';

class Char_Generator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // chars: [],
            // plot_words: []
            text: []
        };

        this.genNewChar = this.genNewChar.bind(this);
        this.regenLast = this.regenLast.bind(this);
        this.genPlot = this.genPlot.bind(this);
    }

    componentDidMount() {
       this.props.clearCharacters();
    }

    async genNewChar() {   
        await this.props.fetchNewCharacter();
        this.setState ({
            text: [...this.state.text, this.props.new_char]
        })
    }

    async regenLast() {
        if (this.state.text.length > 0) {
            let type = this.state.text[this.state.text.length - 1].type;
            this.setState({
                text: this.state.text.slice(0, -1)
            })
            if (type === 'plot') {
                this.genPlot();
            }
            else {
                this.genNewChar();
            }
        }
    }

    async genPlot() {
        await this.props.fetchPlotWord();
        this.setState ({
            text: [...this.state.text, this.props.plot.word]
        })
    }

    render() {
        return (
            <div>
                <img src="/assets/bg_generator.png" className="bg-generator-img" />
            <div className="bg-generator">
                <div className="generator-page">
                    <div className="gen-btns">
                        <div onClick={() => this.genNewChar()}><img src="assets/gen_char.png" className="gen-btn" /></div>
                        <div onClick={() => this.regenLast()}><img src="assets/regen_last.png" className="gen-btn" /></div>
                        <div onClick={() => this.genPlot()}><img src="assets/gen_plot.png" className="gen-btn" /></div>
                    </div>
                        {(this.state.text) ?
                        <div>
                            { this.state.text.map((item, i) => {
                                return (
                                    <div key={i}>
                                        { item.type == 'plot' ?
                                            <div className="single-plot">
                                                { item.word }
                                            </div>
                                        :
                                            <div>
                                                <div className="single-char">
                                                    <div className="bold-names">
                                                    {item.first_name} {item.last_name} 
                                                    </div> is {item.age} years old and {item.gender[0]}.
                                                    They are {item.phys_traits.map((trait, i) => {
                                                        return (
                                                            <span key={i}>
                                                                <span>{trait}</span>
                                                                {i === (item.phys_traits.length - 1) 
                                                                ? <span>. </span>
                                                                : i === (item.phys_traits.length - 2)
                                                                    ? <span> and </span>
                                                                    : <span>, </span>
                                                                }
                                                            </span>
                                                        )
                                                    })}
                                                    Others would describe them as {item.char_traits.map((trait, i) => {
                                                        return (
                                                            <span key={i}>
                                                                <span>{trait}</span>
                                                                {i === (item.char_traits.length - 1) 
                                                                ? <span>. </span>
                                                                : i === (item.char_traits.length - 2)
                                                                    ? <span> and </span>
                                                                    : <span>, </span>
                                                                }
                                                            </span>
                                                        )
                                                    })}
                                                    They enjoy {item.likes.map((trait, i) => {
                                                        return (
                                                            <span key={i}>
                                                                <span>{trait}</span>
                                                                {i === (item.likes.length - 1) 
                                                                ? <span> </span>
                                                                : i === (item.likes.length - 2)
                                                                    ? <span> and </span>
                                                                    : <span>, </span>
                                                                }
                                                            </span>
                                                        )
                                                    })} but dislike {item.dislikes.map((trait, i) => {
                                                        return (
                                                            <span key={i}>
                                                                <span>{trait}</span>
                                                                {i === (item.dislikes.length - 1) 
                                                                ? <span>. </span>
                                                                : i === (item.dislikes.length - 2)
                                                                    ? <span> and </span>
                                                                    : <span>, </span>
                                                                }
                                                            </span>
                                                        )
                                                    })} 
                                                    They are skilled at {item.skills.map((trait, i) => {
                                                        return (
                                                            <span key={i}>
                                                                <span>{trait}</span>
                                                                {i === (item.skills.length - 1) 
                                                                ? <span>. </span>
                                                                : i === (item.skills.length - 2)
                                                                    ? <span> and </span>
                                                                    : <span>, </span>
                                                                }
                                                            </span>
                                                        )
                                                    })}
                                                    They are motivated by {item.motivator.map((trait, i) => {
                                                        return (
                                                            <span key={i}>
                                                                <span>{trait}</span>
                                                                {i === (item.motivator.length - 1) 
                                                                ? <span>. </span>
                                                                : i === (item.motivator.length - 2)
                                                                    ? <span> and </span>
                                                                    : <span>, </span>
                                                                }
                                                            </span>
                                                        )
                                                    })}
                                                    A unique quirk about them is that they {item.wildcard.map((trait, i) => {
                                                        return (
                                                            <span key={i}>
                                                                <span>{trait}</span>
                                                                {i === (item.wildcard.length - 1) 
                                                                ? <span>. </span>
                                                                : i === (item.wildcard.length - 2)
                                                                    ? <span> and </span>
                                                                    : <span>, </span>
                                                                }
                                                            </span>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                        : <div></div>
                        }


                        {/* {(this.state.plot_words) ?
                        <div>
                            { this.state.plot_words.map((word, i) => {
                                return (
                                    <div key={i}>
                                        <div className="plot">
                                            {word}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        :
                        <div></div>
                        } */}

                        {/* {(this.props.new_char) ?
                        <div className="generator-text">
                            { this.state.chars.map((char, i) => {
                                return (
                                    <div key={i}>
                                        <div className="single-char">
                                            <div className="bold-names">
                                            {char.first_name[0]} {char.last_name[0]} 
                                            </div> is {this.getAge()} years old and {char.gender[0]}.
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
                    } */}
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

        new_char: state.char_generator.new_char,
        plot: state.char_generator.plot
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNewCharacter: () => dispatch(fetchNewCharacter()),
        clearCharacters: () => dispatch(clearCharacters()),
        fetchPlotWord: () => dispatch(fetchPlotWord())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Char_Generator);