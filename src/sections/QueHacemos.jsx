import React from "react"
import SectionMotion from "../components/SectionMotion"

const areas = [
  {
    title: "Democracia",
    items: [
      "Formación de liderazgos políticos y sociales.",
      "Fortalecimiento de organizaciones políticas.",
      "Generación de políticas públicas y gestión pública.",
    ],
  },
  {
    title: "Derechos humanos",
    items: [
      "Formación y promoción en derechos humanos.",
      "Formación en defensores de la madre tierra.",
      "Prevención de la trata de personas (TDP).",
      "Prevención del alcoholismo y drogas con enfoque de DDHH.",
      "Deporte, principios y valores.",
    ],
  },
  {
    title: "Desarrollo sostenible",
    items: [
      "Medio ambiente y conservación de parques y áreas protegidas.",
      "Fomento al cuidado del agua y restauración de ojos de agua.",
    ],
  },
  {
    title: "Educación para el desarrollo",
    items: ["Formación, capacitación y aprendizaje en las comunidades."],
  },
  {
    title: "Ayuda humanitaria",
    items: [
      "Fondo de emergencia para restauración de unidades educativas y comunidades por desastres naturales.",
      "Gestión de riesgos y prevención.",
    ],
  },
]

export default function QueHacemos() {
  return (
    <SectionMotion id="que-hacemos" className="py-20 px-4 sm:px-12 bg-green-900/10">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
          ¿Qué hacemos?
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {areas.map((area, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md border border-green-200"
            >
              <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                {area.title}
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                {area.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionMotion>
  )
}
