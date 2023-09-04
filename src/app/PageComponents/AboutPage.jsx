"use client";
import React from "react";
import { BackCard, FrontCard, OtherCard } from "../Components/Common/SkillCard";
import { skillBack, skillFront, skillOther } from "../Data/skillsData";
import PageContainer from "../Components/Layouts/PageContainer";
import PageLayout from "../Components/Layouts/PageLayout";
import SectionBar from "../Components/Common/SectionBar";
import CodeTitle from "../Components/Common/CodeTitle";
import Spacer from "../Components/Common/Spacer";
import useTranslation from "../Hooks/useTranslation";

function AboutPage() {
  const { t } = useTranslation();
  return (
    <PageLayout>
      <a id="about-page" />
      <PageContainer>
        <SectionBar title={t("about_page.title_section")} />
        <div className="pt-24 px-10 flex flex-col">
          <CodeTitle title={t("about_page.card_title")} />
          <Spacer paddingY={20} />
          <div className="mx-[50px]">
            <p className="text-white_secondary font-rubik text-medium_small font-regular overflow-hidden">
              {t("about_page.paragraph_1")}
            </p>
            <div className="my-[10px]" />
            <p className="text-white_secondary font-rubik text-medium_small font-regular overflow-hidden">
              {t("about_page.paragraph_2")}
            </p>
            <div className="my-[10px]" />
            <p className="text-white_secondary font-rubik text-medium_small font-regular overflow-hidden">
              {t("about_page.paragraph_3")}
            </p>
          </div>
          <Spacer paddingY={40} />
          <CodeTitle title={t("about_page.title_section_2")} />
          <Spacer paddingY={20} />
          <div className="flex justify-between mx-[50px]">
            <FrontCard
              title={skillFront.title}
              options={skillFront.options}
              radius={skillFront.radius}
              svgIcons={skillFront.svgIcons}
            />
            <BackCard
              title={skillBack.title}
              options={skillBack.options}
              radius={skillBack.radius}
              svgIcons={skillBack.svgIcons}
            />
            <OtherCard
              title={t(skillOther.title)}
              options={skillOther.options}
              radius={skillOther.radius}
              svgIcons={skillOther.svgIcons}
            />
          </div>
        </div>
      </PageContainer>
    </PageLayout>
  );
}

export default AboutPage;
