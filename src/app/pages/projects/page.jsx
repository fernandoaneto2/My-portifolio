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

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";

import projects from "@/arrayProjects";

const ProjectsPage = () => {
  return (
    <div
      className={`${style.container} flex justify-center items-center min-h-screen`}
    >
      <Carousel className="w-3/4 max-w-lg">
        <CarouselContent className="flex">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="w-3/4 md:w-1/2 lg:w-1/3">
              <div className="p-2">
                <Card className="shadow-lg">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <h1 className="text-xl font-semibold text-center mb-4">
                      {project.title}
                    </h1>
                    <Image
                      src={project.image}
                      alt={`Imagem do ${project.title}`}
                      width={370}
                      height={50}
                      className="rounded-2xl"
                    />
                  </CardContent>

                  <CardFooter className="flex justify-between">
                    <Link href={project.github} target="_blank">
                      <Button variant="outline">GitHub</Button>
                    </Link>
                    <Link href={project.deploy} target="_blank">
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
