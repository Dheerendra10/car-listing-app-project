'use client'; 

import { useRouter, useParams } from 'next/navigation'; 
import { getCarDetails } from '../../post/page'; 
import { useEffect, useState } from 'react';

const CarDetails = () => {
    const [details, setDetails] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const router = useRouter();
    const params = useParams(); 

    useEffect(() => {
        const fetchCarDetails = async () => {
            if (params?.id) {
                try {
                    const data = await getCarDetails(params.id);
                    setDetails(data.Car); 
                    setLoading(false); 
                } catch (error) {
                    console.error('Error fetching car details:', error);
                    setLoading(false);
                }
            }
        };
        fetchCarDetails();
    }, [params?.id]); 

    if (loading) {
        return <div>Loading...</div>; 
    }

    if (!details) {
        return <div>Car details not available.</div>; 
    }

    return (
        <>
            <h1 className="heading">Car Details</h1>
            <div className="container">
                <button onClick={() => router.back()}>Go Back</button>
                <h1>{details.car}</h1>
                <p>Model: {details.car_model}</p>
                <p>Description: {details.car_vin}</p>
                <ul>
                    <li>Price: {details.price}</li>
                    <li>Year: {details.car_model_year}</li>
                    <li>VIN: {details.car_vin}</li>
                </ul>
            </div>
        </>
    );
};

export default CarDetails;
