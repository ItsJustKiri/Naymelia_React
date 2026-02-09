import { useEffect, useState } from "react";
import { WsIcon } from "../Icons/Icons.jsx";

export default function WhatsAppFAB() {
  const [href, setHref] = useState("#");

  useEffect(() => {
    const phone = "526636693194";
    const message = encodeURIComponent("Hola, me gustaría más información");

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    setHref(
      isMobile
        ? `https://wa.me/${phone}?text=${message}`
        : `https://web.whatsapp.com/send?phone=${phone}&text=${message}`
    );
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        rounded-full bg-rosewood-500 px-4 py-3
        text-white shadow-lg
        
        whatsapp-pulse
      "
    >
      <WsIcon className="size-7 text-white" />
      <span className="text-base font-medium">WhatsApp</span>
    </a>
  );
}