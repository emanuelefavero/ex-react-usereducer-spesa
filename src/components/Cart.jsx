import './Cart.css';
import { Trash } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

export const Cart = ({
  items,
  total,
  onRemoveFromCart,
  onUpdateItemQuantity,
}) =>
  items.length > 0 && (
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
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}€</td>

            {/* Quantity */}
            <td>
              <Input
                type='number'
                min={1}
                step={1}
                value={item.quantity}
                onChange={e =>
                  onUpdateItemQuantity(item.id, e.target.valueAsNumber)
                }
                aria-label={`Quantità di ${item.name}`}
              />
            </td>

            {/* Remove button */}
            <td>
              <Button
                onClick={() => onRemoveFromCart(item.id)}
                variant={Button.variant.danger}
                size={Button.size.sm}
                aria-label={`Rimuovi ${item.name} dal carrello`}
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
