const { Targetables } = require('@magento/pwa-buildpack');

module.exports = ({ targets }) => {
  const targetables = Targetables.using(targets);

  const ProductFullDetail = targetables.reactComponent(
    '@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js'
  );

  // import product type talon
  ProductFullDetail.addImport(
    "import { useProductType } from '@castletech/pwa-module-product-type/lib/talons/ProductType/useProductType';"
  );
  ProductFullDetail.insertAfterSource(
    'const { product } = props;',
    '\nconst { customPrice, setCustomPrice } = useProductType();'
  );

  // custom price
  ProductFullDetail.insertBeforeSource('productDetails.price.value', 'customPrice || ');

  // apply ProductType component in ProductFullDetail
  ProductFullDetail.addImport(
    "import ProductType from '@castletech/pwa-module-product-type/lib/components/ProductType';"
  );
  ProductFullDetail.insertBeforeSource(
    '<FormError',
    `{!isSupportedProductType ? (
      <div className={classes.productType}>
        <ProductType product={product} setPrice={setCustomPrice} />
      </div>
      ) : ( 
      <>\n`
  );
  ProductFullDetail.insertBeforeSource(
    '<section className={classes.description}>',
    '\n\t</>\n)}'
  );
};
