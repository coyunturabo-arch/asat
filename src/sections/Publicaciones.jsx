import React from "react"
import SectionMotion from "../components/SectionMotion"

export default function Publicaciones() {
  return (
    <SectionMotion id="publicaciones" className="py-20 px-4 sm:px-12 bg-green-900/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
          Publicaciones
        </h2>
        <p className="text-gray-700 text-center mb-8">
          Aquí podrás encontrar documentos, guías y materiales de formación de ASAT.
        </p>
        <div className="bg-white rounded-xl p-8 border border-green-200 text-center text-gray-500">
          <i className="bi bi-journal-text text-4xl mb-4 block text-green-600" />
          <p>Próximamente publicaremos informes, guías de capacitación y recursos.</p>
        </div>
      </div>
    </SectionMotion>
  )
}
