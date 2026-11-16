import React from "react"
import SectionMotion from "../components/SectionMotion"

const areas = [
  {
    title: "Democracia",
    items: [
      "Educación para la democracia.",
      "Escuelas democráticas.",
      "Política responsable.",
      "Observación electoral.",
    ],
  },
  {
    title: "Derechos humanos",
    items: [
      "Formación y promoción en derechos humanos.",
      "Formación en defensores de la madre tierra.",
      "Programa de prevención de trata de personas y violencias",
      "Futbol sin fronteras: con enfoque en DDHH",      
    ],
  },
  {
    title: "Desarrollo sostenible",
    items: [
      "Luchamos contra el cambio climático.",
      "Fortalecimiento en la transición de bioinsumos en comunidades productores de hoja de coca.",
      "Impulsando al cuidado del agua en las comunidades.",
    ],
  },
  {
    title: "Educación para el desarrollo",
    items: ["Formación, capacitación y aprendizaje en las comunidades.",
            "Programa de BECAS.",
    ],
  },
  {
    title: "Ayuda humanitaria",
    items: [
      "Acciones de respuesta ante desastres naturales (inundaciones, sequias, incendios) o situaciones de crisis que afecten a la comunidad.",      
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
