import types from '../mutation-types';
import uuid from 'uuid';

export default {
	state: {
		items: [{
			id: uuid.v4(),
			name: '博客',
			url: '/blog',
			isActive: false
		},{
			id: uuid.v4(),
			name: '生活',
			url: '/life',
			isActive: false
		},{
			id: uuid.v4(),
			name: '产品',
			url: '/product',
			isActive: false
		}]
	}
}