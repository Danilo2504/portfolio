import Image from "next/image";
import React from "react";

function HomePage() {
  return (
    <div className="h-screen pt-32 px-52">
      <div className="flex justify-between items-center pt-24 px-20">
        <div className="flex flex-col font-rubik">
          <h6 className="text-grey text-small leading-small mb-5">Hola</h6>
          <h1 className="text-main text-big font-bold mb-2">
            <span className="text-white">Soy </span>Danilo Bautista
          </h1>
          <h3 className="text-white text-medium_big leading-medium font-regular">
            Y soy un desarrollador front-end
          </h3>
        </div>
        <div>
          <Image
            src="/programmer-img.png"
            alt="Imagen de programador con computadora"
            width={280}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
