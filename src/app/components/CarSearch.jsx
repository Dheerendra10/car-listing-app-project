// import React, { useEffect, useState } from 'react';

// export default function CarSearch({ setYearSeach, setModel,setMaker  , setYear ,setPrice}) {

//   const [formValues, setFormValues] = useState({
//     car: '',
//     car_model: '',
//     car_model_year: ''
//   });
  
//   const [sortValues, setSortValues] = useState({
//     sortPrice: '',
//     sortYear: ''
//   });

//   useEffect(()=>{
//     setYearSeach(formValues.car_model_year);
//     setModel(formValues.car_model);
//     setMaker(formValues.car);


//   } , [formValues]

//   )
//   useEffect(()=>{
   
//     setYear(sortValues.sortYear);
//     setPrice(sortValues.sortPrice);
  

//   } , [sortValues]
//   )

//   const handleChange = (e) => {
//     setFormValues({
//       ...formValues,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSortChange = (e) => {
//     setSortValues({
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//   };

//   const handleSortSubmit = (e) => {
//     e.preventDefault();
    
//   };

//   return (
//     <div>
//       {/* Search Form */}
//       <form onSubmit={handleSubmit} className="search-form">
//         <p> <b> Search </b></p>
//         <input
//           type="text"
//           name="car"
//           placeholder="Car Make"
//           value={formValues.car}
//           className="search-input" 
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="car_model"
//           placeholder="Car Model"
//           value={formValues.car_model}
//           className="search-input" 
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="car_model_year"
//           className="search-input" 
//           placeholder="Car Model Year"
//           value={formValues.car_model_year}
//           onChange={handleChange}
//         />

//       </form>

//       {/* Sorting Form */}
//       <form onSubmit={handleSortSubmit} className="sort-form">
//         <p> <strong>Sorting</strong></p>
//         <select name="sortPrice"  disabled ={sortValues.sortYear} value={sortValues.sortPrice} onChange={handleSortChange}>
//           <option value="">Sort by Price</option>
//           <option value="asc">Price: Low to High</option>
//           <option value="desc">Price: High to Low</option>
//         </select>

//         <select name="sortYear"  disabled ={sortValues.sortPrice} value={sortValues.sortYear} onChange={handleSortChange}>
//           <option value="">Sort by Year</option>
//           <option value="asc">Year: Oldest First</option>
//           <option value="desc">Year: Newest First</option>
//         </select>

//       </form>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";

export default function CarSearch({
  setYearSeach,
  setModel,
  setMaker,
  setYear,
  setPrice,
}) {
  const [formValues, setFormValues] = useState({
    car: "",
    car_model: "",
    car_model_year: "",
  });

  const [sortValues, setSortValues] = useState({
    sortPrice: "",
    sortYear: "",
  });

  useEffect(() => {
    setYearSeach(formValues.car_model_year);
    setModel(formValues.car_model);
    setMaker(formValues.car);
  }, [formValues]);

  useEffect(() => {
    setYear(sortValues.sortYear);
    setPrice(sortValues.sortPrice);
  }, [sortValues]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleTabClick = (sortType, value) => {
    setSortValues((prevValues) => ({
      ...prevValues,
      [sortType]: prevValues[sortType] === value ? "" : value, // Toggle active state
      [sortType === "sortPrice" ? "sortYear" : "sortPrice"]: "", // Reset other sort type
    }));
  };

  return (
    <div>
      {/* Search Form */}
      <form className="search-form">
        <p>
          <b>Search</b>
        </p>
        <input
          type="text"
          name="car"
          placeholder="Car Make"
          value={formValues.car}
          className="search-input"
          onChange={handleChange}
        />
        <input
          type="text"
          name="car_model"
          placeholder="Car Model"
          value={formValues.car_model}
          className="search-input"
          onChange={handleChange}
        />
        <input
          type="text"
          name="car_model_year"
          className="search-input"
          placeholder="Car Model Year"
          value={formValues.car_model_year}
          onChange={handleChange}
        />
      </form>

      {/* Sorting Tabs */}
      <div className="sort-tabs">
        <div className="tab-group">
          {/* Tabs for Sorting by Year */}
          <div className="tab-section">
            <div>
            <button
              className={`tab ${sortValues.sortYear === "asc" ? "active" : ""}`}
              onClick={() => handleTabClick("sortYear", "asc")}
              disabled={sortValues.sortPrice}
            >
              Oldest First
            </button>
            </div>
            <div>
            <button
              className={`tab ${sortValues.sortYear === "desc" ? "active" : ""}`}
              onClick={() => handleTabClick("sortYear", "desc")}
              disabled={sortValues.sortPrice}
            >
              Newest First
            </button>
            </div>
            
           
          </div>
        </div>
      </div>
    </div>
  );
}

