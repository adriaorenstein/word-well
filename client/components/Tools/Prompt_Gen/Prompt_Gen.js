import React from 'react';
import { fetchNewCharacter, clearCharacters, fetchPlotWord, fetchPlotPoint } from '../../../reducers/char_generator';

import { connect } from 'react-redux';

class Prompt_Gen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: []
        };

        this.genNewChar = this.genNewChar.bind(this);
        this.regenLast = this.regenLast.bind(this);
        this.genPlotWord = this.genPlotWord.bind(this);
        this.genPlotPoint = this.genPlotPoint.bind(this);
    }

    componentDidMount() {
        this.props.clearCharacters();
    }

    async genNewChar() {
        await this.props.fetchNewCharacter();
        this.setState({
            text: [...this.state.text, this.props.new_char]
        })
    }

    async regenLast() {
        if (this.state.text.length > 0) {
            let type = this.state.text[this.state.text.length - 1].type;
            this.setState({
                text: this.state.text.slice(0, -1)
            })
            if (type === 'plot_word') {
                this.genPlotWord();
            }
            else if (type == 'plot_point') {
                this.genPlotPoint();
            }
            else {
                this.genNewChar();
            }
        }
    }

    async genPlotWord() {
        await this.props.fetchPlotWord();

        this.setState({
            text: [...this.state.text, this.props.plot_word.word]
        })
    }

    async genPlotPoint() {
        await this.props.fetchPlotPoint();
        this.setState({
            text: [...this.state.text, this.props.plot_point.point]
        })
    }

    render() {
        return (
            <div className="bg-gen">
                <img src="assets/tools/prompt_gen/scroll.png" className="gen-scroll"></img>
                <div className="gen-btns">
                    <div onClick={() => this.genNewChar()}><img src="assets/gen_char.png" className="gen-btn" /></div>
                    <div onClick={() => this.genPlotWord()}><img src="assets/gen_plot_word.png" className="gen-btn" /></div>
                    <div onClick={() => this.genPlotPoint()}><img src="assets/gen_plot_point.png" className="gen-btn" /></div>
                    <div onClick={() => this.regenLast()}><img src="assets/regen_last.png" className="gen-btn" /></div>
                </div>
                {(this.state.text) ?
                    <div className="gen-text">
                        {this.state.text.map((item, i) => {
                            return (
                                <div key={i}>
                                    {item.type == 'plot_word' ?
                                        <div className="single-plot">
                                            {item.word}
                                        </div>
                                        :
                                        item.type == 'plot_point' ?
                                            <div className="single-plot">
                                                {item.point}
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
            </div >
        )
    }
}



const mapStateToProps = (state) => {
    return {
        new_char: state.char_generator.new_char,
        plot_word: state.char_generator.plot_word,
        plot_point: state.char_generator.plot_point
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNewCharacter: () => dispatch(fetchNewCharacter()),
        clearCharacters: () => dispatch(clearCharacters()),
        fetchPlotWord: () => dispatch(fetchPlotWord()),
        fetchPlotPoint: () => dispatch(fetchPlotPoint())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Prompt_Gen);