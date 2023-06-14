import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Favorite from "@components/Favorite";
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/themeProvider';
import droid from './img/droid.png';
import lightSaber from './img/lightsaber.png';
import spaceStation from './img/space-station.png';
import styles from './header.module.css';

export default function Header() {
  const [icon, setIcon] = useState(spaceStation);
  const isTheme = useTheme();

  useEffect(()=>{
    switch (isTheme.theme) {
      case THEME_LIGHT: setIcon(lightSaber); break;
      case THEME_DARK: setIcon(spaceStation); break;
      case THEME_NEITRAL: setIcon(droid); break;
      default: setIcon(spaceStation);
    }
  }, [isTheme]);


  return (
    <header className={styles.container}>
      <img src={icon} alt="icon" className={styles.logo}/>
        <nav className={styles.list__container}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/people/?page=1">People</NavLink></li>
            <li><NavLink to="/search">Search</NavLink></li>
            <li><NavLink to="/not-found">Not Found</NavLink></li>
            <li><NavLink to="/fail">Fail</NavLink></li>
        </nav>
        <Favorite />
            
    </header>
  );
}
