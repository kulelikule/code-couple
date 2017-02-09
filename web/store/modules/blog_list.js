import types from '../types';
import uuid from 'uuid';

export default {
	state: {
		items: [{
			id: uuid.v4(),
			title: '我的 2016 年',
			time: '2015/10/10'
		},{
			id: uuid.v4(),
			title: 'User space 与 Kernel space',
			time: '2015/10/10'
		}]
	}
}