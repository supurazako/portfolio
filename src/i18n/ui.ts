export type NavContent = {
    home: string;
    blog: string;
    works: string;
};

export type AccountLink = {
    id: string;
    label: string;
    href: string;
    value: string;
};

export type ProfileItem = {
    title: string;
    meta?: string;
    paragraphs: string[];
    tags?: string[];
    links?: {
        label: string;
        href: string;
    }[];
};

export type ProfileSection = {
    heading: string;
    intro?: string;
    items: ProfileItem[];
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

export type IndexContent = {
    name: string;
    handle: string;
    location: string;
    affiliation: string;
    introduction: string[];
    experience: ProfileSection;
    securityActivities: ProfileSection;
    selectedWork: ProfileSection;
    talks: ProfileSection;
    community: ProfileSection;
    skillsTitle: string;
    skillGroups: {
        title: string;
        items: string[];
    }[];
    accountsTitle: string;
    accounts: AccountLink[];
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
            name: "宮本 直幸",
            handle: "supurazako",
            location: "日本・札幌",
            affiliation: "北海道情報大学在学",
            introduction: [
                "北海道情報大学で学びながら、セキュリティ企業でソフトウェア開発をしています。",
                "ネットワークプロトコルやリアルタイム通信の仕組みを追いかけるのが好きです。最近はMoQ、WebRTC、Webセキュリティに関心があります。",
            ],
            experience: {
                heading: "Experience",
                items: [
                    {
                        title: "株式会社セキュアサイクル",
                        meta: "2025年4月〜現在 / ソフトウェア開発（アルバイト）",
                        paragraphs: ["セキュリティ企業で、ソフトウェア開発に携わっています。"],
                    },
                ],
            },
            securityActivities: {
                heading: "Security Activities",
                items: [
                    {
                        title: "SecHack365 2026",
                        meta: "世界観駆動コース / 取り組み中",
                        paragraphs: [
                            "MoQとセキュリティをテーマに取り組んでいます。",
                            "ライブ配信への関心からMoQに興味を持ち、コードを読んで仕組みや挙動を理解すること、実務を通じてセキュリティへの関心を深めたことから、このテーマを選びました。現在は具体的な方向性を検討しています。",
                        ],
                        tags: ["MoQ", "Security"],
                    },
                    {
                        title: "セキュリティ・キャンプ全国大会2026",
                        meta: "開発コースY4「CDN自作ゼミ」",
                        paragraphs: [
                            "HTTP、IPv6、MoQに対応する小規模なCDNを制作し、ソフトウェアから物理ネットワークまで、L1〜L7を横断して仕組みを学びました。",
                        ],
                        tags: ["CDN", "HTTP", "IPv6", "MoQ"],
                        links: [
                            {
                                label: "参加記を読む",
                                href: "https://supurazako.com/posts/security-camp-2026-y4-cdn-interview/",
                            },
                        ],
                    },
                ],
            },
            selectedWork: {
                heading: "Work",
                items: [
                    {
                        title: "NATハンズオン",
                        meta: "企画・設計・講師 / 参加者8名",
                        paragraphs: [
                            "低レイヤーズさっぽろ向けに、Docker環境でNAPTの仕組みを学ぶハンズオンを企画・設計し、講師として実施しました。",
                            "GoとNAPTの一方に馴染みがない参加者も、もう一方の知識を足掛かりに取り組める教材を目指しました。教材の実装では、Coding Agentが生成した内容をレビュー・修正しています。",
                        ],
                        tags: ["Go", "Docker", "NAPT", "conntrack", "DNAT"],
                        links: [
                            {
                                label: "GitHubで見る",
                                href: "https://github.com/supurazako/nat-handson",
                            },
                        ],
                    },
                    {
                        title: "nicomado",
                        meta: "2人チーム / 開発・運用中",
                        paragraphs: [
                            "YouTubeやTwitchなどの動画・ライブ配信を、一画面で同時に視聴できるサービスです。",
                            "バックエンド、RemixからReact Router 7への移行、Cloudflareへのデプロイを担当しました。移行・デプロイ時には、ロギングを使ってCloudflare固有のAdapterに関する問題を切り分けました。",
                        ],
                        tags: ["TypeScript", "React Router 7", "React", "Cloudflare Workers"],
                        links: [
                            {
                                label: "Webサイトを見る",
                                href: "https://nicomado.com",
                            },
                        ],
                    },
                ],
            },
            talks: {
                heading: "Talks",
                intro: "ネットワークやリアルタイム通信を中心に、調べたことを勉強会やカンファレンスで発表しています。",
                items: [
                    {
                        title: "ビデオ通話が繋がる0.2秒で何が起きているのか",
                        meta: "MIERUNE BBQ #19 / 2026年7月15日",
                        paragraphs: ["Google Meetを例に、経路探索、鍵交換、暗号化、接続後の品質調整までを紹介しました。"],
                        tags: ["WebRTC", "ICE", "DTLS", "SRTP"],
                        links: [{ label: "Speaker Deck", href: "https://speakerdeck.com/supurazako/what-happens-when-video-calling" }],
                    },
                    {
                        title: "WebTransportという技術、気になります",
                        meta: "TechRAMEN 2025 Conference / 2025年7月26日",
                        paragraphs: ["WebTransportと、その周辺にあるリアルタイム通信技術を紹介しました。"],
                        tags: ["WebTransport", "QUIC"],
                        links: [{ label: "Docswell", href: "https://docswell.com/s/supurazako/5W464D-2025-07-26-114558" }],
                    },
                    {
                        title: "なぜWebSocketは革命なのか",
                        meta: "#5 はじめてのIT勉強会 in 仙台 / 2025年",
                        paragraphs: ["WebSocketがWebにもたらした双方向通信の変化を紹介しました。"],
                        tags: ["WebSocket", "Real-time Communication"],
                        links: [{ label: "Docswell", href: "https://www.docswell.com/s/supurazako/513MX8-2025-08-27-192117" }],
                    },
                    {
                        title: "Gitのcommitの粒度が難しすぎる！",
                        meta: "#10 はじめてのIT勉強会 in 札幌 / 2025年",
                        paragraphs: ["変更をどの単位で記録するかを、身近な例から考えた発表です。"],
                        tags: ["Git", "Software Development"],
                        links: [{ label: "Docswell", href: "https://docswell.com/s/supurazako/K22WGG-2025-01-23-120000" }],
                    },
                ],
            },
            community: {
                heading: "Community",
                items: [
                    {
                        title: "低レイヤーズさっぽろ",
                        meta: "オフライン4回・オンライン1回開催",
                        paragraphs: [
                            "低レイヤー技術について話せる場所が札幌になかったので、「なければ作ればいい」と考えて立ち上げました。",
                            "企画、会場調整、登壇者募集、当日運営を担当しています。各回おおむね10人前後が参加しています。",
                        ],
                        links: [{ label: "connpass", href: "https://low-layers-sapporo.connpass.com/" }],
                    },
                ],
            },
            skillsTitle: "Skills & Interests",
            skillGroups: [
                {
                    title: "主に使用する言語",
                    items: ["Go", "TypeScript"],
                },
                {
                    title: "関心領域",
                    items: ["ネットワークプロトコル", "リアルタイム通信", "MoQ", "WebRTC", "Webセキュリティ"],
                },
            ],
            accountsTitle: "アカウント",
            accounts: [
                { id: "x", label: "X", href: "https://x.com/Msprzk", value: "Msprzk" },
                { id: "github", label: "GitHub", href: "https://github.com/supurazako", value: "supurazako" },
                { id: "qiita", label: "Qiita", href: "https://qiita.com/supurazako", value: "supurazako" },
                { id: "zenn", label: "Zenn", href: "https://zenn.dev/supurazako", value: "supurazako" },
                { id: "speakerdeck", label: "Speaker Deck", href: "https://speakerdeck.com/supurazako", value: "supurazako" },
                { id: "docswell", label: "Docswell", href: "https://docswell.com/user/supurazako", value: "supurazako" },
                { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/miyamoto-naoyuki-85a524341/", value: "Naoyuki Miyamoto" },
                { id: "blog", label: "Blog", href: "https://supurazako.com", value: "supurazako.com" },
            ],
            contact: "mnaoyuki0228 at gmail.com",
        },
        works: {
            heading: "制作物",
            sections: [
                {
                    title: "// 共同開発",
                    items: [
                        {
                            name: "nicomado",
                            image: {
                                src: `${import.meta.env.BASE_URL}nicomado-image.webp`,
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
                            details: "バックエンド、RemixからReact Router 7への移行、Cloudflareへのデプロイを担当しました。",
                            tech: "使用技術: React Router v7, React, TypeScript, CSS, Cloudflare Worker",
                        },
                    ],
                },
                {
                    title: "// 個人開発",
                    items: [
                        {
                            name: "NATハンズオン",
                            links: [
                                {
                                    label: "GitHub",
                                    text: "nat-handson",
                                    href: "https://github.com/supurazako/nat-handson",
                                },
                            ],
                            description: "低レイヤーズさっぽろ向けに企画・設計し、8名を対象に講師として実施したNAPTハンズオン教材です。",
                            details: "教材の実装では、Coding Agentが生成した内容をレビュー・修正しました。",
                            tech: "使用技術: Go, Docker, NAPT, conntrack, DNAT",
                        },
                        {
                            name: "おにや配信通知bot",
                            image: {
                                src: `${import.meta.env.BASE_URL}oniya-stream-image.webp`,
                                alt: "おにや配信通知botのスクリーンショット",
                                width: 600,
                                height: 200,
                            },
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
                            image: {
                                src: `${import.meta.env.BASE_URL}low-layers-sapporo.webp`,
                                alt: "Screenshot of Low Layers Sapporo",
                                width: 300,
                                height: 100,
                            },
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
            name: "Naoyuki Miyamoto",
            handle: "supurazako",
            location: "Sapporo, Japan",
            affiliation: "Hokkaido Information University Student",
            introduction: [
                "I study at Hokkaido Information University while working in software development at a cybersecurity company.",
                "I enjoy exploring network protocols and real-time communication. I am currently interested in MoQ, WebRTC, and web security.",
            ],
            experience: {
                heading: "Experience",
                items: [{ title: "Secure Cycle Inc.", meta: "April 2025–Present / Part-time Software Developer", paragraphs: ["I work on software development at a cybersecurity company."] }],
            },
            securityActivities: {
                heading: "Security Activities",
                items: [
                    {
                        title: "SecHack365 2026",
                        meta: "Worldview-Driven Course / In progress",
                        paragraphs: [
                            "I am exploring MoQ and security.",
                            "My interest in live streaming led me to MoQ. I chose this theme because I enjoy reading code to understand how systems behave, and because my professional experience deepened my interest in security. I am currently shaping the specific direction of the project.",
                        ],
                        tags: ["MoQ", "Security"],
                    },
                    {
                        title: "Security Camp 2026 National Conference",
                        meta: "Development Course Y4: Build Your Own CDN",
                        paragraphs: ["I built a small CDN supporting HTTP, IPv6, and MoQ, gaining hands-on experience across the stack from physical networking through application protocols."],
                        tags: ["CDN", "HTTP", "IPv6", "MoQ"],
                        links: [{ label: "Read the write-up (Japanese)", href: "https://supurazako.com/posts/security-camp-2026-y4-cdn-interview/" }],
                    },
                ],
            },
            selectedWork: {
                heading: "Work",
                items: [
                    {
                        title: "NAT Hands-on Workshop",
                        meta: "Planning, design, and instruction / 8 participants",
                        paragraphs: [
                            "I planned and taught a workshop for Low Layers Sapporo where participants learn NAPT in a Docker environment.",
                            "The material was designed so that familiarity with either Go or NAPT could help participants learn the other. I reviewed and revised material initially produced with a coding agent.",
                        ],
                        tags: ["Go", "Docker", "NAPT", "conntrack", "DNAT"],
                        links: [{ label: "View on GitHub", href: "https://github.com/supurazako/nat-handson" }],
                    },
                    {
                        title: "nicomado",
                        meta: "Two-person team / In development and operation",
                        paragraphs: [
                            "A service for watching multiple YouTube and Twitch videos or live streams on one screen.",
                            "I worked on the backend, the migration from Remix to React Router 7, and deployment to Cloudflare. During the migration and deployment, I used logging to isolate issues involving Cloudflare-specific adapters.",
                        ],
                        tags: ["TypeScript", "React Router 7", "React", "Cloudflare Workers"],
                        links: [{ label: "Visit the website", href: "https://nicomado.com" }],
                    },
                ],
            },
            talks: {
                heading: "Talks",
                intro: "I share what I learn about networking and real-time communication at meetups and conferences.",
                items: [
                    {
                        title: "What Happens in the 0.2 Seconds Before a Video Call Connects?",
                        meta: "MIERUNE BBQ #19 / July 15, 2026",
                        paragraphs: ["Using Google Meet as an example, I covered path discovery, key exchange, encryption, and quality adaptation after connection."],
                        tags: ["WebRTC", "ICE", "DTLS", "SRTP"],
                        links: [{ label: "Speaker Deck", href: "https://speakerdeck.com/supurazako/what-happens-when-video-calling" }],
                    },
                    {
                        title: "WebTransport: A Technology Worth Watching",
                        meta: "TechRAMEN 2025 Conference / July 26, 2025",
                        paragraphs: ["An introduction to WebTransport and the real-time communication technologies around it."],
                        tags: ["WebTransport", "QUIC"],
                        links: [{ label: "Docswell", href: "https://docswell.com/s/supurazako/5W464D-2025-07-26-114558" }],
                    },
                    {
                        title: "Why WebSocket Was Revolutionary",
                        meta: "First IT Meetup in Sendai #5 / 2025",
                        paragraphs: ["A talk about how WebSocket brought bidirectional communication to the Web."],
                        tags: ["WebSocket", "Real-time Communication"],
                        links: [{ label: "Docswell", href: "https://www.docswell.com/s/supurazako/513MX8-2025-08-27-192117" }],
                    },
                    {
                        title: "Why Is Git Commit Granularity So Difficult?",
                        meta: "First IT Meetup in Sapporo #10 / 2025",
                        paragraphs: ["A practical look at how to choose the right unit for recording changes."],
                        tags: ["Git", "Software Development"],
                        links: [{ label: "Docswell", href: "https://docswell.com/s/supurazako/K22WGG-2025-01-23-120000" }],
                    },
                ],
            },
            community: {
                heading: "Community",
                items: [{
                    title: "Low Layers Sapporo",
                    meta: "Four in-person and one online event",
                    paragraphs: [
                        "There was no place in Sapporo to talk about low-level technology, so I decided to create one.",
                        "I handle planning, venue coordination, speaker recruitment, and event-day operations. Each event has drawn around ten participants.",
                    ],
                    links: [{ label: "connpass", href: "https://low-layers-sapporo.connpass.com/" }],
                }],
            },
            skillsTitle: "Skills & Interests",
            skillGroups: [
                {
                    title: "Primary Languages",
                    items: ["Go", "TypeScript"],
                },
                {
                    title: "Interests",
                    items: ["Network Protocols", "Real-time Communication", "MoQ", "WebRTC", "Web Security"],
                },
            ],
            accountsTitle: "Accounts",
            accounts: [
                { id: "x", label: "X", href: "https://x.com/Msprzk", value: "Msprzk" },
                { id: "github", label: "GitHub", href: "https://github.com/supurazako", value: "supurazako" },
                { id: "qiita", label: "Qiita", href: "https://qiita.com/supurazako", value: "supurazako" },
                { id: "zenn", label: "Zenn", href: "https://zenn.dev/supurazako", value: "supurazako" },
                { id: "speakerdeck", label: "Speaker Deck", href: "https://speakerdeck.com/supurazako", value: "supurazako" },
                { id: "docswell", label: "Docswell", href: "https://docswell.com/user/supurazako", value: "supurazako" },
                { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/miyamoto-naoyuki-85a524341/", value: "Naoyuki Miyamoto" },
                { id: "blog", label: "Blog", href: "https://supurazako.com", value: "supurazako.com" },
            ],
            contact: "mnaoyuki0228 at gmail.com",
        },
        works: {
            heading: "Works",
            sections: [
                {
                    title: "// Co-develop",
                    items: [
                        {
                            name: "nicomado",
                            image: {
                                src: `${import.meta.env.BASE_URL}nicomado-image.webp`,
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
                            details: "I worked on the backend, the migration from Remix to React Router 7, and deployment to Cloudflare.",
                            tech: "Tech: React Router v7, React, TypeScript, CSS, Cloudflare Worker",
                        },
                    ],
                },
                {
                    title: "// Personal",
                    items: [
                        {
                            name: "NAT Hands-on Workshop",
                            links: [
                                {
                                    label: "GitHub",
                                    text: "nat-handson",
                                    href: "https://github.com/supurazako/nat-handson",
                                },
                            ],
                            description: "A NAPT workshop I planned, designed, and taught to eight participants at Low Layers Sapporo.",
                            details: "I reviewed and revised workshop material initially produced with a coding agent.",
                            tech: "Tech: Go, Docker, NAPT, conntrack, DNAT",
                        },
                        {
                            name: "Oniya stream notifier bot",
                            image: {
                                src: `${import.meta.env.BASE_URL}oniya-stream-image.webp`,
                                alt: "Screenshot of Oniya stream notifier bot",
                                width: 600,
                                height: 200,
                            },
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
                            image: {
                                src: `${import.meta.env.BASE_URL}low-layers-sapporo.webp`,
                                alt: "Screenshot of Low Layers Sapporo",
                                width: 300,
                                height: 100,
                            },
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
        meta: {
            title: "Portfolio",
            description: "The portfolio site of Naoyuki Miyamoto.",
        },
    },
};
