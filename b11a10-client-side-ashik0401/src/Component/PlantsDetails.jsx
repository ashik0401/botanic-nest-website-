import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link, useLoaderData, } from 'react-router';

const PlantsDetails = () => {
    const data = useLoaderData();




    const { name,
        health_status,
        watering_frequency,
        Description,
        category,
        careLevel,
        last_watered_date,
        next_watering_date,
        userName,
        userEmail,
        photo,
        createdAt,
        updatedAt } = data



    return (

        <div className='flex flex-col-reverse lg:flex-col m-2'>
            <div>
                <Link
                    to='/all-plants'
                    className=" btn hover:bg-[#689F38] bg-[#689F38] lg:bg-transparent border-none md:ml-20 ml-10 my-5"><IoMdArrowRoundBack size={25} /></Link>
            </div>
            <div className="hero  lg:w-10/12 rounded-md md:mx-auto dark:text-black mt-5 md:mt-0 bg-[#F1F8E9] responsive-details">

                <div className="hero-content flex-col lg:flex-row-reverse md:gap-30 gap-10  md:px-20 ">
                    <img
                        src={photo}
                        className="lg:max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className='space-y-2  md:text-2xl responsive-card-details text-lg '>
                        <h1 className="text-5xl font-bold text-[#8BC34A] responsive-card-title ">{name}</h1>
                        <h2><strong>category: </strong>{category}</h2>
                        <h2><strong>careLevel:</strong>{careLevel}</h2>
                        <h2><strong>health_status:</strong>{" "}{health_status ? health_status : "N/A"}</h2>
                        <h2><strong>watering_frequency:</strong><span className='text-md'>{" "}{watering_frequency ? watering_frequency : "N/A"}</span></h2>
                        <p><strong>Description:</strong>{" "}{Description ? Description : "N/A"}</p>

                        <h3><strong>last_watered_date:</strong><span className='text-sm'>{" "}{last_watered_date ? last_watered_date : "N/A"}</span></h3>
                        <h3><strong>next_watering_date:</strong><span className='text-sm'>{" "}{next_watering_date ? next_watering_date : "N/A"}</span></h3>

                        <h3>
                            {
                                createdAt ? <p><strong>createdAt: </strong><span className='text-sm'> {createdAt}</span></p> : ""
                            }
                        </h3>

                        <h3>
                            {
                                updatedAt ? <p><strong>Updated At: </strong><span className='text-sm'> {updatedAt}</span></p> : ""
                            }
                        </h3>

                        <p className=''><strong>Assigned By: </strong>{userName} <br /> </p>
                        <p>
                            <strong>Contact: </strong>
                            <span
                                className="text-md font-light text-gray-500 new hover:underline cursor-pointer"
                                title={userEmail}
                            >
                                {userEmail}
                            </span>
                        </p>



                    </div>
                </div>
            </div>

        </div>
    );

};

export default PlantsDetails;