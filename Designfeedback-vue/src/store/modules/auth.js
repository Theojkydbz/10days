import axios from 'axios'

export default {
    namespaced: true,
    state:{
        user:{}
    },
    getters:{
        authUser (state) {
            return state.user || null
        },
        isAuthenticated (state) {
            return !!state.user
        }
    },
    actions:{
        loginWithEmailAndPassword (context, userData){
            return axios.post('/api/v1/users/login', userData)
                .then(res => {
                    const user = res.data
                    context.commit('setAuthUser', user)
                })
        },
        registerUser (context,userData) {
            return axios.post('/api/v1/users/register', userData)
        },
        logout({commit}){
            return axios.post('/api/v1/users/logout')
            .then(() => {
                commit('setAuthUser', null)
                return true
            })
            .catch((err) => {
                return err
            })
        },
        getAuthUser({commit}){
            return axios.get('/api/v1/users/me')
                .then((res) => {
                    const user = res.data
                    commit('setAuthUser', user)
                    return user
                })
                .catch(() => {
                    commit('setAuthUser', null)
                    return undefined
                })
        }
    },
    mutations:{
        setAuthUser(state, user){
            return state.user = user
        }
    }

}
