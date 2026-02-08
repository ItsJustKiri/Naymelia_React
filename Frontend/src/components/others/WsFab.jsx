import { useEffect, useState, useRef } from "react";
import { WsIcon } from "../Icons/Icons.jsx";

export default function WhatsAppFAB() {
  const [href, setHref] = useState("#");
  const fabRef = useRef(null);

  useEffect(() => {
    const phone = "526636693194";
    const message = encodeURIComponent("Hola, me gustaría más información");

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    setHref(
      isMobile
        ? `https://wa.me/${phone}?text=${message}`
        : `https://web.whatsapp.com/send?phone=${phone}&text=${message}`
    );

    const interval = setInterval(() => {
      fabRef.current?.classList.add("pulse-multi");
      setTimeout(() => {
        fabRef.current?.classList.remove("pulse-multi");
      }, 1200);
    }, 5000);

    const footer = document.querySelector("footer");

    if (footer && fabRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            fabRef.current.style.bottom =
              footer.offsetHeight + 24 + "px";
          } else {
            fabRef.current.style.bottom = "1.5rem";
          }
        },
        { threshold: 0 }
      );

      observer.observe(footer);

      return () => {
        clearInterval(interval);
        observer.disconnect();
      };
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      ref={fabRef}
      id="whatsapp-fab"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed right-6 bottom-6 z-50
        flex items-center gap-2
        rounded-full bg-rosewood-500 px-4 py-3
        text-white shadow-lg
        transition-transform duration-300
        hover:scale-105
      "
    >
      <WsIcon className="size-5 text-white" />
      <span className="text-sm font-medium">WhatsApp</span>
    </a>
  );
}