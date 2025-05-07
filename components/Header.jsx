import React, { useState } from "react";

function Header() {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Home", path: "#" },
    { title: "Features", path: "#" },
    { title: "About Developer", path: "#" },
    { title: "Contact Me", path: "#" },
  ];
  return (
    <>
      <nav className="relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
        <div className="flex justify-between">
          <a href="#">
            <img src="/logo.png" width={200} height={50} alt="InterviewGenie" />
          </a>
          <button
            className="text-gray-500 outline-none md:hidden"
            onClick={() => setState(!state)}
          >
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${
            state
              ? "absolute inset-x-0 px-4 border-b bg-white md:border-none md:static"
              : "hidden"
          }`}
        >
          <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
            {navigation.map((item, idx) => (
              <li
                className="text-gray-500 hover:text-blue-400 hover:bg-blue-50 p-2 md:pr-4 md:pl-4 rounded-full"
                key={idx}
              >
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </div>
          <li className="order-2 py-5 md:py-0">
            <a
              href="#"
              className="py-2 px-5 rounded-lg font-medium text-white text-center bg-blue-500 hover:bg-blue-500 active:bg-blue-700 duration-150 block md:py-3 md:inline"
            >
              Get started
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
