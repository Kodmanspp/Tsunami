import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo.svg';
import menu from '../../assets/burger_menu.svg';
import cl from './style.module.scss';


const Header = () => (
  <div className="container">
    <div className={cl.header}>
      <div className={cl.logo}>
        <Image width={36} src={logo} alt="logo" />
        <h3>
          Tsunami
        </h3>
      </div>
      <div className={cl.links}>
        <ul className={cl.links_list}>
          <li>
            About
          </li>
          <li>
            Staking
          </li>
          <li>
            Blog
          </li>
          <li>
            FAQ
          </li>
          <li>
            <Link href="/" >
              <button className={`${cl.app_btn} btn_primary`}>
                Launch App
              </button>
            </Link>
          </li>
        </ul>
        <button color="primary" className={cl.burger_menu}>
          <Image src={menu} alt="menu" />
        </button>
      </div>
    </div>
  </div>
);

export default Header;
