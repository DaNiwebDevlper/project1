import { BsPeopleFill } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineManageSearch } from "react-icons/md";
import { GiSpeaker } from "react-icons/gi";
import { MdGroups } from "react-icons/md";



const catagoryList = [
    { name: "Gernel", followers: "1.7k" },
    { name: "Gernel", followers: "1.7k" },
    { name: "Gernel", followers: "1.7k" },
    { name: "Gernel", followers: "1.7k" },
    { name: "Gernel", followers: "1.7k" },
    { name: "Gernel", followers: "1.7k" },
]

const socialLinks = [
    { icon: <BsPeopleFill />, num: 229 },
    { icon: <MdGroups />, num: 25 },
    { icon: <MdOutlineManageSearch />, num: "100%" },
    { icon: <GiSpeaker />, num: 44 }
]

const Sidebar = () => {
    return (
        <div className=" w-[30%] hidden  p-5 sm:flex flex-col gap-4 h-fit">

            {/* //////--Video Player */}
            <div className="w-[90%] rounded-lg overflow-hidden">

                <div className="rounded overflow-hidden">
                    <iframe
                        width="260"
                        height="180"
                        src="https://www.youtube.com/embed/oMQIgZPf5Ng?si=GnACWA7GBk4REomA"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-[200px]"
                    ></iframe>

                </div>
            </div>
            {/* /////////---Catagory List */}
            <div className="w-[90%] bg-white min-h-[60%] rounded-lg overflow-hidden text-white border shadow-sm">
                <h1 className='py-3 px-5 text-lg font-semibold bg-gradient-to-l from-blue-800 to-blue-500'>catagories</h1>
                <div className="text-black flex gap-3 flex-col p-2">
                    {catagoryList.map((list, i) => {
                        return (
                            <div className="flex justify-between px-2 bg-slate-100 py-2 rounded-lg " key={i}>
                                <p>{list.name}</p>
                                <p className="text-pink-600">{list.followers}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="text-center py-3 border-t mt-2 h-fit">
                    <button className='bg-gradient-to-bl from-rose-600 to-blue-600 py-2 w-[80%] rounded-full'>Discover all</button>
                </div>
            </div>

            {/* //////////---Top Employees */}
            <div className="w-[90%] bg-white min-h-[60%] rounded-lg overflow-hidden text-white border shadow-sm">
                <h1 className='py-3 px-5 text-lg font-semibold bg-gradient-to-l from-blue-800 to-blue-500'>Top 10 V-employees</h1>



                <div className="bg-slate-200/60 rounded-lg text-black m-3">
                    <div className="flex gap-2 items-center justify-between p-3">

                        {/* ////--profile-pic */}
                        <div className="flex gap-2 ">
                            <div className="bg-gradient-to-bl from-rose-600 to-blue-600 w-[50px] h-[50px] rounded-full flex justify-center items-center text-lg">
                                <BsPeopleFill className="text-white" />
                            </div>
                            <div className="text-sm mt-1">
                                <h2 className="font-semibold">Entity Title</h2>
                                <p className="text-black/50">Entity Descriptions</p>
                            </div>
                        </div>
                        {/* /////--Notification icon */}
                        <div>
                            <IoMdInformationCircleOutline className="text-2xl text-pink-600" />
                        </div>

                    </div>
                    {/* ////////---Social details */}
                    <div className="flex gap-2 items-center border-t p-2">
                        {socialLinks.map((links, i) => {
                            return (
                                <div className="flex gap-1 text-sm" key={i}>
                                    <p className="text-lg text-pink-600">{links.icon}</p>

                                    <p className="">{links.num}</p>
                                </div>
                            )
                        })}



                    </div>
                </div>
                <div className="bg-slate-200/60 rounded-lg text-black m-3">
                    <div className="flex gap-2 items-center justify-between p-3">

                        {/* ////--profile-pic */}
                        <div className="flex gap-2 ">
                            <div className="bg-gradient-to-bl from-rose-600 to-blue-600 w-[50px] h-[50px] rounded-full flex justify-center items-center text-lg">
                                <BsPeopleFill className="text-white" />
                            </div>
                            <div className="text-sm mt-1">
                                <h2 className="font-semibold">Entity Title</h2>
                                <p className="text-black/50">Entity Descriptions</p>
                            </div>
                        </div>
                        {/* /////--Notification icon */}
                        <div>
                            <IoMdInformationCircleOutline className="text-2xl text-pink-600" />
                        </div>

                    </div>
                    {/* ////////---Social details */}
                    <div className="flex gap-2 items-center border-t p-2">
                        {socialLinks.map((links, i) => {
                            return (
                                <div className="flex gap-1 text-sm" key={i}>
                                    <p className="text-lg text-pink-600">{links.icon}</p>

                                    <p className="">{links.num}</p>
                                </div>
                            )
                        })}



                    </div>
                </div>
                <div className="bg-slate-200/60 rounded-lg text-black m-3">
                    <div className="flex gap-2 items-center justify-between p-3">

                        {/* ////--profile-pic */}
                        <div className="flex gap-2 ">
                            <div className="bg-gradient-to-bl from-rose-600 to-blue-600 w-[50px] h-[50px] rounded-full flex justify-center items-center text-lg">
                                <BsPeopleFill className="text-white" />
                            </div>
                            <div className="text-sm mt-1">
                                <h2 className="font-semibold">Entity Title</h2>
                                <p className="text-black/50">Entity Descriptions</p>
                            </div>
                        </div>
                        {/* /////--Notification icon */}
                        <div>
                            <IoMdInformationCircleOutline className="text-2xl text-pink-600" />
                        </div>

                    </div>
                    {/* ////////---Social details */}
                    <div className="flex gap-2 items-center border-t p-2">
                        {socialLinks.map((links, i) => {
                            return (
                                <div className="flex gap-1 text-sm" key={i}>
                                    <p className="text-lg text-pink-600">{links.icon}</p>

                                    <p className="">{links.num}</p>
                                </div>
                            )
                        })}



                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sidebar