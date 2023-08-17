"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

interface SliderElement {
  percentage: number;
  nameDeli: string;
  statusColor: string;
  status: string;
  img: string;
}
interface SliderrProps {
  fakeData: SliderElement[];
  href: string;
}


const Sliderr: React.FC<SliderrProps> = ({ fakeData, href }) => {

  const settings = {
    // ConfiguraciÃ³n del Slider
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
  return (
    <>
    
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
    
    </>
  );
};
export default Sliderr;