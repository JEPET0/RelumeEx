"use client";

import React from "react";

export function Layout194() {
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
              Nuestra historia: Innovación y compromiso con la inteligencia
              artificial.
            </h3>
            <p className="md:text-md">
              Desde nuestros inicios, hemos estado a la vanguardia de la
              tecnología de IA, ofreciendo soluciones que transforman negocios.
              Nuestra misión es empoderar a las empresas a través de la
              inteligencia artificial, guiados por valores de innovación,
              integridad y excelencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
