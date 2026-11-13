export const INITIAL_CART_STATE = [];

export const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM:
      return [...state, { ...action.payload, quantity: 1 }];

    case CART_ACTIONS.REMOVE_ITEM:
      return state.filter(item => item.id !== action.payload.id);

    case CART_ACTIONS.UPDATE_QUANTITY:
      const { id, quantity } = action.payload;

      if (isNaN(quantity) || quantity < 1) return state;

      return state.map(item =>
        item.id === id ? { ...item, quantity: Math.floor(quantity) } : item,
      );

    default:
      return state;
  }
};
