import { BsPeopleFill } from 'react-icons/bs'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaShare } from "react-icons/fa";

const Post1 = () => {
    return (
        <div className="border border-black/20 rounded-lg w-full min-h-[70vh] px-5 py-2 relative">
            <div className="bg-gradient-to-bl from-rose-600 to-blue-600 sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] rounded-full flex justify-center items-center text-lg absolute left-1">
                <BsPeopleFill className="text-white" />
            </div>
            <div className=" flex justify-between ">
                <h2 className='sm:text-lg text-md font-semibold  py-2 pl-11'>Entity Name</h2>
                <BsThreeDotsVertical className='cursor-pointer text-xl text-pink-600 mt-2' />
            </div>
            {/* ///////////--Video Content */}
            <div className="rounded overflow-hidden my-5">
                <div className="">
                    <iframe
                        width="260"
                        height="180"
                        src="https://www.youtube.com/embed/oMQIgZPf5Ng?si=GnACWA7GBk4REomA"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-[100%] h-[400px]"
                    ></iframe>

                </div>
                <div className="flex justify-between items-center my-4 ">
                    <div className="flex sm:gap-x-3 gap-x-2 bg-gradient-to-r from-sky-600 to-pink-600 bg-clip-text text-transparent text-sm sm:text-lg">
                        <p>React</p>
                        <p>Reply</p>
                    </div>
                    <div className="flex sm:gap-x-5 gap-x-3 items-center">
                        <p className='sm:text-md text-sm text-black/60'>15 sept 2022 11:30 AM</p>

                        <span className='flex gap-x-1 items-center text-pink-600'><FaShare className=' sm:text-md text-sm' /> 0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post1