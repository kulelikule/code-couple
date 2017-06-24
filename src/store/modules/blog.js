import axios from 'axios'
export default {
    state: {
        newArticles: [],
        allArticles: [
            {
                id: 1,
                title: '文章1',
                time: 1494827257746
            },{
                id: 2,
                title: '文章2',
                time: 1494827257746
            },{
                id: 3,
                title: '文章3',
                time: 1494827257746
            },{
                id: 4,
                title: '文章4',
                time: 1494827257746
            }
        ],
        articleDetails: {}
    },
    mutations: {
        getNewArticles(state, payload) {
            state.newArticles = payload
        },
        getArticleDetails(state, payload) {
            state.articleDetails = payload
        },
        clearAricleDetails(state) {
            state.articleDetails = {};
        }
    }
    ,
    actions: {
        async getNewArticles({ commit }) {
            let articlesRes = await axios.get('/ajax/blog/getNewArticles')
            if(articlesRes.data.success === true){
                commit('getNewArticles', articlesRes.data.result)
            }
        },
        async getArticleDetails({ commit } , payload) {
            let articleDetailsRes = await axios.get('/ajax/blog/getArticleDetails', {
                params: {
                    id: payload.id
                }
            })
            if(articleDetailsRes.data.success === true){
                commit('getArticleDetails', articleDetailsRes.data.result)
            }
        }
    }
}
