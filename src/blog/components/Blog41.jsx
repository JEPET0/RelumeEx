"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Blog41() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Blog</p>
              <h2 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
                Últimas Entradas del Blog
              </h2>
              <p className="md:text-md">
                Descubre nuestras publicaciones más recientes.
              </p>
            </div>
          </div>
          <div className="hidden md:flex">
            <Button title="Ver todo" variant="secondary">
              Ver todo
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div>
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-[3/2] size-full rounded-image object-cover"
                />
              </div>
            </a>
            <a
              href="#"
              className="mr-4 mb-2 inline-block max-w-full text-sm font-semibold"
            >
              Tecnología
            </a>
            <a href="#" className="mb-2 block max-w-full">
              <h5 className="text-xl font-bold md:text-2xl">
                Innovaciones en Inteligencia Artificial
              </h5>
            </a>
            <p>Explora cómo la IA transforma diferentes industrias.</p>
            <div className="mt-6 flex items-center">
              <div className="mr-4 shrink-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder avatar 3"
                  className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="text-sm font-semibold">Juan Pérez</h6>
                <div className="flex items-center">
                  <p className="text-sm">11 Ene 2022</p>
                  <span className="mx-2">•</span>
                  <p className="text-sm">5 min lectura</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-[3/2] size-full rounded-image object-cover"
                />
              </div>
            </a>
            <a
              href="#"
              className="mr-4 mb-2 inline-block max-w-full text-sm font-semibold"
            >
              Investigación
            </a>
            <a href="#" className="mb-2 block max-w-full">
              <h5 className="text-xl font-bold md:text-2xl">
                El Futuro de la IA
              </h5>
            </a>
            <p>
              Reflexiones sobre las tendencias futuras en inteligencia
              artificial.
            </p>
            <div className="mt-6 flex items-center">
              <div className="mr-4 shrink-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder avatar 3"
                  className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="text-sm font-semibold">Ana Gómez</h6>
                <div className="flex items-center">
                  <p className="text-sm">15 Feb 2022</p>
                  <span className="mx-2">•</span>
                  <p className="text-sm">4 min lectura</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-[3/2] size-full rounded-image object-cover"
                />
              </div>
            </a>
            <a
              href="#"
              className="mr-4 mb-2 inline-block max-w-full text-sm font-semibold"
            >
              Desarrollo
            </a>
            <a href="#" className="mb-2 block max-w-full">
              <h5 className="text-xl font-bold md:text-2xl">
                Aplicaciones Prácticas de IA
              </h5>
            </a>
            <p>Casos de éxito en la implementación de IA.</p>
            <div className="mt-6 flex items-center">
              <div className="mr-4 shrink-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder avatar 3"
                  className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="text-sm font-semibold">Luis Martínez</h6>
                <div className="flex items-center">
                  <p className="text-sm">20 Mar 2022</p>
                  <span className="mx-2">•</span>
                  <p className="text-sm">6 min lectura</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <Button title="Ver todo" variant="secondary" className="mt-10">
            Ver todo
          </Button>
        </div>
      </div>
    </section>
  );
}
