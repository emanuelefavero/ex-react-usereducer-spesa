import './App.css';
import { useReducer } from 'react';
import { Cart } from './components/Cart';
import { ProductList } from './components/ProductList';
import { products } from './data/products';
import {
  CART_ACTIONS,
  cartReducer,
  INITIAL_CART_STATE,
} from './reducers/cartReducer';

export const App = () => {
  const [cart, cartDispatch] = useReducer(cartReducer, INITIAL_CART_STATE);
  const hasCartItems = cart.length > 0;
  const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  return (
    <main className='container'>
      <h1>Carrello della spesa</h1>

      <h2>Prodotti</h2>
      <ProductList
        products={products}
        cart={cart}
        onAddToCart={product =>
          cartDispatch({ type: CART_ACTIONS.ADD_ITEM, payload: product })
        }
      />

      {hasCartItems && (
        <>
          <h2>Carrello</h2>
          <Cart
            items={cart}
            total={total}
            onRemoveFromCart={id =>
              cartDispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: { id } })
            }
            onUpdateItemQuantity={(id, quantity) =>
              cartDispatch({
                type: CART_ACTIONS.UPDATE_QUANTITY,
                payload: { id, quantity },
              })
            }
          />
        </>
      )}
    </main>
  );
};
