export const CardWithImage = ({ el }) => {
  const item = el;
  //   console.log(item);

  if (item.img) {
    return (
      <div className="caseStudies__rateItem">
        <img src={item.img} alt="circle__alt" />
        <p>
          {item.percent}
          <br />
          <span>{item.desc}</span>
        </p>
      </div>
    );
  } else {
    return (
      <div className="caseStudies__rateItem">
        <p>
          {item.investors}
          <br />
          <span>{item.desc}</span>
        </p>
      </div>
    );
  }
};
