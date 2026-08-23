import React from "react"
import SectionMotion from "../components/SectionMotion"

export default function DondeEstamos() {
  return (
    <SectionMotion id="donde-estamos" className="py-20 px-4 sm:px-12 bg-white/95">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-8">
          Dónde estamos
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          La Fundación ASAT desarrolla actividades en Bolivia desde el año 2014,
          trabajando de manera cercana con las <strong>comunidades de los Yungas</strong> (Norte y Sur).
        </p>
        <p className="text-gray-600">
          Si deseas conocer nuestra ubicación o puntos de atención, escríbenos por el formulario de contacto
          o nuestras redes sociales.
        </p>
        <div className="mt-8 p-4 bg-green-50 rounded-xl inline-block">
          <p className="text-green-800 font-medium">Bolivia · Yungas</p>
        </div>
      </div>
    </SectionMotion>
  )
}
