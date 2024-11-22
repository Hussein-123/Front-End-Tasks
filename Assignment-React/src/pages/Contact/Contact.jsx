
export default function Contact() {
    return (
        <>
            <div className="contact min-h-[60vh] py-28">
                <div className="container">
                    <div className="header text-center text-[#2c3e50]">
                        <h2 className="text-3xl lg:text-[40px] uppercase mb-4 font-bold">contact section</h2>
                        <div className="flex justify-center items-center mb-4">
                            <div className="w-20 h-1 me-4 bg-[#2c3e50]"></div>
                            <i className="fa-solid fa-star"></i>
                            <div className="w-20 h-1 ms-4 bg-[#2c3e50]"></div>
                        </div>
                    </div>
                    <form className="w-full md:w-1/2 mx-auto mt-12 p-4 space-y-10">
                        <div className="relative">
                            <input id="name" type="text" className="border-b-2 w-full rounded-b-md p-2 focus:outline-none peer" />
                            <label htmlFor="name" className="absolute left-2 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-focus:top-[-20px] peer-focus:text-[#1abc9c]">UserName</label>
                        </div>
                        <div className="relative">
                            <input id="age" type="text" className="border-b-2 w-full rounded-b-md p-2 focus:outline-none peer" />
                            <label htmlFor="age" className="absolute left-2 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-focus:top-[-20px] peer-focus:text-[#1abc9c]">UserAge</label>
                        </div>
                        <div className="relative">
                            <input id="email" type="email" className="border-b-2 w-full rounded-b-md p-2 focus:outline-none peer" />
                            <label htmlFor="email" className="absolute left-2 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-focus:top-[-20px] peer-focus:text-[#1abc9c]">UserEmail</label>
                        </div>
                        <div className="relative">
                            <input id="password" type="password" className="border-b-2 w-full rounded-b-md p-2 focus:outline-none peer" />
                            <label htmlFor="password" className="absolute left-2 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-focus:top-[-20px] peer-focus:text-[#1abc9c]">UserPassword</label>
                        </div>
                        <button className="bg-[#1abc9c] px-3 py-[6px] text-white rounded-lg">Send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}
