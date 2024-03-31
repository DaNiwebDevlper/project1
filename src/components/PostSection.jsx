import { GiNotebook } from "react-icons/gi";
import { TiTick } from "react-icons/ti";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
// import { CommentSection } from ".";
import { CommentSection } from "../components/index"

const PostSection = () => {
    return (
        <div className=" text-black sm:w-[70%]">
            <div className=" border-b py-5">
                <div className="flex items-center p-5 gap-2">
                    <h1 className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent font-bold text-xl">Comments</h1>
                    <div className="h-[1px] w-[90%] bg-gradient-to-bl from-rose-600 to-blue-600"></div>
                </div>


                {/* ////////--Selector */}
                <div className="flex justify-between px-5">
                    <div className="flex sm:gap-x-5 gap-x-3 items-center">
                        <select className="bg-white w-[100px] h-[50px] sm:w-[200px] sm:p-3 p-2 border-none outline-none rounded-lg">
                            <option>
                                All
                            </option>
                        </select>


                        <div className="sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] rounded-full bg-gradient-to-bl from-rose-600 to-blue-600 flex items-center justify-center">
                            <GiNotebook className="text-xl text-white" />
                        </div>

                        <div className="sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] rounded-full bg-gradient-to-bl from-rose-600 to-blue-600 flex items-center justify-center">
                            <TiTick className="text-xl text-white" />
                        </div>
                    </div>

                    <div className="flex gap-x-4 items-center">
                        <div className="bg-gradient-to-bl from-rose-600 to-blue-600 sm:flex hidden text-white h-fit sm:text-2xl text-lg p-2 rounded-xl">
                            <BiUpArrowAlt />
                            <BiDownArrowAlt />
                        </div>
                        <button className="bg-purple-800 sm:px-5 sm:py-3 py-2 px-3
                         rounded-full text-white text-sm">100 Results</button>
                    </div>
                </div>
                <div className="p-5">
                    <CommentSection />
                </div>
            </div>
        </div>
    )
}

export default PostSection