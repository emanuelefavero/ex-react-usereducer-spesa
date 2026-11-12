import './App.css';
import { ProductList } from './components/ProductList';
import { products } from './data/products';

export const App = () => {
  return (
    <main className='container'>
      <h1>Carrello della spesa</h1>
      <h2>Prodotti</h2>
      <ProductList products={products} />
    </main>
  );
};
