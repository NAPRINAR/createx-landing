import { certificateIcons } from '../../assets';
import './Certificate.scss';

export const Certificate = () => {
  return (
    <div className="certificate">
      <div className="certificate__wrapper container">
        <div className="certificate__main">
          <div className="certificate__desc">{certificateIcons.desc}</div>
          <div className="certificate__logos">
            {certificateIcons.certificates.map((el) => {
              return (
                <div className="certificate__logo" key={el.name}>
                  <img src={el.src} alt={el.alt} />
                  <p>{el.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="certificate__icons">
          {certificateIcons.corporations.map((el, i) => {
            return (
              <div className="certificate__iconWrapper" key={`certificate_${i}`}>
                <img src={el} alt={`certificate_${i}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
