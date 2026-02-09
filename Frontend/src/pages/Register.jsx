import { useState } from "react";
import { NavLink } from "react-router-dom";
import RegisterImage from "../../public/images/RegisterImage.png";
import { TitleAndSubtitleIcon } from "../components/Icons/Logos";
import {
    EmailIcon,
    LockIcon,
    UserIcon,
    PhoneIcon,
    CircleCheckIcon,
} from "../components/Icons/Icons";

export default function Register() {
    const [accept, setAccept] = useState(false);

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-hidden antialiased lg:flex-row">
            <div className="relative h-64 w-full lg:h-screen lg:w-1/2">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${RegisterImage})` }}
                />
                <div className="absolute inset-0 bg-dusty-taupe-500/30" />
                <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-background-100 lg:to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <TitleAndSubtitleIcon className="w-64 md:w-96 xl:w-136 h-auto drop-shadow-2xl" />
                </div>
            </div>

            <div className="relative mt-10 flex w-full flex-1 items-center justify-center px-6 pb-16 lg:mt-0 lg:w-1/2 lg:px-24">
                <div className="absolute inset-0 floral-pattern pointer-events-none" />

                <div className="relative z-10 w-full max-w-md sm:max-w-lg">
                    <div className="mb-5 mt-0 md:mt-10 text-center">
                        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-dark-goldenrod-500">
                            Crear cuenta
                        </h2>
                        <p className="mt-0 text-sm sm:text-base tracking-wide text-rosewood-500">
                            Regístrate para comenzar tu ritual de bienestar
                        </p>
                    </div>

                    <form className="mx-auto space-y-1 md:space-y-5">
                        <div className="space-y-1 group">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-dark-goldenrod-500">
                                Nombre completo
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-dusty-taupe-500 group-hover:text-rosewood-500 group-focus-within:text-rosewood-500 transition-colors">
                                    <UserIcon className="size-5 sm:size-6" />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Tu nombre completo"
                                    className="
                                        w-full border-b border-dusty-taupe-500
                                        bg-transparent px-10 sm:px-11 py-3 sm:py-4
                                        text-sm sm:text-base font-semibold text-rosewood-500
                                        placeholder:text-dusty-taupe-500
                                        transition-colors
                                        hover:border-rosewood-500
                                        focus:border-dark-goldenrod-500 focus:outline-none ml-2
                                    "
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            <div className="space-y-1 group">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-dark-goldenrod-500">
                                    Email
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-dusty-taupe-500 group-hover:text-rosewood-500 group-focus-within:text-rosewood-500 transition-colors">
                                        <EmailIcon className="size-5 sm:size-6" />
                                    </span>
                                    <input
                                        type="email"
                                        placeholder="tu@email.com"
                                        className="
                                            w-full border-b border-dusty-taupe-500
                                            bg-transparent px-10 sm:px-11 py-3 sm:py-4
                                            text-sm sm:text-base font-semibold text-rosewood-500
                                            placeholder:text-dusty-taupe-500
                                            transition-colors
                                            hover:border-rosewood-500
                                            focus:border-dark-goldenrod-500 focus:outline-none ml-2
                                        "
                                    />
                                </div>
                            </div>

                            <div className="space-y-1 group">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-dark-goldenrod-500">
                                    Teléfono
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-dusty-taupe-500 group-hover:text-rosewood-500 group-focus-within:text-rosewood-500 transition-colors">
                                        <PhoneIcon className="size-5 sm:size-6" />
                                    </span>
                                    <input
                                        type="tel"
                                        placeholder="+52 000 000 0000"
                                        className="
                                            w-full border-b border-dusty-taupe-500
                                            bg-transparent px-10 sm:px-11 py-3 sm:py-4
                                            text-sm sm:text-base font-semibold text-rosewood-500
                                            placeholder:text-dusty-taupe-500
                                            transition-colors
                                            hover:border-rosewood-500
                                            focus:border-dark-goldenrod-500 focus:outline-none ml-2
                                        "
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                            <div className="space-y-2 group">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-dark-goldenrod-500">
                                    Contraseña
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-dusty-taupe-500 group-hover:text-rosewood-500 group-focus-within:text-rosewood-500 transition-colors">
                                        <LockIcon className="size-5 sm:size-6" />
                                    </span>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="
                                            w-full border-b border-dusty-taupe-500
                                            bg-transparent px-10 sm:px-11 py-3 sm:py-4
                                            text-sm sm:text-base font-semibold text-rosewood-500
                                            placeholder:text-dusty-taupe-500
                                            transition-colors
                                            hover:border-rosewood-500
                                            focus:border-dark-goldenrod-500 focus:outline-none ml-2
                                        "
                                    />
                                </div>
                            </div>

                            <div className="space-y-1 group">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-dark-goldenrod-500">
                                    Confirmar
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-dusty-taupe-500 group-hover:text-rosewood-500 group-focus-within:text-rosewood-500 transition-colors">
                                        <CircleCheckIcon className="size-5 sm:size-6" />
                                    </span>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="
                                            w-full border-b border-dusty-taupe-500
                                            bg-transparent px-10 sm:px-11 py-3 sm:py-4
                                            text-sm sm:text-base font-semibold text-rosewood-500
                                            placeholder:text-dusty-taupe-500
                                            transition-colors
                                            hover:border-rosewood-500
                                            focus:border-dark-goldenrod-500 focus:outline-none ml-2
                                        "
                                    />
                                </div>
                            </div>
                        </div>

                        <label className="flex items-start gap-3 pt-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={accept}
                                onChange={() => setAccept(!accept)}
                                className="mt-1 h-4 w-4 rounded border-dusty-taupe-500 text-dark-goldenrod-500 focus:ring-dark-goldenrod-500/50"
                            />
                            <span className="text-sm font-semibold text-rosewood-500">
                                Acepto los{" "}
                                <span className="underline hover:text-dark-goldenrod-500">
                                    Términos
                                </span>{" "}
                                y la{" "}
                                <span className="underline hover:text-dark-goldenrod-500">
                                    Política de Privacidad
                                </span>
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="
                                mx-auto mt-2 w-full
                                bg-rosewood-500
                                py-4 sm:py-5
                                text-xs sm:text-sm font-bold uppercase tracking-[0.25em]
                                text-cotton-rose-500
                                transition-all
                                hover:brightness-110
                                active:scale-[0.98]
                            "
                        >
                            Crear cuenta
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm tracking-wide text-dusty-taupe-500">
                        ¿Ya tienes una cuenta?{" "}
                        <NavLink
                            to="/login"
                            className="font-bold text-dark-goldenrod-500 hover:underline underline-offset-4"
                        >
                            Inicia sesión aquí
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
}