const { store } = require('../index');

store.notify({ field: 'that', these: 'those' });
const storeData1 = store.subscribe('field');
const storeData2 = store.subscribe('field', 'these');

console.log('field: ', storeData1.field);
console.log('these: ', storeData1.these);
console.log('field: ', storeData2.field);
console.log('these: ', storeData2.these);
