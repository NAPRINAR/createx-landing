import './ServicesSection.scss';
import { servicesSection } from '../../assets';
import { CustomButton } from '../CustomButton/CustomButton.jsx';
export const ServicesSection = () => {
  const { mainTitle, imageSection, workflowDesc, buttons } = servicesSection;
  const buttonStyles = {
    width: 240,
    color: '#9A9CA5',
    backgroundColor: 'transparent',
    // border: '2px solid #7772F1',
    padding: '0px 10px',
    fontWeight: '700',
  };
  return (
    <div>
      <div className="services">
        <div className="services__wrapper container">
          <h3 className="services__title">{mainTitle}</h3>
          <div className="services__nav">
            {buttons.map((el, i) => {
              return (
                <CustomButton key={`${el}_${i}`} changable styles={{ ...buttonStyles }} text={el} />
              );
            })}
          </div>
          <div className="services__content">
            <div className="services__desc">
              <h3 className="services__descSubTitle">{workflowDesc.title}</h3>
              <ul className="services__list">
                {workflowDesc.listItems.items.map((el, i) => {
                  return (
                    <li key={`${el}_${i}`}>
                      <img src={workflowDesc.listItems.icon} alt="success" />
                      <p>{el}</p>
                    </li>
                  );
                })}
              </ul>
              <div className="services__workflowButtons">
                <CustomButton
                  text={workflowDesc.buttons[0]}
                  changable
                  styles={{
                    background: 'transparent',
                    color: '#7772f1',
                    border: '1px solid #7772f1',
                    padding: '0 32px',
                    marginRight: '32px',
                  }}
                />
                <CustomButton text={workflowDesc.buttons[1]} />
              </div>
            </div>
            <div className="services__imgSection">
              <div className="services__mainImgWrapper">
                <img src={imageSection.imgMain} alt="mainImg" className="services__mainImg" />
              </div>
              <img
                className="services__followsIcon"
                src={imageSection.followersIcon}
                alt="followersIcon"
              />
              <img className="services__likesIcon" src={imageSection.likesIcon} alt="likesIcon" />
              <img
                className="services__likeSingleIcon"
                src={imageSection.likeSingle}
                alt="likeSingle"
              />
              <button className="services__subscribe">
                <img src={imageSection.youtubeIcon} alt="youtube" />
                <p>Subscribe</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
