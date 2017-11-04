import _ from 'lodash';

export default function() {
	var el = document.querySelector('#module-1');

	//lodash 寫法
	el.textContent = _.join(['Module', 'Complex'], ' ');
}

export var n = 10;