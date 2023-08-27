import HomePage from "./PageComponents/HomePage";
import AboutPage from "./PageComponents/AboutPage";
import ProjectsPage from "./PageComponents/ProjectsPage";
import ContactPage from "./PageComponents/ContactPage";

export default function Home() {
  return (
    <main>
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </main>
  );
}
