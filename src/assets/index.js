import arrowDown from './icons/icon__arrowDown.svg';
import arrowRight from './icons/icon__arrowRight.svg';
import playIcon from './icons/icon__play.svg';
import seoIcon from './icons/icon__seo.svg';
import speakerIcon from './icons/icon__speaker.svg';
import pcIcon from './icons/icon__computer.svg';
import successIcon from './icons/icon__success.svg';
import likesIcon from './icons/icon__likes.svg';
import followersIcon from './icons/icon__followers.svg';
import likeSingle from './icons/icon__like.svg';
import youtube from './icons/icon__youtube.svg';
import plus from './icons/icon__plus.svg';
import minus from './icons/icon__minus.svg';

import headerIllustration from './images/header__illustration.png';
import analysisIllustration from './images/analysis__illustration.png';
import questionIllustration from './images/question__illustration.png';
import agencyImg from './images/image__teamwork.png';
import servicesSectionImg from './images/services__graffic.png';

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

import circleOrange from './images/circle__orange.png';
import circleRed from './images/circle__red.png';
import circleBlue from './images/circle__blue.png';
import circleGreen from './images/circle__green.png';

import circleGreenNF from './icons/icon__circleGreen.svg';
import circleOrangeNF from './icons/icon__circleOrange.svg';
import circleBlueNF from './icons/icon__circleBlue.svg';
import circleRedNF from './icons/icon__circleRed.svg';

import cardDelmar from './images/card__delmar.png';
import cardNational from './images/card__national.png';
import cardSunset from './images/card__sunset.png';
import cardForSale from './images/card__forSale.png';
import cardHigherFit from './images/card__higherFit.png';
import cardSentinal from './images/card__sentiunal.png';
import delmarSmall from './images/card__small.png';

import logoDelmar from './images/logo__delmar.png';
import logoNational from './images/logo__national.png';
import logoSunset from './images/logo__sunsetRealty.png';
import logoForSale from './images/logo__forSale.png';
import logoHigherFit from './images/logo__higherFit.png';
import logoSentinal from './images/logo__sentiunal.png';

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

export const agencyBlock = {
  header: 'Createx Agency ',
  desc: 'Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.',
  img: agencyImg,
};

export const ratingsBlock = {
  ratings: [
    { rate: 'Years of experience', img: circleOrange },
    { rate: 'Awards', img: circleRed },
    { rate: 'Projects', img: circleBlue },
    { rate: 'Happy clients', img: circleGreen },
  ],
};

export const servicesSection = {
  mainTitle: 'Our Services',
  buttons: ['Social Media', 'SEO', 'Research', 'Content & PR', 'Payed Traffic'],
  workflowDesc: {
    title: 'Complete Worflow For Any \r SEO Professional',
    buttons: ['Learn more', 'Try SEO toolkit'],
    listItems: {
      icon: successIcon,
      items: [
        'Aenean enim tellus morbi nisl vulputate dictumst.',
        'Nibh sapien volutpat lacus augue.',
        'Vel in amet, placerat adipiscing est pharetra.',
        'Gravida ornare sit in et ut sit sem id.',
        'Ultrices pellentesque dictum enim egestas ac diam.',
        'Sit semper enim senectus integer ut turpis et.',
      ],
    },
  },
  imageSection: {
    imgMain: servicesSectionImg,
    likesIcon: likesIcon,
    followersIcon: followersIcon,
    likeSingle: likeSingle,
    youtubeIcon: youtube,
  },
};

export const analysisBlock = {
  img: analysisIllustration,
  title: 'Get a Free SEO Analysis!',
  agreement: 'I agree to receive communications from Createx SEO Agency',
  buttonText: 'Get a free analysis',
};

export const questionBlock = {
  title: 'Freequently Ask Questions',
  buttonText: 'Discover more',
  img: questionIllustration,
  iconPlus: plus,
  iconMinus: minus,
  iconArrow: arrowRight,
  accardionItems: [
    {
      title: 'Aliquet lectus urna viverra in odio?',
      desc: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.',
    },
    {
      title: 'Orci commodo, viverra orci mollis ut euismod?',
      desc: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.',
    },
    {
      title: 'Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?',
      desc: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.',
    },
    {
      title: 'In id dolor quis nunc, urna hendrerit pharetra?',
      desc: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.',
    },
  ],
};

export const clientsBlock = {
  title: "Read our clients' case studies",
  buttonText: 'View all case studies',
  caseItems: [
    {
      name: 'National',
      organisationImg: cardNational,
      organisationLogo: logoNational,
      organisationType: 'Charity organisation',
      desc: 'Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.',
      circles: [
        { img: circleOrangeNF, percent: '90%', desc: 'Engagement' },
        { img: circleGreenNF, percent: '100%', desc: 'Deliverability' },
      ],
    },
    {
      name: 'Del Mar Strategy',
      organisationType: 'Oil and natural resources',
      organisationLogo: logoDelmar,
      organisationImg: cardDelmar,
      cardSmall: delmarSmall,
      desc: 'With an advanced A/B testing and usability analysis, Createx SEO Agency helps Del Mar see a 400% increase in conversion rate.',
      circles: [
        { img: circleBlueNF, percent: '200%', desc: 'Growth in sales' },
        { investors: 1400, desc: 'Target investors' },
      ],
    },
    {
      name: 'Sunset Realty',
      organisationType: 'Personal care',
      organisationLogo: logoSunset,
      organisationImg: cardSunset,
      desc: "We helped Sunset company break through a noisy industry and better understand their buyer's journey.",
      circles: [
        { img: circleRedNF, percent: '70%', desc: 'Open Rate' },
        { img: circleOrangeNF, percent: '200%', desc: 'Growth in sales' },
      ],
    },
    {
      name: 'For Sale',
      organisationType: 'Electric company',
      organisationLogo: logoForSale,
      organisationImg: cardForSale,
      desc: 'With an advanced A/B testing and usability analysis, Createx SEO Agency helps Lovato see a 200% increase in conversion rate.',
      circles: [
        { img: circleRedNF, percent: '80%', desc: 'Open Rate' },
        { investors: '1840', desc: 'Target Investors' },
      ],
    },
    {
      name: 'Higher Fit',
      organisationType: 'Departments stores',
      organisationLogo: logoHigherFit,
      organisationImg: cardHigherFit,
      desc: "We helped Dove company break through a noisy industry and better understand their buyer's journey.",
      circles: [
        { img: circleBlueNF, percent: '70%', desc: 'Increase in leads' },
        { investors: '190+', desc: 'Prospects' },
      ],
    },
    {
      name: 'Sentinal Consulting',
      organisationType: 'Electric cars, solar & clean energy',
      organisationLogo: logoSentinal,
      organisationImg: cardSentinal,
      desc: "We helped Dove company break through a noisy industry and better understand their buyer's journey.",
      circles: [
        { img: circleGreenNF, percent: '200%', desc: 'ROI' },
        { investors: '12000$', desc: 'Increase per month' },
      ],
    },
  ],
};
