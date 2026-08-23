import React from "react"
import SectionMotion from "../components/SectionMotion"

const items = [
  {
    title: "Historia",
    content: ["La Asociación Amigos de la Tierra cuya sigla es ASAT nace en junio del año 2008, a partir de una iniciativa de jóvenes provenientes del municipio de Coripata de la provincia Nor Yungas, como una institución sin fines de lucro, orientada a tomar acciones específicas dentro del ámbito del desarrollo local para revertir el progresivo deterioro económico y social de la provincia Nor Yungas dentro del departamento de La Paz.",
"A iniciativa de los jóvenes Moisés Joel Ticona Choque, Marco Antonio Yujra, Fredy Angel Loza Chinchero y Oscar Machaca Condori, son los que dan inicio a la fundación de la Asociación Amigos de la Tierra –ASAT, cuenta con su PERSONALIDAD JURÍDICA, bajo la Resolución Administrativa Departamental No.  0523/2013, otorgado por el Gobierno Autónomo Departamental de La Paz, cuya resolución reconoce a ASAT como una institución sin fines de lucro y que da legalidad a todas las acciones que desarrolla la institución. La premisa fundamental de las acciones de Amigos de la Tierra fue el convencimiento de que las potencialidades productivas dela región de la Provincia Nor Yungas del Departamento de La Paz fueron y siguen siendo suficientes para crear prosperidad para todos sus habitantes.",
"La lógica inicial de la intervención Institucional estuvo dirigida a eliminar obstáculos existentes que dificultaban el desarrollo de iniciativas productivas en la región; particularmente de aquellas capaces de promover, en forma sostenida, mejores condiciones de empleo y oportunidades de ingreso para la población del Departamento.", 
"Es así que ASAT se constituye en una institución de jóvenes que tienen un desafío en: aportar con su conocimiento y experiencia de sus  profesionales a la construcción de una provincia dentro del Departamento  más homogéneo en su desarrollo sostenible, la promoción de un dialogo intercultural, una educación para el desarrollo y el cuidado de nuestro medio ambiente, donde se brinde mayores oportunidades productivas de la provincia Nor Yungas.",
    ],
  },
  {
    title: "Misión",
    content: ["Formamos jóvenes, adolecentes, niños y población en general de la provincia Nor Yungas; en temas referidos a desarrollo sostenible, liderazgo, oratoria y derechos humanos, promovemos un desarrollo respetuoso con la naturaleza, capacitamos en participación ciudadana a la sociedad en general, propiciamos diálogo inter generacional entre padres e hijos; nuestro compromiso es con la población mencionada con quien  nos relacionaremos con los siguientes valores:",
     ],
    valoresColumna1: ["Respeto.", "Humildad.", "Paciencia.", "Solidaridad.", "Tolerancia."],
  valoresColumna2: ["Transparencia.", "Calidad.", "Puntualidad.", "Independencia.", "Honradez."],
    
  },
  {
    title: "Visión",
    content: [
      "ASAT es una institución constituida por jóvenes y organizaciones de la sociedad civil de la Provincia Nor Yungas. Reconocida como una institución educativa para el desarrollo sostenible con participación democrática,  intercultural y de promoción de los derechos humanos.",
    ],
  },
  {
    title: "Valores",
    list: [
      "Derechos humanos: formación y promoción en derechos humanos; formación en defensores de la madre tierra; Prevención TDP; Prevención del alcoholismo y drogas con enfoque de DDHH.",
      "Desarrollo Sostenible: Medio Ambiente; conservación de parques y áreas protegidas; fomento al cuidado del agua y la restauración de los ojos de agua.",
      "Educación para el desarrollo.",
      "Gestión en ayuda humanitaria.",
    ],
  },
]

export default function QuienesSomos() {
  return (
    <SectionMotion id="quienes-somos" className="py-20 px-4 sm:px-12 bg-white/95">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-12 text-center">
          Quiénes somos
        </h2>
        <div className="space-y-10">
          {items.map((item, i) => (
            <article key={i} className="border-l-4 border-green-600 pl-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
             
              {/* {item.content && <p className="text-gray-700 leading-relaxed">{item.content}</p>} */}
              {item.content && (
              <div className="text-gray-700 leading-relaxed text-justify space-y-4">
                  {item.content.map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                    ))}
              </div>
              )}
              {item.list && (
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {item.list.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              )}
{/* 👇 NUEVO: Renderiza los valores en dos columnas 👇 */}
              {item.valoresColumna1 && item.valoresColumna2 && (
                <div className="mt-4">
                  <h4 className="font-bold text-green-800 mb-2">VALORES INSTITUCIONALES</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                    <ul className="list-none space-y-1">
                      {item.valoresColumna1.map((valor, idx) => (
                        <li key={idx} className="text-gray-700">{valor}</li>
                      ))}
                    </ul>
                    <ul className="list-none space-y-1">
                      {item.valoresColumna2.map((valor, idx) => (
                        <li key={idx} className="text-gray-700">{valor}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {/* 👆 FIN DEL NUEVO CÓDIGO 👆 */}

            </article>
          ))}
        </div>
      </div>
    </SectionMotion>
  )
}
