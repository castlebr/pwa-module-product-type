module.exports = targets => {
  targets.declare({
    productType: new targets.types.SyncWaterfall(['productType'])
  });
};
