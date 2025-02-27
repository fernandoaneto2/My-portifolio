"use client";
import React, { useState, useEffect } from "react";
import style from "./loader.module.css";

const LoaderText = () => {
  const [isCursorHidden, setIsCursorHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCursorHidden(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={style.loader}>
      <span
        className={`${style.loader_text} ${
          isCursorHidden ? style.hidden : style.cursor
        }`}
      >
        Hi,
      </span>
      <span
        className={`${style.loader_text} ${isCursorHidden ? style.cursor : ""}`}
      >
        {" "}
        I'm Fernando Amorim!
      </span>
    </div>
  );
};

export default LoaderText;
