"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout245() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Servicios</p>
              <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
                Explora Nuestros Innovadores Servicios de IA
              </h2>
            </div>
            <div>
              <p className="md:text-md">
                Ofrecemos una gama de servicios de inteligencia artificial
                diseñados para optimizar tu negocio. Desde chatbots hasta
                análisis de datos, cada solución está adaptada a tus necesidades
                específicas. Descubre cómo la IA puede transformar tu forma de
                trabajar.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Desarrollo de Chatbots Personalizados
              </h3>
              <p>Creamos chatbots que mejoran la atención al cliente.</p>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Análisis Predictivo para Toma de Decisiones
              </h3>
              <p>Utilizamos IA para prever tendencias y comportamientos.</p>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Automatización de Procesos Empresariales
              </h3>
              <p>Optimiza tus operaciones con soluciones automatizadas.</p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Button variant="secondary">Descubre</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Contáctanos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
