import React from "react";
import style from "./page.module.css";
import Carousel from "@/app/Components/carousel/carousel";

const TechsPage = () => {
  return (
    <div
      className={`${style.container} flex flex-col justify-center items-center text-center gap-4 px-4 sm:px-6 md:px-8 min-h-screen`}
    >
      <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-center text-white">
        Technologies
      </h1>
      <p className="text-xl sm:text-base md:text-lg lg:text-xl text-center text-white">
        I have developed projects using
        <span className="font-bold">
          {" "}
          HTML, CSS, JavaScript, React, Next.js, TypeScript, Tailwind, MongoDB,
          and Git
        </span>
        , applying best practices to create modern, responsive, and efficient
        applications.
      </p>
      <div className="w-full flex flex-col items-center justify-center">
        <Carousel />
      </div>
    </div>
  );
};

export default TechsPage;
