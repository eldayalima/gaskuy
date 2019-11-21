export const sendData = (username, id,avatar) => {
    
    return {
        type: "LOGIN_SUCCESS",
        payload: {
            username, 
            id,
            avatar
        }
    }
}

export const onLougoutUser = () => {

    // Hapus data di localStorage
    localStorage.removeItem('user')

    // Hapus data di redux state
    return {
        type: "LOGOUT_SUCCESS"
    }
}

export const keepLogin = (user) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: {
            id: user.id,
            username: user.username,
            avatar : user.avatar
        }
    }
}