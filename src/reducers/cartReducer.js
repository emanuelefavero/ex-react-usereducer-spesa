export const INITIAL_CART_STATE = [];

export const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const product = action.payload;
      const productInCart = state.find(p => p.id === product.id);

      if (productInCart) {
        return state.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...state, { ...product, quantity: 1 }];
    }

    case CART_ACTIONS.UPDATE_QUANTITY:
      const { id, quantity } = action.payload;

      if (isNaN(quantity) || quantity < 1) return state;

      return state.map(item =>
        item.id === id ? { ...item, quantity: Math.floor(quantity) } : item,
      );

    case CART_ACTIONS.REMOVE_ITEM:
      return state.filter(item => item.id !== action.payload.id);

    default:
      return state;
  }
};
