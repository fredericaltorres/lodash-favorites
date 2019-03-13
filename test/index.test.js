/*
  Chai: https://www.chaijs.com/guide/styles/#expect
*/
const _ = require('lodash');
const expect = require('chai').expect;
const assert = require('chai').assert; // https://www.chaijs.com/api/assert/

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true  }
];
  
describe('Array Suite', () => {

  describe('findIndex', () => {

        // https://lodash.com/docs/4.17.11#findIndex
        it('findIndex based on predicat', () => {

            const result = _.findIndex(users, function(o) { return o.user == 'barney'; });
            expect(result).to.equal(0);
        });

        it('findIndex based on instance', () => {

            const result = _.findIndex(users, { 'user': 'fred', 'active': false });      
            expect(result).to.equal(1);
        });
    });      
    describe('findIndex', () => {      

        it('intersection', () => {

            const result = _.intersection([2, 1], [2, 3]);
            assert.isTrue(Array.isArray(result));
            assert.deepEqual([2], result);
        });
    });
});


describe('Collection Suite', () => {

  describe('filter', () => {

        it('filter based on instance', () => {

            const result = _.filter(users, { 'user': 'fred', 'active': false });      
            assert.deepNestedInclude(result, users[1]);
        });
    });      
});


describe('Lang Suite', () => {

    describe('isEmpty', () => {

        it('isEmpty on object or array', () => {
            
            assert.isTrue(_.isEmpty({}));
            assert.isFalse(_.isEmpty({ a:1 }));
            assert.isTrue(_.isEmpty([]));
            assert.isFalse(_.isEmpty([1]));
        });
        it('isEmpty on string returns true', () => {
            
          assert.isTrue(_.isEmpty(''));
          assert.isFalse(_.isEmpty('aaa'));
        });
        it('isEmpty on value type return true', () => {
            
          assert.isTrue(_.isEmpty(1));
          assert.isTrue(_.isEmpty(true));
          assert.isTrue(_.isEmpty(null));
        });
    });      


    describe('isEqual', () => {

      // https://lodash.com/docs/4.17.11#isEqual
      it('isEqual to compare object', () => { 
          
          assert.isTrue(_.isEqual({}, {}));
          assert.isTrue(_.isEqual({a:1}, {a:1}));
          assert.isFalse(_.isEqual({a:1}, {a:333}));
      });
  });   
});