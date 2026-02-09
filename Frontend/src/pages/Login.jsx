import { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginImage from "../../public/images/RegisterImage.png";
import { TitleAndSubtitleIcon } from "../components/Icons/Logos";
import {
    EmailIcon,
    EyeOpenIcon,
    EyeClosedIcon,
    LockIcon,
} from "../components/Icons/Icons";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-hidden antialiased lg:flex-row">
            <div className="relative h-64 w-full lg:h-screen lg:w-1/2">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${LoginImage})` }}
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
                    <div className="mb-10 text-center">
                        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-dark-goldenrod-500">
                            Bienvenida
                        </h2>
                        <p className="mt-3 text-sm sm:text-base tracking-wide text-rosewood-500">
                            Inicia sesión para continuar con tu ritual de belleza
                        </p>
                    </div>

                    <form className="mx-auto space-y-8 sm:space-y-10">
                        <div className="space-y-2 group">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-dark-goldenrod-500">
                                Correo electrónico
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-dusty-taupe-500 transition-colors group-hover:text-rosewood-500 group-focus-within:text-rosewood-500">
                                    <EmailIcon className="size-5 sm:size-6" />
                                </span>
                                <input
                                    type="email"
                                    placeholder="tu@correo.com"
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

                        <div className="space-y-2 group">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-dark-goldenrod-500">
                                Contraseña
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-dusty-taupe-500 transition-colors group-hover:text-rosewood-500 group-focus-within:text-rosewood-500">
                                    <LockIcon className="size-5 sm:size-6" />
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
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
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-dusty-taupe-500 hover:text-dark-goldenrod-500 transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOpenIcon className="size-5 sm:size-6" />
                                    ) : (
                                        <EyeClosedIcon className="size-5 sm:size-6" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-dusty-taupe-500 text-dark-goldenrod-500 focus:ring-dark-goldenrod-500/50"
                                />
                                <span className="text-sm font-semibold text-rosewood-500">
                                    Recordarme
                                </span>
                            </label>
                            <a
                                href="#"
                                className="text-sm font-medium text-dark-goldenrod-500 hover:underline underline-offset-4 text-right"
                            >
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>

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
                            Iniciar sesión
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm tracking-wide text-dusty-taupe-500">
                        ¿No tienes una cuenta?{" "}
                        <NavLink
                            to="/register"
                            className="font-bold text-dark-goldenrod-500 hover:underline underline-offset-4"
                        >
                            Crea tu cuenta aquí
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
}