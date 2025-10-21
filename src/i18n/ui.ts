export type NavContent = {
    home: string;
    blog: string;
    works: string;
};

export type TechItem = {
    name: string;
    years?: number;
    note?: string;
};

export type TechCategory = {
    title: string;
    items: TechItem[];
};

export type AccountLink = {
    id: string;
    label: string;
    href: string;
    value: string;
};

export type WorkItem = {
    name: string;
    description: string;
    details?: string;
    tech?: string;
    image?: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    links?: {
        label: string;
        text: string;
        href: string;
    }[];
};

export type WorkSection = {
    title: string;
    items: WorkItem[];
};

export type WorksContent = {
    heading: string;
    sections: WorkSection[];
};

export type BlogPost = {
    slug: string;
    title: string;
};

export type BlogContent = {
    heading: string;
    posts: BlogPost[];
};

export type IndexContent = {
    name: string;
    location: string;
    affiliation: string;
    techStackTitle: string;
    techCategories: TechCategory[];
    accountsTitle: string;
    accounts: AccountLink[];
    interestsTitle: string;
    interests: string[];
    contact: string;
};

export type MetaContent = {
    title: string;
    description: string;
};

export type PageContent = {
    navigation: NavContent;
    index: IndexContent;
    works: WorksContent;
    blog: BlogContent;
    meta: MetaContent;
};

