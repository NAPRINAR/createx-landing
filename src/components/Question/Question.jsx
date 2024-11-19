import { useState } from 'react';
import { questionBlock } from '../../assets';
import { AccordionItem } from '../AccordionItem/AccordionItem';
import './Question.scss';
import { CustomButton } from '../CustomButton/CustomButton';

export const Question = () => {
  const { accardionItems, title, iconPlus, iconMinus, img, buttonText, iconArrow } = questionBlock;
  return (
    <div className="question">
      <div className="question__wrapper container">
        <div className="question__desc">
          <h3 className="question__title">{title}</h3>
          <div className="question__accordionWrapper">
            {accardionItems.map((el, i) => {
              return (
                <AccordionItem el={el} plus={iconPlus} minus={iconMinus} key={`${el.title}_${i}`} />
              );
            })}
          </div>
          <CustomButton text={buttonText} icon={iconArrow} iconStyles={{ marginLeft: 10 }} />
        </div>
        <div className="question__imgWrapper">
          <img src={img} alt="question__illustration" className="question__img" />
        </div>
      </div>
    </div>
  );
};
