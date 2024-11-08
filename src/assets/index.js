import arrowDown from './icons/icon__arrowDown.svg';
import playIcon from './icons/icon__play.svg';
import seoIcon from './icons/icon__seo.svg';
import speakerIcon from './icons/icon__speaker.svg';
import pcIcon from './icons/icon__computer.svg';
import headerIllustration from './images/header__illustration.png';

import clutch from '../assets/images/homeC__clutch.png';
import forbs from '../assets/images/homeC__forbs.png';
import topD from '../assets/images/homeC__topD.png';
import upCity from '../assets/images/homeC__upCity.png';

import corporationOne from './images/homeC_corparationOne.png';
import corporationTwo from './images/homeC_corparationTwo.png';
import corporationThree from './images/homeC_corparationThree.png';
import corporationFour from './images/homeC_corparationFour.png';
import corporationFive from './images/homeC_corparationFive.png';
import corporationSix from './images/homeC_corparationSix.png';

export const icons = {
  arrowDown: { src: arrowDown, name: 'arrowDown' },
};

export const headerIcons = {
  illustration: { src: headerIllustration, name: 'headerIllustration' },
  play: { src: playIcon, name: 'playIcon' },
  seo: { src: seoIcon, name: 'seoIcon' },
  speaker: { src: speakerIcon, name: 'speakerIcon' },
  pc: { src: pcIcon, name: 'pcIcon' },
};

export const certificateIcons = {
  desc: 'Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.',
  certificates: [
    { src: clutch, desc: 'Top SEO Companies 2020 by Clutch', name: 'clutch' },
    { src: upCity, desc: 'Top Digital Marketing Agency 2019 by UpCity', name: 'upCity' },
    { src: forbs, desc: 'Official Member 2020 by Forbes Agency Council', name: 'Forbes' },
    { src: topD, desc: 'Top SEO Companies 2020 by Top Developers', name: 'Top Developers' },
  ],
  corporations: [
    corporationOne,
    corporationTwo,
    corporationThree,
    corporationFour,
    corporationFive,
    corporationSix,
  ],
};
