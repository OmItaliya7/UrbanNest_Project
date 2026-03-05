import About from "./components/About";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
import Header from "./components/Hero";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";



const App = () =>{
  return(
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contactus />
      <Footer />
    </div>
  )
}

export default App;