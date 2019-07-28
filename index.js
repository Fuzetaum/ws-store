let data = {};

const subscribe = (...customDataset) => {
  return customDataset.reduce((dataSet, dataKey) => ({
    ...dataSet,
    get [dataKey]() { return data[dataKey]; }
  }), {});
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
