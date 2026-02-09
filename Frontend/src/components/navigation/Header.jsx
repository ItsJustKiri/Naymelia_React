import React, { useState } from 'react'
import { TitleAndSubtitleIcon, TitleIcon } from '../Icons/Logos.jsx'
import { SearchIcon, CarIcon, BurguerIcon, CloseIcon } from '../Icons/Icons.jsx'
import ProfileMenu from '../profile/ProfileMenu.jsx'
import ShopCarMenu from '../shopcar/ShopCarMenu.jsx'
import SearchBar from '../header/SearchBar.jsx'
import BurguerMenu from '../header/BurguerMenu.jsx'

function Header() {
    const name = "Usuario"

    return (
        <>
            <div
                className="flex items-center justify-between w-full px-4 md:px-5 gap-4 md:gap-auto"
            >
                <div className="flex items-center gap-3">
                    <BurguerMenu />

                    <TitleAndSubtitleIcon className="w-32 md:w-48 h-auto" />
                </div>
                <div className="hidden md:flex md:flex-1 items-center mx-6">
                    <SearchBar />
                </div>

                <div className="flex flex-row items-center gap-6 shrink-0 text-dusty-taupe-500">
                    <ShopCarMenu />

                    <div className="flex gap-3 items-center">
                        <div className="hidden md:flex md:flex-col text-right">
                            <div className="text-dusty-taupe-500 font-raleway text-lg font-bold">
                                Saludos,
                            </div>
                            <div className="text-gray-900 text-xl font-playfair font-semibold">
                                {name}
                            </div>
                        </div>
                        <ProfileMenu user={name} />
                    </div>
                </div>
            </div>
            <div className='mt-6 md:hidden'>
                <SearchBar />
            </div>
        </>
    )
}

export default Header