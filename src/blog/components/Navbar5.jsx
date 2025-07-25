"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronDown, RxChevronRight } from "react-icons/rx";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar5() {
  const useActive = useRelume();
  return (
    <section
      id="relume"
      className="relative z-[999] flex w-full items-center justify-between border-b border-border-primary bg-background-primary lg:min-h-18 lg:px-[5%]"
    >
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="lg:flex">
          <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
            <a href="#">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                alt="Logo image"
              />
            </a>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={useActive.toggleMobileMenu}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: 8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenu}
                variants={{
                  open: { width: 0, transition: { duration: 0.1 } },
                  closed: {
                    width: "1.5rem",
                    transition: { delay: 0.3, duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: -8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
            </button>
          </div>
          <motion.div
            variants={{
              open: { height: "var(--height-open, 100dvh)" },
              close: { height: "var(--height-closed, 0)" },
            }}
            initial="close"
            exit="close"
            animate={useActive.animateMobileMenu}
            transition={{ duration: 0.4 }}
            className="overflow-auto px-[5%] lg:ml-6 lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
          >
            <a
              href="#"
              className="block py-3 text-md first:pt-7 lg:px-4 lg:py-6 lg:text-base first:lg:pt-6"
            >
              Inicio
            </a>
            <a
              href="#"
              className="block py-3 text-md first:pt-7 lg:px-4 lg:py-6 lg:text-base first:lg:pt-6"
            >
              Servicios
            </a>
            <a
              href="#"
              className="block py-3 text-md first:pt-7 lg:px-4 lg:py-6 lg:text-base first:lg:pt-6"
            >
              Contacto
            </a>
            <div
              onMouseEnter={useActive.openOnDesktopDropdownMenu}
              onMouseLeave={useActive.closeOnDesktopDropdownMenu}
            >
              <button
                className="flex w-full items-center justify-between gap-x-2 py-3 text-center text-md lg:w-auto lg:flex-none lg:justify-start lg:px-4 lg:py-6 lg:text-base"
                onClick={useActive.openOnMobileDropdownMenu}
              >
                <span>Más opciones</span>
                <motion.span
                  variants={{
                    rotated: { rotate: 180 },
                    initial: { rotate: 0 },
                  }}
                  animate={useActive.animateDropdownMenuIcon}
                  transition={{ duration: 0.3 }}
                >
                  <RxChevronDown />
                </motion.span>
              </button>
              <motion.div
                variants={{
                  open: {
                    visibility: "visible",
                    opacity: 1,
                    height: "var(--height-open, auto)",
                  },
                  close: {
                    visibility: "hidden",
                    opacity: "0",
                    height: "var(--height-close, 0)",
                  },
                }}
                initial="close"
                exit="close"
                animate={useActive.animateDropdownMenu}
                transition={{ duration: 0.3 }}
                className="top-full bottom-auto left-0 w-full max-w-full min-w-full overflow-hidden bg-background-primary lg:absolute lg:w-[100vw] lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
              >
                <div className="mx-auto flex size-full max-w-full items-center justify-between">
                  <div className="w-full lg:flex">
                    <div className="grid flex-1 gap-x-8 gap-y-6 py-4 pr-8 md:grid-cols-2 md:px-0 md:py-8 lg:py-8 lg:pr-8">
                      <div className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4">
                        <h4 className="text-sm leading-[1.3] font-semibold">
                          Grupo de Páginas
                        </h4>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                              alt="Icon 1"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Página Uno</h5>
                            <p className="hidden text-sm md:block">
                              Descubre nuestros servicios innovadores
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                              alt="Icon 2"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Página Dos</h5>
                            <p className="hidden text-sm md:block">
                              Conoce a nuestro equipo
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                              alt="Icon 3"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Página Tres</h5>
                            <p className="hidden text-sm md:block">
                              Testimonios de clientes satisfechos
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                              alt="Icon 4"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Página Cuatro</h5>
                            <p className="hidden text-sm md:block">
                              Últimas noticias y actualizaciones
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4">
                        <h4 className="text-sm leading-[1.3] font-semibold">
                          Más Páginas
                        </h4>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                              alt="Icon 5"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Página Cinco</h5>
                            <p className="hidden text-sm md:block">
                              Artículos sobre IA
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                              alt="Icon 6"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Página Seis</h5>
                            <p className="hidden text-sm md:block">
                              Novedades en tecnología
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                              alt="Icon 7"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Página Siete</h5>
                            <p className="hidden text-sm md:block">
                              Consejos y trucos
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                              alt="Icon 8"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Página Ocho</h5>
                            <p className="hidden text-sm md:block">
                              Eventos y webinars
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="relative flex max-w-none flex-1 p-6 md:py-8 md:pr-0 md:pl-8 lg:max-w-md">
                      <div className="relative z-10 grid w-full auto-cols-fr auto-rows-max grid-cols-1 grid-rows-[max-content_max-content] gap-4">
                        <h4 className="text-sm leading-[1.3] font-semibold">
                          Destacados del Blog
                        </h4>
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start gap-y-2 lg:grid-rows-[auto]">
                          <a
                            href="#"
                            className="flex auto-cols-fr grid-cols-[0.6fr_1fr] flex-col gap-x-6 py-2 md:grid"
                          >
                            <div className="relative w-full pt-[66.66%]">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                                alt="Relume placeholder image 1"
                                className="absolute inset-0 size-full object-cover"
                              />
                            </div>
                            <div className="rt-4 mt-4 flex flex-col justify-start md:mt-0">
                              <h5 className="mb-1 font-semibold">
                                Título Artículo
                              </h5>
                              <p className="text-sm">
                                Una mirada a la inteligencia artificial
                              </p>
                              <div className="mt-1.5">
                                <Button
                                  title="Leer más"
                                  variant="link"
                                  size="link"
                                  className="text-sm underline"
                                >
                                  Leer más
                                </Button>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="flex auto-cols-fr grid-cols-[0.6fr_1fr] flex-col gap-x-6 py-2 md:grid"
                          >
                            <div className="relative w-full pt-[66.66%]">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                                alt="Relume placeholder image 2"
                                className="absolute inset-0 size-full object-cover"
                              />
                            </div>
                            <div className="rt-4 mt-4 flex flex-col justify-start md:mt-0">
                              <h5 className="mb-1 font-semibold">
                                Título Artículo
                              </h5>
                              <p className="text-sm">
                                Explorando nuevas tendencias
                              </p>
                              <div className="mt-1.5">
                                <Button
                                  title="Leer más"
                                  variant="link"
                                  size="link"
                                  className="text-sm underline"
                                >
                                  Leer más
                                </Button>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Button
                            title="Ver todos los artículos"
                            variant="link"
                            size="link"
                            iconRight={<RxChevronRight />}
                          >
                            Ver todos los artículos
                          </Button>
                        </div>
                      </div>
                      <div className="absolute top-0 right-auto bottom-0 left-0 min-w-full bg-background-secondary lg:min-w-[100vw]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="mt-6 flex w-full flex-col gap-y-4 pb-24 lg:hidden lg:pb-0">
              <Button
                className="w-full"
                title="Button"
                variant="secondary"
                size="sm"
              >
                Button
              </Button>
              <Button className="w-full" title="Button" size="sm">
                Button
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="hidden lg:flex lg:gap-4">
          <Button title="Botón" variant="secondary" size="sm">
            Botón
          </Button>
          <Button title="Botón" size="sm">
            Botón
          </Button>
        </div>
      </div>
    </section>
  );
}
