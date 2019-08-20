let data = {};

const subscribe = (...customDataset) => {
  let dataSet = {};
  customDataset.forEach(dataKey =>
    Object.defineProperty(dataSet, dataKey, {
      enumerable: true,
      get: function() { return data[dataKey]; },
    })
  );
  return dataSet;
};

const notify = (newData) => {
  data = {
    ...data,
    ...newData,
  };
};

const store = { subscribe, notify };

module.exports = {
  store,
};
