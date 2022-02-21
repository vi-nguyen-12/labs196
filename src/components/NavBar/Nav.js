import Link from "next/link";
import { useState } from "react";
import Image from "react-bootstrap/Image";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import styles from "../../../styles/Nav.module.scss";
import btnStyles from "../../../styles/Buttons.module.scss";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClickAway = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <Link href="/">
              <a className={styles.navlogo}>
                {" "}
                <Image
                  src="/images/labs196_logo_black.png"
                  alt="Labs196 logo"
                />
              </a>
            </Link>
            <Link href="/programs/accelerator" scroll={false}>
              <a className={btnStyles.navApplyBtn}>
                Apply to <br></br>
                Accerlator program
              </a>
            </Link>
            <Link href="/programs/internship" scroll={false}>
              <a className={btnStyles.navApplyBtn}>
                Apply to <br></br>internship program
              </a>
            </Link>

            {/* Start of Nav Menu List Items */}
            <ul
              className={
                isOpen === false
                  ? styles.navmenu
                  : styles.navmenu + " " + styles.active
              }
            >
              <li className={styles.navitem} onClick={handleOnClick}>
                <Link
                  href="/"
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                >
                  Home
                </Link>
              </li>
              <li className={styles.navitem}>
                {/* <Link href="/programs">Programs</Link> */}
                <div>Programs</div>
              </li>
              <li className={styles.subtitle} onClick={handleOnClick}>
                <Link href="/programs/accelerator">Accelerator</Link>
              </li>
              <li className={styles.subtitle} onClick={handleOnClick}>
                <Link
                  href="/programs/internship"
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                >
                  Internship
                </Link>
              </li>
              <li className={styles.navitem} onClick={handleOnClick}>
                <Link
                  href="/rewards"
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                >
                  Perks
                </Link>
              </li>
              <li className={styles.navitem} onClick={handleOnClick}>
                <Link
                  href="/about"
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                >
                  About Us
                </Link>
              </li>
              <li className={styles.navitem} onClick={handleOnClick}>
                <Link
                  href="/mentor"
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                >
                  Mentors
                </Link>
              </li>
              <li className={styles.navitem} onClick={handleOnClick}>
                <Link
                  href="/upcomingEvents"
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                >
                  Upcoming Events
                </Link>
              </li>
              <li className={styles.navitem} onClick={handleOnClick}>
                <Link
                  href="/liveEvents"
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                >
                  Live Events
                </Link>
              </li>
            </ul>

            <a
              className={
                isOpen === false
                  ? styles.hamburger
                  : styles.hamburger + " " + styles.active
              }
              onClick={handleOnClick}
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </a>
          </nav>
        </header>
      </ClickAwayListener>
    </>
  );
}
