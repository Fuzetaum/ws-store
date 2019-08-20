# Warning note

This library is still under development. We do **not** recommend using it yet since its features and/or interfaces might change in a nightly basis.

Also, it has not been tested properly yet. Test cases are still being designed as the library evolves, so its stability can't be guaranteed for now.

If you still want to use it, consider checking this library's behavior when debugging your project.

# About

Implementation of the Facebook's Flux architecture for Node.js environments.

This library is supposed to assist you developing cleaner source codes by removing the need of passing data sets around every corner of your system. This is done following Flux's concept of single-direction data flow by using a *store*, which holds all data published to it and cascades newly modified data automatically to wherever you use them.

# How to use

## Setting the store up

To set the store up, just import the library:

```
const { store } = require('@ricardofuzeto/ws-store');
```

Note that you won't have to worry about setting the store manually: the library does this work by itself.

## Writing data to the store

To write data to the store, use the method `notify`:

```
const { store } = require('@ricardofuzeto/ws-store');

const data = { field: 'value' };
store.notify(data);
```

This method just writes `data` to the store, creating the `field` property or replacing its old value by the new one.

## Subscribing to store data sets

To make your entity subscribe to some field changes, use the method `subscribe`:

```
const { store } = require('@ricardofuzeto/ws-store');

const data = store.subscribe('field1', 'field2'/*, field3...*/);

console.log(data.field1);
console.log(data.field2);
```

In the example above, `field1` and `field2` would have the values defined in their last `notify` call. Consider the following example as right after the above:

```
store.notify({
  field1: 'field1 value',
  field2: 'field2 value',
});

console.log(data.field1); // field1 value
console.log(data.field2); // field2 value

store.notify({ field2: 'field1 copy value' });

console.log(data.field1); // field1 value
console.log(data.field2); // field1 copy value
```

# Contributors

Ricardo Fuzeto ([email](mailto:ricardofuzeto@gmail.com?subject=About%20ws-boot)): idea conception and initial development stages