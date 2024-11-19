import React, { useState } from 'react';

export const AccordionItem = ({ el, plus, minus }) => {
  const [accordion, setAccordion] = useState(false);
  const handleAccardion = () => {
    setAccordion((prev) => !prev);
  };
  return (
    <div className="question__accordionItem">
      <div className="question__accordionTitleWrapper">
        <img
          src={accordion ? minus : plus}
          alt="plus__icon"
          onClick={handleAccardion}
          className="question__accordionOpen"
        />
        <p className="question__accordionTitle">{el.title}</p>
      </div>
      {accordion && <p className="question__accordionDesc">{el.desc}</p>}
    </div>
  );
};
