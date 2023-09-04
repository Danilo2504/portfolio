import ReactJS from "../Icons/ReactJS";
import Next from "../Icons/Next";
import Typescript from "../Icons/Typescript";
import Node from "../Icons/Node";
import Express from "../Icons/Express";
import Flag from "../Icons/Flag";

export const skillFront = {
  title: "Front-end",
  options: ["React JS", "React Native", "Next JS", "Typescript"],
  svgIcons: [{ svg: ReactJS }, { svg: Next }, { svg: Typescript }],
  radius: "15px 2.5px 2.5px 15px",
};

export const skillBack = {
  title: "Back-end",
  options: ["Node JS", "Express"],
  svgIcons: [{ svg: Node }, { svg: Express }],
  radius: "2.5px",
};

export const skillOther = {
  title: "about_page.card_title",
  options: ["Inglés", "Español"],
  svgIcons: [{ svg: Flag }],
  radius: "2.5px 15px 15px 2.5px",
};
