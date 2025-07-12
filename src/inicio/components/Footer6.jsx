"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer6() {
  const formState = useForm();
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="lg:flex lg:items-start lg:justify-between">
          <div className="rb-6 mb-6 lg:mb-0">
            <h1 className="font-semibold md:text-md">
              Únete a nuestro boletín
            </h1>
            <p>Recibe las últimas novedades y actualizaciones.</p>
          </div>
          <div className="max-w-md lg:min-w-[25rem]">
            <form
              className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4"
              onSubmit={formState.handleSubmit}
            >
              <Input
                id="email"
                type="email"
                placeholder="Ingresa tu correo"
                value={formState.email}
                onChange={formState.handleSetEmail}
              />
              <Button title="Suscribirse" variant="secondary" size="sm">
                Suscribirse
              </Button>
            </form>
            <p className="text-xs">
              Al suscribirte, aceptas nuestra Política de Privacidad.
            </p>
          </div>
        </div>
        <div className="py-12 md:py-18 lg:py-20">
          <div className="h-px w-full bg-black" />
        </div>
        <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 md:mb-18 md:gap-y-12 lg:mb-20 lg:grid-cols-6">
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Columna Uno</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Uno
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Dos
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Tres
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Cuatro
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Cinco
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Columna Dos</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Seis
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Siete
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Ocho
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Nueve
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Diez
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Columna Tres</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Once
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Doce
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Trece
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Catorce
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Quince
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Columna Cuatro</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Dieciséis
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Diecisiete
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Dieciocho
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Diecinueve
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Veinte
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Columna Cinco</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Veintiuno
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Veintidós
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Veintitrés
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Veinticuatro
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Veinticinco
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Columna Seis</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Veintiséis
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Veintisiete
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Veintiocho
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Veintinueve
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Enlace Treinta
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col items-start pt-6 pb-4 text-sm sm:flex-row sm:items-center sm:justify-between md:pt-8 md:pb-0">
          <a href="#" className="mb-6 sm:mb-0">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="Logo image"
            />
          </a>
          <p className="text-sm">© 2024 Relume. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
