"use client";
import Image from "next/image";
import React from "react";
import PageLayout from "../Components/Layouts/PageLayout";
import useTranslation from "../Hooks/useTranslation";

function HomePage() {
  const { t } = useTranslation();
  return (
    <PageLayout>
      <a id="home-page" />
      <div className="flex justify-between items-center pt-24 px-32">
        <div className="flex flex-col font-rubik">
          <h6 className="text-grey text-[15px] leading-small mb-5">
            {t("home_page.title_small")}
          </h6>
          <h1 className="text-main text-big font-bold mb-2">
            <span className="text-white">{t("home_page.title_main_span")}</span>
            Danilo Bautista
          </h1>
          <h3 className="text-white text-medium_big leading-medium font-regular">
            {t("home_page.title_subtitle")}
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
