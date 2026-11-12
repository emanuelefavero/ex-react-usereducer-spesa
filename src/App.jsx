import './App.css';
import { useState } from 'react';
import { Cart } from './components/Cart';
import { ProductList } from './components/ProductList';
import { products } from './data/products';

export const App = () => {
  const [addedProducts, setAddedProducts] = useState([]);
  const hasCartItems = addedProducts.length > 0;

  const handleAddToCart = product => {
    const productInCart = addedProducts.find(p => p.id === product.id);
    if (productInCart) return;

    return setAddedProducts(prev => [
      ...prev,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  return (
    <main className='container'>
      <h1>Carrello della spesa</h1>

      <h2>Prodotti</h2>
      <ProductList products={products} onAddToCart={handleAddToCart} />

      {hasCartItems && (
        <>
          <h2>Carrello</h2>
          <Cart products={addedProducts} />
        </>
      )}
    </main>
  );
};
