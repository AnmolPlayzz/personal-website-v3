import "./page.css";
import HomePage from "@/components/home/home-page";
import AboutPage from "@/components/about/about-page";
import ProjectsPage from "@/components/projects/projects-page";

export default function Home() {

    return (
      <main>
        <div data-scroll-id="home" id="home">
            <HomePage />
        </div>
        <div style={{
            paddingTop: "10vh",
            height: "fit-content",
        }} data-scroll-id="about" id="about">
            <AboutPage />
        </div>
        <div data-scroll-id="projects" id="projects">
            <ProjectsPage />
        </div>
      </main>
  );
}
