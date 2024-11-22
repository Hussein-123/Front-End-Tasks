import homeImage from "../../assets/imgs/avataaars.svg"
export default function Home() {
    return (
        <>
            <div className="home bg-[#1abc9c] flex justify-center items-center text-white min-h-[95vh] pt-36 pb-28">
                <div className="content text-center">
                    <img src={homeImage} alt="" className="w-[250px] mx-auto" />
                    <div className="text-center pt-6">
                        <h2 className="text-3xl lg:text-[40px] uppercase mb-4 font-bold">start framework</h2>
                        <div className="flex justify-center items-center mb-4">
                            <div className="w-20 h-1 bg-white me-4"></div>
                            <i className="fa-solid fa-star"></i>
                            <div className="w-20 h-1 bg-white ms-4"></div>
                        </div>
                        <div>Graphic Artist - Web Designer - Illustrator</div>
                    </div>
                </div>
            </div>
        </>
    )
}
