import {
    EmailIcon,
    HearthIcon,
    InstagramIcon,
    MapIcon,
    TiktokIcon,
    FacebookIcon,
    WsIcon,
} from "../Icons/Icons.jsx";
import { TitleAndSubtitleIcon } from "../Icons/Logos.jsx";

function Footer() {
    return (
        <footer className="flex justify-between p-8 text-gray-800 font-raleway border-t-2 border-rosewood-100">
            <div className="justify-between mx-auto max-w-7xl w-full">
                <div className="justify-between md:flex md:gap-12">
                    {/* INFO */}
                    <div className="mb-6 md:mb-0 md:w-1/3">
                        <a href="/" className="flex items-center gap-2 mb-4">
                            <TitleAndSubtitleIcon />
                        </a>

                        <p className="text-dusty-taupe-500 text-lg mb-4 text-center md:text-left">
                            Transformando la belleza a través del arte y el cuidado consciente.
                            Inspirando confianza y elegancia en cada sesión.
                        </p>

                        <div className="flex flex-col gap-2 text-dusty-taupe-500 text-base">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <EmailIcon className="size-7" /> naymelia.ib@gmail.com
                            </a>

                            <a
                                href="https://wa.me/526636693194?text=Hola%2C%20me%20gustaría%20más%20información"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:underline"
                            >
                                <WsIcon className="size-7" /> +52 (663) 669-31-94
                            </a>

                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <MapIcon className="size-7" /> Tijuana, Baja California, México
                            </a>
                        </div>

                        <div className="flex gap-2 mt-4">
                            <a
                                href="https://wa.me/526636693194"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-rosewood-100 p-2 rounded hover:bg-rosewood-100/50 cursor-pointer"
                                aria-label="WhatsApp"
                            >
                                <WsIcon className="size-8 text-rosewood-500" />
                            </a>

                            <a className="bg-rosewood-100 p-2 rounded hover:bg-rosewood-100/50 cursor-pointer">
                                <InstagramIcon className="size-8 text-rosewood-500" />
                            </a>

                            <a className="bg-rosewood-100 p-2 rounded hover:bg-rosewood-100/50 cursor-pointer">
                                <FacebookIcon className="size-8 text-rosewood-500" />
                            </a>

                            <a className="bg-rosewood-100 p-2 rounded hover:bg-rosewood-100/50 cursor-pointer">
                                <TiktokIcon className="size-8 text-rosewood-500" />
                            </a>
                        </div>
                    </div>

                    {/* LINKS */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:w-2/3">
                        <div>
                            <h2 className="mb-4 font-semibold text-lg">Explorar</h2>
                            <ul className="space-y-2 text-dusty-taupe-500 text-base">
                                <li><a className="hover:underline cursor-pointer">Sobre nosotros</a></li>
                                <li><a className="hover:underline cursor-pointer">Nuestro Trabajo</a></li>
                                <li><a className="hover:underline cursor-pointer">Tienda Online</a></li>
                                <li><a className="hover:underline cursor-pointer">Nuestros Servicios</a></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-4 font-semibold text-lg">Asistencia</h2>
                            <ul className="space-y-2 text-dusty-taupe-500 text-base">
                                <li><a className="hover:underline cursor-pointer">Preguntas Frecuentes</a></li>
                                <li><a className="hover:underline cursor-pointer">Términos y Condiciones</a></li>
                                <li><a className="hover:underline cursor-pointer">Política de Privacidad</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-rosewood-100" />

                <div className="flex flex-col md:flex-row justify-evenly items-center gap-4">
                    <span className="text-dusty-taupe-500 text-base text-center">
                        © 2026 Naymelia. Todos los derechos reservados.
                    </span>

                    <span className="flex gap-2 text-dusty-taupe-500 text-base items-center mb-8 md:mb-0">
                        <HearthIcon className="size-7 text-rosewood-100" />
                        Hecho con amor por el equipo Naymelia
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;