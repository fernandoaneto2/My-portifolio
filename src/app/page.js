import React from "react";
import style from "./index.module.css";
import LoaderText from "./Components/loading-text/loader";
import Image from "next/image";
import fotopersonagem from "../../public/foto-personagem.png";

const HomePage = () => {
  return (
    <div
      className={`${style.container} flex flex-shrink-0 items-center justify-center place-items-center py-20`}
    >
      <Image
        src={fotopersonagem}
        alt="Foto perfil"
        width={200}
        height={200}
        className="w-64 h-64 rounded-full border-4 shadow-emerald-500 shadow-2xl border-neutral-700 object-cover"
      />
      <div className="flex flex-row p-4">
        <LoaderText />
      </div>
    </div>
  );
};

export default HomePage;
