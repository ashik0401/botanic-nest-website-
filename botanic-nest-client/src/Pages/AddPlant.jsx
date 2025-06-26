import React, { useContext, useRef, } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';

const AddPlant = () => {

    const { user } = useContext(AuthContext);
    const formRef = useRef();


    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const NewPlants = Object.fromEntries(formData.entries());


        fetch('https://plants-care-app.vercel.app/new-plants', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(NewPlants)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Plants added Successfully !",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log("after add coffee to db", data);
                formRef.current.reset();
            })

    }



    return (
        <div className='md:p-24 px-5 py-10'>
            <div className=' text-center'>
                <h1 className='text-5xl mb-5 text-[#8BC34A] new'>🪴Add Plants</h1>
            </div>
            <form
                ref={formRef}
                onSubmit={handleAddCoffee}
            >
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-6'>
                    <fieldset className="fieldset  rounded-box  p-4">
                        <label
                            className="label text-lg">
                            Name
                        </label>
                        <input
                            type="text"
                            name='name'
                            required
                            className="input focus:outline-none w-full "
                            placeholder="Plant Name" />
                    </fieldset>


                    <fieldset className="fieldset border-base-300 rounded-box   p-4">
                        <label
                            className="label text-lg">
                            Health Status
                        </label>
                        <input
                            type="text"
                            name='health_status'
                            className="input focus:outline-none w-full"
                            placeholder="Health Status" />
                    </fieldset>

                    <fieldset className="fieldset border-base-300 rounded-box   p-4">
                        <label
                            className="label text-lg">
                            Watering Frequency
                        </label>
                        <input
                            type="text"
                            name='watering_frequency'
                            className="input focus:outline-none w-full"
                            placeholder="Watering Frequency" />
                    </fieldset>

                    <fieldset className="fieldset border-base-300 rounded-box   p-4">
                        <label
                            className="label text-lg">
                            Description
                        </label>
                        <input

                            type="text"
                            name='Description'
                            className="input 
                        focus:outline-none w-full
                        "
                            placeholder="Plants Description" />
                    </fieldset>


                    <fieldset className="fieldset border-base-300 rounded-box p-4">
                        <label className="label text-lg">
                            Category
                        </label>
                        <select
                            name="category"
                            required
                            className="select w-full focus:outline-none"
                            defaultValue=""
                        >
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

                    <fieldset className="fieldset border-base-300 rounded-box p-4">
                        <label className="label text-lg">
                            Care Level
                        </label>
                        <select
                            name="careLevel"
                            required
                            className="select w-full focus:outline-none"
                            defaultValue=""
                        >
                            <option value="" disabled>Select Care Level</option>
                            <option value="very_easy">Very Easy</option>
                            <option value="easy">Easy</option>
                            <option value="moderate">Moderate</option>
                            <option value="demanding">Demanding</option>
                            <option value="difficult">Difficult</option>
                            <option value="expert_only">Expert Only</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset  rounded-box  p-4">
                        <label
                            className="label text-lg">
                            Last Watered Date
                        </label>
                        <input
                            type="date"
                            name='last_watered_date'
                            className="input focus:outline-none w-full "
                            placeholder="User Email" />
                    </fieldset>


                    <fieldset className="fieldset  rounded-box  p-4">
                        <label
                            className="label text-lg">
                            Next Watering Date
                        </label>
                        <input
                            type="date"
                            name='next_watering_date'
                            className="input focus:outline-none w-full "
                            placeholder="User Email" />
                    </fieldset>


                    {user && (
                        <>
                            <fieldset className="fieldset rounded-box p-4">
                                <label className="label text-lg">User Name</label>
                                <input
                                    type="text"
                                    name="userName"
                                    className="input focus:outline-none w-full"
                                    value={user.displayName || user.name || ""}
                                    readOnly
                                />
                            </fieldset>

                            <fieldset className="fieldset rounded-box p-4">
                                <label className="label text-lg">User Email</label>
                                <input
                                    type="email"
                                    name="userEmail"
                                    className="input focus:outline-none w-full"
                                    value={user.email || ""}
                                    readOnly
                                />
                            </fieldset>
                        </>
                    )}




                </div>


                <fieldset className="fieldset border-base-300 rounded-box my-4  p-4">
                    <label
                        className="label text-lg">
                        Photo
                    </label>
                    <input

                        type="text"
                        required
                        name='photo'
                        className="input 
                        focus:outline-none w-full
                        "
                        placeholder="Enter plant photo URL" />
                </fieldset>

                <div className='m-4'>
                    <input
                        className=' btn min-w-full text-white p-2 border bg-[#689F38] rounded  '
                        type="submit"
                        value="Add Plants " />
                </div>

            </form>
        </div>
    );
};

export default AddPlant;