import { NavLink } from "react-router-dom";

function AsideItem({ to, label, children }) {
    const base =
        "flex items-center gap-3 rounded-2xl px-4 py-3 font-medium transition";

    const active =
        "bg-dark-goldenrod-100/50 text-dark-goldenrod-500";

    const idle =
        "text-dusty-taupe-500 hover:bg-dark-goldenrod-100/50 hover:text-dark-goldenrod-300";

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `${base} ${isActive ? active : idle}`
            }
        >
            {children}
            <span className="hidden lg:inline text-lg font-bold">{label}</span>
        </NavLink>
    );
}

export default AsideItem;