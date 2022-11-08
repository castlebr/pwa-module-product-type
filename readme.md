## PWA Studio Product Type Extension

![Preview](docs/preview.png)

Create new product types in your pwa-studio using extensibility targetables api.

Compatibility: pwa-studio `v11`, `v12`

#### 1. Installation

```
yarn add @castletech/pwa-module-product-type
```

#### 2. Active module in your local-intercept

```
const {
  wrapProductTypeModule,
} = require("@castletech/pwa-module-product-type/targets");
wrapProductTypeModule({
  targets
});
```

#### 3. Create new pwa-studio module

Create a new [pwa-studio scaffolding](https://github.com/larsroettig/create-pwa-studio-extension) module and connect the targetable `productType` api of the `pwa-module-product-type` module.

Exemple:

```
targets.of('@castletech/pwa-module-product-type').productType.tap(types =>
  types.add({
    condition: "product.__typename === 'BundleProduct'",
    componentName: 'ProductBundle',
    componentPath: '@castletech/pwa-module-product-bundle/lib/components/ProductBundle'
  })
);
```

| prop          | description                                    |
| ------------- | ---------------------------------------------- |
| condition     | It can be a product attr, such as \_\_typename |
| componentName | Name of the component to be imported           |
| componentPath | Path of the component to be imported           |

#### 4. Run project

```
yarn watch
```
