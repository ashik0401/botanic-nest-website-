import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { FaLeaf, FaUser, FaSeedling } from 'react-icons/fa';

const DashboardOverview = () => {
    const { user } = useContext(AuthContext);
    const [totalPlants, setTotalPlants] = useState(0);
    const [myPlants, setMyPlants] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/plants-count')
            .then(res => res.json())
            .then(data => setTotalPlants(data.total));

        if (user?.email) {
            fetch(`http://localhost:3000/plants-count/${user.email}`)
                .then(res => res.json())
                .then(data => setMyPlants(data.total));
        }
    }, [user]);

    return (
        <div className="p-6 md:p-10 bg-[#f9fcf7] min-h-screen text-black">
            <h2 className="text-3xl font-bold mb-6 text-green-700">🌿 Dashboard Overview</h2>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <div className="bg-white shadow-md p-6 rounded-2xl flex items-center gap-5 hover:shadow-lg transition">
                    <div className="text-green-600 text-4xl"><FaLeaf /></div>
                    <div>
                        <h3 className="text-gray-600 font-semibold">Total Plants</h3>
                        <p className="text-2xl font-bold text-green-800">{totalPlants}</p>
                    </div>
                </div>
                <div className="bg-white shadow-md p-6 rounded-2xl flex items-center gap-5 hover:shadow-lg transition">
                    <div className="text-green-500 text-4xl"><FaSeedling /></div>
                    <div>
                        <h3 className="text-gray-600 font-semibold">My Added Plants</h3>
                        <p className="text-2xl font-bold text-green-800">{myPlants}</p>
                    </div>
                </div>
                <div className="bg-white shadow-md p-6 rounded-2xl flex items-center gap-5 hover:shadow-lg transition">
                    <div className="text-green-400 text-4xl"><FaUser /></div>
                    <div>
                        <h3 className="text-gray-600 font-semibold">Account Type</h3>
                        <p className="text-2xl font-bold text-green-800">{user?.role || 'Standard User'}</p>
                    </div>
                </div>
            </div>

            {/* Profile Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-green-700 mb-6">👤 User Profile</h3>

                <div className="flex flex-col md:flex-row items-center gap-8">
                    <img
                        src={user?.photoURL || '/default-user.png'}
                        alt="User"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-green-100 shadow-sm"
                    />

                    <div className="flex-1 space-y-2 text-center md:text-left">
                        <p className="text-xl font-bold">{user?.displayName || 'No Name'}</p>
                        <p className="text-gray-700"><span className="font-semibold">Email:</span> {user?.email}</p>
                        <p className="text-gray-700"><span className="font-semibold">Role:</span> {user?.role || 'Standard User'}</p>
                        <p className="text-gray-700"><span className="font-semibold">Status:</span> ✅ Active</p>
                        <p className="text-gray-700">
                            <span className="font-semibold">Joined:</span>{" "}
                            {user?.metadata?.creationTime
                                ? new Date(user.metadata.creationTime).toLocaleDateString()
                                : 'N/A'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;
