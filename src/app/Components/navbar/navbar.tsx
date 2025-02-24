"use client";
import Link from "next/link";
import Image from "next/image";
import FotoDePerfil from "../../../../public/fotoperfil.png";
import React from "react";

export default function NavBar() {
  return (
    <div className="flex flex-wrap items-center justify-between bg-zinc-800 p-4">
      {/* Seção de imagem */}
      <div className="flex w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
        <Link href="/">
          <Image
            className="rounded-full"
            src={FotoDePerfil}
            alt="Imagem de Perfil"
            width={64}
            height={64}
            objectFit="cover"
          />
        </Link>
      </div>

      {/* Menu de navegação responsivo */}
      <div className="flex flex-wrap gap-2 md:gap-4 items-center flex-shrink-0 grid-cols-2">
        {["About", "Contact", "Projects", "Techs"].map((item) => (
          <Link key={item} href={`/pages/${item.toLowerCase()}`}>
            <button
              type="button"
              className="flex justify-center gap-2 items-center mx-auto shadow-xl text-sm md:text-lg px-3 md:px-4 py-1 md:py-2 bg-gray-50 backdrop-blur-md lg:font-semibold border-gray-50 rounded-full border-2 transition-all duration-300 hover:bg-emerald-500 hover:text-white"
            >
              {item}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
