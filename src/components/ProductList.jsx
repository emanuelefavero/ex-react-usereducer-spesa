export const ProductList = ({ products }) =>
  products.length > 0 && (
    <ul>
      {products.map(p => (
        <li key={p.id}>
          {p.name} - {p.price}€
        </li>
      ))}
    </ul>
  );
