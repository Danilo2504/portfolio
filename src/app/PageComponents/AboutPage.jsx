import React from "react";
import { BackCard, FrontCard, OtherCard } from "../Components/Common/SkillCard";
import { skillBack, skillFront, skillOther } from "../Data/skillsData";
import PageContainer from "../Components/Layouts/PageContainer";
import PageLayout from "../Components/Layouts/PageLayout";
import SectionBar from "../Components/Common/SectionBar";
import CodeTitle from "../Components/Common/CodeTitle";
import Spacer from "../Components/Common/Spacer";

function AboutPage() {
  return (
    <PageLayout>
      <a id="about-page" />
      <PageContainer>
        <SectionBar title={"Sobre Mi"} />
        <div className="pt-24 px-10 flex flex-col">
          <CodeTitle title={"Mi historia"} />
          <Spacer paddingY={20} />
          <p className="text-white_secondary font-rubik text-medium_small font-regular overflow-hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            ultricies pellentesque risus et pretium. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris ultricies pellentesque risus et
            pretium. Curabitur suscipit elementum Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris ultricies pellentesque risus et
            pretium. Curabitur suscipit elementum ex.
          </p>
          <Spacer paddingY={40} />
          <CodeTitle title={"Habilidades"} />
          <Spacer paddingY={20} />
          <div className="flex justify-around">
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
              title={skillOther.title}
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
