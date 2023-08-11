"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const Deliverys = () => {
  const fakeData = [
    {
      nameDeli: "martina",
      img: "data:image/jpeg;base64,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",
      status: "en curso",
      statusColor: "yellow",
      percentage: 52,
    },
    {
      nameDeli: "mani",
      img: "data:image/jpeg;base64,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",
      status: "inactivo",
      statusColor: "[#3D1DF3]",
      percentage: 0,
    },
    {
      nameDeli: "pablo",
      img: "https://pxcdn.bigbangnews.com/bigbang/072015/1552074272665.jpg?cw=&ch=540",
      status: "entregado",
      statusColor: "lightgreen",
      percentage: 100,
    },
    {
      nameDeli: "edu",
      img: "https://media.istockphoto.com/id/1153469287/es/foto/foto-de-pasaporte-masculino-frontal-aislado-sobre-fondo-blanco-normalizaci%C3%B3n-de-la-ue.jpg?s=612x612&w=0&k=20&c=jq40kQlLHR7TrKpi46CDVah9Aznt1xoAzrqWF-gz0ZE=",
      status: "en curso",
      statusColor: "yellow",
      percentage: 80,
    },
    {
      nameDeli: "edu",
      img: "https://media.istockphoto.com/id/1153469287/es/foto/foto-de-pasaporte-masculino-frontal-aislado-sobre-fondo-blanco-normalizaci%C3%B3n-de-la-ue.jpg?s=612x612&w=0&k=20&c=jq40kQlLHR7TrKpi46CDVah9Aznt1xoAzrqWF-gz0ZE=",
      status: "en curso",
      statusColor: "yellow",
      percentage: 80,
    },
    {
      nameDeli: "edu",
      img: "https://media.istockphoto.com/id/1153469287/es/foto/foto-de-pasaporte-masculino-frontal-aislado-sobre-fondo-blanco-normalizaci%C3%B3n-de-la-ue.jpg?s=612x612&w=0&k=20&c=jq40kQlLHR7TrKpi46CDVah9Aznt1xoAzrqWF-gz0ZE=",
      status: "en curso",
      statusColor: "yellow",

      percentage: 80,
    },
    {
      nameDeli: "edu",
      img: "https://media.istockphoto.com/id/1153469287/es/foto/foto-de-pasaporte-masculino-frontal-aislado-sobre-fondo-blanco-normalizaci%C3%B3n-de-la-ue.jpg?s=612x612&w=0&k=20&c=jq40kQlLHR7TrKpi46CDVah9Aznt1xoAzrqWF-gz0ZE=",
      status: "en curso",
      statusColor: "yellow",
      percentage: 80,
    },
    {
      nameDeli: "edu",
      img: "https://media.istockphoto.com/id/1153469287/es/foto/foto-de-pasaporte-masculino-frontal-aislado-sobre-fondo-blanco-normalizaci%C3%B3n-de-la-ue.jpg?s=612x612&w=0&k=20&c=jq40kQlLHR7TrKpi46CDVah9Aznt1xoAzrqWF-gz0ZE=",
      status: "en curso",
      statusColor: "yellow",
      percentage: 80,
    },
    {
      nameDeli: "edu",
      img: "https://media.istockphoto.com/id/1153469287/es/foto/foto-de-pasaporte-masculino-frontal-aislado-sobre-fondo-blanco-normalizaci%C3%B3n-de-la-ue.jpg?s=612x612&w=0&k=20&c=jq40kQlLHR7TrKpi46CDVah9Aznt1xoAzrqWF-gz0ZE=",
      status: "en curso",
      statusColor: "yellow",
      percentage: 80,
    },
  ];

  const settings = {
    // Configuración del Slider
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostrar 4 clientes al mismo tiempo
    rows: 4,
    slidesPerRow: 1,
    arrows: false,
  };

  const handleClick = (id: number) => {
    console.log("click", id);
  };
const href= `/api/admin-pages/pofile`
  return (
    <>
      <div className="mt-10 border-dotted border-b-2 border-sky-500"></div>
      <div
        className=" w-full h-[70vh]
      "
      >
        <Slider {...settings}>
          {fakeData.map((elem, id) => (
            <Link href={href}>
              <div
                className=" h-[15vh]  cursor-pointer "
                onClick={() => {
                  handleClick(id);
                }}
              >
                <div
                  className="h-full slider-in text-blue flex border-dotted border-b-2 border-sky-500"
                  id="slider-in"
                >
                  <div className=" flex w-1/2 justify-center items-center">
                    <div className=" font-bold">{elem.percentage}%</div>
                  </div>
                  <div className="w-3/4 flex flex-col items-start justify-center px-2">
                    <h1 className="text-sm font-bold leading-4">
                      {elem.nameDeli}
                    </h1>
                    <div className={` bg-${elem.statusColor} rounded-2xl px-2`}>
                      <h2 className="text-xs font-semibold leading-4">
                        {elem.status}
                      </h2>
                    </div>
                  </div>
                  <div className=" w-1/2 flex justify-center items-center">
                    <div className="w-[40px]">
                      <img className=" rounded-full" src={elem.img} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default Deliverys;
