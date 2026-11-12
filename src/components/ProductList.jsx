import { ShoppingCartPlus } from 'lucide-react';
import { Button } from './ui/Button';
import './ProductList.css';

export const ProductList = ({ products, onAddToCart }) =>
  products.length > 0 && (
    <ul className='product-list'>
      {products.map(p => (
        <li key={p.id} className='product'>
          <span>
            {p.name} - {p.price}€
          </span>
          <Button
            onClick={() => onAddToCart(p)}
            size={Button.size.sm}
            aria-label={`Aggiungi ${p.name} al carrello`}
          >
            <ShoppingCartPlus width={16} height={16} />
          </Button>
        </li>
      ))}
    </ul>
  );
