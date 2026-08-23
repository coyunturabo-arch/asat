import React, { useState } from "react"
import SectionMotion from "../components/SectionMotion"

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder: aquí se conectaría con un backend o servicio de correo
    console.log("Enviar:", form)
    alert("Gracias por tu mensaje. Te contactaremos pronto.")
    setForm({ nombre: "", email: "", mensaje: "" })
  }

  return (
    <SectionMotion id="contacto" className="py-20 px-4 sm:px-12 bg-white/95">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-8 text-center">
          Contacto
        </h2>
        <p className="text-gray-700 text-center mb-10">
          Escríbenos para colaborar, solicitar información o sumarte a nuestras actividades.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              value={form.nombre}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows={4}
              value={form.mensaje}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="¿En qué podemos ayudarte?"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg transition-colors"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </SectionMotion>
  )
}
