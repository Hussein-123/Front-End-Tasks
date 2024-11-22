
export default function Modal({ isOpen, onClose, imageSrc }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-blue-700 bg-opacity-35 flex justify-center items-center z-50 px-3">
            <div className=" rounded-lg overflow-hidden shadow-lg max-w-lg w-full">
                <div className="relative">
                    <img src={imageSrc} alt="Portfolio" className="w-full h-auto" />
                    <button onClick={onClose} className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2">
                        <i className="fa-solid fa-times"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
