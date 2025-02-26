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
import { Link } from "lucide-react";

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
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>

                  <CardFooter className="flex justify-between">
                    <Link
                      href="https://github.com/fernandoaneto2"
                      className=""
                      target="_blank"
                    >
                      GitHub
                      <Button variant="outline"></Button>
                    </Link>

                    <Button>Deploy</Button>
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
