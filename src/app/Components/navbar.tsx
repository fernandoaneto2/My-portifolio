// import React from "react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// interface NavBarProps {
//   href: string;
//   nome: React.ReactNode;
// }

// const OptionsNavBar = ({ href, nome }: NavBarProps) => {
//   return (
//     <Link href={href}>
//       <Button>{nome}</Button>
//     </Link>
//   );
// };

// export default OptionsNavBar;
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FotoDePerfil from "../../../public/fotoperfil.png";
import { useState } from "react";
import React from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex md:flex-row p-2 justify-evenly box-border">
      <div className="w-10 h-10 md:w-16 md:h-16 flex-shrink-0">
        <Link href="/">
          <Image
            className="rounded-full"
            src={FotoDePerfil}
            alt="Imagem de Perfil"
            width={64} // Tamanho fixo para telas pequenas
            height={64} // Tamanho fixo para telas pequenas
            objectFit="cover" // Garante que a imagem mantenha suas proporções
          />
        </Link>
      </div>

      {/* Botão hamburger */}
      <button
        className="md:hidden flex flex-col space-y-1 absolute top-4 right-4 z-10"
        onClick={toggleMenu}
      >
        <div className="w-6 h-1 bg-black"></div>
        <div className="w-6 h-1 bg-black"></div>
        <div className="w-6 h-1 bg-black"></div>
      </button>

      {/* Menu de navegação */}
      <div
        className={`flex flex-col md:flex-row gap-4 items-center mt-4 md:mt-0 ${
          isOpen ? "block" : "hidden"
        } md:block w-full md:w-auto md:gap-6`}
      >
        <Link href="/pages/about">
          <Button>Sobre</Button>
        </Link>

        <Link href="/pages/contact">
          <Button>Contact</Button>
        </Link>

        <Link href="/pages/projects">
          <Button>Projects</Button>
        </Link>

        <Link href="/pages/techs">
          <Button>Techs</Button>
        </Link>
      </div>
    </div>
  );
}
