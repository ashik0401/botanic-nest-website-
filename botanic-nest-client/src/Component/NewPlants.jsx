import React from 'react';
import { Link } from 'react-router';

const NewPlants = ({ plant }) => {
    const { _id, name, photo, category, careLevel } = plant;

    return (
        <div className="w-full">
            <div className="card h-full bg-[#F1F8E9] shadow-md rounded-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 dark:text-black">
                <figure className="w-full h-48 md:h-56 lg:h-64">
                    <img
                        src={photo}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </figure>
                <div className="card-body p-4 flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-base"><strong>Category:</strong> {category}</p>
                    <p className="text-base"><strong>Care Level:</strong> {careLevel}</p>
                    <div className="card-actions justify-end mt-auto">
                        <Link
                            to={`/add-plants/${_id}`}
                            className="btn bg-[#689F38] text-white border-none"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPlants;
