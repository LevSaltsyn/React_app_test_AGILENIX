import { GET_GIT_HUB_USERS } from "./actionTypes" 

export const getDataGit = () => ({ type: GET_GIT_HUB_USERS, payload: {users: []} })
