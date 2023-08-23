import styles from '@/styles/sidebar.module.scss'

/**
 * @param {Object} props
 * @param {(string|URL)} [props.href]
 * @param {string} props.title
 * @param {boolean} [props.active=false]
 * @param {import("react-icons").IconType} props.icon
 * @param {import("react").ReactNode=} props.children
 */
export function SidebarLink({ href = '#', title, active, icon: Icon, children, ...props }) {
  return (
    <a
      href={href}
      className={`${styles.link} ${
        active ? styles.active : ''
      } $-flex $-items-center $-text-[#7d8da1] $-h-[3.7rem] $-gap-4 $-relative $-transition-all $-duration-[0.3s] $-ease-[ease] $-ml-8`}
      {...props}
    >
      <Icon className='$-text-[1.6rem] $-transition-all $-duration-[0.3s] $-ease-[ease]' />
      <h3>{title}</h3>
      {children}
    </a>
  )
}