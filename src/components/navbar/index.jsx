import styles from '@/styles/navbar.module.scss'
import { MdDarkMode, MdLightMode, MdMenu } from 'react-icons/md'

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <button id="menu-btn">
        <MdMenu />
      </button>

      <div className={styles.darkMode}>
        <MdLightMode className={styles.active} />
        <MdDarkMode />
      </div>

      <div className={styles.profile}>
        <div className={styles.info}>
          <p>
            Hey, <b>Indra</b>
          </p>
          <small className="text-muted">Admin</small>
        </div>

        <div className={styles.profilePhoto}>
          <img src="images/profile-1.jpg" />
        </div>
      </div>
    </div>
  )
}
