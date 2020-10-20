import React from 'react';
import './App.css';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component2Child from './components/Component2Child';

function App() {
  return (
    <div className="App">
      <MemoryRouter initialEntries={[window.location.pathname]}>
        <Switch>
          <Route path="/component2/child" component={Component2Child} />
          <Route path="/component2" component={Component2} />
          <Route path="/" component={Component1} />
        </Switch>
      </MemoryRouter>
    </div>
  );
}

export default App;
