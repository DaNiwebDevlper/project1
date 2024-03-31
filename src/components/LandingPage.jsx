import Image from "next/image"
const buttons = [
    { name: "Features", bg: "bg-red-500" },
    { name: "Features", bg: "bg-red-500" },
    { name: "Features", bg: " bg-purple-700" },
    { name: "Features", bg: " bg-purple-700" },
    { name: "Features", bg: " bg-purple-700" },
    { name: "Features", bg: " bg-purple-700" },
    { name: "Features", bg: " bg-purple-700" },
    { name: "Features", bg: " bg-purple-700" },
]

const socialBtn = [
    { name: "React", bg: "bg-gradient-to-bl from-rose-600 to-blue-600" },
    { name: "Apply", bg: "bg-gradient-to-bl from-rose-600 to-blue-600" },
    { name: "Share", bg: " bg-gradient-to-bl from-rose-600 to-blue-600" },
    { name: "Rate", bg: " bg-gradient-to-bl from-rose-600 to-blue-600" },
    { name: "Save", bg: " bg-gradient-to-bl from-rose-600 to-blue-600" },
    { name: "Report", bg: " bg-gradient-to-bl from-rose-600 to-blue-600" },
    { name: "Report", bg: " bg-gradient-to-bl from-rose-600 to-blue-600" },

]
const LandingPage = () => {
    return (
        <div className='bg-gradient-to-r from-blue-800 to-rose-700 min-h-screen flex flex-col justify-between text-white px-3'>
            {/* ///--profile--//// */}
            <div className="pt-5 pl-5 flex gap-3 items-center">
                <div className="rounded-full w-[50px] h-[50px]   bg-white overflow-hidden p-2 border-2 border-green-500">
                    <Image src="/assets/profile.png"
                        alt="profile"
                        width={50}
                        height={50} />
                </div>
                <h1>Dr.Sofia Ibrahim</h1>
            </div>

            {/* ///--title */}
            <div className="flex flex-col gap-5">
                <div className="py-5">
                    <p className='sm:text-xl text-sm'>#ASS-PMP-JOB-229 | Public | 15-sept-2023 11:30pm | 1k |</p>
                    <div className="flex flex-wrap gap-5 border-t p-5 border-b">
                        {buttons.map((button, i) => {
                            return (
                                <div className={`sm:px-5 px-3 py-2 ${button.bg} rounded-3xl text-sm sm:text-lg`} key={i}>{button.name}</div>
                            )
                        })}
                    </div>
                </div>

                {/* /////--text */}

                <div className="">
                    <h1 className='sm:text-4xl text-2xl font-bold font-mono'>This will be job name & it can be over 2 lines based on your needs</h1>
                </div>

                <div className="flex gap-5 justify-center border-t p-5 flex-wrap">
                    {socialBtn.map((button, i) => {
                        return (
                            <button className={`${button.bg} rounded-full sm:text-lg text-sm text-white px-5 py-2`} key={i}>{button.name}</button>
                        )
                    })}

                </div>
            </div>

        </div>
    )
}

export default LandingPage