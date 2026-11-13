import './App.css';
import { useState } from 'react';
import { Cart } from './components/Cart';
import { ProductList } from './components/ProductList';
import { products } from './data/products';

export const App = () => {
  const [addedProducts, setAddedProducts] = useState([]);
  const hasCartItems = addedProducts.length > 0;
  const total = addedProducts.reduce((acc, p) => acc + p.price * p.quantity, 0);

  const addToCart = product =>
    setAddedProducts(prev => [
      ...prev,
      {
        ...product,
        quantity: 1,
      },
    ]);

  const updateProductQuantity = (id, quantity) => {
    if (!Number.isFinite(quantity)) return;

    const validQuantity = Math.max(1, Math.trunc(quantity));

    setAddedProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, quantity: validQuantity } : p)),
    );
  };

  const removeFromCart = id =>
    setAddedProducts(prev => prev.filter(p => p.id !== id));

  const handleAddToCart = product => {
    const productInCart = addedProducts.find(p => p.id === product.id);

    if (productInCart) {
      const { id, quantity } = productInCart;
      updateProductQuantity(id, quantity + 1);
    } else addToCart(product);
  };

  return (
    <main className='container'>
      <h1>Carrello della spesa</h1>

      <h2>Prodotti</h2>
      <ProductList
        products={products}
        cart={addedProducts}
        onAddToCart={handleAddToCart}
      />

      {hasCartItems && (
        <>
          <h2>Carrello</h2>
          <Cart
            products={addedProducts}
            total={total}
            onRemoveFromCart={removeFromCart}
            onUpdateProductQuantity={updateProductQuantity}
          />
        </>
      )}
    </main>
  );
};
