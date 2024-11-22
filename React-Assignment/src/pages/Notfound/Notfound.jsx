import errorlogo from "../../assets/imgs/error.svg"

export default function Notfound() {
    return (
        <div className='min-h-[80vh] flex flex-col justify-center items-center'>
            <img src={errorlogo} alt="" />
            <h1 className="text-3xl font-semibold mt-3 text-slate-700">Not Found !!!</h1>
        </div>
    )
}
