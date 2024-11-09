import './Ratings.scss';
import { ratingsBlock } from '../../assets';

export const Ratings = () => {
  const { ratings } = ratingsBlock;
  return (
    <div className="ratings">
      <div className="ratings__wrapper">
        <div className="ratings__ratesWrapper">
          {ratings.map((el, i) => {
            return (
              <div key={`${el.rate}_${i}`} className="ratings__rate">
                <img src={el.img} alt={el.rate} />
                <p>{el.rate}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
