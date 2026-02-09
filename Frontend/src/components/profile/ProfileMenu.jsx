import { useState, useRef, useEffect } from "react";

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
            <li className="px-4 py-3 hover:bg-seashell-100 cursor-pointer">
              Mis pedidos
            </li>
            <li className="px-4 py-3 hover:bg-seashell-100 cursor-pointer">
              Mis citas
            </li>
            <li className="px-4 py-3 hover:bg-seashell-100 cursor-pointer">
              Mi perfil
            </li>

            <li className="border-t px-4 py-3 text-rosewood-500 hover:bg-red-50 cursor-pointer">
              Iniciar Sesión
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}