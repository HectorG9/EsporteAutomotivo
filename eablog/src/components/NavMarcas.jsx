
export default function NavMarcas() {
  return (
    <nav>
        <img src={logo} alt="" className={styles.logo} />
        <ul className={styles.navlists}>
            <li className={styles.navlist}>
            <a href="" className={styles.navlink}>Modelos</a>
            </li>
            <li className={styles.navlist}>
            <a href="/" className={styles.navlink}>História</a>
            </li>
            <li className={styles.navlist}>
            <a href="/about" className={styles.navlink}></a>
            </li>
            <li className={styles.navlist}>
            <a href="/contact" className={styles.navlink}>Contato</a>
            </li>
        </ul>
    </nav>
  )
}
