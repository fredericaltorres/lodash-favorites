// https://www.softwaretestinghelp.com/node-js-testing-framework/

var _ = require('lodash');

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
  

describe('First suite', () => {

  // https://lodash.com/docs/4.17.11#findIndex
  it('First test', () => {

      const result = _.findIndex(users, { 'user': 'fred', 'active': false });
      console.log(`result:${result}`);
      console.log('yessssssssssss');
  });
});