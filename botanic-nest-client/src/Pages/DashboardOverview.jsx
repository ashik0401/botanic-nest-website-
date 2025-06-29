import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import {
  FaLeaf, FaUser, FaPlus, FaSeedling, FaHome
} from 'react-icons/fa';
import { Link } from 'react-router';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [plants, setPlants] = useState([]);
  const [totalPlants, setTotalPlants] = useState(0);
  const [myPlants, setMyPlants] = useState(0);
  const [recentPlants, setRecentPlants] = useState([]);
  const [latestPlant, setLatestPlant] = useState(null);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://botanic-nest.vercel.app/all-plants`)
      .then((res) => res.json())
      .then((data) => setPlants(data));

    fetch('https://botanic-nest.vercel.app/plants-count')
      .then((res) => res.json())
      .then((data) => setTotalPlants(data.total));

    fetch(`https://botanic-nest.vercel.app/plants-count/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyPlants(data.total));

    fetch('https://botanic-nest.vercel.app/new-plants')
      .then((res) => res.json())
      .then((data) => {
        setRecentPlants(data.slice(0, 3));
        setLatestPlant(data[0]);
      });
  }, [user?.email]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#e7efe5] text-gray-800">
      <aside className="w-full lg:w-64 bg-[#d9e5d4] p-6 space-y-10">
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL || '/default-user.png'}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="text-center mt-2">
            <p className="text-lg font-bold">{user?.displayName}</p>
            <p className="text-sm text-gray-600">{user?.email}</p>
          </div>
        </div>
        <nav className="space-y-6 text-base lg:text-lg font-medium">
          <div className="flex items-center gap-3 text-green-700">
            <FaLeaf /> Dashboard
          </div>
          <button
            onClick={() => (window.location.href = '/')}
            className="flex items-center gap-2 text-green-800 text-base cursor-pointer"
          >
            <FaHome /> Home
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-4 md:p-8 space-y-8 overflow-x-hidden">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Welcome Back, <span className="text-green-600">{user?.displayName || 'Guest'}</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-6 rounded-2xl flex items-center gap-5">
            <FaLeaf className="text-green-600 text-3xl md:text-4xl" />
            <div>
              <h3 className="text-sm text-gray-600 font-semibold">Total Plants</h3>
              <p className="text-xl md:text-2xl font-bold text-green-800">{totalPlants}</p>
            </div>
          </div>
          <div className="bg-white shadow-md p-6 rounded-2xl flex items-center gap-5">
            <FaSeedling className="text-green-500 text-3xl md:text-4xl" />
            <div>
              <h3 className="text-sm text-gray-600 font-semibold">My Added Plants</h3>
              <p className="text-xl md:text-2xl font-bold text-green-800">{myPlants}</p>
            </div>
          </div>
          <div className="bg-white shadow-md p-6 rounded-2xl flex items-center gap-5">
            <FaUser className="text-green-400 text-3xl md:text-4xl" />
            <div>
              <h3 className="text-sm text-gray-600 font-semibold">Account Type</h3>
              <p className="text-xl md:text-2xl font-bold text-green-800">{user?.role || 'Standard User'}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          {latestPlant && (
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
              <img
                src={latestPlant.photo || '/default-plant.jpg'}
                className="w-24 h-24 rounded-xl object-cover"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-lg md:text-xl font-bold">{latestPlant.name}</h3>
                <p className="text-sm text-gray-500 italic">{latestPlant.category}</p>
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-green-100 p-4 rounded-xl">
              <p className="text-lg font-bold">{latestPlant?.humidity || '50%'}</p>
              <p className="text-sm text-gray-600">Humidity</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-xl">
              <p className="text-lg font-bold">{latestPlant?.dailyWater || '1L'}</p>
              <p className="text-sm text-gray-600">Daily Water</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-xl">
              <p className="text-lg font-bold">{latestPlant?.temperature || '18-24°C'}</p>
              <p className="text-sm text-gray-600">Temperature</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <Link to="/add-plants">
            <button className="bg-orange-500 text-white py-2 px-4 rounded-full flex items-center justify-center gap-2 mb-6 w-full sm:w-fit">
              <FaPlus /> Add New Plant
            </button>
          </Link>
          <div className="max-h-64 overflow-y-auto pr-2">
            <ul className="space-y-4">
              {[...plants].reverse().map((plant, index) => (
                <li key={index} className="flex items-center gap-4">
                  <img
                    src={plant.photo || '/default-plant.jpg'}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{plant.name}</p>
                    <p className="text-xs text-gray-500 italic">{plant.category}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-bold text-green-700 mb-4">Recent Added Plants</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recentPlants.map((plant, index) => (
              <div key={index} className="bg-green-100 p-4 rounded-xl text-center">
                <img
                  src={plant.photo}
                  alt={plant.name}
                  className="w-20 h-20 rounded-full mx-auto mb-2"
                />
                <h4 className="font-bold">{plant.name}</h4>
                <p className="text-sm italic text-gray-500">{plant.category}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
