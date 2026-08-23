import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"

// ── Importaciones dinámicas de imágenes por categoría ──────────────────────
const categorias = [
  {
    label: "Fútbol Sin Fronteras",
    icon: "bi-trophy",
    fotos: Object.values(
      import.meta.glob(
        "../assets/carrucelfotos/FUTBOL SIN FRONTERAS/**/*.{jpg,jpeg,png}",
        { eager: true, query: "?url", import: "default" }
      )
    ),
  },
  {
    label: "COCA",
    icon: "bi-people",
    fotos: Object.values(
      import.meta.glob(
        "../assets/carrucelfotos/COCA/**/*.{jpg,jpeg,png}",
        { eager: true, query: "?url", import: "default" }
      )
    ),
  },
  {
    label: "Observa Bolivia – Nacionales 2025",
    icon: "bi-check2-circle",
    fotos: Object.values(
      import.meta.glob(
        "../assets/carrucelfotos/OBSERVA BOLIVIA/ELECCIONES NACIONALES 2025/*.{jpg,jpeg,png}",
        { eager: true, query: "?url", import: "default" }
      )
    ),
  },
  {
    label: "Observa Bolivia – Subnacionales 2026",
    icon: "bi-check2-circle",
    fotos: Object.values(
      import.meta.glob(
        "../assets/carrucelfotos/OBSERVA BOLIVIA/ELECCIONES 2026-SUBNACIONALES/*.{jpg,jpeg,png}",
        { eager: true, query: "?url", import: "default" }
      )
    ),
  },
  {
    label: "Agua – Nogalani",
    icon: "bi-droplet",
    fotos: Object.values(
      import.meta.glob(
        "../assets/carrucelfotos/AGUA - NOGALANI/*.{jpg,jpeg,png}",
        { eager: true, query: "?url", import: "default" }
      )
    ),
  },
  {
    label: "Agua – Milluhuaya",
    icon: "bi-droplet-half",
    fotos: Object.values(
      import.meta.glob(
        "../assets/carrucelfotos/AGUA-MILLUHUAYA/*.{jpg,jpeg,png}",
        { eager: true, query: "?url", import: "default" }
      )
    ),
  },
  {
    label: "Trata de Personas",
    icon: "bi-shield-heart",
    fotos: Object.values(
      import.meta.glob(
        "../assets/carrucelfotos/TRATA DE PERSONAS/*.{jpg,jpeg,png}",
        { eager: true, query: "?url", import: "default" }
      )
    ),
  },
  {
    label: "Educación para el Desarrollo",
    icon: "bi-book",
    fotos: Object.values(
      import.meta.glob(
        "../assets/carrucelfotos/EDUCACION PARA EL DESARROLLO/*.{jpg,jpeg,png}",
        { eager: true, query: "?url", import: "default" }
      )
    ),
  },
].filter((c) => c.fotos.length > 0)

// ── Lightbox ───────────────────────────────────────────────────────────────
function Lightbox({ fotos, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrev()
      if (e.key === "ArrowRight") onNext()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose, onPrev, onNext])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white text-3xl hover:text-green-300 transition-colors"
        onClick={onClose}
      >
        <i className="bi bi-x-lg" />
      </button>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-green-300 transition-colors p-2"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
      >
        <i className="bi bi-chevron-left" />
      </button>
      <motion.img
        key={index}
        src={fotos[index]}
        alt={`Foto ${index + 1}`}
        className="max-h-[88vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-green-300 transition-colors p-2"
        onClick={(e) => { e.stopPropagation(); onNext() }}
      >
        <i className="bi bi-chevron-right" />
      </button>
      <span className="absolute bottom-4 text-white/60 text-sm">
        {index + 1} / {fotos.length}
      </span>
    </motion.div>
  )
}

