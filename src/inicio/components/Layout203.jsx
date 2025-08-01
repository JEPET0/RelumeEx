"use client";

import React from "react";

export function Layout203() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Potencia tu negocio con inteligencia artificial de última
              generación
            </h3>
            <p className="mb-6 md:mb-8 md:text-md">
              Nuestra tecnología de IA transforma datos en decisiones
              inteligentes. Mejora la eficiencia y la productividad de tu
              empresa.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Innovación constante
                </h6>
                <p>
                  Implementamos soluciones personalizadas que se adaptan a tus
                  necesidades específicas.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Resultados medibles
                </h6>
                <p>
                  Aumenta tus ingresos y reduce costos con nuestras herramientas
                  avanzadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
