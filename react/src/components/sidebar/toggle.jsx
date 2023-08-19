import logo from '@/assets/react.svg'
import styles from '@/styles/sidebar.module.scss'
import { MdClose } from 'react-icons/md'

export function SidebarToggle() {
  return (
    <div className={styles.toggle}>
      <section className={styles.logo}>
        <img src={logo} alt="" />
        <h2>
          React<span className="primary">JS</span>
        </h2>
      </section>

      <button
        className={styles.close}
        onClick={() => {
          document.querySelector('aside').style.display = 'none'
        }}
      >
        <MdClose />
      </button>
    </div>
  )
}
