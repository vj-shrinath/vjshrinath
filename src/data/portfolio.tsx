import { Code, Database, Smartphone, Cloud, GitMerge, Palette, Server, TestTubeDiagonal, Search, TrendingUp, Share2, FileText, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Html5Icon, Css3Icon, JavascriptIcon, ReactIcon, NextjsIcon, TailwindCssIcon } from '@/components/ui/custom-icons';

export const aboutMeText = `I am a results-driven Web Developer and Digital Marketer who bridges the gap between technical excellence and digital growth. With expertise in Next.js, React, and modern web technologies, I build high-performance, user-centric applications. Beyond coding, I leverage data-driven digital marketing strategies—including SEO, content strategy, and social media growth—to ensure that what I build reaches the right audience.

My unique dual-focus allows me to create digital experiences that not only look great and perform flawlessly but also rank well and convert visitors into loyal users. Whether it's crafting a complex web application or orchestrating a targeted marketing campaign, I bring a holistic approach to digital success, always aiming to deliver measurable impact.`;

type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

interface Skill {
    name: string;
    Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
    level: SkillLevel;
    color: string;
}

export const skillsData: Record<string, Skill[]> = {
    frontend: [
        { name: 'HTML5', Icon: Html5Icon, level: 'Expert', color: '#E34F26' },
        { name: 'CSS3', Icon: Css3Icon, level: 'Expert', color: '#1572B6' },
        { name: 'JavaScript', Icon: JavascriptIcon, level: 'Advanced', color: '#F7DF1E' },
        { name: 'React', Icon: ReactIcon, level: 'Advanced', color: '#61DAFB' },
        { name: 'Next.js', Icon: NextjsIcon, level: 'Intermediate', color: '#000000' },
        { name: 'Tailwind CSS', Icon: TailwindCssIcon, level: 'Advanced', color: '#06B6D4' },
    ],
    backend: [
        { name: 'Node.js', Icon: Server, level: 'Intermediate', color: '#339933' },
        { name: 'Express.js', Icon: Server, level: 'Intermediate', color: '#000000' },
    ],
    databases: [
        { name: 'MongoDB', Icon: Database, level: 'Intermediate', color: '#47A248' },
        { name: 'PostgreSQL', Icon: Database, level: 'Beginner', color: '#336791' },
        { name: 'Firebase', Icon: Cloud, level: 'Intermediate', color: '#FFCA28' },
    ],
    tools: [
        { name: 'Git & GitHub', Icon: GitMerge, level: 'Advanced', color: '#000000' },
        { name: 'VS Code', Icon: Code, level: 'Expert', color: '#007ACC' },
        { name: 'Figma', Icon: Palette, level: 'Intermediate', color: '#F24E1E' },
        { name: 'Jest / RTL', Icon: TestTubeDiagonal, level: 'Beginner', color: '#C21325' },
    ],
    digitalMarketing: [
        { name: 'SEO', Icon: Search, level: 'Advanced', color: '#4285F4' },
        { name: 'Google Analytics', Icon: TrendingUp, level: 'Intermediate', color: '#E37400' },
        { name: 'Social Media', Icon: Share2, level: 'Advanced', color: '#E4405F' },
        { name: 'Content Strategy', Icon: FileText, level: 'Expert', color: '#2C3E50' },
        { name: 'Email Marketing', Icon: Mail, level: 'Intermediate', color: '#D44638' },
    ],
};

