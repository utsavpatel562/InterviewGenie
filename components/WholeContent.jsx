import React from "react";
import { RiSpeakAiLine } from "react-icons/ri";
import { RiBarChartBoxAiLine } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { RiSave2Line } from "react-icons/ri";
import { TbAugmentedReality } from "react-icons/tb";
import { RiVoiceAiLine } from "react-icons/ri";
import { SiCodementor } from "react-icons/si";
import { GiProgression } from "react-icons/gi";
function WholeContent() {
  const features = [
    {
      icon: <TbAugmentedReality />,
      title: "Real-Time AI Feedback",
    },
    {
      icon: <RiVoiceAiLine />,
      title: "Voice-Powered Interviews",
    },
    {
      icon: <SiCodementor />,
      title: "Role-Specific Questions",
    },
    {
      icon: <GiProgression />,
      title: "Progress Tracking Dashboard",
    },
  ];
  return (
    <>
      <section className="py-1">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
              <img
                src="/model1.png"
                className="md:max-w-lg sm:rounded-lg md:block hidden"
                alt=""
              />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              {/*<h2 className="text-4xl font-bold text-gray-700 mb-6">
                How It Works
              </h2>
            */}
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl text-center md:text-left">
                Ace Your Interview in 3 Simple Steps
              </p>
              <h3 className="text-blue-500 font-semibold text-center md:text-left">
                Practice. Speak. Improve. Repeat.
              </h3>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                <div className="border-2 border-gray-200 hover:bg-slate-100 rounded-lg p-4">
                  <RiSpeakAiLine className="bg-blue-50 w-8 h-8 p-1 text-blue-400 rounded-sm border" />
                  <h2 className="text-lg font-bold text-slate-900 mt-2">
                    Speak your answers live
                  </h2>
                  <p className="text-gray-600">
                    Practice interviews just like the real thing, using your
                    voice, not buttons. Simulate actual conversation flow and
                    build confidence.
                  </p>
                </div>

                <div className="border-2 border-gray-200 hover:bg-slate-100 rounded-lg p-4">
                  <RiBarChartBoxAiLine className="bg-blue-50 w-8 h-8 p-1 text-blue-400 rounded-sm border" />
                  <h2 className="text-lg font-bold text-slate-900 mt-2">
                    AI evaluates in real-time
                  </h2>
                  <p className="text-gray-600">
                    Our smart AI listens and analyzes your answers as you speak.
                    It detects tone, clarity, relevance, and technical accuracy
                    instantly.
                  </p>
                </div>
                <div className="border-2 border-gray-200 hover:bg-slate-100 rounded-lg p-4">
                  <TbReportAnalytics className="bg-blue-50 w-8 h-8 p-1 text-blue-400 rounded-sm border" />
                  <h2 className="text-lg font-bold text-slate-900 mt-2">
                    Get instant feedback
                  </h2>
                  <p className="text-gray-600">
                    Receive actionable feedback in seconds after your response.
                    Know what went well - and where you can improve with
                    Aritifical Intelligence
                  </p>
                </div>
                <div className="border-2 border-gray-200 hover:bg-slate-100 rounded-lg p-4">
                  <RiSave2Line className="bg-blue-50 w-8 h-8 p-1 text-blue-400 rounded-sm border" />
                  <h2 className="text-lg font-bold text-slate-900 mt-2">
                    Save & review your interviews
                  </h2>
                  <p className="text-gray-600">
                    Access your full interview history, feedback, and progress
                    anytime. Track your growth and fine-tune your performance
                    over time.
                  </p>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex mt-2 mb-2 hover:bg-blue-50 p-2 rounded-full gap-x-1 items-center text-blue-500 hover:text-blue-600 duration-150 font-medium"
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
      <section className="relative py-28">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
          <div className="mt-12 lg:mt-0">
            <ul className="grid gap-8 sm:grid-cols-2">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-x-4 hover:bg-slate-100 p-2 rounded-md hover:shadow-xl"
                >
                  <div className="flex-none w-12 h-12 bg-gray-700 text-gray-50 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-700 font-semibold">
                      {item.title}
                    </h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="max-w-xl">
            <h3 className="text-slate-600 md:text-5xl font-semibold sm:text-4xl">
              Everything You Need to Succeed in One App
            </h3>
            <p className="mt-3 text-blue-500 font-semibold">
              From voice-based mock interviews to personalized AI feedback,
              InterviewGenie offers powerful tools to help you practice smarter.
            </p>
          </div>
        </div>
        <div
          className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]"
          style={{
            background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
          }}
        ></div>
      </section>
    </>
  );
}

export default WholeContent;
