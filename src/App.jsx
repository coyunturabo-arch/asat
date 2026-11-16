import Navbar from "./Navbar/Navbar"
import Hero from "./Hero/Hero"
import fondo from "./assets/4.png"
import QuienesSomos from "./sections/QuienesSomos"
import QueHacemos from "./sections/QueHacemos"
import DondeEstamos from "./sections/DondeEstamos"
import Publicaciones from "./sections/Publicaciones"
import Contacto from "./sections/Contacto"




const bgImagen = {
  backgroundImage: `url(${fondo})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "cover",
}

function App() {
  return (
    <div className="overflow-x-hidden">
      <div style={bgImagen} className="min-h-screen overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <QuienesSomos />
      <QueHacemos />
      <DondeEstamos />
      <Publicaciones />
      <Contacto />
      <footer className="bg-green-900 text-white py-8 px-4 text-center">
        <p className="text-green-200 text-sm">
          ASAT - Asociación Amigos de la Tierra · Creando oportunidades!!
        </p>
        <p className="text-green-300/80 text-xs mt-2">Bolivia · Yungas</p>
      </footer>
    </div>
  )
}

export default App;
