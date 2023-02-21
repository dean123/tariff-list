import { Tariff } from 'src/app/tariff';

const tariffs: Tariff[] = [
  {
    id: 1,
    name: 'Tariff One',
    price: 55.65,
    uploadSpeed: 12,
    downloadSpeed: 24,
    benefits: [
      'Benefit 1',
    ],
  },
  {
    id: 2,
    name: 'Tariff Two',
    price: 123,
    uploadSpeed: 6,
    downloadSpeed: 12,
    benefits: [
      'Benefit 1',
      'Benefit 2',
      'Benefit 3',
    ],
  },
  {
    id: 3,
    name: 'Tariff Three',
    price: 500,
    uploadSpeed: 6,
    downloadSpeed: 12,
    benefits: [
      'Benefit 1',
    ],
  },
  {
    id: 4,
    name: 'Tariff Four',
    price: 20.3,
    uploadSpeed: 3,
    downloadSpeed: 6,
    benefits: [
      'Benefit 1',
      'Benefit 2',
      'Benefit 3',
      'Benefit 4',
      'Benefit 5',
      'Benefit 6',
    ],
  },
];

export default tariffs;
