import AsideItem from "./AsideItem.jsx";
import { HomeIcon, StoreIcon, StarsIcon} from "../Icons/Icons.jsx";

function Aside({ onNavigate }) {
    return (
        <aside className="px-4 py-6 h-full overflow-y-auto border-r-2 border-rosewood-100">
            <nav className="flex flex-col gap-2">
                <AsideItem to="/" label="Inicio" onNavigate={onNavigate}>
                    <HomeIcon className="size-7" />
                </AsideItem>

                <AsideItem to="/tienda" label="Tienda" onNavigate={onNavigate}>
                    <StoreIcon className="size-7" />
                </AsideItem>

                <AsideItem to="/servicios" label="Servicios" onNavigate={onNavigate}>
                    <StarsIcon className="size-7" />
                </AsideItem>
            </nav>
        </aside>
    );
}

export default Aside;