import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function ProfileMenu({ user }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="bg-rosewood-500 text-white rounded-full size-12 transition-all duration-200 hover:scale-105 focus:outline-none"
      >
        {user?.name?.charAt(0) ?? "U"}
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-56 rounded-2xl bg-white shadow-xl border border-dusty-taupe-500 overflow-hidden z-50">
          <div className="px-4 py-3 border-b">
            <p className="text-sm text-dusty-taupe-500">Conectado como:</p>
            <p className="text-lg font-semibold text-gray-900">{user?.name || "Usuario"}</p>
          </div>

          <ul className="flex flex-col font-medium">
            <li>
              <NavLink
                to="/pedidos"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 hover:bg-seashell-100"
              >
                Mis pedidos
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/citas"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 hover:bg-seashell-100"
              >
                Mis citas
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/perfil"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 hover:bg-seashell-100"
              >
                Mi perfil
              </NavLink>
            </li>

            <li className="border-t">
              <NavLink
                to="/login"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-rosewood-500 hover:bg-red-50"
              >
                Iniciar sesión
              </NavLink>
            </li>
          </ul>

        </div>
      )}
    </div>
  );
}