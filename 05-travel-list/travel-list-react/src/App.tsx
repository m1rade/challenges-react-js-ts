import './index.css';

function App() {
  return (
    <div className="app">
      <Logo />
      <AddForm />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;

function Logo() {
  return <h1 className="logo">🏝 far away 💼</h1>;
}

function AddForm() {
  return (
    <div className="add-form">
      <h2 className="add-form-description">What do you need for your 😍 trip?</h2>
      <select name="amount">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <input name="item" type="text" placeholder="Item..." />
      <button className="add-form-btn">Add</button>
    </div>
  );
}

type ItemPropsType = {
  amount: number;
  name: string;
};
function Item({ amount, name }: ItemPropsType) {
  return (
    <li className="item">
      <input name="isPacked" type="checkbox" />
      <span>
        {amount} {name}
      </span>
      <button>&times;</button>
    </li>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        <Item amount={1} name="Passport" />
        <Item amount={3} name="Socks" />
        <Item amount={2} name="Charges" />
        <Item amount={1} name="Toothbrush" />
        <Item amount={1} name="Boarding pass" />
        <Item amount={2} name="AirPods" />
      </ul>
      <div className="actions">
        <select name="sort" id="sort" className="list-sort">
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="status">Sort by packed status</option>
        </select>
        <button>Clear list</button>
      </div>
    </div>
  );
}

function Stats() {
  return <p className="stats">💼 You have 0 items on your list, and you already packed 0 (0%)</p>;
}
