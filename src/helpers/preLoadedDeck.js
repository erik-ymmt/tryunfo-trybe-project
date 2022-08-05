import { chelseaLogo, liverpoolLogo, manCityLogo, spursLogo } from './team-logos-url';

const preLoadedDeck = [
  {
    cardAttr1: '55',
    cardAttr2: '70',
    cardAttr3: '55',
    cardDescription: 'Atual campeão inglês',
    cardImage: manCityLogo,
    cardName: 'Manchester City',
    cardRare: 'raro',
    cardTrunfo: true,
  },
  {
    cardAttr1: '60',
    cardAttr2: '55',
    cardAttr3: '65',
    cardDescription: '19 vezes campeão inglês',
    cardImage: liverpoolLogo,
    cardName: 'Liverpool',
    cardRare: 'muito raro',
    cardTrunfo: false,
  },
  {
    cardAttr1: '65',
    cardAttr2: '60',
    cardAttr3: '50',
    cardDescription: 'Atual campeão do mundo',
    cardImage: chelseaLogo,
    cardName: 'Chelsea',
    cardRare: 'raro',
    cardTrunfo: false,
  },
  {
    cardAttr1: '50',
    cardAttr2: '50',
    cardAttr3: '60',
    cardDescription: 'Atual 4° colocado',
    cardImage: spursLogo,
    cardName: 'Tottenham',
    cardRare: 'normal',
    cardTrunfo: false,
  },
];

export default preLoadedDeck;
