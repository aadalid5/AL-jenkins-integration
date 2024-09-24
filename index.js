const _ = require('lodash')

const res = _.compact([0, 1, false, 2, '', 3]);
console.log(res)