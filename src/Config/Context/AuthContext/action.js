export const SET_LOGIN = 'SET_LOGIN';
export const SET_LOGOUT = 'SET_LOGOUT';

//function for set login
export function handle_login(nim,nama,prodi) {
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

