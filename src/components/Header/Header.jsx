import { headerIcons } from '../../assets';
import { CustomButton } from '../CustomButton/CustomButton';
import { Navbar } from '../Navbar/Navbar';
import './Header.scss';
export const Header = () => {
  return (
    <div className="header">
      <div className="header__nav">
        <Navbar />
      </div>
      <div className="header__content container">
        <div className="header__infoSection">
          <div className="header__title">
            <h1>
              Best <span>SEO & Marketing </span> Solutions for You
            </h1>
          </div>
          <div className="header__buttons">
            <CustomButton
              changable
              styles={{
                backgroundColor: 'transparent',
                border: '1px solid white',
              }}
              text={'Get a free analysis'}
            />
            <a href="javascript:void(0)" className="header__playButton">
              <img src={headerIcons.play.src} alt={headerIcons.play.name} />
              <span>Play Video</span>
            </a>
          </div>
        </div>

        <div className="header__illustration">
          <div className="header__illustrationImgWrapper">
            <img src={headerIcons.illustration.src} alt={headerIcons.illustration.name}></img>
          </div>
        </div>
      </div>
      <div className="header__bottomContent container">
        <ul className="header__iconsList">
          <li className="header__iconListItem">
            <img src={headerIcons.seo.src} alt={headerIcons.seo.name} />
            <p>SEO Content Strategy</p>
          </li>
          <li className="header__iconListItem">
            <img src={headerIcons.speaker.src} alt={headerIcons.speaker.name} />
            <p>Content Marketing</p>
          </li>
          <li className="header__iconListItem header__iconWithoutBorder">
            <img src={headerIcons.pc.src} alt={headerIcons.pc.name} />
            <p>Website & Social Media Marketing</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
