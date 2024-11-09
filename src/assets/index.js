import arrowDown from './icons/icon__arrowDown.svg';
import playIcon from './icons/icon__play.svg';
import seoIcon from './icons/icon__seo.svg';
import speakerIcon from './icons/icon__speaker.svg';
import pcIcon from './icons/icon__computer.svg';
import successIcon from './icons/icon__success.svg';
import likesIcon from './icons/icon__likes.svg';
import followersIcon from './icons/icon__followers.svg';
import likeSingle from './icons/icon__like.svg';
import youtube from './icons/icon__youtube.svg';

import headerIllustration from './images/header__illustration.png';
import analysisIllustration from './images/analysis__illustration.png';
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