// ── Slider principal ───────────────────────────────────────────────────────
export default function GaleriaSlider() {
  const [catIdx, setCatIdx] = useState(0)
  const [slideIdx, setSlideIdx] = useState(0)
  const [lightbox, setLightbox] = useState(null) // null | number
  const [direction, setDirection] = useState(1)
  const timerRef = useRef(null)
  const tabsRef = useRef(null)

  const cat = categorias[catIdx]
  const fotos = cat.fotos
  const VISIBLE = 3 // fotos visibles al mismo tiempo en desktop

  const goSlide = useCallback(
    (next) => {
      setDirection(next > slideIdx ? 1 : -1)
      setSlideIdx((next + fotos.length) % fotos.length)
    },
    [slideIdx, fotos.length]
  )

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % fotos.length)
      setDirection(1)
    }, 3500)
    return () => clearInterval(timerRef.current)
  }, [fotos.length, catIdx])

  // Reset slide when category changes
  const changeCategory = (idx) => {
    setCatIdx(idx)
    setSlideIdx(0)
    setDirection(1)
  }

  // Scroll tabs into view on mobile
  useEffect(() => {
    const el = tabsRef.current?.children[catIdx]
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
  }, [catIdx])

  // Lightbox helpers
  const lbPrev = () => setLightbox((l) => (l - 1 + fotos.length) % fotos.length)
  const lbNext = () => setLightbox((l) => (l + 1) % fotos.length)

  // Visible slides: show VISIBLE centered around slideIdx
  const getVisible = () => {
    return Array.from({ length: VISIBLE }, (_, i) => {
      const offset = i - Math.floor(VISIBLE / 2)
      return (slideIdx + offset + fotos.length) % fotos.length
    })
  }

  return (
    <div className="mt-14">
      {/* Título sección */}
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-green-900 mb-2">
          Galería de Actividades
        </h3>
        <p className="text-gray-500 text-sm">
          Imágenes de nuestros proyectos en comunidades bolivianas
        </p>
      </div>

      {/* Tabs de categorías */}
      <div
        ref={tabsRef}
        className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide justify-start sm:justify-center"
        style={{ scrollbarWidth: "none" }}
      >
        {categorias.map((c, i) => (
          <button
            key={i}
            onClick={() => changeCategory(i)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 border ${
              catIdx === i
                ? "bg-green-700 text-white border-green-700 shadow-md"
                : "bg-white text-green-800 border-green-200 hover:border-green-500 hover:bg-green-50"
            }`}
          >
            <i className={`bi ${c.icon} text-xs`} />
            {c.label}
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                catIdx === i ? "bg-green-600 text-green-100" : "bg-green-100 text-green-600"
              }`}
            >
              {c.fotos.length}
            </span>
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="relative select-none">
        {/* Contenedor de imágenes */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 overflow-hidden px-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {getVisible().map((idx, pos) => {
              const isCenter = pos === Math.floor(VISIBLE / 2)
              return (
                <motion.div
                  key={`${catIdx}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.85, x: direction * 80 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.55,
                    scale: isCenter ? 1 : 0.82,
                    x: 0,
                    zIndex: isCenter ? 10 : 1,
                  }}
                  exit={{ opacity: 0, scale: 0.85, x: -direction * 80 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                  className={`flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden shadow-lg ${
                    isCenter
                      ? "w-[60vw] sm:w-[420px] h-[38vw] sm:h-[280px]"
                      : "w-[22vw] sm:w-[220px] h-[28vw] sm:h-[200px] hidden sm:block"
                  }`}
                  onClick={() => isCenter && setLightbox(idx)}
                  style={{ willChange: "transform" }}
                >
                  <img
                    src={fotos[idx]}
                    alt={`${cat.label} ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {isCenter && (
                    <div className="absolute inset-0 flex items-end justify-center pb-3 opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-t from-black/40 to-transparent">
                      <span className="text-white text-xs font-medium flex items-center gap-1">
                        <i className="bi bi-zoom-in" /> Ampliar
                      </span>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Botones nav */}
        <button
          onClick={() => goSlide(slideIdx - 1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-3 bg-white/90 hover:bg-green-700 hover:text-white text-green-800 rounded-full w-9 h-9 flex items-center justify-center shadow-md transition-all duration-200 z-20"
        >
          <i className="bi bi-chevron-left text-sm" />
        </button>
        <button
          onClick={() => goSlide(slideIdx + 1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-3 bg-white/90 hover:bg-green-700 hover:text-white text-green-800 rounded-full w-9 h-9 flex items-center justify-center shadow-md transition-all duration-200 z-20"
        >
          <i className="bi bi-chevron-right text-sm" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-6 flex-wrap max-w-xs mx-auto">
        {fotos.map((_, i) => (
          <button
            key={i}
            onClick={() => goSlide(i)}
            className={`rounded-full transition-all duration-200 ${
              i === slideIdx
                ? "w-5 h-2 bg-green-700"
                : "w-2 h-2 bg-green-300 hover:bg-green-500"
            }`}
          />
        ))}
      </div>

      {/* Contador */}
      <p className="text-center text-xs text-gray-400 mt-3">
        {slideIdx + 1} / {fotos.length} · {cat.label}
      </p>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            fotos={fotos}
            index={lightbox}
            onClose={() => setLightbox(null)}
            onPrev={lbPrev}
            onNext={lbNext}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
