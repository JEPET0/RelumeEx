"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Stats13() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Innovación</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Estadísticas Clave de Nuestra Empresa
            </h2>
            <p className="md:text-md">
              Con más de 10 años en el mercado, hemos completado más de 200
              proyectos exitosos. Nuestro compromiso con la satisfacción del
              cliente es nuestra máxima prioridad.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="secondary">Descubre</Button>
              <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                Contáctanos
              </Button>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-y-8 py-2 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:gap-x-8 lg:gap-y-12">
            <div className="w-full border-l-2 border-border-primary pl-8">
              <p className="mb-2 text-10xl leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                95%
              </p>
              <h3 className="text-md leading-[1.4] font-bold md:text-xl">
                Clientes Satisfechos
              </h3>
            </div>
            <div className="w-full border-l-2 border-border-primary pl-8">
              <p className="mb-2 text-10xl leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                200
              </p>
              <h3 className="text-md leading-[1.4] font-bold md:text-xl">
                Proyectos Completados
              </h3>
            </div>
            <div className="w-full border-l-2 border-border-primary pl-8">
              <p className="mb-2 text-10xl leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                10
              </p>
              <h3 className="text-md leading-[1.4] font-bold md:text-xl">
                Años en el Mercado
              </h3>
            </div>
            <div className="w-full border-l-2 border-border-primary pl-8">
              <p className="mb-2 text-10xl leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                100
              </p>
              <h3 className="text-md leading-[1.4] font-bold md:text-xl">
                Soluciones Implementadas
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
