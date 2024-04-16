import { Link } from 'react-router-dom';

export function CartOverview() {
  return (
    <div>
      <p>
        <span>23 pizzas</span>
        <span>$23.6</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}
