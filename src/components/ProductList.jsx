import { ShoppingCart, ShoppingCartPlus } from 'lucide-react';
import { Button } from './ui/Button';
import './ProductList.css';
import { formatCurrency } from '@/lib/utils';

export const ProductList = ({ products, cart, onAddToCart }) =>
  products.length > 0 && (
    <ul className='product-list'>
      {products.map(p => {
        const isInCart = cart.some(item => item.id === p.id);
        const IconComp = isInCart ? ShoppingCartPlus : ShoppingCart;

        return (
          <li key={p.id} className='product'>
            <span>{p.name}</span> <span>{formatCurrency(p.price)}</span>
            <Button
              onClick={() => onAddToCart(p)}
              variant={
                isInCart ? Button.variant.primary : Button.variant.outline
              }
              size={Button.size.sm}
              aria-label={`Aggiungi ${isInCart ? 'ancora' : ''} ${p.name} al carrello`}
            >
              <IconComp width={16} height={16} aria-hidden='true' />
            </Button>
          </li>
        );
      })}
    </ul>
  );
