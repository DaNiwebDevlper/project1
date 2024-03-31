import { BsPeopleFill } from 'react-icons/bs'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFilePdf, FaShare } from "react-icons/fa";
import { SiMicrosoftword } from "react-icons/si";
import { FaFilePowerpoint } from "react-icons/fa6";
import { RiFileExcel2Fill } from "react-icons/ri";
const files = [
    { icon: <FaFilePdf />, color: "text-orange-500" },
    { icon: <SiMicrosoftword />, color: "text-blue-600" },
    { icon: <FaFilePowerpoint />, color: "text-red-600" },
    { icon: <RiFileExcel2Fill />, color: "text-green-700" },
]
const Post2 = () => {
    return (
        <div className="border border-black/20 rounded-lg w-full flex flex-col gap-5 px-9 py-2 relative">

            {/* ////////---Profile-pic */}
            <div className="bg-gradient-to-bl from-rose-600 to-blue-600 sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] rounded-full flex justify-center items-center text-lg absolute left-5">
                <BsPeopleFill className="text-white" />
            </div>
            {/* ////////////---Name & menu btn */}
            <div className=" flex justify-between ">
                <h2 className='sm:text-lg text-md font-semibold  py-2 pl-11'>Animalz story Zoo</h2>
                <BsThreeDotsVertical className='cursor-pointer text-xl text-pink-600 mt-2' />
            </div>
            {/* ///////////--Content */}
            <div className="flex flex-col gap-y-5">
                <p className='sm:text-md text-sm text-black/60'>Suspendisse vitea mi a nunc. Sed amet</p>
                <div className="flex gap-x-3 sm:gap-x-5">
                    {files.map((file, i) => {
                        return (
                            <div className={`sm:py-5 sm:px-7 py-3 px-3 sm:text-2xl text-xl border border-black/20 rounded-lg ${file.color}`} key={i}>
                                {file.icon}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex justify-between my-4 text-sm sm:text-lg">
                <div className="flex sm:gap-x-3 gap-x-2 bg-gradient-to-r from-sky-600 to-pink-600 bg-clip-text text-transparent">
                    <p>React</p>
                    <p>Reply</p>
                </div>
                <div className="flex sm:gap-x-5 gap-x-3">
                    <p className='sm:text-md text-sm text-black/60'>16 sept 2022</p>

                    <span className='sm:flex hidden gap-x-1 items-center text-pink-600'><FaShare className=' text-md' /> 0</span>
                </div>
            </div>

        </div>
    )
}

export default Post2