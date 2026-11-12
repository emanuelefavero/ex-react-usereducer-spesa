import { Badge } from './ui/Badge';
import './Cart.css';

export const Cart = ({ products }) =>
  products.length > 0 && (
    <table className='cart'>
      <thead>
        <tr>
          <th scope='col'>Prodotto</th>
          <th scope='col'>Prezzo</th>
          <th scope='col'>Quantità</th>
        </tr>
      </thead>

      <tbody>
        {products.map(p => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.price}€</td>
            <td>{p.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
