import axios from 'axios'

const LOGGED_IN_OR_UPDATED = 'LOGGED_IN_OR_UPDATED'
const LOGGED_OUT = 'LOGGED_OUT'

const defaultUser = {}

const loggedInOrUpdated = (user) => ({type: LOGGED_IN_OR_UPDATED, user})
const loggedOut = () => ({type: LOGGED_OUT})


// ADD MUH THUNKS HERE


export default function (state = defaultUser, action) {
    switch (action.type) {
        case LOGGED_IN_OR_UPDATED:
            return action.user
        case LOGGED_OUT:
            return {}
        default:
            return state
    }
}