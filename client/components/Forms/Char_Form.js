import React from 'react';
import { setCharEntry } from '../../reducers/char_generator';
import { connect } from 'react-redux';

function format_entry (entry) {
    return entry.toLowerCase();
}

class Char_Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            First_Names: '',
            first_name_gender: 'unisex',
            Last_Names: '',
            Phys_Traits: '',
            phys_trait_gender: 'unisex',
            Char_Traits: '',
            Likes_Dislikes: '',
            Motivators: '',
            Skills: '',
            Wildcards: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        try {
            let entry = event.target.elements[0];

            if (entry.name == 'Submit_All') {
                for (let key in this.state) {
                    if ((this.state[key] != '') && (key != 'first_name_gender') && (key != 'phys_trait_gender')) {
                        this.get_and_submit_entries(this.state[key], key);
                    }
                } 
                
                alert(`Your entries have been successfully submitted!`);
                
                this.setState({
                    First_Names: '',
                    first_name_gender: 'unisex',
                    Last_Names: '',
                    Phys_Traits: '',
                    phys_trait_gender: 'unisex',
                    Char_Traits: '',
                    Likes_Dislikes: '',
                    Motivators: '',
                    Skills: '',
                    Wildcards: ''
                })
            } else {
                if (entry.value != '') {
                    this.get_and_submit_entries(entry.value, entry.name);
                    alert(`Your entry has been successfully submitted!`);

                    this.setState({
                        [entry.name]: ''
                    })
                    if (entry.name == "First_Names") {
                        this.setState({
                            first_name_gender: 'unisex'
                        })
                    } else if (entry.name == "Phys_Traits") {
                        this.setState({
                            phys_trait_gender: 'unisex'
                        })
                    }
                } else {
                    alert(`You haven't entered anything!`);
                }
            }

            event.preventDefault();
        } catch (err) {
            alert(err);
            console.log('error in component');
        }
    }

    get_and_submit_entries (entry_val, entry_name) {
        try {
            let entry_vals = [format_entry(entry_val)];
        
            if (entry_name == "First_Names") {
                entry_vals.push(this.state.first_name_gender);
            }
            else if (entry_name == "Phys_Traits") {
                entry_vals.push(this.state.phys_trait_gender);
            }

            this.props.setCharEntry(entry_vals, entry_name);
        } catch(err) {
            alert(err);
        }
    }

    render() {
        return (
            <div>
                <h2>Add new character traits:</h2>
                <form onSubmit={this.handleSubmit} id="char_trait"></form>
                <form onSubmit={this.handleSubmit} id="first_name"></form>
                <form onSubmit={this.handleSubmit} id="last_name"></form>
                <form onSubmit={this.handleSubmit} id="like_dislike"></form>
                <form onSubmit={this.handleSubmit} id="motivator"></form>
                <form onSubmit={this.handleSubmit} id="phys_trait"></form>
                <form onSubmit={this.handleSubmit} id="skill"></form>
                <form onSubmit={this.handleSubmit} id="wildcard"></form>
                <form onSubmit={this.handleSubmit} id="all_entries"></form>

                        <label>
                            First Name:
                            <input type="text" id="first_name" name="First_Names" form="first_name" value={this.state.First_Names} onChange={this.handleChange} />
                            <select name="first_name_gender" defaultValue={'unisex'} onChange={this.handleChange}>
                                <option value="unisex">Unisex</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <input type="submit" name="First_Names" form="first_name" value="Submit" />
                        </label>

                        <label>
                            Last Name:
                            <input type="text" name="Last_Names" form="last_name" value={this.state.Last_Names} onChange={this.handleChange} />
                        </label>
                        <input type="submit" name="Last_Names" form="last_name" value="Submit" />
                    
                        <label>
                            Physical Trait:
                            <input type="text" name="Phys_Traits" form="phys_trait" value={this.state.Phys_Traits} onChange={this.handleChange} />
                            <select name="phys_trait_gender" defaultValue={'unisex'} onChange={this.handleChange}>
                                <option value="unisex">Unisex</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <input type="submit" name="Phys_Traits" form="phys_trait" value="Submit" />
                        </label>

                        <label>
                            Character Trait:
                            <input type="text" name="Char_Traits" form="char_trait" value={this.state.Char_Traits} onChange={this.handleChange} />
                        </label>
                        <input type="submit" name="Char_Traits" form="char_trait" value="Submit" />

                        <label>
                            Like/Dislike:
                            <input type="text" name="Likes_Dislikes" form="like_dislike" value={this.state.Likes_Dislikes} onChange={this.handleChange} />
                        </label>
                        <input type="submit" name="Likes_Dislikes" form="like_dislike" value="Submit" />

                        <label>
                            Motivator:
                            <input type="text" name="Motivators" form="motivator" value={this.state.Motivators} onChange={this.handleChange} />
                        </label>
                        <input type="submit" name="Motivators" form="motivator" value="Submit" />

                        <label>
                            Skill:
                            <input type="text" name="Skills" form="skill" value={this.state.Skills} onChange={this.handleChange} />
                        </label>
                        <input type="submit" name="Skills" form="skill" value="Submit" />

                        <label>
                            Wildcard:
                            <input type="text" name="Wildcards" form="wildcard" value={this.state.Wildcards} onChange={this.handleChange} />
                        </label>
                        <input type="submit" name="Wildcards" form="wildcard" value="Submit" />

                    <input type="submit" name="Submit_All" form="all_entries" value="Submit All" />
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
        setCharEntry: (entry, db_name) => dispatch(setCharEntry(entry, db_name))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Char_Form);