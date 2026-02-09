import { SearchIcon } from '../Icons/Icons.jsx'

export default function SearchBar() {
    return (
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
    )
}