import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import BaseTable from './Table.js';
import Chart from './Chart.js';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Library</h1>
          <BaseTable />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
          <Chart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
