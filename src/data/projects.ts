export interface Project {
  name: string;
  description: string;
  url?: string;
  repo?: string;
  tags: string[];
  category: 'bymr' | 'guild' | 'tools' | 'games' | 'other';
  wip?: boolean;
  archived?: boolean;
}

export const categories: Record<Project['category'], string> = {
  bymr: 'Backyard Monsters Refitted',
  guild: 'BDO Guild',
  tools: 'Tools & Apps',
  games: 'Games',
  other: 'Other',
};

export const projects: Project[] = [
  // --- BYMR ---
  {
    name: 'BYMR Maproom Viewer — Map Room 3',
    description: 'Viewer for players on Map Room 3. Each map room version in Backyard Monsters Refitted has completely different gameplay and layout — this viewer is specifically for MR3 accounts.',
    url: 'https://bymr-maproom3-viewer.chibbluffy.fyi',
    repo: 'https://github.com/Chibbluffy/bymr-mr3-map-viewer',
    tags: ['bymr', 'web', 'tool'],
    category: 'bymr',
  },
  {
    name: 'BYMR Maproom Viewer — Map Room 2',
    description: 'Viewer for players on Map Room 2. MR2 has its own distinct gameplay and map structure that requires its own dedicated viewer.',
    url: 'https://bymr-maproom2-viewer.chibbluffy.fyi',
    repo: 'https://github.com/Chibbluffy/bymr-mr2-map-viewer',
    tags: ['bymr', 'web', 'tool'],
    category: 'bymr',
  },
  {
    name: 'BYMR Beginner Guide',
    description: 'Beginner guide for Backyard Monsters Refitted.',
    repo: 'https://github.com/Chibbluffy/bym-refitted-beginner-guide',
    tags: ['bymr', 'docs'],
    category: 'bymr',
  },
  {
    name: 'backyard-monsters-refitted',
    description: 'Open source revival of Backyard Monsters. I contribute to this project.',
    repo: 'https://github.com/bym-refitted/backyard-monsters-refitted',
    tags: ['open source', 'flash', 'game'],
    category: 'bymr',
  },
  // --- BDO Guild ---
  {
    name: 'boop.fish',
    description: 'Guild website for a Black Desert Online guild. Built with Express and Bun.',
    url: 'https://boop.fish',
    repo: 'https://github.com/Chibbluffy/boop.fish',
    tags: ['bun', 'express', 'web'],
    category: 'guild',
  },
  {
    name: 'BoopBot',
    description: 'Discord bot companion to boop.fish. Shares the same database and runs on the same server.',
    repo: 'https://github.com/Chibbluffy/BoopBot',
    tags: ['discord', 'bot', 'python'],
    category: 'guild',
  },
  // --- Tools & Apps ---
  {
    name: 'Fireworks Demo System',
    description: 'Two-part Windows sales tool for fireworks retailers. The manager handles inventory and lets you associate demo videos with products. The display player runs a video playlist on loop, and if a barcode scanner scans a product it stops, plays that product\'s demo video, then resumes where it left off. Source is private but releases are available to download.',
    repo: 'https://github.com/Chibbluffy/FireworksDemoSystemReleases',
    tags: ['desktop', 'windows', 'inventory manager', 'media player'],
    category: 'tools',
    wip: true,
  },
  {
    name: 'VRBO Availability Checker',
    description: 'Selenium script that checks VRBO for availability on specific dates. Schedules itself to run at random times during the day to simulate normal browsing behavior.',
    repo: 'https://github.com/Chibbluffy/vrbo-availability-checker',
    tags: ['python', 'selenium', 'automation'],
    category: 'tools',
    wip: true,
  },
  // --- Games ---
  {
    name: 'Rapid Retrieval Game',
    description: 'A game in very early development using Godot. Still learning the engine.',
    repo: 'https://github.com/Chibbluffy/rapid-retrieval-game',
    tags: ['godot', 'game'],
    category: 'games',
    wip: true,
  },
  // --- Other ---
  {
    name: 'Advent of Code 2025',
    description: 'My solutions for Advent of Code 2025.',
    repo: 'https://github.com/Chibbluffy/advent-of-code-2025',
    tags: ['coding challenge'],
    category: 'other',
  },
  {
    name: 'Genshin Damage Calculator',
    description: 'Old Genshin Impact damage calculator. Worked well for a while but too many characters and mechanics have been added since for it to stay current.',
    repo: 'https://github.com/Chibbluffy/genshin-dmg-calc.github.io',
    tags: ['genshin', 'calculator', 'web'],
    category: 'other',
    archived: true,
  },
];
