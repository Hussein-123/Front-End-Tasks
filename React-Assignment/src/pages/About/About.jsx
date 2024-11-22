
export default function About() {
    return (
        <>
            <div className="about bg-[#1abc9c] flex justify-center items-center text-white min-h-[95vh]">
                <div className="content">
                    <div className="header pt-6 text-center">
                        <h2 className="text-3xl lg:text-[40px] uppercase mb-4 font-bold">about component</h2>
                        <div className="flex justify-center items-center mb-4">
                            <div className="w-20 h-1 bg-white me-4"></div>
                            <i className="fa-solid fa-star"></i>
                            <div className="w-20 h-1 bg-white ms-4"></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="px-12 flex flex-col md:flex-row space-y-4 md:space-y-0">
                            <div className="md:ps-12 md:pe-3">
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                            <div className="md:pe-12 md:ps-3">
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
