import React from 'react';
import { Link } from 'react-router-dom';

function CarListPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Available Cars</h1>
        <div className="columns is-multiline">
          <div className="column is-one-quarter">
            <div className="card">
              <div className="card-content">
                <p className="title">Car Model 1</p>
                <p className="subtitle">$50/day</p>
              </div>
              <footer className="card-footer">
                <Link to="/edit-car/1" className="card-footer-item">
                  Edit
                </Link>
                <Link to="/" className="card-footer-item">
                  Delete
                </Link>
              </footer>
            </div>
          </div>
          {/* Repeat for other cars */}
        </div>
      </div>
    </section>
  );
}

export default CarListPage;
