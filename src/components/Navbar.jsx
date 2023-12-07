import logo from "../Img/6ce130d2365d8b44a294.svg";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="nav-component content-grid ">
      <div className="nav-menu">
        <img src={logo} alt="" />
        <li>
          <a href="#"> Photo Editing Tools</a>
          <IoIosArrowDown />
        </li>
        <li>
          <a href="#"> Create</a>
          <IoIosArrowDown />
        </li>
        <li>
          <a href="#"> Ai Tools</a>
          <IoIosArrowDown />
        </li>
        <li>
          <a href="#"> Templates</a>
          <IoIosArrowDown />
        </li>
        <li>
          <a href="#"> Support</a>
          <IoIosArrowDown />
        </li>
      </div>
      <div className="nav-button">
        <button>Sign up</button>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
