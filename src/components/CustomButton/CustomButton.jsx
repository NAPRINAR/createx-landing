import './CustomButton.scss';

export const CustomButton = ({ text, changable, styles, onClick, icon, iconStyles }) => {
  return (
    <button
      onClick={onClick ? onClick : null}
      style={changable ? { ...styles } : {}}
      className="customButton">
      {text}
      {icon && <img src={icon} style={iconStyles ? { ...iconStyles } : null} alt="custom__icon" />}
    </button>
  );
};
