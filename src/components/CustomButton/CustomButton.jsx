import './CustomButton.scss';

export const CustomButton = ({ text, changable, styles, onClick }) => {
  return (
    <button
      onClick={onClick ? onClick : null}
      style={changable ? { ...styles } : {}}
      className="customButton">
      {text}
    </button>
  );
};
