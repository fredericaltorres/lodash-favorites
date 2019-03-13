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
            assert.isFalse(_.isEqual({a:1, b:2}, {a:1}));
            assert.isFalse(_.isEqual({a:1}, {a:333}));
        });
    });

    describe('isMatch', () => {

      // https://lodash.com/docs/4.17.11#isMatch
      it('isEqual to compare object', () => { 
          
          assert.isTrue(_.isMatch({}, {}));
          assert.isTrue(_.isMatch({a:1}, {a:1}));
          assert.isTrue(_.isMatch({a:1, b:2}, {a:1}));
          assert.isTrue(_.isMatch({a:1, c:{ bar:1, foo:1, z:true} }, {a:1, c:{ foo:1} }));
          assert.isFalse(_.isMatch({a:1}, {a:333}));
      });
    });

    describe('isXXXXX', () => {

        // https://lodash.com/docs/4.17.11#isArguments
        it('isXXXX', () => { 
            
            assert.isTrue(_.isNumber(1));
            assert.isTrue(_.isInteger(1));
            assert.isTrue(_.isArray([]));
            assert.isTrue(_.isString(""));
            assert.isTrue(_.isBoolean(true));
            assert.isTrue(_.isUndefined(undefined));
            assert.isTrue(_.isNull(null));
            assert.isTrue(_.isDate(new Date()));
            assert.isTrue(_.isError(new Error()));
            assert.isTrue(_.isFinite(1));
            assert.isTrue(_.isFunction( () => {} ));
            assert.isTrue(_.isObject({}) && _.isObject([]));
            assert.isTrue(_.isPlainObject({}) && !_.isPlainObject([]));
        });
    });

    describe('Number', () => {

        // https://lodash.com/docs/4.17.11#inRange
        it('inRange', () => { 
            
            assert.isTrue(_.inRange(3, 3, 4));
            assert.isTrue(_.inRange(3.5, 3, 4));
        });

        // https://lodash.com/docs/4.17.11#random
        it('random', () => { 
            
            const n = _.random(0, 5);          
            assert.isTrue(n >= 0 && n <= 5);

            const nn = _.random(1.2, 5.2);
            assert.isTrue(nn >= 1.2 && nn <= 5.2);
        });
    });

    describe('Object', () => {

        function Bar() {
          this.c = 3;
        }
        Bar.prototype.d = 4;
        // https://lodash.com/docs/4.17.11#assign
        it('assign', () => { // <= Ignore inherited properties
            
            const o = _.assign({}, {a:1}, new Bar() );
            assert.deepEqual(o, {a:1, c:3});
        });

        it('assignIn', () => { // <= Used inherited properties
      
            const o = _.assignIn({}, {a:1}, new Bar() );
            assert.deepEqual(o, {a:1, c:3, d:4});
        });

        it('defaults', () => { // Combine 2 objects, used first property defined
      
            const o = _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
            assert.deepEqual(o, { a:1, b:2 });
        });

        it('defaultsDeep', () => { // Combine 2 objects, used first property defined
      
          const o = _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
          assert.deepEqual(o, { 'a': { 'b': 2, 'c': 3 } });
        }); 
  });    
});





