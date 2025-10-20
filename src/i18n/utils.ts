import { defaultLang, languages, routes, showDefaultLang, ui, type Language } from "./ui";

type UIMap = typeof ui;
type DefaultLanguage = typeof defaultLang;
export type TranslationKey = keyof UIMap[DefaultLanguage];
export type RouteKey = keyof typeof routes[DefaultLanguage];

function getBaseSegments(): string[] {
    const base = import.meta.env.BASE_URL ?? "/";
    return base.split("/").filter(Boolean);
}

export function stripBaseSegments(pathname: string): string[] {
    const segments = pathname.split("/").filter(Boolean);
    const baseSegments = getBaseSegments();
    if (baseSegments.length === 0) {
        return segments;
    }
    const matchesBase = baseSegments.every((segment, index) => segments[index] === segment);
    return matchesBase ? segments.slice(baseSegments.length) : segments;
}

export function getLangFromUrl(url: URL): Language {
    const [lang] = stripBaseSegments(url.pathname);
    if (lang && lang in ui) {
        return lang as Language;
    }
    return defaultLang;
}

export function useTranslations(lang: Language) {
    return function translate<Key extends TranslationKey>(key: Key): UIMap[DefaultLanguage][Key] {
        return ui[lang][key] ?? ui[defaultLang][key];
    };
}

export function useTranslatedPath(lang: Language) {
    return function translatePath(path: string, targetLang: Language = lang): string {
        const normalizedPath = path.startsWith("/") ? path : `/${path}`;
        if (!showDefaultLang && targetLang === defaultLang) {
            return normalizedPath;
        }
        const joined = `/${targetLang}${normalizedPath}`;
        return joined.replace(/\/{2,}/g, "/");
    };
}

export function translateRouteSegment(route: RouteKey, lang: Language): string {
    const langRoutes = routes[lang] ?? routes[defaultLang];
    const fallback = routes[defaultLang];
    const segment = langRoutes?.[route] ?? fallback[route] ?? "";
    return segment;
}

export function getLanguageStaticPaths() {
    return (Object.keys(languages) as Language[]).map((lang) => ({
        params: { lang },
    }));
}
