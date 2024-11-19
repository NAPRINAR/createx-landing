import { benefitBlock } from '../../assets';
import './Benefits.scss';

export const Benefits = () => {
  const { benefitIllustration, benefitTitle, benefitItemsPartOne, benefitItemsPartTwo } =
    benefitBlock;

  return (
    <div className="benefits">
      <div className="benefits__title">{benefitTitle}</div>
      <div className="benefits__wrapper container">
        <div className="benefits__firstPart">
          {benefitItemsPartOne.map((el, i) => {
            return (
              <div key={`benefitItem_${i}`} className="benefits__benefitItem">
                <img src={el.icon} alt="benefit__itemIcon" className="benefits__icon" />
                <h3 className="benefits__itemTitle">{el.title}</h3>
                <p className="benefits__itemDesc">{el.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="benefits__illustration">
          <div className="benefits__imgWrapper">
            <img
              src={benefitBlock.benefitIllustration}
              alt="benefit__illustration"
              className="benefits__img"
            />
          </div>
        </div>
        <div className="benefits__secondPart">
          {benefitItemsPartTwo.map((el, i) => {
            return (
              <div key={`benefitItem_${i}`} className="benefits__benefitItem">
                <img src={el.icon} alt="benefit__itemIcon" className="benefits__icon" />
                <h3 className="benefits__itemTitle">{el.title}</h3>
                <p className="benefits__itemDesc">{el.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
