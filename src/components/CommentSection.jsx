import Image from "next/image"
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaCopy } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { PostContent } from ".";
const CommentSection = () => {
    return (
        <div className='bg-white border rounded-lg'>
            {/* /////--Profile pic */}
            <div className="">
                <div className="flex gap-x-3 p-5 items-center">

                    <div className="w-[50px] h-[50px] border border-green-400 overflow-hidden rounded-full p-1">
                        <Image
                            src="/assets/profile.png"
                            alt='profile image'
                            width={50}
                            height={50} />

                    </div>
                    <form >
                        <input type="text" name="name" placeholder='Please write your comment here...' className='text-black border py-2 px-3 sm:w-[700px] w-[200px] rounded-lg outline-none' />
                    </form>
                </div>
                <div className="flex justify-between items-center px-5 my-3">
                    <p className='text-sm text-black/60'>0/5k Characters</p>
                    <div className="flex gap-x-3 items-center text-xl">
                        <MdOutlineEmojiEmotions className="text-pink-600 cursor-pointer" />
                        <CiMicrophoneOn className="text-pink-600 cursor-pointer" />
                        <FaCopy className="text-pink-600 cursor-pointer" />
                        <button className="flex py-2 px-3 bg-slate-400 text-sm rounded-full bg-gradient-to-bl from-rose-600 to-blue-600 text-white gap-x-1">Send <IoIosSend className="text-lg" /></button>
                    </div>
                </div>
            </div>

            <div className="">
                {/* ///////---PostContent */}
                <PostContent />
            </div>

        </div>
    )
}

export default CommentSection