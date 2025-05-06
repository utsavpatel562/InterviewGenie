import React from "react";

function HeroSection() {
  return (
    <>
      <section className="py-28">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-sm text-blue-500 font-medium">
              Trusted by 200+ aspiring professionals
            </h1>
            <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
              Master interviews with AI-powered, voice driven mock sessions
            </h2>
            <p>
              Refine your answers, build confidence, and succeed in real-time
              simulated interviews designed to match your dream role.
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a
                href="#"
                className="block py-2 px-4 text-center text-white font-medium bg-blue-500 duration-150 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-lg hover:shadow-none"
              >
                Learn More
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
              >
                Get access
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <img
              src="/hero_section_img.jpg"
              className="md:rounded-tl-[108px] md:rounded-br-[108px] border-2"
              alt=""
            />
          </div>
        </div>
        <div className="mt-14 px-4 md:px-8">
          <p className="text-center text-sm text-gray-700 font-semibold">
            POWERED AND DEVELOPED BY
          </p>
          <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
            <img src="/next.svg" alt="nextjs" className="md:w-[12%]" />
            <img src="/supabase.svg" alt="supabase" className="md:w-[12%]" />
            <img src="/react.svg" alt="reactjs" className="md:w-[12%]" />
            <img src="/express.svg" alt="express" className="md:w-[12%]" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
