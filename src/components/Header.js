import React from "react";
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";
const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <a>
            <GiHamburgerMenu />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a className="btn-secondary btn-icon">
                <AiOutlineShoppingCart />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
