"use client";
import React from "react";
import PageContainer from "../Components/Layouts/PageContainer";
import PageLayout from "../Components/Layouts/PageLayout";
import SectionBar from "../Components/Common/SectionBar";
import ProjectCard from "../Components/Common/ProjectCard";
import { projectsData } from "../Data/projectsData";
import useTranslation from "../Hooks/useTranslation";

function ProjectsPage() {
  const { t } = useTranslation();
  const isPair = (id) => id % 2 === 0 || id === 0;
  return (
    <PageLayout>
      <a id="project-page" />
      <PageContainer>
        <SectionBar title={t("projects_page.title_section")} />
        <div className="pt-24 px-10 flex flex-col">
          {projectsData.map(
            ({
              id,
              title,
              description,
              imagePath,
              repoPath,
              projectPath,
              techs,
            }) => {
              return (
                <ProjectCard
                  key={id}
                  title={title}
                  description={t(description)}
                  imagePath={imagePath}
                  repoPath={repoPath}
                  projectPath={projectPath}
                  techs={techs}
                  isReversed={isPair(id)}
                />
              );
            }
          )}
        </div>
      </PageContainer>
    </PageLayout>
  );
}

export default ProjectsPage;
