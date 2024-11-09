import { CustomButton } from '../CustomButton/CustomButton';
import { analysisBlock } from '../../assets';
import './Analysis.scss';

export const Analysis = () => {
  return (
    <div className="analysis">
      <div className="analysis__wrapper container">
        <div className="analysis__imgSection">
          <div className="analysis__img">
            <img
              className="analysis__illustration"
              src={analysisBlock.img}
              alt="analysis__illustration"
            />
          </div>
        </div>
        <div className="analysis__formSection">
          <div className="analysis__formTitle">
            <h3 className="analysis__title">{analysisBlock.title}</h3>
          </div>
          <form className="analysis__form">
            <div className="analysis__formMultiple">
              <input type="text" />
              <input type="text" />
            </div>
            <div className="analysis__formSingle">
              <input type="text" />
            </div>
            <div className="analysis__agreement">
              <div className="analysis__selectSection">
                <input className="analysis__checkbox" type="checkbox" />
                <p>{analysisBlock.agreement}</p>
              </div>
              <CustomButton onClick={(e) => e.preventDefault()} text={analysisBlock.buttonText} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
