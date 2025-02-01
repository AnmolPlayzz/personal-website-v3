import "./page.css";
import HomePage from "@/components/home/home-page";
import AboutPage from "@/components/about/about-page";
import ProjectsPage from "@/components/projects/projects-page";

export default function Home() {

    return (
        <main>
            <div style={{
                padding: "0",
                height: "calc(100vh + 200px)",
            }} data-scroll-id="home" id="home">
                <HomePage/>
            </div>
            <div style={{
                paddingTop: "calc(10vh + 150px)"
            }} data-scroll-id="about" id="about">
                <AboutPage/>
            </div>
            <div id="divider"></div>
            <div style={{
            }} data-scroll-id="projects" id="projects">
                <ProjectsPage/>
            </div>
        </main>
    );
}
