// // 告訴程式我要用lodash
// var _ = require('lodash');
// var m = require('./module.js');


// // Join lodash provided
// // 是把前面的Array接起來成為一個String,Array間
// // 用後面的元素接合
// console.log(_.join(['Hello', 'Node.js'],' '));
// console.log(m.name);
// console.log(m.version);
// import 'babel-polyfill';
import m1, {n} from './module-1.js';
import m2 from './module-2.js';

window.onload = function() {
	console.log(n);
	m1();
	m2();



	// let x;
	// for (let i = 0; i < 10; i++) {
	// 	x = 'foo';
	// }
	// console.log(i); //error

	// let y = 10;
	// if(true) {
	// 	y++; //error, the value of const could not be modified.
	// }
};