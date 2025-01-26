import "./page.css";
import HomePage from "@/components/home/home-page";
import AboutPage from "@/components/about/about-page";

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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam animi asperiores error explicabo
          incidunt iure maiores minima, quaerat repellat similique tempora! Excepturi, fuga, odit. Asperiores,
          doloremque, sint. Accusamus animi beatae commodi consequuntur debitis deleniti doloribus est fugit, harum hic
          illo impedit itaque laborum, laudantium magni nobis officiis quis sed sit tenetur unde, vel voluptatum! Beatae
          cum, dignissimos dolorum impedit modi quis sed? Aspernatur atque nisi sed tempore. Aut dolores expedita
          laudantium modi mollitia quaerat quo rem sapiente, sed? Aperiam asperiores cum dolores ducimus eaque esse
          exercitationem fuga, incidunt iste labore laudantium minima non odit quas repudiandae rerum velit veniam?
        </div>
      </main>
  );
}
