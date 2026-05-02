export interface Project {
  name: string;
  description: string;
  url?: string;
  repo?: string;
  tags: string[];
  wip?: boolean;
}

export const projects: Project[] = [
  {
    name: 'boop.fish',
    description: 'Guild website. Built with Express and Bun.',
    url: 'https://boop.fish',
    tags: ['bun', 'express', 'web'],
  },
  {
    name: 'maproom viewer',
    description: 'Map room viewer app.',
    url: 'https://bymr-maproom3-viewer.chibbluffy.fyi',
    tags: ['web', 'maps'],
  },
  // Add more projects here
];
