import logo from '@/assets/react.svg'
import styles from '@/styles/sidebar.module.scss'
import { MdClose } from 'react-icons/md'

export function SidebarToggle() {
  return (
    <div
      className={
        styles.toggle + ' $-flex $-items-center $-justify-between $-mt-[1.4rem]'
      }
    >
      <section className={styles.logo + ' $-flex $-gap-2'}>
        <img src={logo} alt="" className="$-w-8 $-h-8" />
        <h2>
          React<span className="primary">JS</span>
        </h2>
      </section>

      <button
        className={styles.close + ' $-hidden $-pr-4'}
        onClick={() => {
          document.querySelector('aside').style.display = 'none'
        }}
      >
        <MdClose />
      </button>
    </div>
  )
}
