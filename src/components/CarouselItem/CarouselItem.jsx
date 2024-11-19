import React from 'react';
import { CardWithImage } from '../CardWithImg/CardWithImg';

export const CarouselItem = ({ item }) => {
  return (
    <div
      className="caseStudies__carouselItem"
      style={{
        backgroundImage: `url(${item.cardSmall})`,
        // backgroundColor: 'rgb(11.76% 12.94% 17.25%) / 50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: '50% 50%',
      }}>
      <div className="caseStudies__carouselLogoWrapper">
        <img className="caseStudies__carouselLogo" src={item.organisationLogo} alt={item.name} />
      </div>
      <p className="caseStudies__carouselTitle">{item.organisationType}</p>
      <p className="caseStudies__carouselDesc">{item.desc}</p>
      <div className="caseStudies__carouselRates">
        {item.circles.map((el, i) => {
          return <CardWithImage key={`${el}_${i}`} el={el} />;
        })}
      </div>
    </div>
  );
};
