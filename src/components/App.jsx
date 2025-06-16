import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// UI Components
import Navbar from '../context/Navbar';
import Footer from './Footer';

// Pages
import HomePage from './HomePage'; // Adjust if you move it
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import ProfilePage from '../pages/EditProfile';
import CarListPage from './Cars';
import CarFormPage from './CarForm';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-6">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/cars" component={CarListPage} />
            <Route path="/add-car" component={CarFormPage} />
            <Route path="/edit-car/:id" component={CarFormPage} />
          </Switch>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
