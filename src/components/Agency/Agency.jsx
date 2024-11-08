import { agencyBlock } from '../../assets';
import { CustomButton } from '../CustomButton/CustomButton.jsx';
import './Agency.scss';

export const Agency = () => {
  return (
    <div className="agency">
      <div className="agency__wrapper container">
        <div className="agency__infoBlock">
          <h3 className="agency__title">{agencyBlock.header}</h3>
          <p className="agency__desc">{agencyBlock.desc}</p>
          <CustomButton text="More About As" />
        </div>
        <div className="agency__imgBlock">
          <img src={agencyBlock.img} alt="agency__img" className="agency__img" />
        </div>
      </div>
    </div>
  );
};
