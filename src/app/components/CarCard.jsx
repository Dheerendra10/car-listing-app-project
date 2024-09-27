import Link from 'next/link';

export default function CarCard({ car }) {
  return (
    <>
    <div className="car-card">
      {/* <img src={car?.image} alt={`${car?.car} ${car?.car_model}`} /> */}
      <h2>{car?.car} </h2>
      <p>Model: {car?.car_model} </p>
      <p>Year: {car?.car_model_year}</p>
      <p>Price: {car?.price}</p>
      <Link href={`/carDetails/${car?.id}`}>
        View Details
      </Link>

    </div>

    </>
    
  );
}