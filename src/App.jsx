import "./App.css";
import React, { useState } from "react";
// import Profile from "./assets/profile.png";
import Upload from "./assets/upload-icon.png";
import { IoIosArrowForward } from "react-icons/io";
import BackgroundVideo from "./assets/videoback.mp4";
import Navbar from "./components/Navbar";

function App() {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termsAccepted) {
      // Handle form submission and payment logic here
      alert("Form submitted and payment processed!");
    } else {
      alert("Please accept the terms and conditions.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-20 w-full h-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="fixed top-0 left-0 w-full h-full object-cover"
        >
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Main Content */}
        <div className="relative z-10 w-full h-auto flex flex-col justify-center items-center px-4 md:my-0 my-10 md:px-0">
          <h3 className="m-2 text-white font-medium text-center">
            Register Yourself with{" "}
            <span className="text-[#5CE1E6]">CYBER HUNTER CLUB</span>
          </h3>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full"
          >
            <div className="flex flex-col md:flex-row justify-evenly items-center w-full">
              {/* <img src={Profile} alt="" className="h-24 w-24 md:h-32 md:w-32" /> */}
              <div className="flex flex-col justify-center mt-4 md:mt-0 md:m-8 items-center md:items-start">
                <h2 className="text-lg text-white text-center md:text-left">
                  UPLOAD PHOTO
                </h2>
                <button className="bg-[#5CE1E6] font-medium rounded-3xl flex justify-evenly items-center px-4 py-2 mt-2">
                  <img src={Upload} alt="" className="h-6" />
                  Click Here
                </button>
              </div>
            </div>

            {/* 1st Row */}
            {/* 1st row */}
            <div className="w-full flex flex-col md:flex-row justify-evenly items-center">
              <div className="relative w-10/12 md:w-3/12">
                <IoIosArrowForward className="absolute left-2 top-3 text-[#5CE1E6] h-8 w-8" />
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  required
                  className="w-full m-4 pl-10 md:pl-4 placeholder:font-bold text-white bg-transparent border-[#7CAC5B] border-b-4 border-0"
                />
              </div>
              <div className="relative w-10/12 md:w-3/12">
                <IoIosArrowForward className="absolute left-2 top-3 text-[#5CE1E6] h-8 w-8" />
                <select
                  required
                  className="w-full m-4 pl-10 md:pl-4 font-bold text-gray-500 bg-transparent border-[#7CAC5B] border-b-4 border-0"
                >
                  <option value="Enter Your">Enter Your Section</option>
                  <option value="Section 1">A</option>
                  <option value="Section 2">B</option>
                  <option value="Section 3">C</option>
                  <option value="Section 4">D</option>
                  <option value="Section 5">E</option>
                  <option value="Section 6">F</option>
                  <option value="Section 7">G</option>
                  <option value="Section 8">H</option>
                  <option value="Section 9">I</option>
                  <option value="Section 10">J</option>
                  <option value="Section 11">K</option>
                  <option value="Section 12">Other</option>
                </select>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-evenly items-center">
              <div className="relative w-10/12 md:w-3/12">
                <IoIosArrowForward className="absolute left-2 top-3 text-[#5CE1E6] h-8 w-8" />
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  required
                  className="w-full m-4 pl-10 md:pl-4 placeholder:font-bold text-white bg-transparent border-[#7CAC5B] border-b-4 border-0"
                />
              </div>
              <div className="relative w-10/12 md:w-3/12">
                <IoIosArrowForward className="absolute left-2 top-3 text-[#5CE1E6] h-8 w-8" />
                <input
                  type="text"
                  placeholder="Q-Id"
                  required
                  className="w-full m-4 pl-10 md:pl-4 placeholder:font-bold text-white bg-transparent border-[#7CAC5B] border-b-4 border-0"
                />
              </div>
            </div>

            {/* 2nd row */}
            <div className="w-full flex flex-col md:flex-row justify-evenly items-center">
              <div className="relative w-10/12 md:w-3/12">
                <IoIosArrowForward className="absolute left-2 top-3 text-[#5CE1E6] h-8 w-8" />
                <select
                  required
                  className="w-full m-4 pl-10 md:pl-4 font-bold text-gray-500 bg-transparent border-[#7CAC5B] border-b-4 border-0"
                >
                  <option value="">Course</option>
                  <option value="Course 1">Btech</option>
                  <option value="Course 2">BCA</option>
                  <option value="Course 3">MCA</option>
                  <option value="Course 4">Other</option>
                </select>
              </div>
              <div className="relative w-10/12 md:w-3/12">
                <IoIosArrowForward className="absolute left-2 top-3 text-[#5CE1E6] h-8 w-8" />
                <select
                  required
                  className="w-full m-4 pl-10 md:pl-4 font-bold text-gray-500 bg-transparent border-[#7CAC5B] border-b-4 border-0"
                >
                  <option value="">Branch</option>
                  <option value="Branch 1">CSE</option>
                  <option value="Branch 2">CSCQ</option>
                  <option value="Branch 3">AIML</option>
                  <option value="Branch 4">FSD</option>
                  <option value="Branch 5">DS</option>
                  <option value="Branch 6">MAWT</option>
                  <option value="Branch 7">Other</option>
                </select>
              </div>
            </div>

            {/* 3rd row */}
            <div className="w-full flex flex-col md:flex-row justify-evenly items-center">
              <div className="relative w-10/12 md:w-3/12">
                <IoIosArrowForward className="absolute left-2 top-3 text-[#5CE1E6] h-8 w-8" />
                <select
                  required
                  className="w-full m-4 pl-10 md:pl-4 font-bold text-gray-500 bg-transparent border-[#7CAC5B] border-b-4 border-0"
                >
                  <option value="">Session</option>
                  <option value="Session 1">2022-23</option>
                  <option value="Session 2">2023-24</option>
                  <option value="Session 3">2024-25</option>
                  <option value="Session 4">Other</option>
                </select>
              </div>
              <div className="relative w-10/12 md:w-3/12">
                <IoIosArrowForward className="absolute left-2 top-3 text-[#5CE1E6] h-8 w-8" />
                <select
                  required
                  className="w-full m-4 pl-10 md:pl-4 font-bold text-gray-500 bg-transparent border-[#7CAC5B] border-b-4 border-0"
                >
                  <option value="">Gender</option>
                  <option value="Gender 1">MALE</option>
                  <option value="Gender 2">FEMALE</option>
                  <option value="Gender 3">Other</option>
                </select>
              </div>
            </div>

            {/* 4th row */}
            <div className="w-full flex flex-col md:flex-row justify-evenly items-center">
              <div className="relative w-10/12 md:w-3/12">
                <IoIosArrowForward className="absolute left-2 top-3 text-[#5CE1E6] h-8 w-8" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full m-4 pl-10 md:pl-4 placeholder:font-bold text-white bg-transparent border-[#7CAC5B] border-b-4 border-0"
                />
              </div>
              <div className="relative w-10/12 md:w-3/12">
                <IoIosArrowForward className="absolute left-2 top-3 text-[#5CE1E6] h-8 w-8" />
                <input
                  type="date"
                  placeholder="Date of Birth"
                  required
                  className="w-full m-4 pl-10 md:pl-4 font-bold text-gray-500 bg-transparent border-[#7CAC5B] border-b-4 border-0"
                />
              </div>
            </div>

            {/* Additional Inputs */}
            <div className="w-full flex flex-col items-center">
              <div className="relative w-10/12">
                <IoIosArrowForward className="absolute left-2 top-3 text-[#5CE1E6] h-8 w-8" />
                <input
                  type="text"
                  placeholder="Search and Select Interest"
                  required
                  className="w-full m-4 pl-10 placeholder:font-bold text-white bg-transparent border-[#7CAC5B] border-b-4 border-0"
                />
              </div>
              <div className="relative w-10/12">
                <IoIosArrowForward className="absolute left-2 top-3 text-[#5CE1E6] h-8 w-8" />
                <input
                  type="text"
                  placeholder="Search and Select Your Skill"
                  required
                  className="w-full m-4 pl-10 placeholder:font-bold text-white bg-transparent border-[#7CAC5B] border-b-4 border-0"
                />
              </div>
            </div>
            <div className="w-1/2 m-4 items-center">
              <h2 className="text-[#5CE1E6] font-semibold text-3xl">Payment</h2>
            </div>
            <div className="w-full m-2 flex items-center justify-center">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className="mr-2 p-3"
              />
              <label htmlFor="terms" className="w-3/4 md:w-2/4 text-white">
                <div className="border-2 lg:text-base text-xs rounded-3xl backdrop-blur-lg p-4">
                  <h3 className="font-bold ">Registration for club :</h3>
                  <ul className="list-disc pl-4">
                    <li>Be the part of cyber hunter club</li>
                    <li>Experince Live latest technology classed and practical projects</li>
                  </ul>
                </div>
                <div className="">
                  <h3 className="absolute md:left-[70%] left-[65%] md:top-[74%] top-[79%] z-10"><span className="text-[#7CAC5B]">Price :</span> 50</h3>
                </div>
              </label>
            </div>
            <div className="w-full m-2 flex items-center justify-center">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className="mr-2 p-3"
              />
              <label htmlFor="terms" className="w-3/4 md:w-2/4 text-white">
                <div className="border-2 lg:text-base text-xs rounded-3xl backdrop-blur-lg p-4">
                  <h3 className="font-bold ">For Club ID Card :</h3>
                  <ul className="list-disc pl-4">
                    <li>For Your Customize Cyber Hunter ID Card.</li>
                  </ul>
                </div>
                <div className="">
                  <h3 className="absolute md:left-[70%] left-[65%] md:top-[84%] top-[87%] z-10"><span className="text-[#7CAC5B]">Price :</span> 20</h3>
                </div>
              </label>
            </div>
            

            {/* Terms and Conditions */}
            <div className="w-full flex flex-col md:flex-row justify-center items-center mt-4">
              <div className="w-full md:w-full justify-center flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                  className="mr-2"
                />
                <label htmlFor="terms" className="text-white">
                  I accept the{" "}
                  <span className="text-[#5CE1E6] cursor-pointer">
                    terms and conditions
                  </span>
                </label>
              </div>
            </div>

            {/* Submit and Pay Button */}
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="bg-[#7CAC5B] text-white font-medium rounded-3xl px-6 py-3 mt-6"
              >
                Submit and Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
