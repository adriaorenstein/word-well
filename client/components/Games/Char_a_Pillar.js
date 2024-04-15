import React from 'react';
import { connect } from 'react-redux';

class Char_a_Pillar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            last_word: '',
            current_word: '',
            previous_letters: new Set,
            previous_words: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        this.start_timer();
    }

    handleChange (event) {
        this.setState({
            current_word: event.target.value
        })
    }

    handleSubmit (event) {
        try {
            if (this.validate_word(this.state.current_word)) {
                this.add_word(this.state.current_word);
            } else {
                this.game_loss();
            }

            this.setState({
                current_word: ''
            })

            event.preventDefault();
        } catch (err) {
            alert(err);
            console.log('error in component');
        }
    }

    game_loss () {
        alert("YOU LOSE!");
        if (this.state) {
            this.state.previous_letters.clear();
            this.setState({
                last_word: '',
                previous_words: []
            })
        }
    }

    add_word (word) {
        this.state.previous_words.push(word);
        this.state.previous_letters.add(word[0]);
        this.state.last_word = word;
    }

    validate_word (word) {
        if ([0, 1, 2].includes(word.length)) {
            console.log("Your word is too short!");
            return false;
        } if ((this.state.last_word != '') && (word[0] != this.state.last_word[this.state.last_word.length - 1])) {
            console.log('word[0]:', word[0], 'last letter:', this.state.last_word[this.state.last_word.length - 1]);
            console.log("Word does not begin with correct letter.");
            return false;
        } if (this.state.previous_letters.has(word[word.length - 1])) {
            console.log("That letter has already been used.");
            return false;
        }
        return true;
    }

    start_timer () {
        setTimeout(this.timeout, 3000);
    }

    timeout () {
        console.log("You timed out.");
        this.game_loss();
    }

    render() {
        return (
            <div>
                <div>Previous words:</div>
                { 
                    ( this.state.previous_words 
                        ?
                        <div>
                            {this.state.previous_words.map((word, i) => {
                                return (
                                    <div key={i}>
                                        <div>{word}</div>
                                    </div>
                                )
                                })}
                        </div> 
                        :
                        <div></div>
                    )
                }

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter a word:
                        <input type="text" value={this.state.current_word} onChange={this.handleChange} />
                        <input type="submit" value="Submit" />
                    </label>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // previous_letters: state.games.previous_letters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // add_word: (word) => dispatch(add_word(word))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Char_a_Pillar);