import uuid from 'uuid';
import types from '../mutation-types';

export default {
	state: {
        newArticles: [{
			id: uuid.v4(),
			title: '我的 2016 年',
			time: '2015-10-10',
		},{
			id: uuid.v4(),
			title: 'User space 与 Kernel space',
			time: '2015-10-10'
		}],
		allArticles: [{
            id: uuid.v4(),
            title: '所有-我的 2016 年',
            time: '2015-10-10'
        },{
            id: uuid.v4(),
            title: '所有-User space 与 Kernel space',
            time: '2015-10-10'
		}],
		articleDetail: {
        	id: uuid.v4(),
        	title: '标题1',
			time: '2015-10-10',
			content: '测试内容'
		}
	},
	getters: {
        showItems: state => state.showItems,
        newArticles: state => setArticleUrl(state.newArticles),
        allArticles: state => setArticleUrl(state.allArticles),
	},
	mutations: {
	},
	actions: {

	}
};

function setArticleUrl(articles){
	return articles.map(item => {
        item.url = '/blog/detail/' + item.id;
        return item;
	});
}