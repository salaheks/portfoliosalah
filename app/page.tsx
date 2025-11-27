import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CVDownload from "@/components/cv-download"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <CVDownload />
      <Contact />
      <Footer />
    </div>
  )
}
