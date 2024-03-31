import Image from "next/image"
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosPricetags } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";
import { IoCalendarNumber } from "react-icons/io5";

const btns = [
    { name: "Features", bg: "bg-red-600" },
    { name: "Job", bg: "bg-red-600" },
    { name: "Public", bg: "bg-purple-600" },
    { name: "Gernel", bg: "bg-purple-600" },
    { name: "Hiring", bg: "bg-purple-600" },
    { name: "Full Time", bg: "bg-purple-600" },
    { name: "On Site", bg: "bg-purple-600" },
]
const Card = ({ image, title }) => {
    return (
        <div className="w-[300px] h-[450px] rounded-xl flex flex-col gap-3 border bg-white overflow-hidden">
            <Image
                src={image}
                alt="PostIMg"
                height={200}
                width={250}
                className="w-full h-[180px] object-cover hover:scale-110 transition-all cursor-pointer" />
            <div className="border-b px-4">
                <h1 className="font-semibold">{title}</h1>
            </div>
            <div className="border-b pb-1 px-2 items-center justify-center 
             flex gap-3 text-pink-600">
                <div className="flex gap-1 items-center">
                    <IoIosPricetags />
                    <p className="text-sm">$1k</p>
                </div>
                <div className="flex gap-1 items-center">
                    <BsFillPeopleFill />
                    <p className="text-sm">1.2k</p>
                </div>
                <div className="flex gap-1 items-center">
                    <CiShare2 />
                    <p className="text-sm">12k</p>
                </div>
                <div className="flex gap-1 items-center">
                    <IoCalendarNumber />
                    <p className="text-sm">Monthly</p>
                </div>
            </div>
            <div className="flex gap-2 flex-wrap px-2 border-b pb-3">
                {btns.map((btn, i) => {
                    return (
                        <button key={i} className={`text-white px-4 py-2 text-[9px] rounded-full ${btn.bg}`}>{btn.name}</button>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Card