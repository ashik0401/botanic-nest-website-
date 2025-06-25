
import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../App.css';
import { AuthContext } from '../Context/AuthContext';
import Loading from './Loading';
const Banner = () => {

    const [data, setData] = useState([]);
    const { loading, setLoading } = useContext(AuthContext);


    useEffect(() => {
        setLoading(true);
        fetch('/Slider.json')
            .then(res => res.json())
            .then(data => {
                setData(data);
                 setLoading(false);

            })
            .catch(err => {
                console.error(err);
                 setLoading(false);

            });
    }, [setLoading]);



    return (
        <div className=' mx-5 h-48 lg:h-82 responsive-card-slid mt-10'>
          
             {
                loading ?<div className='flex items-center justify-center min-h-full'><Loading></Loading></div>: <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper   max-h-[500px]  rounded-xl  "
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative w-full h-[500px]">
                            <img
                                src={item.image_url}
                                alt={item.title}
                                className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="absolute  inset-0 flex flex-col items-center md:items-start justify-center px-6 text-white bg-black/30 rounded-xl transition-all duration-500 md:pl-40 ">
                                <h2 className="md:text-3xl font-bold mb-4 text-sm ">{item.title}</h2>
                                <p className='text-xs'>
                                    {item.content}
                                </p>

                            </div>
                        </div>
                    </SwiperSlide>

                ))}

            </Swiper>
            }
           </div>

           

       
    );
};

export default Banner;