import React from 'react';
import { Link, useLoaderData } from 'react-router';
import '../App.css';
import { useEffect, useState } from 'react';

const AllPlants = () => {
  const initialData = useLoaderData();
  const [plants, setPlants] = useState(initialData);
  const [selectedCareLevel, setSelectedCareLevel] = useState('');

  const careLevels = [...new Set(initialData.map(plant => plant.careLevel))];

  useEffect(() => {
    if (selectedCareLevel === '') {
      setPlants(initialData);
    } else {
      const filtered = initialData.filter(plant => plant.careLevel === selectedCareLevel);
      setPlants(filtered);
    }
  }, [selectedCareLevel, initialData]);

  return (
    <div className="md:p-4 mx-2 mt-10 ">
      <h2 className="text-2xl font-bold text-center mb-6 new text-[#8BC34A]">🌿 All Plants Overview</h2>
      <div className='flex justify-center '>
        <fieldset className="fieldset border-base-300 rounded-box p-4 ">
          <select
            name="careLevel"
            className="select w-35 focus:outline-none"
            value={selectedCareLevel}
            onChange={(e) => setSelectedCareLevel(e.target.value)}
          >
            <option value="">All Care Levels</option>
            {careLevels.map((level, index) => (
              <option 
              key={index} 
              value={level}
              className=''
              >
                {level}
              </option>
            ))}
          </select>
        </fieldset>
      </div>

      <div className="overflow-x-auto w-full md:w-10/12 mx-auto rounded-lg shadow-xl border border-[#dbfcb6] ">
        <table className="table w-full">
          <thead>
            <tr className="text-md font-bold bg-[#e0f3ca] dark:text-black">
              <th className="text-left px-4 py-2">Plant Name</th>
              <th className="text-center px-4 py-2">Category</th>
              <th className="text-center px-4 py-2">Care_Level</th>
              <th className="text-center px-4 py-2">Watering</th>
              <th className="text-center px-4 py-2">Added</th>
              <th className="text-center px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {plants.map(plant => (
              <tr key={plant._id} className="border-t border-[#dbfcb6] transition">
                <td className="px-4 py-2 flex items-center gap-3">
                  <img src={plant.photo} alt={plant.name} className="w-10 h-10 rounded" />
                  <span className="text-green-800 font-medium">{plant.name}</span>
                </td>
                <td className="text-center px-4 py-2">{plant.category}</td>
                <td className="text-center px-4 py-2">{plant.careLevel}</td>
                <td className="text-center px-4 py-2">{plant.watering_frequency?plant.watering_frequency:"N/A"}</td>
                <td className="text-center px-4 py-2">{plant.createdAt}</td>
                <td className="text-center px-4 py-2 md:space-x-2 space-y-2 md:space-y-0">
                  <Link
                    to={`/all-plants/${plant._id}`}
                    className="btn btn-xs border-[#94ee2d] hover:bg-[#689F38] bg-[#dbfcb6] dark:text-black"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPlants;