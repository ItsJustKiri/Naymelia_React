import { CarIcon } from "../Icons/Icons.jsx";

export default function ShopCarMenu() {
    return (
        <div className="relative group">
            {/* ICONO */}
            <div className="indicator cursor-pointer">
                <CarIcon
                    className="
                    size-7
                    transition-all duration-200
                    group-hover:scale-105
                    group-hover:text-rosewood-500
                    "
                />
                <span className="indicator-item badge badge-sm bg-rosewood-500 rounded-full p-2 mt-1 text-white">
                    8
                </span>
            </div>

            {/* CARD */}
            <div
                className="
                absolute right-0 mt-3 w-36
                rounded-xl
                border border-dusty-taupe-500
                bg-rosewood-50
                shadow-lg
                opacity-0 scale-95
                pointer-events-none
                transition-all duration-200
                group-hover:opacity-100
                group-hover:scale-100
                group-hover:pointer-events-auto
                z-50
        "
            >
                <div className="px-4 py-3 flex flex-col gap-1">
                    <span className="block font-semibold text-lg text-rosewood-500">
                        8 artículos
                    </span>

                    <span className="block text-sm text-dusty-taupe-500">
                        Subtotal: <span className="font-medium">$999</span>
                    </span>
                </div>
            </div>
        </div>
    );
}