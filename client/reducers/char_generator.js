import axios from 'axios';

const GET_NEW_CHARACTER = "GET_NEW_CHARACTER";
const CLEAR_CHARACTERS = "CLEAR_CHARACTERS";

const gotNewCharacter = (new_char) => ({
    type: GET_NEW_CHARACTER,
    new_char
})

const clearingCharacters = () => ({
    type: CLEAR_CHARACTERS
})

export const fetchNewCharacter = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`/api/char_generator/get-new-character`);
        dispatch(gotNewCharacter(data));
    } catch (err) {
        console.log('error fetching char entry');
    }
}

export const clearCharacters = () => async (dispatch) => {
    try {
        dispatch(clearingCharacters());
    } catch (err) {
        console.log('error clearing characters');
    }
}

export const setCharEntry = (entry_vals, db_name) => async (dispatch) => {
    try {
        if (entry_vals.length > 1) {
            await axios.post(`/api/char_generator/set-char-entry`, {
                entry: entry_vals[0],
                gender: entry_vals[1],
                db_name
            });
        } else {
            await axios.post(`/api/char_generator/set-char-entry`, {
                entry: entry_vals[0],
                db_name
            });
        }
    } catch (err) {
        alert('error in reducer');
        console.log('error setting char entry');
    }
}

const initialState = {
    new_char: {
        gender: [],
        char_traits: [],
        first_name: [],
        last_name: [],
        likes: [],
        dislikes: [],
        motivator: [],
        phys_traits: [],
        skills: [],
        wildcard: []
    }
}

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_NEW_CHARACTER:
            return { ...state, new_char: action.new_char }
        case CLEAR_CHARACTERS:
            return { initialState }
        default:
            return state;
    }
}