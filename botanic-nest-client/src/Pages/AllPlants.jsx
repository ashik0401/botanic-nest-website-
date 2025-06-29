import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import '../App.css';

const AllPlants = () => {
  const initialData = useLoaderData();
  const [plants, setPlants] = useState(initialData);
  const [selectedCareLevel, setSelectedCareLevel] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [dateOrder, setDateOrder] = useState('newest');

  const careLevels = [...new Set(initialData.map(plant => plant.careLevel))];

  useEffect(() => {
    let updatedPlants = [...initialData];

    if (selectedCareLevel !== '') {
      updatedPlants = updatedPlants.filter(plant => plant.careLevel === selectedCareLevel);
    }

    if (nameFilter.trim() !== '') {
      const filterLower = nameFilter.toLowerCase();
      updatedPlants = updatedPlants.filter(plant => plant.name?.toLowerCase().includes(filterLower));
    }

    if (dateOrder === 'oldest') {
      updatedPlants.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (dateOrder === 'newest') {
      updatedPlants.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    setPlants(updatedPlants);
  }, [selectedCareLevel, nameFilter, dateOrder, initialData]);

  return (
    <div className="md:p-4 mx-2 mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 new text-[#8BC34A]">🌿 All Plants Overview</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <fieldset className="fieldset border-base-300 rounded-box p-4">
          <select
            name="careLevel"
            className="select w-35 focus:outline-none"
            value={selectedCareLevel}
            onChange={(e) => setSelectedCareLevel(e.target.value)}
          >
            <option value="">All Care Levels</option>
            {careLevels.map((level, index) => (
              <option key={index} value={level}>{level}</option>
            ))}
          </select>
        </fieldset>

        <fieldset className="fieldset border-base-300 rounded-box p-4">
          <input
            type="text"
            placeholder="Filter by Plant Name"
            className="input w-60 focus:outline-none"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </fieldset>

        <fieldset className="fieldset border-base-300 rounded-box p-4">
          <select
            name="dateOrder"
            className="select w-35 focus:outline-none"
            value={dateOrder}
            onChange={(e) => setDateOrder(e.target.value)}
          >
            <option value="newest">Sort by Date</option>
            <option value="newest">Newest → Oldest</option>
            <option value="oldest">Oldest → Newest</option>
          </select>
        </fieldset>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-11/12 mx-auto">
        {plants.filter(plant => plant.name).map(plant => (
          <div key={plant._id} className="card bg-[#F1F8E9] shadow-md rounded-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 dark:text-black">
            <figure className="w-full h-48 md:h-56">
              <img
                src={plant.photo}
                alt={plant.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body p-4 flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-green-800">{plant.name}</h2>
              <p className="text-base"><strong>Category:</strong> {plant.category}</p>
              <p className="text-base"><strong>Care Level:</strong> {plant.careLevel}</p>
              <p className="text-base"><strong>Watering:</strong> {plant.watering_frequency ? plant.watering_frequency : 'N/A'}</p>
              <p className="text-sm text-gray-600"><strong>Added:</strong> {plant.createdAt}</p>
              <div className="mt-auto">
                <Link
                  to={`/add-plants/${plant._id}`}
                  className="btn bg-[#689F38] text-white border-none"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPlants;
