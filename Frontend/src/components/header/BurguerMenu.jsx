import React, { useState } from 'react'
import { TitleAndSubtitleIcon, TitleIcon } from '../Icons/Logos.jsx'
import { SearchIcon, CarIcon, BurguerIcon, CloseIcon } from '../Icons/Icons.jsx'
import Aside from '../navigation/Aside.jsx'

export default function BurguerMenu() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <button
                className="md:hidden text-dusty-taupe-500"
                onClick={() => setMobileMenuOpen(true)}
            >
                <BurguerIcon className="size-7" />
            </button>

            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}
            <div
                className={`
                    fixed top-0 left-0 z-50 h-full w-72 bg-white
                    transform transition-transform duration-300
                    ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
                    md:hidden
                `}
            >
                <div className="flex items-center justify-between px-4 py-4 border-b border-rosewood-500">
                    <span className="font-extrabold text-lg text-rosewood-500"><TitleAndSubtitleIcon className="w-32 h-auto" /></span>
                    <button onClick={() => setMobileMenuOpen(false)}>
                        <CloseIcon className="size-6 text-dusty-taupe-500" />
                    </button>
                </div>

                <Aside onNavigate={() => {
                    if (window.innerWidth < 768) {
                        setMobileMenuOpen(false)
                    }
                }} />
            </div>
        </>
    )
}