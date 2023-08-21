import React from "react";
import SectionBar from "../Components/Common/SectionBar";
import PageLayout from "../Components/Layouts/PageLayout";
import CodeTitle from "../Components/Common/CodeTitle";
import Spacer from "../Components/Common/Spacer";
import { BackCard, FrontCard, OtherCard } from "../Components/Common/SkillCard";
import { skillBack, skillFront, skillOther } from "../Data/skillsData";

function AboutPage() {
  return (
    <PageLayout>
      <div className="px-10 pb-36">
        <SectionBar />
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
      </div>
    </PageLayout>
  );
}

export default AboutPage;
