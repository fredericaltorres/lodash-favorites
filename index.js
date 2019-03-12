/*

    https://lodash.com/ 

*/

var _ = require('lodash');


console.log(`lodash favorites`);

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
  
  let result = 0;
  result = _.findIndex(users, function(o) { return o.user == 'barney'; });
  console.log(result);