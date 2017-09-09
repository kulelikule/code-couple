import axios from 'axios'
export default {
    namespaced: true,
    state: {
        newArticles: [],
        allArticles: [],
        articleDetails: {},
        articleCount: 0
    },
    mutations: {
        setNewArticles(state, payload) {
            state.newArticles = payload
        },
        setAllArticles(state, payload) {
            state.allArticles = payload
        },
        setArtcileCount(state, payload) {
            state.articleCount = payload
        },
        setArticleDetails(state, payload) {
            state.articleDetails = payload
        },
        clearAricleDetails(state) {
            state.articleDetails = {};
        }
    }
    ,
    actions: {
        getArticles({}, payload) {
            return axios.get('/ajax/blog/getArticles', {
                params: payload
            })
        },
        async getNewArticles({ commit, dispatch }, payload) {
            let articlesRes = await dispatch('getArticles', payload)
            commit('setNewArticles', articlesRes.result.data)
        },
        async getAllArticles({ commit, dispatch }, payload) {
            let articlesRes = await dispatch('getArticles', payload)
            commit('setAllArticles', articlesRes.result.data)
            commit('setArtcileCount', articlesRes.result.count)
        },
        async getArticleDetails({ commit } , payload) {
            let articleDetailsRes = await axios.get('/ajax/blog/getArticleDetails', {
                params: {
                    id: payload.id
                }
            })
            commit('setArticleDetails', articleDetailsRes.result)
        }
    }
}
