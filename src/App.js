import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.scss';
import Header from './components/header';
import Main from './components/main/Main';
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
