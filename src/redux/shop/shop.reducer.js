import SHOP_DATA from './shop.data';

const INITIAL_DATA = SHOP_DATA;

const shopReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    default:
      console.log('state::', state);
      return state;
  }
};

export default shopReducer;
