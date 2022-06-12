import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo.svg';
import twitter from '../../assets/twitter.svg';
import github from '../../assets/github.svg';
import discord from '../../assets/discord.svg';
import cl from './style.module.scss';


const Footer = () => (
  <div className={`${cl.footer} container`}>
    <div className={cl.logo}>
      <Image width={36} src={logo} alt="logo" />
      <h3>
        Tsunami
      </h3>
    </div>
    <div className={cl.links}>
      <Link href="/">
        <Image src={twitter} alt="twitter" />
      </Link>
      <Link href="/">
        <Image src={github} alt="github" />
      </Link>
      <Link href="/">
        <Image src={discord} alt="discord" />
      </Link>
    </div>
  </div>
);

export default Footer;
