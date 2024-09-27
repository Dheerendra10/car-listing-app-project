"use client"; // Client component
import React, { useState, useEffect } from 'react';
import CarCard from './CarCard';
import CarSearch from './CarSearch';
import Pagination from './Pagination';
import getCars from '../post/page'; // Function to fetch cars

export default function ClientComponent({ cars: initialCars }) {
  const [cars, setCars] = useState(initialCars);
  const [listOfCars, setListOfCars] = useState([]);
  const [maker, setMaker] = useState("");
  const [model, setModel] = useState("")
  const [yearSeach, setYearSeach] = useState("")

  //year and price is used for sorting whicg has three state null be default accenssing and deccensing
  const [year, setYear] = useState(null)
  const [price, setPrice] = useState( null) 

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);


  const paginationHandler= (carList,  pageNo=1  , pageSize=10)=>{
  
  
    if(!Array.isArray(carList)){

      return []
    }

    if(!pageNo || pageNo<1 ){

      return []

    }
    if(carList.length<=pageSize){

      return carList;
    }
    
    const tem= carList.slice( ((pageNo-1)*pageSize)+1 , pageNo*pageSize+1);
    return  tem;


  }


  const searchList= ( masterCarList, make, model, year )=>{

    if(!Array.isArray(masterCarList)){

      return []
    }
    if(!masterCarList.length){

      return []

    }

    if(make || model || year){

      return masterCarList.filter((car)=> {
        if(model?.trim()){
          return model==car.car_model
        }
        else{
          return true;
        }
        
      })
      .filter((car)=> {
        if(make?.trim()){
          return make==car.car
        }
        else{
          return true;
        }
        
      })
      .filter((car)=> {
        if(year?.trim()){
          return year==car.car_model_year
        }
        else{
          return true;
        }
        
      })

    }
    return masterCarList;

  }

  const sortByYear= (carList, sortType)=>{


    if(!Array.isArray(carList)){


      return [];
    }

    if(!sortType){

      return carList;
    }


    return carList.sort((a, b)=> {
      

      if(sortType=="asc"){

         return a.car_model_year-b.car_model_year
      }

      else
        if(sortType=="desc"){

        return   b.car_model_year-a.car_model_year 

        }
        else{

          return 0;
        }
      
    })



  }

  const sortByPrice= (carList, sortType)=>{


    if(!Array.isArray(carList)){


      return [];
    }

    if(!sortType){

      return carList;
    }


    return carList.sort((a, b)=> {
        
      const aPrice= a?.price?.replace("$","");
      const bPrice= b?.price?.replace("$","");

      if(sortType=="asc"){

         return aPrice-bPrice
      }

      else
        if(sortType=="desc"){

        return  bPrice-aPrice

        }
        else{

          return 0;
        }
      
    })



  }
 
  useEffect(()=>{

    setListOfCars(()=>{

    const seacrListArr= searchList(cars,maker,model,yearSeach)

    const sortARrByYear= sortByYear(seacrListArr ,year);
    const sortArByPrice= sortByPrice(sortARrByYear, price)

    return paginationHandler(sortArByPrice, page )
    
    })

  }, [maker , yearSeach, model,cars ,page ,year , price])

  
  return (
    <>
      <CarSearch setYearSeach={setYearSeach}  setMaker={setMaker} setModel={setModel}  setYear={setYear} setPrice={setPrice}/>
      <div className="car-list">
        {listOfCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} hasMore={hasMore} />
    </>
  );
}
