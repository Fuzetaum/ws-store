const assert = require('assert').strict;

const { store } = require('../index');

store.notify({ field: 'that', these: 'those' });
const storeData1 = store.subscribe('field');
const storeData2 = store.subscribe('field', 'these');

assert.strictEqual(storeData1.field, 'that');
assert.strictEqual(storeData1.these, undefined);
assert.strictEqual(storeData2.field, 'that');
assert.strictEqual(storeData2.these, 'those');

store.notify({ field: 'another value' });
assert.strictEqual(storeData1.field, 'another value');
assert.strictEqual(storeData1.these, undefined);
assert.strictEqual(storeData2.field, 'another value');
assert.strictEqual(storeData2.these, 'those');
