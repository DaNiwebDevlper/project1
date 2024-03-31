import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
    return (
        <div className='w-full h-[70px] bg-white text-black flex justify-between items-center px-9'>
            <div className="">
                <h1 className='text-xl font-bold'>Logo</h1>
            </div>
            <div className="flex gap-3">

                <div className="sm:w-[50px] sm:h-[50px] h-[40px] w-[40px] flex justify-center items-center rounded-full p-1 bg-gradient-to-r from-blue-800 to-rose-700 text-white text-xl">
                    <IoSearch />
                </div>
                <div className="sm:w-[50px] sm:h-[50px] h-[40px] w-[40px] flex justify-center items-center rounded-full p-1 bg-gradient-to-r from-blue-800 to-rose-700 text-white text-xl">
                    <FaPlus />
                </div>

                <div className="sm:w-[50px] sm:h-[50px] h-[40px] w-[40px] flex justify-center items-center rounded-full p-1 bg-gradient-to-r from-blue-800 to-rose-700 text-white text-xl">
                    <IoIosNotifications />
                </div>
            </div>
        </div>
    )
}

export default Navbar