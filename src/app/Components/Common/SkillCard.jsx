import React from "react";
import Spacer from "./Spacer";

function SkillCard({ title, radius, children }) {
  return (
    <div
      style={{ borderRadius: radius }}
      className="p-[24px] text-white bg-transparent border border-white w-[280px] h-[230px]"
    >
      <h4 className="font-poppins text-medium font-medium text-center">
        {title}
      </h4>
      {children}
    </div>
  );
}

export function FrontCard({ title, radius, svgIcons, options }) {
  return (
    <SkillCard title={title} radius={radius}>
      <Spacer paddingY={15} />
      <div className="flex flex-row flex-nowrap justify-between items-center">
        {svgIcons.map(({ svg: Svg }, index) => {
          return <Svg key={index} />;
        })}
      </div>
      <Spacer paddingY={15} />
      <div className="flex flex-row flex-wrap text-small gap-1">
        {options.map((item, index) => {
          return <label key={index}>{item}</label>;
        })}
      </div>
    </SkillCard>
  );
}

export function BackCard({ title, radius, svgIcons, options }) {
  return (
    <SkillCard title={title} radius={radius}>
      <Spacer paddingY={15} />
      <div className="flex flex-row flex-nowrap justify-between px-4 items-center">
        {svgIcons.map(({ svg: Svg }, index) => {
          return <Svg key={index} />;
        })}
      </div>
      <Spacer paddingY={15} />
      <div className="flex flex-row flex-wrap justify-center text-small gap-1">
        {options.map((item, index) => {
          return <label key={index}>{item}</label>;
        })}
      </div>
    </SkillCard>
  );
}

export function OtherCard({ title, radius, svgIcons, options }) {
  return (
    <SkillCard title={title} radius={radius}>
      <Spacer paddingY={15} />
      <div className="flex flex-row flex-nowrap justify-center items-center">
        {svgIcons.map(({ svg: Svg }, index) => {
          return <Svg key={index} />;
        })}
      </div>
      <Spacer paddingY={15} />
      <div className="flex flex-row flex-wrap justify-center text-small gap-1">
        {options.map((item, index) => {
          return <label key={index}>{item}</label>;
        })}
      </div>
    </SkillCard>
  );
}
