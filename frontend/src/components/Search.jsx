import React from "react";

const Search = () => {
  return (
    <div className="max-w-5xl w-full mx-auto items-center text-center mt-6 border bg-gray-100 rounded-2xl shadow-5xl shadow-gray-600 py-5 px-10">
      <h1 className="text-3xl">Search Our 3000 Vehicles</h1>
      <div className="space-x-10 mt-4">
        <select
          id="car-select"
          name="cars"
          className="px-2 py-2 rounded-lg border border-black"
        >
          <option value="default" disabled selected>
            Select your car
          </option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <select
          id="city-select"
          name="city"
          className="px-2 py-2 rounded border border-black"
        >
          <option value="default" disabled selected>
            Choose the city
          </option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Punjab">Punjab</option>
          <option value="chandigarh">Chandigarh</option>
        </select>

        <select
          id="category-select"
          name="category"
          className="px-2 py-2 rounded border border-black"
        >
          <option value="default" disabled selected>
            Choose the category
          </option>
          <option value="simple">Simple</option>
          <option value="luxury">Luxury</option>
          <option value="premium">Premium</option>
        </select>

        <button className="px-4 py-2 bg-red-900 text-white rounded">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
