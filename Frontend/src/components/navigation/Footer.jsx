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

                        <p className="text-dusty-taupe-500 text-sm mb-4 text-center md:text-left">
                            Transformando la belleza a través del arte y el cuidado consciente.
                            Inspirando confianza y elegancia en cada sesión.
                        </p>

                        <div className="flex flex-col gap-2 text-dusty-taupe-500 text-sm">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <EmailIcon className="size-5" /> naymelia.ib@gmail.com
                            </a>

                            <a
                                href="https://wa.me/526636693194?text=Hola%2C%20me%20gustaría%20más%20información"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:underline"
                            >
                                <WsIcon className="size-5" /> +52 (663) 669-31-94
                            </a>

                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <MapIcon className="size-5" /> Tijuana, Baja California, México
                            </a>
                        </div>

                        <div className="flex gap-2 mt-4">
                            <a
                                href="https://wa.me/526636693194"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-rosewood-100 p-2 rounded hover:bg-rosewood-100/50"
                                aria-label="WhatsApp"
                            >
                                <WsIcon className="size-7 text-rosewood-500" />
                            </a>

                            <a className="bg-rosewood-100 p-2 rounded hover:bg-rosewood-100/50">
                                <InstagramIcon className="size-7 text-rosewood-500" />
                            </a>

                            <a className="bg-rosewood-100 p-2 rounded hover:bg-rosewood-100/50">
                                <FacebookIcon className="size-7 text-rosewood-500" />
                            </a>

                            <a className="bg-rosewood-100 p-2 rounded hover:bg-rosewood-100/50">
                                <TiktokIcon className="size-7 text-rosewood-500" />
                            </a>
                        </div>
                    </div>

                    {/* LINKS */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:w-2/3">
                        <div>
                            <h2 className="mb-4 font-semibold">Explorar</h2>
                            <ul className="space-y-2 text-dusty-taupe-500 text-sm">
                                <li><a className="hover:underline">Sobre nosotros</a></li>
                                <li><a className="hover:underline">Nuestro Trabajo</a></li>
                                <li><a className="hover:underline">Tienda Online</a></li>
                                <li><a className="hover:underline">Nuestros Servicios</a></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-4 font-semibold">Asistencia</h2>
                            <ul className="space-y-2 text-dusty-taupe-500 text-sm">
                                <li><a className="hover:underline">Preguntas Frecuentes</a></li>
                                <li><a className="hover:underline">Términos y Condiciones</a></li>
                                <li><a className="hover:underline">Política de Privacidad</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-rosewood-100" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-dusty-taupe-500 text-sm text-center">
                        © 2026 Naymelia. Todos los derechos reservados.
                    </span>

                    <span className="flex gap-2 text-dusty-taupe-500 text-sm items-center">
                        <HearthIcon className="size-5 text-rosewood-100" />
                        Hecho con amor por el equipo Naymelia
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;