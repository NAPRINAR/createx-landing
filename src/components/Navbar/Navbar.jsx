import './Navbar.scss';
import logo from '../../assets/navbar__logo.png';
import { NavLink } from 'react-router-dom';
import { CustomButton } from '../CustomButton/CustomButton';

export const Navbar = () => {
  const navbarItems = ['Services', 'Case Studies', 'About Us', 'Blog', 'Contacts'];
  return (
    <div className="navbar">
      <div className="navbar__wrapper container">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="navbar__list">
          {navbarItems.map((el) => (
            <li className="navbar__listItem" key={el}>
              <NavLink to={`${el.toLowerCase().replace(' ', '')}`}>{el}</NavLink>
            </li>
          ))}
        </ul>
        <CustomButton text="Talk to a human" />
      </div>
    </div>
  );
};
