import "@fontsource-variable/archivo/wdth.css";
import "@fontsource/instrument-serif/latin-400.css";
import "./style.css";

/**
 * The sticky dock and the in-content call buttons are the same control, so
 * showing both at once reads as a duplicate. Tuck the dock away while any
 * in-content button is on screen. Without JS the dock simply stays put.
 */
const dock = document.querySelector<HTMLElement>(".dock");
const inlineButtons = document.querySelectorAll(".btn--call");

if (dock && inlineButtons.length > 0 && "IntersectionObserver" in window) {
  const onScreen = new Set<Element>();

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target);
        else onScreen.delete(entry.target);
      }
      dock.classList.toggle("dock--tucked", onScreen.size > 0);
    },
    { threshold: 0.55 },
  );

  for (const button of inlineButtons) observer.observe(button);
}
