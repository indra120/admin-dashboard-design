/**
 * @param {Object} props
 * @param {(string|URL)} props.href
 * @param {string} props.title
 * @param {boolean} [props.active=false]
 * @param {import("react-icons").IconType} props.icon
 * @param {import("react").ReactNode=} props.children
 */
export function SidebarLink({ href = '#', title, active, icon: Icon, children, ...props }) {
  return (
    <a href={href} className={active ? 'active' : undefined} {...props}>
      <Icon />
      <h3>{title}</h3>
      {children}
    </a>
  )
}