import Particle from "./components/Particle";
import Navbar from "./components/Navbar";
import Introductions from "./components/Introductions";
import Contact from "./components/Contact";
import Cards from "./components/Cards";

const App = () => {
    
    return (
      <div className="relative">
        <Particle />
        <main className="md:px-20 lg:px-40 relative z-10">
        <Navbar />
        <Introductions/>
        <Cards />
        <Contact/>
        </main>
        
      </div>
    );
};

export default App