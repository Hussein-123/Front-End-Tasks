import { useState } from 'react';
import portfolioImage1 from '../../assets/imgs/port1.png';
import portfolioImage2 from '../../assets/imgs/port2.png';
import portfolioImage3 from '../../assets/imgs/port3.png';
import Modal from '../../components/Modal/Modal';

export default function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };
    return (
        <>
            <div className="portfolio min-h-[60vh] py-28">
                <div className="container">
                    <div className="header text-center text-[#2c3e50]">
                        <h2 className="text-3xl lg:text-[40px] uppercase mb-4 font-bold">portfolio component</h2>
                        <div className="flex justify-center items-center mb-4">
                            <div className="w-20 h-1 me-4 bg-[#2c3e50]"></div>
                            <i className="fa-solid fa-star"></i>
                            <div className="w-20 h-1 ms-4 bg-[#2c3e50]"></div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-3'>
                        <div className="portfolio-item overflow-hidden rounded-lg relative" onClick={() => openModal(portfolioImage1)}>
                            <img src={portfolioImage1} alt="Portfolio 1" className="w-full h-full object-cover mb-4" />
                            <div className='layer absolute w-full h-full bg-[#1abc9ce6] top-0 start-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500'>
                                <i className='fa-solid fa-plus text-white text-8xl'></i>
                            </div>
                        </div>
                        <div className="portfolio-item overflow-hidden rounded-lg relative" onClick={() => openModal(portfolioImage2)}>
                            <img src={portfolioImage2} alt="Portfolio 1" className="w-full h-full object-cover mb-4" />
                            <div className='layer absolute w-full h-full bg-[#1abc9ce6] top-0 start-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500'>
                                <i className='fa-solid fa-plus text-white text-8xl'></i>
                            </div>
                        </div>
                        <div className="portfolio-item overflow-hidden rounded-lg relative" onClick={() => openModal(portfolioImage3)}>
                            <img src={portfolioImage3} alt="Portfolio 1" className="w-full h-full object-cover mb-4" />
                            <div className='layer absolute w-full h-full bg-[#1abc9ce6] top-0 start-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500'>
                                <i className='fa-solid fa-plus text-white text-8xl'></i>
                            </div>
                        </div>
                        <div className="portfolio-item overflow-hidden rounded-lg relative" onClick={() => openModal(portfolioImage1)}>
                            <img src={portfolioImage1} alt="Portfolio 1" className="w-full h-full object-cover mb-4" />
                            <div className='layer absolute w-full h-full bg-[#1abc9ce6] top-0 start-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500'>
                                <i className='fa-solid fa-plus text-white text-8xl'></i>
                            </div>
                        </div>
                        <div className="portfolio-item overflow-hidden rounded-lg relative" onClick={() => openModal(portfolioImage2)}>
                            <img src={portfolioImage2} alt="Portfolio 1" className="w-full h-full object-cover mb-4" />
                            <div className='layer absolute w-full h-full bg-[#1abc9ce6] top-0 start-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500'>
                                <i className='fa-solid fa-plus text-white text-8xl'></i>
                            </div>
                        </div>
                        <div className="portfolio-item overflow-hidden rounded-lg relative" onClick={() => openModal(portfolioImage3)}>
                            <img src={portfolioImage3} alt="Portfolio 1" className="w-full h-full object-cover mb-4" />
                            <div className='layer absolute w-full h-full bg-[#1abc9ce6] top-0 start-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500'>
                                <i className='fa-solid fa-plus text-white text-8xl'></i>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />
            </div>
        </>
    )
}