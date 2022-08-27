import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/carteira" component={ Wallet } />
            {/* <div>Hello, TrybeWallet!</div> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
