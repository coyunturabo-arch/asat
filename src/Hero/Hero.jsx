import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import logo from "../assets/logo.png"
import BlurText from "../components/BlurText"


const Hero = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 120])
  const imageY = useTransform(scrollYProgress, [0, 0.4], [0, -80])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.3])
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  const handleAnimationComplete = () => {}

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative mt-16 min-h-[90vh] flex flex-col justify-center px-4 sm:px-12 pb-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto w-full">
        <motion.div style={{ y: heroY }} className="flex flex-col">
          <BlurText
            text="Asociación Amigos de la Tierra"
            delay={200}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 drop-shadow-lg"
          />
          <p className="text-xl sm:text-2xl text-amber-300 font-medium italic mb-6">
            Creando oportunidades!!
          </p>
          <a
            href="#quienes-somos"
            className="inline-block px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg border border-white/50 transition-colors backdrop-blur-sm w-fit"
          >
            Conocer más
          </a>
        </motion.div>

        {/* <motion.div
          style={{ y: imageY, opacity: imageOpacity }}
          className="flex justify-center md:justify-end"
        >
          <motion.img
            src={logo}
            alt="ASAT - Asociación Amigos de la Tierra"
            className="max-w-[280px] sm:max-w-sm drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          />
        </motion.div> */}
      </div>

      <motion.a
        href="#quienes-somos"
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/90 hover:text-white transition-colors"
        aria-label="Bajar a sección"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block w-6 h-10 rounded-full border-2 border-current flex items-start justify-center pt-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
        </motion.span>
        <span className="text-xs uppercase tracking-wider">Scroll</span>
      </motion.a>
    </section>
  )
}

export default Hero
