import Vue from 'vue'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import axiosInstance from '@/services/axios'
import { rejectError } from '@/helpers'

function checkTokenValidity (token) {
    if  (token) {
        const decodedToken = jwt.decode(token)

        return decodedToken && (decodedToken.exp * 1000) > new Date().getTime()
    }
    return false
}

export default {
    namespaced: true,
    state:{
        user: null,
        isAuthResolved: false
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
        loginWithEmailAndPassword({commit}, userData){
            return axios.post('/api/v1/users/login', userData)
                .then(res => {
                    const user = res.data
                    localStorage.setItem('designfeedb-jwt', user.token)
                    commit('setAuthUser', user)
                })
                .catch(err => rejectError(err))
        },

        registerUser(context, userData){
            return axios.post('/api/v1/users/register', userData)
                .catch(err => rejectError(err))
        },

        getAuthUser ({commit, getters}) {
            const authUser = getters['authUser']
            const token = localStorage.getItem('designfeedb-jwt')
            const isTokenValid = checkTokenValidity(token)

            if (authUser) {return Promise.resolve(authUser)}

            const config = {
                headers:{
                    'Cache-Control': 'no-cache'                    
                }
            }

            return axiosInstance.get('/api/v1/users/me', config)
                .then((res) => {
                    const user = res.data
                    localStorage.setItem('designfeedb-jwt', user.token)
                    commit('setAuthUser', user)
                    commit('setAuthState', true)
                    return user
                })
                .catch(() => {
                    commit('setAuthUser', null)
                    commit('setAuthState', true)
                    return undefined
                })
        },

        logout ({commit}){

            // for session authen
            // return axios.post('/api/v1/users/logout', //userData)
            //     .then(() => {
            //         commit('setAuthUser', null)
            //         return true
            //     })
            //     .catch((err) => {
            //         return err
            //     })
            
            return new Promise((resolve) => {
                localStorage.removeItem('designfeedb-jwt')
                commit('setAuthUser',null)
                resolve(true)
            })
        },
    },
    mutations:{
        setAuthUser (state, user) {
            return state.user = user
        },
        setAuthState (state, authState) {
            return state.isAuthResolved = authState
        },

    }

}
