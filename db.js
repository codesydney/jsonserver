var employees1  = require('./employees1.json');
var employees2 = require('./employees2.json');
var employees3  = require('./employees3.json');
var employees4 = require('./employees4.json');
// and so on

module.exports = function() {
return {
    employees1  : employees1,
    employees2  : employees2,
    employees3  : employees3,
    employees4  : employees4    
    // and so on
 }
}