const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
  targets.of('@magento/pwa-buildpack').specialFeatures.tap(flags => {
    flags[targets.name] = {
      esModules: true,
      cssModules: true
    };
  });

  const targetables = Targetables.using(targets);

  // product page type variant
  targetables.reactComponent(
    '@castletech/pwa-module-product-type/lib/components/ProductType/productType.js',
    {
      publish(customTarget, self) {
        const productTypeAPI = {
          add({ condition, componentName, componentPath }) {
            self.insertBeforeSource(
              'const ProductType =',
              `const ${componentName} = React.lazy(() => import('${componentPath}'));\n\n`
            );
            self.insertAfterSource(
              'let content = null;',
              `if (${condition}) {
                return (
                  <Suspense fallback={null}>
                    <${componentName} product={product} setPrice={setPrice} />
                  </Suspense>
                );
              }`
            );
          }
        };
        customTarget.productType.call(productTypeAPI);
      }
    }
  );
};
