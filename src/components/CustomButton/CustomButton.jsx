import './CustomButton.scss';

export const CustomButton = ({ text, changable, styles }) => {
  return (
    <button style={changable ? { ...styles } : {}} className="customButton">
      {text}
    </button>
  );
};
