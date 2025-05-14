import Image from "next/image";
import React from "react";

function login() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div>
          <Image
            src="/logo.png"
            alt="logo"
            width={300}
            height={100}
            className="w-[220px]"
          />
        </div>
      </div>
    </>
  );
}

export default login;
