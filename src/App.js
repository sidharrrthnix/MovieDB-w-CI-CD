import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.scss';
import Header from './components/header';
import Main from './components/main/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './components/content/details/Details';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/:id/:name/detail" element={<Details />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
