import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import MovieListPage from './pages/MovieListPage';
import ErrorBoundary from './components/ErrorBoundary';
import './styles.css';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <Sidebar />
          <div className="main-content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/list" component={MovieListPage} />
              <Route path="/detail" component={MovieDetail} />
            </Switch>
          </div>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
