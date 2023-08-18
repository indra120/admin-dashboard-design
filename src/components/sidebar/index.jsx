import { SidebarLink } from './link'
import { SidebarToggle } from './toggle'
import * as Icon from 'react-icons/md'

export function Sidebar() {
  return (
    <aside>
      <SidebarToggle />

      <section className="sidebar">
        <SidebarLink title="Dashboard" icon={Icon.MdDashboard} />
        <SidebarLink title="Users" icon={Icon.MdPersonOutline} />
        <SidebarLink title="History" icon={Icon.MdReceiptLong} />
        <SidebarLink title="Analytics" icon={Icon.MdInsights} active />

        <SidebarLink title="Tickets" icon={Icon.MdMailOutline}>
          <span className="message-count">69</span>
        </SidebarLink>

        <SidebarLink title="Sale List" icon={Icon.MdInventory} />
        <SidebarLink title="Reports" icon={Icon.MdReportGmailerrorred} />
        <SidebarLink title="Settings" icon={Icon.MdSettings} />
        <SidebarLink title="New Login" icon={Icon.MdAdd} />
        <SidebarLink title="Logout" icon={Icon.MdLogout} />
      </section>
    </aside>
  )
}
