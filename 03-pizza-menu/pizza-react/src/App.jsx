import './App.css';
import { pizzaData } from '../data/data.js';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza co</h1>
    </header>
  );
};

const PizzaCart = ({ name, ingr, photoName, price, isSold }) => {
  return (
    <li className={`pizza ${isSold ? 'sold-out' : ''}`}>
      <img src={`src/assets/${photoName}`} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingr}</p>
        <span>{isSold ? 'Sold out' : price}</span>
      </div>
    </li>
  );
};

const Menu = () => {
  return (
    <div className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all
        delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((p, i) => {
          return (
            <PizzaCart
              key={i}
              name={p.name}
              ingr={p.ingredients}
              photoName={p.photoName}
              price={p.price}
              isSold={p.soldOut}
            />
          );
        })}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="order">
        <p>We're open until 22:00. Come visit us or order online.</p>
        <button className="btn">Order now</button>
      </div>
    </footer>
  );
};

export default App;
