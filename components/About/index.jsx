import React from 'react';
import Image from 'next/image';
import discord from '../../assets/discord.svg';
import twitter from '../../assets/twitter.svg';
import github from '../../assets/github.svg';
import cl from './style.module.scss';


const About = () => (
  <div className="container">
    <div className={`${cl.about} about`}>
      <div className={cl.content}>
        <div className={cl.title}>
          <p className={cl.title_blue}>
            Tsunami
          </p>
          <p>
            Exchange
          </p>
        </div>
        <p className={cl.subtitle}>
          Gamified Derivatives Market.
        </p>
        <button className={`${cl.btn} btn_primary`}>
          Start now
        </button>
      </div>
      <div className={cl.links}>
        <Image src={twitter} alt="twitter" />
        <Image src={github} alt="github" />
        <Image src={discord} alt="discord" />
      </div>
    </div>
  </div>
);

export default About;
