import {
    applyLanguage,
    getCurrentLanguage,
    initLanguage,
} from "./i18n-client";

function updateButtonStyles(buttons: HTMLButtonElement[], activeLang: string) {
    buttons.forEach((button) => {
        const lang = button.getAttribute("data-language-button");
        if (lang === activeLang) {
            button.classList.add("bg-white", "text-blue-600");
            button.classList.remove("bg-blue-500", "text-white/80");
        } else {
            button.classList.add("bg-blue-500", "text-white/80");
            button.classList.remove("bg-white", "text-blue-600");
        }
    });
}

function setupLanguageSwitcher(root: HTMLElement) {
    const buttons = Array.from(
        root.querySelectorAll<HTMLButtonElement>("[data-language-button]"),
    );

    const initialLang = initLanguage();
    updateButtonStyles(buttons, initialLang);

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const lang = button.getAttribute("data-language-button");
            if (!lang) {
                return;
            }
            applyLanguage(lang);
            updateButtonStyles(buttons, getCurrentLanguage());
        });
    });
}

const root = document.querySelector<HTMLElement>("[data-language-switcher]");
if (!root) {
    initLanguage();
    console.warn("Language switcher root not found.");
} else {
    setupLanguageSwitcher(root);
}
