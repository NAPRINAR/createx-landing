import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CaseStudies.scss';
import { clientsBlock } from '../../assets';
import { CarouselItem } from '../CarouselItem/CarouselItem';
import { CustomButton } from '../CustomButton/CustomButton';

export const CaseStudies = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const { title, caseItems, buttonText } = clientsBlock;
  return (
    <div className="caseStudies">
      <div className="caseStudies__wrapper container">
        <h3 className="caseStudies__title">{title}</h3>
        <Carousel responsive={responsive}>
          {caseItems.map((el, i) => {
            return (
              <div key={`${el}_${i}`}>
                <CarouselItem item={el} />
              </div>
            );
          })}
        </Carousel>

        <div className="caseStudies__buttonSection">
          <h3 className="caseStudies__footerTitle">Explore more case studies</h3>
          <CustomButton text={buttonText} className="caseStudies__button" />
        </div>
      </div>
    </div>
  );
};
