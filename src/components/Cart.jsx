import { Badge } from './ui/Badge';
import './Cart.css';
import { Trash } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

export const Cart = ({
  products,
  total,
  onRemoveFromCart,
  onUpdateProductQuantity,
}) =>
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

            {/* Quantity */}
            <td>
              <Input
                type='number'
                min={1}
                step={1}
                value={p.quantity}
                onChange={e =>
                  onUpdateProductQuantity(p.id, Number(e.target.valueAsNumber))
                }
                aria-label={`Quantità di ${p.name}`}
              />
            </td>

            {/* Remove button */}
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
          <td>{formatCurrency(total)}</td>
        </tr>
      </tfoot>
    </table>
  );
