import React, { Suspense } from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify';
import { shape, string, object, func } from 'prop-types';
import defaultClasses from './productType.css';
import { FormattedMessage } from 'react-intl';

const ProductType = props => {
  const { product, setPrice } = props;
  const classes = useStyle(defaultClasses, props.classes);

  let content = null;

  if (!content) {
    return (
      <div className={classes.empty}>
        <FormattedMessage
          id={'productFullDetail.unavailableProduct'}
          defaultMessage={'This product is currently unavailable for purchase.'}
        />
      </div>
    );
  }

  return <div className={classes.root}>{content}</div>;
};

ProductType.propTypes = {
  classes: shape({ root: string }),
  product: object.isRequired,
  setPrice: func
};

ProductType.defaultProps = {};

export default ProductType;
