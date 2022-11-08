import { useState } from 'react';

export const useProductType = (props = {}) => {
  const [customPrice, setCustomPrice] = useState(null);

  return {
    setCustomPrice,
    customPrice
  };
};