export const languages = {
    ja: "日本語",
    en: "English",
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = "ja";

export const showDefaultLang = true;

export const routes = {
    ja: {
        home: "",
        blog: "blog",
        works: "works",
        posts: "posts",
    },
    en: {
        home: "",
        blog: "blog",
        works: "works",
        posts: "posts",
    },
} as const;

export const ui: Record<Language, PageContent> = {
    ja: {
        navigation: {
            home: "ホーム",
            blog: "ブログ",
            works: "制作物",
        },
        index: {
            name: "名前: 宮本 直幸",
            location: "活動拠点: 日本・札幌",
            affiliation: "所属: 北海道情報大学 経営情報学部 システム情報学科",
            techStackTitle: "技術スタック",
            techCategories: [
                {
                    title: "言語",
                    items: [
                        { name: "Java", years: 2 },
                        { name: "TypeScript", years: 1.5 },
                        { name: "JavaScript", years: 3 },
                        { name: "Go", years: 0.5 },
                        { name: "PHP", years: 0.5 },
                    ],
                },
                {
                    title: "フレームワーク",
                    items: [
                        { name: "React", years: 2 },
                        { name: "Spring Framework", years: 1 },
                        { name: "Laravel", years: 0.5 },
                        { name: "Node.js", years: 3 },
                    ],
                },
                {
                    title: "DevOps & インフラ構築",
                    items: [
                        { name: "AWS", years: 2 },
                        { name: "Docker", years: 1 },
                        { name: "PostgreSQL", years: 1 },
                        { name: "Git", years: 3 },
                        { name: "GitHub Workflow", years: 0.5 },
                    ],
                },
            ],
            accountsTitle: "アカウント",
            accounts: [
                { id: "x", label: "X", href: "https://x.com/Msprzk", value: "Msprzk" },
                { id: "github", label: "GitHub", href: "https://github.com/supurazako", value: "supurazako" },
                { id: "qiita", label: "Qiita", href: "https://qiita.com/supurazako", value: "supurazako" },
                { id: "zenn", label: "Zenn", href: "https://zenn.dev/supurazako", value: "supurazako" },
                { id: "linkedin", label: "linkedIn", href: "https://www.linkedin.com/in/miyamoto-naoyuki-85a524341/", value: "supurazako" },
                { id: "blog", label: "blog(勉強会の記録など)", href: "https://supurazako.com", value: "supurazako.com" },
            ],
            interestsTitle: "興味分野",
            interests: ["Web開発", "ネットワーク", "リアルタイム通信", "セキュリティ", "ソフトウェア開発"],
            contact: "連絡先: mnaoyuki0228 at gmail.com",
        },
        works: {
            heading: "制作物",
            sections: [
                {
                    title: "// 共同開発",
                    items: [
                        {
                            name: "Styraly（開発中）",
                            description: "「つながらないSNS」がキャッチコピーのクローズドなSNSです。繋がりすぎる時代に、少ないつながりを提供します。",
                            tech: "使用技術: Java (Spring Framework)",
                        },
                        {
                            name: "nicomado",
                            image: {
                                src: `${import.meta.env.BASE_URL}nicomado-image.png`,
                                alt: "nicomadoのスクリーンショット",
                                width: 600,
                                height: 200,
                            },
                            links: [
                                {
                                    label: "Webサイト",
                                    text: "nicomado",
                                    href: "https://nicomado.com",
                                },
                            ],
                            description: "YouTube、Twitchなどの動画やストリーミングを、一画面で同時に複数再生できるサイト。友人との二人チームで制作しています。",
                            tech: "使用技術: React Router v7, React, TypeScript, CSS, Cloudflare Worker",
                        },
                    ],
                },
                {
                    title: "// 個人開発",
                    items: [
                        {
                            name: "おにや配信通知bot",
                            links: [
                                {
                                    label: "X",
                                    text: "@oniya_stream",
                                    href: "https://x.com/oniya_stream",
                                },
                            ],
                            description: "おにやさんの配信を通知するbotです。Xアカウント、Discord、メールで動作しています。",
                            tech: "使用技術: Node.js, AWS EC2, GAS",
                        },
                    ],
                },
                {
                    title: "// コミュニティ",
                    items: [
                        {
                            name: "低レイヤーズさっぽろ",
                            links: [
                                {
                                    label: "connpass",
                                    text: "低レイヤーズさっぽろ",
                                    href: "https://low-layers-sapporo.connpass.com/",
                                },
                            ],
                            description: "低レイヤー技術に関する知見や交流を目的としたコミュニティおよび勉強会です。私が立ち上げ、現在は新たに参加したメンバーを含む2名で運営しています。",
                        },
                    ],
                },
            ],
        },
        blog: {
            heading: "イベントなどの記録",
            posts: [
                {
                    slug: "ns-business-plan-contest",
                    title: "N/S起業部ビジネスプランコンテスト2024に参加してきました！",
                },
            ],
        },
        meta: {
            title: "ポートフォリオ",
            description: "宮本直幸のポートフォリオサイトです。",
        },
    },
    en: {
        navigation: {
            home: "Home",
            blog: "Blog",
            works: "Works",
        },
        index: {
            name: "Name: Naoyuki Miyamoto",
            location: "Location: Sapporo, Japan",
            affiliation: "Affiliation: Faculty of Management and Information Science, Department of System Information Science, Hokkaido Information University",
            techStackTitle: "Tech Stack",
            techCategories: [
                {
                    title: "Core Languages",
                    items: [
                        { name: "Java", years: 4 },
                        { name: "TypeScript", years: 2 },
                        { name: "JavaScript", years: 3 },
                        { name: "Go", years: 1 },
                        { name: "PHP", years: 1 },
                    ],
                },
                {
                    title: "Frameworks",
                    items: [
                        { name: "React", years: 2 },
                        { name: "Spring Framework", years: 3 },
                        { name: "Laravel", years: 1 },
                        { name: "Node.js", years: 2 },
                    ],
                },
                {
                    title: "DevOps & Infrastructure",
                    items: [
                        { name: "AWS", years: 2 },
                        { name: "Docker", years: 2 },
                        { name: "PostgreSQL", years: 1 },
                        { name: "Git", years: 4 },
                        { name: "GitHub Workflow", years: 1 },
                    ],
                },
            ],
            accountsTitle: "Accounts",
            accounts: [
                { id: "x", label: "X", href: "https://x.com/Msprzk", value: "Msprzk" },
                { id: "github", label: "GitHub", href: "https://github.com/supurazako", value: "supurazako" },
                { id: "qiita", label: "Qiita", href: "https://qiita.com/supurazako", value: "supurazako" },
                { id: "zenn", label: "Zenn", href: "https://zenn.dev/supurazako", value: "supurazako" },
                { id: "linkedin", label: "linkedIn", href: "https://www.linkedin.com/in/miyamoto-naoyuki-85a524341/", value: "supurazako" },
                { id: "blog", label: "blog(for meetup, conf)", href: "https://supurazako.com", value: "supurazako.com" },
            ],
            interestsTitle: "Interests",
            interests: ["Web Development", "Computer Networking", "Real-time Communication", "Security", "Software Engineering"],
            contact: "Contact: mnaoyuki0228 at gmail.com",
        },
        works: {
            heading: "Works",
            sections: [
                {
                    title: "// Co-develop",
                    items: [
                        {
                            name: "Styraly (in development)",
                            description: 'A closed SNS with the tagline "an SNS that keeps distance." It offers a calmer space in an always-connected era.',
                            tech: "Tech: Java (Spring Framework)",
                        },
                        {
                            name: "nicomado",
                            image: {
                                src: `${import.meta.env.BASE_URL}nicomado-image.png`,
                                alt: "Screenshot of nicomado",
                                width: 600,
                                height: 200,
                            },
                            links: [
                                {
                                    label: "Website",
                                    text: "nicomado",
                                    href: "https://nicomado.com",
                                },
                            ],
                            description: "A web app that plays multiple YouTube and Twitch streams on a single screen. Built as a two-person project with a friend.",
                            tech: "Tech: React Router v7, React, TypeScript, CSS, Cloudflare Worker",
                        },
                    ],
                },
                {
                    title: "// Personal",
                    items: [
                        {
                            name: "Oniya stream notifier bot",
                            links: [
                                {
                                    label: "X",
                                    text: "@oniya_stream",
                                    href: "https://x.com/oniya_stream",
                                },
                            ],
                            description: "A bot that announces streamer Oniya's live sessions. It runs across X, Discord, and email.",
                            tech: "Tech: Node.js, AWS EC2, Google Apps Script",
                        },
                    ],
                },
                {
                    title: "// Community",
                    items: [
                        {
                            name: "Low Layers Sapporo",
                            links: [
                                {
                                    label: "connpass",
                                    text: "Low Layers Sapporo",
                                    href: "https://low-layers-sapporo.connpass.com/",
                                },
                            ],
                            description: "A community and meetup for sharing insights about low-level technologies. I founded it and run it with one more member.",
                        },
                    ],
                },
            ],
        },
        blog: {
            heading: "Event and activity notes",
            posts: [
                {
                    slug: "ns-business-plan-contest",
                    title: "We joined the N/S Entrepreneurship Business Plan Contest 2024!",
                },
            ],
        },
        meta: {
            title: "Portfolio",
            description: "The portfolio site of Naoyuki Miyamoto.",
        },
    },
};