export const softwareProjects = [
    {
        title: 'Personal Portfolio Website',
        description: 'This very website! A responsive and interactive portfolio built with Next.js, Tailwind CSS, and TypeScript to showcase my skills and projects. Features AI-enhanced profile generation.',
        imageUrl: '/images/Personal Portfolio Website project.png',
        imageHint: 'website design',
        tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'GenAI'],
        category: 'Web',
        liveUrl: '#', // Link to the current site
        repoUrl: 'https://github.com/vj-shrinath/portfolio-website',
    },
    {
        title: 'Patrikaa - Digital Invitation',
        description: 'A premium digital invitation platform for creating localized Indian wedding cards. Features a visual editor, multiple themes, and downloadable invites.',
        imageUrl: '/images/patrikaa-demo.png',
        imageHint: 'Patrikaa digital invitation app',
        tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
        category: 'Web',
        liveUrl: 'https://patrikaa.vercel.app/',
        repoUrl: 'https://github.com/vj-shrinath/Patrikaa',
    },
    {
        title: 'Shri Gajanan Bhaktisagar',
        description: 'A comprehensive devotional app for devotees of Shri Gajanan Maharaj. Features a vast collection of stotras, aartis, and religious texts for daily worship.',
        imageUrl: 'https://play-lh.googleusercontent.com/Vf59CLmlYcnGQACaQzj2LE-_RLN7QQI-PM85oJAJKDulIqszZGWRmAHTIMAiCoKwmnw=w480-h960-rw',
        imageHint: 'devotional android app',
        tags: ['Android', 'Mobile App', 'Java'],
        category: 'Android',
        liveUrl: 'https://play.google.com/store/apps/details?id=com.shri_gajanan_bhaktisagar&hl=en-us',
        repoUrl: '#',
    },
    {
        title: 'MVS Photography Quotation Maker',
        description: 'A specialized tool for photographers to generate professional quotations. Features include PDF generation, customizable templates, and an admin dashboard for managing services and rates.',
        imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczO-OGLmVmgphBNkts7BQYP6CI-L8qcVt7tkPzQd4UUEWthizqxzA_sJV_-aCnoD2OTQTxMtMTsECtLlmreAk4BQVDGH1nn-Vhr7GoXOkc-PWW7mWinnNbSX25b4138QFI9FQymJDxb-ilLiF1wHoBHw=w1626-h915-s-no-gm',
        imageHint: 'photography quotation app',
        tags: ['Flutter', 'Dart', 'Firebase', 'PDF Generation'],
        category: 'Android',
        liveUrl: '#',
        repoUrl: '#',
    },
    {
        title: 'Shaurya Softrack - GPS & FASTag',
        description: 'A corporate website for a GPS and FASTag distribution business. Features a modern UI with service details and partner integration.',
        imageUrl: '/images/shaurya-softrack.png',
        imageHint: 'Shaurya Softrack corporate website',
        tags: ['HTML', 'CSS', 'JavaScript'],
        category: 'Web',
        liveUrl: 'https://shaurya-softrack.vercel.app/',
        repoUrl: '#',
    },
    {
        title: 'Digital Menu Card',
        description: 'A menucard system for restaurants. Restaurants can register, add category-wise menus, and generate a QR code for tables. Customers can scan the QR code and access the full restaurants menu.',
        imageUrl: '/images/digital-menucard.jpg',
        imageHint: 'digital menu restaurant',
        tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
        category: 'Web',
        liveUrl: 'https://digital-menucard.web.app/hotel-marathi',
        repoUrl: 'https://github.com/vj-shrinath/digital-menu-card',
    },
    {
        title: 'Tic Tac Toe Game',
        description: 'A classic Tic Tac Toe game built with HTML, CSS, and JavaScript. Play against a friend in this interactive and fun web-based game. Features a clean UI and win-detection logic.',
        imageUrl: '/images/tic-tac-toe.png',
        imageHint: 'tic tac toe game',
        tags: ['HTML', 'CSS', 'JavaScript'],
        category: 'Web',
        liveUrl: '#',
        repoUrl: 'https://github.com/vj-shrinath/tic-tac-toe-game',
    },
    {
        title: 'Weather Dashboard',
        description: 'A web application that displays current weather and forecasts for searched locations using a third-party weather API. Features a clean, intuitive interface.',
        imageUrl: '/images/Weather Dashboard project image.png',
        imageHint: 'weather app',
        tags: ['JavaScript', 'HTML', 'CSS', 'OpenWeatherMap API'],
        category: 'Web',
        liveUrl: '#',
        repoUrl: 'https://github.com/vj-shrinath/PRODIGY_WD_05',
    },
];

export const marketingProjects = [
    {
        title: 'Social Media Campaign Strategy',
        description: 'Developed and executed a comprehensive social media strategy for a local brand, resulting in a 40% increase in engagement and 25% growth in follower count over 3 months.',
        imageUrl: '/images/digital-marketing-1.jpg',
        imageHint: 'social media strategy',
        tags: ['Social Media Marketing', 'Content Strategy', 'Analytics'],
        category: 'Social Media',
        liveUrl: '#',
        repoUrl: '#',
    },
    {
        title: 'SEO Optimization Project',
        description: 'Conducted a full SEO audit and implemented on-page and off-page optimization techniques, improving organic search rankings for key keywords.',
        imageUrl: '/images/digital-marketing-2.jpg',
        imageHint: 'seo optimization',
        tags: ['SEO', 'Keyword Research', 'Google Analytics'],
        category: 'SEO',
        liveUrl: '#',
        repoUrl: '#',
    },
    {
        title: 'Email Marketing Automation',
        description: 'Designed and set up an automated email marketing sequence, increasing open rates by 15% and click-through rates by 10%.',
        imageUrl: '/images/digital-marketing-3.jpg',
        imageHint: 'email marketing',
        tags: ['Email Marketing', 'Automation', 'Copywriting'],
        category: 'Email Marketing',
        liveUrl: '#',
        repoUrl: '#',
    },
    {
        title: 'Social Media Graphics Suite',
        description: 'Designed a complete suite of high-conversion social media graphics for Instagram and LinkedIn campaigns. Focused on brand consistency and visual storytelling.',
        imageUrl: '/images/social-media-graphics.jpg',
        imageHint: 'social media graphics',
        tags: ['Graphic Design', 'Canva', 'Photoshop', 'Branding'],
        category: 'Graphics',
        liveUrl: '#',
        repoUrl: '#',
    },
    {
        title: 'Google Ads PPC Campaign',
        description: 'Managed a high-budget Google Ads campaign. Optimized ad copy and bidding strategies to lower CPC by 20% while increasing conversion volume.',
        imageUrl: '/images/google-ads.jpg',
        imageHint: 'google ads dashboard',
        tags: ['PPC', 'Google Ads', 'SEM', 'ROI Optimization'],
        category: 'Ads',
        liveUrl: '#',
        repoUrl: '#',
    },
];

export const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'About Me', href: '#about-me' },
    { label: 'Recommendations', href: '#recommendations' },
    { label: 'Contact', href: '#contact' },
];
