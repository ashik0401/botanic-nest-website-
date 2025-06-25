import React, { useContext, useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { FiEdit2 } from 'react-icons/fi';
import Swal from 'sweetalert2';
import '../App.css';
import { formatDistanceToNow } from 'date-fns';

const MyPlants = () => {
    const allPlants = useLoaderData();
    const { user } = useContext(AuthContext);
    const [myPlants, setMyPlants] = useState([]);

    useEffect(() => {
        if (user) {
            const filtered = allPlants.filter(plant => plant.userEmail === user.email);
            setMyPlants(filtered);
        }
    }, [user, allPlants]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://plant-care-tracker-sarver.vercel.app/plants/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your plant has been deleted.",
                                icon: "success"
                            });
                            const remaining = myPlants.filter(c => c._id !== _id);
                            setMyPlants(remaining);
                        }
                    });
            }
        });
    };

    return (
        <div className='min-h-[450px]'>
            <h2 className="text-2xl mt-5 text-center mb-6 new  ">🌱 Plant’s Profile</h2>
            <div className="md:p-4 mx-2 mt-10  hidden md:block">
                <div className="overflow-x-auto w-full md:w-10/12 mx-auto bg-[#F1F8E9] rounded-lg shadow-md ">
                    <table className="table w-full ">
                        <thead>
                            <tr className="text-md font-bold bg-[#8BC34A] dark:text-black">
                                <th className="text-left px-4 py-2">Plant Name</th>
                                <th className="text-center px-4 py-2">Category</th>
                                <th className="text-center px-4 py-2">Watering</th>
                                <th className="text-center px-4 py-2">LWD</th>
                                <th className="text-center px-4 py-2">Next Watering</th>
                                <th className="text-center px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myPlants.map(plant => (
                                <tr key={plant._id} className="border-t border-[#dbfcb6] hover:bg-green-50 transition items-center dark:text-black ">
                                    <td className=" mt-2 flex items-center gap-3  h-full">
                                        <img src={plant.photo} alt={plant.name} className="w-10 h-10 rounded" />
                                        <span className="text-green-800 font-medium">{plant.name}</span>
                                    </td>
                                    <td className="text-center px-4 py-2">{plant.category}</td>
                                    <td className="text-center px-4 py-2">
                                        {plant.watering_frequency ? plant.watering_frequency : "N/A"}</td>
                                    <td className="text-center px-4 py-2">
                                        {plant.last_watered_date ? plant.last_watered_date : "N/A"}</td>
                                    <td className="text-center px-4 py-2">
                                        {plant.next_watering_date
                                            ? formatDistanceToNow(new Date(plant.next_watering_date), { addSuffix: true })
                                            : 'N/A'}
                                    </td>
                                    <td className="px-4 py-2 space-x-2 ">
                                        <Link
                                            to={`/update-plants/${plant._id}`}
                                            className="btn btn-xs my-1 shadow-none border-[#94ee2d] hover:bg-[#689F38] dark:bg-transparent text-black"
                                        >
                                            <FiEdit2 />
                                        </Link>
                                        <button
                                            className="btn btn-xs my-1 btn-outline btn-error"
                                            onClick={() => handleDelete(plant._id)}
                                        >
                                            <MdOutlineDeleteForever />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {myPlants.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="text-center py-4 text-gray-600">No plants added by you.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <div className=' gap-2 m-2 responsive-my-plants-card'>
                    {
                        myPlants.map(plant => (
                            <div key={plant._id} className='mb-5 md:hidden '>
                                <div className="card custom-responsive  shadow-sm p-5 responsive-card-mid md:h-full h-[500px] transition-transform duration-300 hover:-translate-y-2 bg-[#F1F8E9] dark:text-black">
                                    <figure className='rounded-xl'>
                                        <img
                                            className='h-96 min-w-full '
                                            src={plant.photo}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="text-2xl font-semibold">{plant.name}</h2>
                                        <p className='text-lg'><strong>Category: </strong>{plant.category}</p>
                                        <p className='text-lg'><strong>CareLevel: </strong>{plant.careLevel}</p>
                                        <p className='text-lg'><strong>Watering_Frequency: </strong><span className='text-sm'>
                                            {plant.watering_frequency ? plant.watering_frequency : "N/A"}</span></p>
                                        <p className='text-lg'><strong>LWD:</strong><span className='text-sm'>
                                            {plant.last_watered_date ? plant.last_watered_date : "N/A"}</span></p>
                                        <p className='text-lg'>
                                            <strong>Next Watering:</strong>
                                            {plant.next_watering_date
                                                ? formatDistanceToNow(new Date(plant.next_watering_date), { addSuffix: true })
                                                : 'N/A'}
                                        </p>
                                        <div className="card-actions justify-end ">
                                            <Link
                                                to={`/update-plants/${plant._id}`}
                                                className="btn    btn-xs border-[#94ee2d] hover:bg-[#689F38] dark:bg-transparent text-black"
                                            >
                                                <FiEdit2 />
                                            </Link>
                                            <button
                                                className="btn btn-xs btn-outline btn-error"
                                                onClick={() => handleDelete(plant._id)}
                                            >
                                                <MdOutlineDeleteForever />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {myPlants.length === 0 && (
                    <div className='md:hidden w-full text-center py-4'>
                        <p className="text-gray-600">No plants added by you.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyPlants;