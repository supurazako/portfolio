import type { Language } from "../i18n/content";
import {
    content,
    defaultLanguage,
    supportedLanguages,
} from "../i18n/content";

type PageContent = (typeof content)[Language];

const STORAGE_KEY = "portfolio-language";

let currentLanguage: Language = defaultLanguage;
let initialized = false;

function isLanguage(value: string | null | undefined): value is Language {
    return supportedLanguages.includes(value as Language);
}

function getNavigatorLanguage(): Language {
    if (typeof window === "undefined") {
        return defaultLanguage;
    }
    const lang = window.navigator.language?.slice(0, 2).toLowerCase();
    if (isLanguage(lang)) {
        return lang;
    }
    return defaultLanguage;
}

export function detectLanguage(): Language {
    if (typeof window === "undefined") {
        return defaultLanguage;
    }
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) {
        return stored;
    }
    return getNavigatorLanguage();
}

type ApplyOptions = {
    persist?: boolean;
};

export function initLanguage(): Language {
    if (!initialized) {
        const lang = detectLanguage();
        applyLanguage(lang, { persist: false });
        initialized = true;
    }
    return currentLanguage;
}

export function getCurrentLanguage(): Language {
    return currentLanguage;
}

export function applyLanguage(
    lang: string,
    options: ApplyOptions = {},
): void {
    if (!isLanguage(lang)) {
        console.warn(`Unsupported language: ${lang}`);
        return;
    }

    currentLanguage = lang;

    if (typeof window !== "undefined" && options.persist !== false) {
        window.localStorage.setItem(STORAGE_KEY, lang);
    }

    if (typeof document === "undefined") {
        return;
    }

    document.documentElement.lang = lang;

    const data = content[lang];
    renderNavigation(data.navigation);
    renderIndex(data.index);
    renderWorks(data.works);
    renderBlog(data.blog);
    updateMeta(data.meta);
}

function renderNavigation(navContent: PageContent["navigation"]): void {
    const container = document.querySelector<HTMLElement>("[data-i18n-nav]");
    if (!container) {
        return;
    }

    const home = container.querySelector<HTMLElement>("[data-nav-key='home']");
    const blog = container.querySelector<HTMLElement>("[data-nav-key='blog']");
    const works = container.querySelector<HTMLElement>("[data-nav-key='works']");

    if (home) home.textContent = navContent.home;
    if (blog) blog.textContent = navContent.blog;
    if (works) works.textContent = navContent.works;
}

function renderIndex(indexContent: PageContent["index"]): void {
    const root = document.querySelector<HTMLElement>("[data-i18n-index]");
    if (!root) {
        return;
    }

    setText(root, "[data-index-key='name']", indexContent.name);
    setText(root, "[data-index-key='location']", indexContent.location);
    setText(root, "[data-index-key='affiliation']", indexContent.affiliation);
    setText(root, "[data-index-key='accountsTitle']", indexContent.accountsTitle);
    setText(root, "[data-index-key='interestsTitle']", indexContent.interestsTitle);
    setText(root, "[data-index-key='contact']", indexContent.contact);

    const techTitle = root.querySelector<HTMLElement>(
        "[data-index-key='techStackTitle']",
    );
    if (techTitle) {
        techTitle.textContent = indexContent.techStackTitle;
    }

    const techContainer = root.querySelector<HTMLElement>(
        "[data-i18n-tech-stack]",
    );
    if (techContainer) {
        renderTechStack(techContainer, indexContent.techCategories);
    }

    const accountsList = root.querySelector<HTMLElement>(
        "[data-i18n-accounts]",
    );
    if (accountsList) {
        renderAccounts(accountsList, indexContent.accounts);
    }

    const interestsList = root.querySelector<HTMLElement>(
        "[data-i18n-interests]",
    );
    if (interestsList) {
        renderList(interestsList, indexContent.interests);
    }
}

function renderTechStack(
    container: HTMLElement,
    categories: PageContent["index"]["techCategories"],
): void {
    container.innerHTML = "";
    categories.forEach((category) => {
        const card = document.createElement("div");
        card.className =
            "rounded border border-blue-200 bg-white p-3 shadow-sm";

        const title = document.createElement("h3");
        title.className = "text-sm font-semibold text-blue-700";
        title.textContent = category.title;

        const list = document.createElement("ul");
        list.className = "mt-2 list-disc list-inside space-y-1 text-sm";
        category.items.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            list.appendChild(li);
        });

        card.appendChild(title);
        card.appendChild(list);
        container.appendChild(card);
    });
}

function renderAccounts(
    container: HTMLElement,
    accounts: PageContent["index"]["accounts"],
): void {
    container.innerHTML = "";
    accounts.forEach((account) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = account.href;
        link.textContent = account.value;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        li.append(`${account.label}: `);
        li.appendChild(link);
        container.appendChild(li);
    });
}

function renderList(container: HTMLElement, items: string[]): void {
    container.innerHTML = "";
    items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        container.appendChild(li);
    });
}

function renderWorks(worksContent: PageContent["works"]): void {
    const container = document.querySelector<HTMLElement>("[data-i18n-works]");
    if (!container) {
        return;
    }

    container.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = worksContent.heading;
    container.appendChild(heading);

    worksContent.sections.forEach((section) => {
        const sectionWrapper = document.createElement("div");
        sectionWrapper.className = "mt-6";

        const sectionTitle = document.createElement("h2");
        sectionTitle.textContent = section.title;
        sectionWrapper.appendChild(sectionTitle);

        section.items.forEach((item) => {
            const article = document.createElement("article");
            article.className = "mt-4 space-y-2";

            const name = document.createElement("h3");
            name.textContent = item.name;
            article.appendChild(name);

            if (item.image) {
                const image = document.createElement("img");
                image.src = item.image.src;
                image.alt = item.image.alt;
                image.width = item.image.width;
                image.height = item.image.height;
                article.appendChild(image);
            }

            item.links?.forEach((link) => {
                const paragraph = document.createElement("p");
                paragraph.textContent = `${link.label}: `;
                const anchor = document.createElement("a");
                anchor.href = link.href;
                anchor.textContent = link.text;
                anchor.target = "_blank";
                anchor.rel = "noopener noreferrer";
                paragraph.appendChild(anchor);
                article.appendChild(paragraph);
            });

            const description = document.createElement("p");
            description.textContent = item.description;
            article.appendChild(description);

            if (item.details) {
                const details = document.createElement("p");
                details.textContent = item.details;
                article.appendChild(details);
            }

            if (item.tech) {
                const tech = document.createElement("p");
                tech.textContent = item.tech;
                article.appendChild(tech);
            }

            sectionWrapper.appendChild(article);
        });

        container.appendChild(sectionWrapper);
    });
}

function renderBlog(blogContent: PageContent["blog"]): void {
    const heading = document.querySelector<HTMLElement>(
        "[data-i18n-blog-heading]",
    );
    if (heading) {
        heading.textContent = blogContent.heading;
    }

    const postsContainer = document.querySelector<HTMLElement>(
        "[data-i18n-blog-posts]",
    );

    if (!postsContainer) {
        return;
    }

    postsContainer.innerHTML = "";

    blogContent.posts.forEach((post) => {
        const link = document.createElement("a");
        link.className = "text-black text-lg underline";
        link.href = `${import.meta.env.BASE_URL}posts/${post.slug}/`;
        link.textContent = post.title;
        postsContainer.appendChild(link);
    });
}

function updateMeta(metaContent: PageContent["meta"]): void {
    if (typeof document === "undefined") {
        return;
    }

    document.title = metaContent.title;

    setMetaContent("meta[name='description']", metaContent.description);
    setMetaContent("meta[property='og:title']", metaContent.title);
    setMetaContent("meta[property='og:description']", metaContent.description);
    setMetaContent("meta[name='twitter:title']", metaContent.title);
    setMetaContent("meta[name='twitter:description']", metaContent.description);
}

function setText(
    root: ParentNode,
    selector: string,
    value: string,
): void {
    const element = root.querySelector<HTMLElement>(selector);
    if (element) {
        element.textContent = value;
    }
}

function setMetaContent(selector: string, value: string): void {
    const element = document.querySelector<HTMLMetaElement>(selector);
    if (element) {
        element.setAttribute("content", value);
    }
}
