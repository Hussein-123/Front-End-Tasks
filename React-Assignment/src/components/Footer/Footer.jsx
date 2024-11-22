import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="bg-[#2c3e50] text-white p-10">
                <div className="container flex flex-col lg:flex-row justify-between items-center gap-6">
                    <div className='card flex-1'>
                        <div className="card-body text-center p-4">
                            <h3 className='pt-5 text-[28px] font-semibold uppercase mb-2'>location</h3>
                            <p className='mb-2'>2215 John Daniel Drive</p>
                            <p className='mb-2'>Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className='card flex-1'>
                        <div className="card-body text-center p-4">
                            <h3 className='pt-5 text-[28px] font-semibold uppercase mb-2'>around the web</h3>
                            <div className="icon flex justify-center gap-2">
                                <i className='fa-brands fa-facebook mx-1 p-[10px] border rounded-full'></i>
                                <i className='fa-brands fa-linkedin-in mx-1 p-[10px] border rounded-full'></i>
                                <i className='fa-brands fa-twitter mx-1 p-[10px] border rounded-full'></i>
                                <i className='fa-solid fa-globe mx-1 p-[10px] border rounded-full'></i>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-1">
                        <div className="card-body text-center p-4">
                            <h3 className='pt-5 text-[28px] font-semibold uppercase mb-2'>about freelancer</h3>
                            <p className='mb-2'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='bg-[#1a252f] p-[10px] text-center text-[#f0f8ff]'>
                <p className='m-4'>Copyright &copy; Your Website 2024</p>
            </div>
        </>
    )
}
