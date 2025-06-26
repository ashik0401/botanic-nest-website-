import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';

const Update = () => {
    const plant = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedPlants = Object.fromEntries(formData.entries());

        const hasChanged = Object.keys(updatedPlants).some(key => {
            return updatedPlants[key] !== (plant[key] ?? '');
        });

        if (!hasChanged) {
            Swal.fire({
                icon: 'info',
                title: 'No changes detected',
                text: 'Please modify at least one field to update.',
            });
            return;
        }

        fetch(`https://botanic-nest.vercel.app/update-plants/${plant._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedPlants)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Update successful.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/my-plants');
                }
            });
    };

    return (
        <div className='md:p-24 px-5 py-10'>
            <div className=' text-center'>
                <h1 className='text-5xl mb-5 text-[#8BC34A] new'>🪴Update Plants</h1>
            </div>
            <form onSubmit={handleUpdate}>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-6'>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label text-lg">Name</label>
                        <input type="text" name='name' defaultValue={plant.name} className="input focus:outline-none w-full" />
                    </fieldset>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label text-lg">Health Status</label>
                        <input type="text" name='health_status' defaultValue={plant.health_status} className="input focus:outline-none w-full" />
                    </fieldset>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label text-lg">Watering Frequency</label>
                        <input type="text" name='watering_frequency' defaultValue={plant.watering_frequency} className="input focus:outline-none w-full" />
                    </fieldset>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label text-lg">Description</label>
                        <input type="text" name='Description' defaultValue={plant.Description} className="input focus:outline-none w-full" />
                    </fieldset>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label text-lg">Category</label>
                        <select name="category" className="select w-full focus:outline-none" defaultValue={plant.category}>
                            <option value="" disabled>Select Plant Category</option>
                            <option value="succulent">Succulent</option>
                            <option value="fern">Fern</option>
                            <option value="flowering">Flowering</option>
                            <option value="cactus">Cactus</option>
                            <option value="herb">Herb</option>
                            <option value="indoor">Indoor</option>
                            <option value="outdoor">Outdoor</option>
                            <option value="air_purifying">Air Purifying</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label text-lg">Care Level</label>
                        <select name="careLevel" className="select w-full focus:outline-none" defaultValue={plant.careLevel}>
                            <option value="" disabled>Select Care Level</option>
                            <option value="very_easy">Very Easy</option>
                            <option value="easy">Easy</option>
                            <option value="moderate">Moderate</option>
                            <option value="demanding">Demanding</option>
                            <option value="difficult">Difficult</option>
                            <option value="expert_only">Expert Only</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label text-lg">Last Watered Date</label>
                        <input type="date" name='last_watered_date' defaultValue={plant.last_watered_date} className="input focus:outline-none w-full" />
                    </fieldset>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label text-lg">Next Watering Date</label>
                        <input type="date" name='next_watering_date' defaultValue={plant.next_watering_date} className="input focus:outline-none w-full" />
                    </fieldset>
                    {user && (
                        <>
                            <fieldset className="fieldset rounded-box p-4">
                                <label className="label text-lg">User Name</label>
                                <input type="text" name="userName" className="input focus:outline-none w-full" value={user.displayName || user.name || ""} readOnly />
                            </fieldset>
                            <fieldset className="fieldset rounded-box p-4">
                                <label className="label text-lg">User Email</label>
                                <input type="email" name="userEmail" className="input focus:outline-none w-full" value={user.email || ""} readOnly />
                            </fieldset>
                        </>
                    )}
                </div>
                <fieldset className="fieldset rounded-box my-4 p-4">
                    <label className="label text-lg">Photo</label>
                    <input type="text" name='photo' defaultValue={plant.photo} className="input focus:outline-none w-full" />
                </fieldset>
                <div className='m-4'>
                    <input className='btn min-w-full text-white p-2 border bg-[#689F38] rounded' type="submit" value="Add Plants" />
                </div>
            </form>
        </div>
    );
};

export default Update;
