const CarCard = ({ car }) => {
    return (
      <div className="car-card">
        <img src={car.image} alt={car.model} />
        <div className="car-info">
          <h3>{car.model}</h3>
          <p>{car.description}</p>
          <button>Rent Now</button>
        </div>
      </div>
    );
  };
  
  export default CarCard;
  