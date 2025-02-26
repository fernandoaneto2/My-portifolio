import React from "react";
import style from "./page.module.css";

import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import fotodeperfil from "../../../../public/fotoperfil.png";

import Image from "next/image";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <div
      className={`${style.container} flex justify-center items-center min-h-screen`}
    >
      <Carousel className="w-3/4 max-w-lg">
        <CarouselContent className="flex">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className="w-3/4 md:w-1/2 lg:w-1/3">
              <div className="p-2">
                <Card className="shadow-lg">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">
                      <h1 className="flex flex-col justify-between items-center box-border py-4">
                        Titulo do Projeto
                      </h1>
                      <Image
                        src={fotodeperfil}
                        alt="Foto do Projeto"
                        width={250}
                        height={250}
                        className="rounded-2xl"
                      />
                    </span>
                  </CardContent>

                  <CardFooter className="flex justify-between">
                    <Link href="/" target="_blank">
                      <Button variant="outline" asChild>
                        <span>GitHub</span>
                      </Button>
                    </Link>
                    <Link href="/" target="_blank">
                      <Button>Deploy</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProjectsPage;
