"use strict";

(() => {
    document.documentElement.classList.remove("no-js");
    const button = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    const desktop = window.matchMedia("(min-width: 1024px)");

    function setMenu(open) {
        menu.classList.toggle("hidden", !open);
        button.setAttribute("aria-expanded", String(open));
        button.setAttribute("aria-label", open ? "Fechar menu de navegação" : "Abrir menu de navegação");
        const icon = button.querySelector("i");
        icon.classList.toggle("fa-bars", !open);
        icon.classList.toggle("fa-xmark", open);
    }

    if (button && menu) {
        button.addEventListener("click", () => setMenu(button.getAttribute("aria-expanded") !== "true"));
        menu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                setMenu(false);
                const target = document.querySelector(link.getAttribute("href"));
                if (target) {
                    target.setAttribute("tabindex", "-1");
                    target.focus({ preventScroll: true });
                }
            });
        });
        document.addEventListener("keydown", event => {
            if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
                setMenu(false);
                button.focus();
            }
        });
        desktop.addEventListener("change", () => setMenu(false));
    }

})();

// Vercel Web Analytics for a static site. Keep initialization external for CSP.
// Local development and file previews do not request Vercel-only endpoints.
if (location.protocol === "https:" && !["localhost", "127.0.0.1", "[::1]"].includes(location.hostname)) {
    window.va = window.va || function () {
        (window.vaq = window.vaq || []).push(arguments);
    };
    const analytics = document.createElement("script");
    analytics.defer = true;
    analytics.src = "/_vercel/insights/script.js";
    document.head.appendChild(analytics);
}
