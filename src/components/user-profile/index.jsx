import styles from '@/styles/user-profile.module.scss'
import logo from '@/assets/react.svg'

export function UserProfile() {
  return (
    <div className={styles.userProfile}>
      <div>
        <img src={logo} />
        <h2>Ryzenix</h2>
        <p>Fullstack Web Developer</p>
      </div>
    </div>
  )
}