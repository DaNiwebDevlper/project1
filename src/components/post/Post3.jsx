import { BsPeopleFill } from 'react-icons/bs'
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image"
import { FaShare } from 'react-icons/fa';
const Post3 = () => {
    return (
        <div className="border border-black/20 rounded-lg w-full flex flex-col gap-5 px-9 py-2 relative">

            {/* ////////---Profile-pic */}
            <div className="bg-gradient-to-bl from-rose-600 to-blue-600 w-[50px] h-[50px] rounded-full flex justify-center items-center text-lg absolute left-5">
                <BsPeopleFill className="text-white" />
            </div>
            {/* ////////////---Name & menu btn */}
            <div className=" flex justify-between ">
                <h2 className='text-lg font-semibold  py-2 pl-11'>Dr.Ahmad</h2>
                <BsThreeDotsVertical className='cursor-pointer text-xl text-pink-600 mt-2' />
            </div>
            {/* ///////////--Content */}
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-5 m-5">
                <Image
                    src="/assets/postImg.png"
                    alt='PostImg'
                    width={200}
                    height={160}
                    className='rounded-lg overflow-hidden' />
                <Image
                    src="/assets/postImg.png"
                    alt='PostImg'
                    width={200}
                    height={160}
                    className='rounded-lg overflow-hidden' />
                <Image
                    src="/assets/postImg.png"
                    alt='PostImg'
                    width={200}
                    height={160}
                    className='rounded-lg overflow-hidden' />
                <Image
                    src="/assets/postImg.png"
                    alt='PostImg'
                    width={200}
                    height={160}
                    className='rounded-lg overflow-hidden' />
                <Image
                    src="/assets/postImg.png"
                    alt='PostImg'
                    width={200}
                    height={160}
                    className='rounded-lg overflow-hidden' />
                <Image
                    src="/assets/postImg.png"
                    alt='PostImg'
                    width={200}
                    height={160}
                    className='rounded-lg overflow-hidden' />
            </div>

            <div className="flex justify-between my-4 text-sm sm:text-lg">
                <div className="flex sm:gap-x-3 gap-x-2 bg-gradient-to-r from-sky-600 to-pink-600 bg-clip-text text-transparent">
                    <p>React</p>
                    <p>Reply</p>
                </div>
                <div className="flex items-center sm:gap-x-5 gap-x-3">
                    <p className='sm:text-md text-sm text-black/60'>30 march 2024</p>

                    <span className='sm:flex hidden gap-x-1 items-center text-pink-600'><FaShare className=' text-md' />5</span>
                </div>
            </div>

        </div>
    )
}

export default Post3