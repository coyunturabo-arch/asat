import React,{useState} from 'react'
import Logo from '../assets/logo.png'
const navbarlinks = [
    { id: 1, title: "Inicio", link: "#inicio" },
    { id: 2, title: "Quiénes somos", link: "#quienes-somos" },
    { id: 3, title: "¿Qué hacemos?", link: "#que-hacemos" },
    { id: 4, title: "Dónde estamos", link: "#donde-estamos" },
    { id: 5, title: "Publicaciones", link: "#publicaciones" },
    { id: 6, title: "Contacto", link: "#contacto" },
]

    const navbarRedes = [
        {
            id:1,
            title:"Instagram",
            link:"https://www.instagram.com/?hl=es",
            //icon: 'bi bi-instagram',
        },
        {
            id:2,
            title:"tiktok",
            link:"https://www.tiktok.com/",
            //icon:'bi bi-tiktok',
        },
    ]
const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
    return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-green-900/40 backdrop-blur-md z-50 border-b border-white/10">
        <div className="h-full flex justify-between items-center sm:px-12 px-4">
    {/*Logo navbar*/}        
            <div>
                <img src={Logo} alt='Logo del sitio' className='w-[100px]'/>
            </div>
{/*boton ambueguresa*/}
<button onClick={toggleMenu} className='md:hidden text-white'>
    <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
    >
        {isOpen ? (<path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
        />) : (<path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
        />
        )}
        
         
    </svg>
</button>

     {/*navegacion escritorio*/}        
            <div className='hidden md:block'>
                <ul className='flex sm:space-x-8 space-x-2 px-4'>
                    {navbarlinks.map((link)=>(
                        <li key={link.id}>
                            <a 
                            className='text-white sm:text-sm text-sm hover:text-sky-200 transition-transform hover:scale-110 
                            transform inline-block duration-300'
                            href={link.link}>
                                {link.title}
                                </a>
                        </li>
                    ))}
                </ul>
            </div>
             {/*navegacion redes sociales*/} 
            <div className='hidden  md:block'>
                <ul className='flex space-x-4'>
                    {navbarRedes.map((link)=>(
                        <li key={link.id}>
                            <a 
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-block transition-transform duration-300 transform hover:scale-125'
                            href={link.link}>
                                <i 
                                className={`${link.icon} sm:text-base text-lg text-white hover:text-sky-200 transition-all
                                duration-300`}
                                >
                                    
                                </i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
            {/*menu para celu*/}
            <div className={`md:hidden absolute top-16 left-0 right-0 w-full bg-green-900/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <ul className='flex flex-col px-4 py-2'>
                    {navbarlinks.map((link)=>(
                        <li key={link.id} className="py-2 text-center">
                            <a 
                            className="text-white hover:text-sky-200" href={link.link} onClick={()=>setIsOpen(false)}>
                                {link.title}
                                </a>
                        </li>
                    ))}
                </ul>
                <ul className='flex space-x-8 px-4 py-2 justify-center'>
                    {navbarRedes.map((link)=>(
                        <li key={link.id}>
                            <a 
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-block'
                            href={link.link}>
                                <i 
                                className={`${link.icon} text-white`}
                                >
                                    
                                </i>
                            </a>
                        </li>
                    ))}
                </ul>

            </div>

    </nav>
  )
}

export default Navbar