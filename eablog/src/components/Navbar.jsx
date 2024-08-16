import styles from '../styles/navbar.module.css'
import logo from '../images/logo.png'
export default function Navbar() {
  return (
    <header className={styles.header} id="header">
      <nav className={styles.nav & styles.container}>
        <a href="" className={styles.nav__logo}>
          <i className={styles.ri-steering-fill}></i>
          NextCar
        </a>
        <div className={styles.nav__menu} id="nav-menu">
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <a href="#home" className={styles.nav__link & active-link}>Home</a>
            </li>
            <li className={styles.nav__item}>
              <a href="#about" className={nav__link }>About</a>
            </li>
            <li className={styles.nav__item}>
              <a href="#popular" className={styles.nav__link}>Super Cars</a>
            </li>
            <li className={styles.nav__item}>
              <a href="#featured" class="nav__link">Featured</a>
            </li>
          </ul>

          <div className={styles.nav__close} id="nav-close">
            <i className={styles.ri-closeline}></i>
          </div>
        </div>

        {/* <Togglar Button  */}
        <div className={styles.nav__toggle} id="nav-toggle">
          <i className={styles.ri-menu-line}></i>
        </div>

      </nav>
    </header>
    // <nav >
    //   <img src={logo} alt="" className={styles.logo} />
    //     <ul className={styles.navlists}>
    //       <li className={styles.navlist}>
    //         <a href="" className={styles.navlink}>Marcas</a>
    //       </li>
    //       <li className={styles.navlist}>
    //         <a href="/" className={styles.navlink}>Início</a>
    //       </li>
    //       <li className={styles.navlist}>
    //         <a href="/about" className={styles.navlink}>Sobre</a>
    //       </li>
    //       <li className={styles.navlist}>
    //         <a href="/contact" className={styles.navlink}>Contato</a>
    //       </li>
    //     </ul>
    // </nav>
  )
}
