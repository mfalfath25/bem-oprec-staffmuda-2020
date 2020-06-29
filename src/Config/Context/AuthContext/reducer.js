// import uuid from 'uuid/v4';
import * as actions from './action';

//initial state for context
export const initialState = {
    nim: '',
    nama: '',
    prodi: '',
    isLogged: false
};

//context reducer
export default function reducer(state = initialState, { type, payload }) {
    // console.log(type, payload)
    switch (type) {
        case actions.SET_LOGIN:
            return {
                nim: payload.nim,
                nama: payload.nama,
                prodi: payload.prodi,
                isLogged: true
            };
        case actions.SET_LOGOUT:
            // console.log(state)
            return initialState;
        default:
            return state;
    }
}
