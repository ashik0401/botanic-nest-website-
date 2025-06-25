import React from 'react';
import '../App.css';
import { Link } from 'react-router';

const NewPlants = ({ plant }) => {

    const { _id,name, photo, category, careLevel } = plant

    return (
        <div className='mb-5'>
            <div className="card custom-responsive shadow-sm p-5 responsive-card-mid md:h-full h-[500px] transition-transform duration-300 hover:-translate-y-2 bg-[#F1F8E9] dark:text-black">
                <figure className='rounded-xl'>
                    <img
                        className='h-96 min-w-full '
                        src={photo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <p className='text-lg'><strong>category: </strong>{category}</p>
                    <p className='text-lg'><strong>careLevel: </strong>{careLevel}</p>
             
                    
                    <div className="card-actions justify-end">
                        <Link

                        to={`/add-plants/${_id}`}
                        className="btn bg-[#689F38] border-none">view Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPlants;