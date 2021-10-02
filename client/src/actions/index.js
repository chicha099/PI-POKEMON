import axios from 'axios';

export function getPokemons() {
    return function (dispatch) {
        axios.get('http://localhost:3001/pokemons')
            .then(resp => {
                return dispatch({
                    type: 'GET_POKEMONS',
                    payload: resp.data
                })
            })
    }
}

export function getTypes() {
    return function (dispatch) {
        axios.get('http://localhost:3001/types')
            .then(resp => {
                return dispatch({
                    type: 'GET_TYPES',
                    payload: resp.data
                })
            })
    }
}

export function filterPokemonsByType(payload) {
    return {
        type: 'FILTER_BY_TYPE',
        payload
    }
}

export function filterPokemonsByOrigin(payload) {
    return {
        type: 'FILTER_BY_ORIGIN',
        payload
    }
}

export function orderPokemonsByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}