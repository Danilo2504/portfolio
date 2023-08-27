import Image from "next/image";
import React from "react";
import PageLayout from "../Components/Layouts/PageLayout";

function HomePage() {
  return (
    <PageLayout>
      <a id="home-page" />
      <div className="flex justify-between items-center pt-24 px-32">
        <div className="flex flex-col font-rubik">
          <h6 className="text-grey text-[15px] leading-small mb-5">Hola</h6>
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
    </PageLayout>
  );
}

export default HomePage;
