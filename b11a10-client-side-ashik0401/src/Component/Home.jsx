import Banner from './Banner';
import { useLoaderData } from 'react-router';
import NewPlants from './NewPlants';
import leaf from '../assets/leaf-plant.png';

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <Banner />
            <div className='mt-10'>
                <div className='flex items-center'>
                    <img className='w-20 h-20 bg-transparent' src={leaf} alt="" />
                    <h2 className='text-[#8BC34A] text-4xl font-semibold my-3 new'>
                        <i>new arrivals</i>
                    </h2>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 responsive-card-mid-xl'>
                    {Array.isArray(data) && data.map(plant => (
                        <NewPlants plant={plant} key={plant._id} />
                    ))}
                </div>
            </div>

            <section className="bg-gradient-to-r from-green-100 to-green-50 py-10 px-5 rounded-t-md">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-green-800 mb-4">Seasonal Plant Care Tips</h2>
                    <p className="text-lg text-green-700 mb-6">Adjust your care strategy with the seasons for healthier, happier plants.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 responsive-card-mid-xl">
                        <div className="p-5 bg-white rounded-xl shadow-md dark:text-black">
                            <h3 className="font-semibold text-xl mb-2">🌞 Summer</h3>
                            <p>Increase watering and provide shade for heat-sensitive plants.</p>
                        </div>
                        <div className="p-5 bg-white rounded-xl shadow-md dark:text-black">
                            <h3 className="font-semibold text-xl mb-2">❄️ Winter</h3>
                            <p>Reduce watering and avoid drafts near windows.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#F9FBE7] py-12 rounded-b-md">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#558B2F] text-center mb-8">🌍 Rare & Exotic Plant Spotlight</h2>
                    <div className="grid md:grid-cols-2 gap-8 responsive-card-mid-xl">
                        <div className="flex flex-col items-center">
                            <img src="https://i.ibb.co/M5jknnvy/SPR-monstera-obliqua-7480684-07-3eb94e60efb64c9a91ebd3332ec11fa6.jpg" alt="Monstera Obliqua" className="w-full h-64 object-cover rounded-lg shadow" />
                            <h3 className="text-xl font-semibold mt-4 dark:text-black">Monstera Obliqua</h3>
                            <p className="text-center text-gray-700">Known for its dramatic leaf holes — extremely rare and needs high humidity.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="https://i.ibb.co/hxbc8nSx/SPR-syngonium-albo-growing-guide-hero-c6849b8557ed423086db0d9f4d83c59b.jpg" alt="Albo Syngonium" className="w-full h-64 object-cover rounded-lg shadow" />
                            <h3 className="text-xl font-semibold mt-4 dark:text-black">Albo Syngonium</h3>
                            <p className="text-center text-gray-700">A rare variegated plant loved for its striking white and green foliage.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
