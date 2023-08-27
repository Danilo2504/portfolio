import HomePage from "./PageComponents/HomePage";
import AboutPage from "./PageComponents/AboutPage";
import ProjectsPage from "./PageComponents/ProjectsPage";

export default function Home() {
  return (
    <main>
      <HomePage />
      <AboutPage />
      <ProjectsPage />
    </main>
  );
}
