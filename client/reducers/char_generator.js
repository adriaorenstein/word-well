import axios from 'axios';

const GET_NEW_CHARACTER = "GET_NEW_CHARACTER";
const CLEAR_CHARACTERS = "CLEAR_CHARACTERS";
const GET_PLOT_WORD = "GET_PLOT_WORD";
const GET_PLOT_POINT = "GET_PLOT_POINT";

const gotNewCharacter = (new_char) => ({
    type: GET_NEW_CHARACTER,
    new_char
})

const clearingCharacters = () => ({
    type: CLEAR_CHARACTERS
})

const gotPlotWord = (word) => ({
    type: GET_PLOT_WORD,
    word
})

const gotPlotPoint = (point) => ({
    type: GET_PLOT_POINT,
    point
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
        console.log('error setting char entry');
    }
}

export const fetchPlotWord = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`/api/plot_generator/get-plot-word`);
        dispatch(gotPlotWord(data));
    } catch (err) {
        console.log('error fetching plot word');
    }
}

export const fetchPlotPoint = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`/api/plot_generator/get-plot-point`);
        dispatch(gotPlotPoint(data));
    } catch (err) {
        console.log('error fetching plot point');
    }
}

const initialState = {
    new_char: {
        type: 'char',
        gender: [],
        age: 0,
        char_traits: [],
        first_name: [],
        last_name: [],
        likes: [],
        dislikes: [],
        motivator: [],
        phys_traits: [],
        skills: [],
        wildcard: []
    },
    plot_word: {
        type: 'plot_word',
        word: ''
    },
    plot_point: {
        type: 'plot_point',
        point: ``
    }
}

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_NEW_CHARACTER:
            return { ...state, new_char: action.new_char }
        case CLEAR_CHARACTERS:
            return { initialState }
        case GET_PLOT_WORD:
            return { ...state, plot_word: {
                ...state.plot_word,
                word: action.word
            }}
        case GET_PLOT_POINT:
            return { ...state, plot_point: {
                ...state.plot_point,
                point: action.point
            }}
        default:
            return state;
    }
}