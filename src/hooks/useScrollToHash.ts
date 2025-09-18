import { useEffect } from "react";

export function useScrollToHash() {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // slight delay to ensure DOM is ready
      }
    }
  }, []);
}
