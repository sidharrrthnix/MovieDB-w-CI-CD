import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.scss';
import Header from './components/header';
function App() {
  return (
    <Provider store={store}>
      <Header />
      Redux
    </Provider>
  );
}

export default App;
