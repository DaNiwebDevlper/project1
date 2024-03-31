import Link from "next/link"
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-rose-700">
      <div className="mx-auhref w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 border-b md:border-none">
            {/* //////////////---logo---//////////////// */}
            <Link href="/" className="flex gap-2 pb-4">
              <h1 className="text-2xl text-white font-bold">Logo</h1>
            </Link>
          </div>

          {/* //////////////---Footer Links---//////////////// */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div className="">
              <h2 className="mb-2 md:text-lg  font-semibold uppercase text-white">
                Many more
              </h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-2 hover:underline transition-all">
                  <Link href="/fee&fine"
                  >Fee & Fine</Link>
                </li>
                <li className="mb-2 hover:underline transition-all">
                  <Link href="/exams">Exams Scheduals</Link>
                </li>

                <li className="mb-2 hover:underline transition-all">
                  <Link href="/parking"
                  >Parking</Link>
                </li>
              </ul>
            </div>

            {/* ///////////---Many_More_SEction---/////////////////////// */}


            <div className="">
              <h2 className="mb-2 md:text-lg font-semibold uppercase text-white">
                Quick Access
              </h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-2 hover:underline transition-all">
                  <Link href="/">Download</Link>
                </li>
                <li className="mb-2 hover:underline transition-all">
                  <Link href="/timetable">Time Table</Link>
                </li>

                <li className="mb-2 hover:underline transition-all">
                  <Link href="meritList">Merit List</Link>
                </li>
              </ul>
            </div>


            <div>
              <h2 className="mb-4 md:text-lg font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-300 font-medium">
                <li className="mb-2">
                  <Link href="/" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auhref lg:my-8" />

        {/* //////////////---Socail Links---//////////////// */}

        <div className="flex sm:items-center sm:justify-between px-5 flex-wrap-reverse gap-5 md:gap-0">
          <span className="text-lg text-gray-500 sm:text-center font-semibold dark:text-gray-200">
            © 2023{" "}
            <Link href="https://flowbite.com/" className="hover:underline">
              DaNi
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {/* ///////////--YouTube--///////// */}
            <div className="w-[30px] rounded-full bg-white/90 h-[30px] flex justify-center items-center hover:bg-black/70 duration-300 cursor-pointer">
              <AiFillYoutube className="text-2xl text-rose-600" />
            </div>
            {/* ///////////--FaceBook--///////// */}
            <div className="w-[30px] rounded-full bg-white/90 h-[30px] flex justify-center items-center hover:bg-black/70 duration-300 cursor-pointer">
              <BsFacebook className="text-[22px] text-sky-900" />
            </div>

            {/* ///////////--Twitter--///////// */}
            <div className="w-[30px] rounded-full bg-white/90 h-[30px] flex justify-center items-center hover:bg-black/70 duration-300 cursor-pointer">
              <BsTwitter className="text-[22px] text-sky-500" />
            </div>
            {/* ///////////--Instagram--///////// */}
            <div className="w-[30px] rounded-full bg-white/90 h-[30px] flex justify-center items-center hover:bg-black/70 duration-300 cursor-pointer">
              <BsInstagram className="text-[20px] text-rose-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
