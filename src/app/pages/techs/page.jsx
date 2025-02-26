import React from "react";
import style from "./page.module.css";
import Carousel from "@/app/Components/carousel/carousel";

const TechsPage = () => {
  return (
    <div
      className={`${style.container} flex flex-col justify-center text-justify gap-4 px-4 sm:px-6 md:px-8`}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white ">
          Technologies
        </h1>
        <p className="text-xs md:text-base lg:text-lg text-justify text-white">
          I have developed projects using{" "}
          <span className="font-bold">
            {" "}
            HTML, CSS, JavaScript, React, Next.js, TypeScript, Tailwind,
            MongoDB, and Git{" "}
          </span>
          , applying best practices to create modern, responsive, and efficient
          applications.
        </p>
        <Carousel />
      </div>
    </div>
  );
};

export default TechsPage;
