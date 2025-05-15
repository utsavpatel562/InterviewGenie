import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
function login() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div
          className="flex flex-col items-center rounded-2xl border p-8"
          style={{
            boxShadow: "0px 0px 54px 0px rgba(0,0,0,0.1)",
          }}
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={300}
            height={100}
            className="w-[220px]"
          />
          <div className="flex flex-col items-center">
            <Image
              src={"/img4.png"}
              alt="login"
              width={600}
              height={400}
              className="w-[400px] h-[250px] object-contain rounded-2xl my-4 border"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
              }}
            />
            <h2 className="text-2xl font-bold text-center text-slate-900">
              Welcome to InterviewGenie
            </h2>
            <p className="text-gray-500 font-semibold text-center">
              Sign In with Google Authentication
            </p>
            <Button className="flex w-full hover:bg-slate-900 items-center my-3 cursor-pointer bg-slate-800">
              Login with Google
              <FcGoogle />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
