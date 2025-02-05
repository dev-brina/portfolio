import Header from "./components/Header"
import Footer from "./components/Footer"
import Intro from "./components/Intro"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"


function App() {

  return (
    <>
      <main>
        <section id="intro">
          <Intro />
        </section>
        <section id="technologies">
          <Technologies />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
