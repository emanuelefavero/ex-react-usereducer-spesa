import { Badge } from './ui/Badge';
import './Cart.css';
import { Trash } from 'lucide-react';
import { Button } from './ui/Button';

export const Cart = ({ products, total, onRemoveFromCart }) =>
  products.length > 0 && (
    <table className='cart'>
      <thead>
        <tr>
          <th scope='col'>Prodotto</th>
          <th scope='col'>Prezzo</th>
          <th scope='col'>Quantità</th>
          <th scope='col'>Rimuovi</th>
        </tr>
      </thead>

      <tbody>
        {products.map(p => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.price}€</td>
            <td>{p.quantity}</td>
            <td>
              <Button
                onClick={() => onRemoveFromCart(p.id)}
                variant={Button.variant.danger}
                size={Button.size.sm}
                aria-label={`Rimuovi ${p.name} dal carrello`}
              >
                <Trash width={16} height={16} />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan='3'>Totale</td>
          <td>{total}€</td>
        </tr>
      </tfoot>
    </table>
  );
