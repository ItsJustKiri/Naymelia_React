import React from 'react'
import { TitleAndSubtitleIcon } from '../Icons/Logos.jsx'
import { SearchIcon, CarIcon } from '../Icons/Icons.jsx'
import ProfileMenu from '../profile/ProfileMenu.jsx'


function Header() {
    const name = "Usuario"
    
    return (
        <div
            className="flex items-center justify-between w-full px-4 md:px-5 gap-4 md:gap-auto"
        >
            <div className="shrink-0">
                <TitleAndSubtitleIcon className="w-32 md:w-40 h-auto" />
            </div>
            <div className="hidden md:flex md:flex-1 items-center mx-6">
                <div
                    className="flex items-center bg-white px-4 py-2 border-rosewood-100 border rounded-full w-full transition-all duration-400 hover:bg-seashell-100/50"
                >
                    <SearchIcon className="size-7 text-dusty-taupe-500" />

                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="bg-transparent text-xl font-raleway text-rosewood-500 ml-2 w-full focus:outline-none placeholder:text-dusty-taupe-500"
                    />
                </div>
            </div>

            <div className="flex flex-row items-center gap-6 shrink-0 text-dusty-taupe-500">
                <CarIcon
                    className="size-5 transition-all duration-200 hover:scale-102 hover:text-zinc-50"
                />

                <div className="flex gap-3 items-center">
                    <div className="hidden md:flex md:flex-col text-right">
                        <div className="text-dusty-taupe-500 font-raleway font-bold">
                            Saludos,
                        </div>
                        <div className="text-gray-900 font-playfair font-semibold">
                            {name}
                        </div>
                    </div>
                    <ProfileMenu user={name} />
                </div>
            </div>
        </div>
    )
}

export default Header