interface dataProps {
  key: number | string;
  title: string;
  type?: string;
  active?: boolean;
}

export const offerData: dataProps[] = [
  { key: 0, title: 'Select a position...' },
  {
    key: 'drupal-frontend-developer',
    title: 'Drupal Frontend Developer',
    type: '100% remote',
    active: true,
  },
  {
    key: 'drupal-backend-developer',
    title: 'Drupal Backend Developer',
    type: '100% remote',
    active: true,
  },
  {
    key: 'fullstack-drupal-developer',
    title: 'Fullstack Drupal Developer',
    type: '100% remote',
    active: true,
  },
  {
    key: 'react-developer',
    title: 'React Developer',
    type: '100% remote',
    active: true,
  },
  {
    key: 'wordpress-developer',
    title: 'WordPress Developer',
    type: '100% remote',
    active: true,
  },
  {
    key: 'salesforce-developer',
    title: 'Salesforce Developer',
    type: '100% remote',
    active: true,
  },
  {
    key: 'symfony-developer',
    title: 'Symfony Back End Developer',
    type: '100% remote',
    active: true,
  },
  {
    key: 'designer-ux-ui',
    title: 'Designer/UX/UI',
    type: '100% remote',
    active: true,
  },
  {
    key: 'project-manager',
    title: 'Project Manager',
    type: '100% remote',
    active: true,
  },
];

interface PointerData {
  coordinates: [string, string];
  title: string;
}

export const pointerData: PointerData[] = [
  { coordinates: ['17%', '50%'], title: 'Mexico' },
  { coordinates: ['20%', '35%'], title: 'United States' },
  { coordinates: ['28%', '60%'], title: 'Venezuela' },
  { coordinates: ['22%', '56%'], title: 'Costa Rica' },
  { coordinates: ['25%', '66%'], title: 'Colombia' },
  { coordinates: ['27.5%', '73%'], title: 'Bolivia' },
  { coordinates: ['32%', '67.5%'], title: 'Brazil' },
  { coordinates: ['31.5%', '74%'], title: 'Paraguay' },
  { coordinates: ['29.5%', '82%'], title: 'Argentina' },
  { coordinates: ['50%', '26%'], title: 'France' },
  { coordinates: ['88%', '83%'], title: 'Australia' },
];