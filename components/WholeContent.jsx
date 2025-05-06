import React from "react";

function WholeContent() {
  return (
    <>
      <section className="py-1">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="md:max-w-lg sm:rounded-lg"
                alt=""
              />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <h2 className="text-4xl font-bold text-gray-700 mb-6">
                How It Works
              </h2>

              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Ace Your Interview in 3 Simple Steps
              </p>
              <h3 className="text-blue-500 font-semibold">
                Practice. Speak. Improve. Repeat.
              </h3>
              <div className="mt-6">
                <div className="bg-gray-100 border-1 border-gray-100 rounded-lg p-4">
                  <h2 className="text-lg font-bold text-slate-900">
                    Speak your answers live
                  </h2>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex gap-x-1 items-center text-blue-500 hover:text-blue-600 duration-150 font-medium"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WholeContent;
