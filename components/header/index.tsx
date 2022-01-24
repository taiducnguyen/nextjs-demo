import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/modules/header.module.scss";

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <div className={styles.mainNavigation}>
        <div className={styles.navigationLogo}>
          <Link href="/">
            <a>
              <Image src="/images/electrolux_logo_sg.svg" alt="Elextrolux Logo" width={144} height={35} />
            </a>
          </Link>
        </div>
        <div className={styles.navigationMenu}>
          <Link href="/">
            <a className={styles.navigationItem}>Products</a>
          </Link>
          <Link href="/">
            <a className={styles.navigationItem}>Support</a>
          </Link>
          <Link href="/">
            <a className={styles.navigationItem}>Promotion</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
