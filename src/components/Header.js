import styles from '../css/Header.module.css';
import logo from '../images/about/nova_ed_new_logo_header_footer.png';
import { NavLink }from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const activeLink = ({ isActive }) => isActive ? `${styles.activeLink}` : '';
  const [active, setActive] = useState(false);

  function deActivate() {
      if (active) {
          setActive(false)
          document.body.style.overflow = "visible";
      }
  }

  function hamburgerMode() {
      if (active) {
          setActive(false)
          document.body.style.overflow = "visible";
      } else {
          setActive(true)
          document.body.style.overflow = "hidden";
      }
  }

  return (
    <header className={styles.header} id="header">
      <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
      <div className={active ? `${styles.linksActive}` : `${styles.links}`} onClick={deActivate}>
        <NavLink to="/contact" className={activeLink}>contact</NavLink>
      </div>
      <div className={styles.hamburger}>
        <div className={styles.hamburger} onClick={hamburgerMode}>
          <span className={active ? `${styles.barLeft}` : `${styles.bar}`}></span>
          <span className={active ? `${styles.barGone}` : `${styles.bar}`}></span>
          <span className={active ? `${styles.barRight}` : `${styles.bar}`}></span>
        </div>
      </div>
    </header>
  );
}