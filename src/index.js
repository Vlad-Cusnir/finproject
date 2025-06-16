import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

// Updated paths based on your folder structure
import Navbar from './components/Navbar';
import HomePage from './context/App'; // Updated to match the App.jsx file location
import LoginPage from './pages/Login'; // Updated to match the Login.jsx file location
import RegisterPage from './pages/Register'; // Updated to match the Register.jsx file location
import ProfilePage from './pages/EditProfile'; // Updated to match the EditProfile.jsx file location
import CarListPage from './components/Cars'; // Updated to match the Cars.jsx file location
import CarFormPage from './components/CarForm'; // Updated to match the CarForm.jsx file location

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/cars" component={CarListPage} />
            <Route path="/add-car" component={CarFormPage} />
            <Route path="/edit-car/:id" component={CarFormPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
