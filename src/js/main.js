// 告訴程式我要用lodash
var _ = require('lodash');
var m = require('./module.js');


// Join lodash provided
// 是把前面的Array接起來成為一個String,Array間
// 用後面的元素接合
console.log(_.join(['Hello', 'Node.js'],' '));
console.log(m.name);
console.log(m.version);
