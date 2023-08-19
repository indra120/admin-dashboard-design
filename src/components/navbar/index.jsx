import styles from '@/styles/navbar.module.scss'
import { useState } from 'react'
import { MdDarkMode, MdLightMode, MdMenu } from 'react-icons/md'

export function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={styles.navbar}>
      <button
        onClick={() => {
          document.querySelector('aside').style.display = 'block'
        }}
      >
        <MdMenu />
      </button>

      <div
        className={styles.darkMode}
        onClick={() => {
          document.body.classList.toggle('dark-mode-variables')
          setDarkMode(prev=>!prev)
        }}
      >
        <MdLightMode className={!darkMode && styles.active} />
        <MdDarkMode className={darkMode && styles.active} />
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
