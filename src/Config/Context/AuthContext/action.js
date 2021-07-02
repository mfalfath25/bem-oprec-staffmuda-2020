export const SET_LOGIN = 'SET_LOGIN';
export const SET_LOGOUT = 'SET_LOGOUT';
export const SET_STATUS = 'SET_STATUS';

//function for set login
export function handle_login(nama,nim,prodi) {
    return {
        type: SET_LOGIN,
        payload: {
            nim,
            nama,
            prodi
        }
    };
}

//function for remove state
export function handle_logout() {
    return {
        type: SET_LOGOUT,
        payload: {}
    };
}

export function handle_status(status) {
    return {
        type: SET_STATUS,
        payload: status
    };
}

