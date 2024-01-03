interface DataProps {
  key: string | number;
  value: string;
}

export const select: DataProps[] = [
  { key: 0, value: 'Select an option...' },
  { key: 'incorrect-1', value: 'Incorrect Option' },
  { key: 'incorrect-2', value: 'Another incorrect option' },
  { key: 'warned-1', value: 'Warned Option' },
  { key: 'correct-1', value: 'Correct Option' },
  { key: 'correct-2', value: 'This is another correct option' },
];

export const radio: DataProps[] = [
  { key: 'incorrect', value: 'Incorrect' },
  { key: 'warned', value: 'Warning' },
  { key: 'correct', value: 'Correct option' },
];
