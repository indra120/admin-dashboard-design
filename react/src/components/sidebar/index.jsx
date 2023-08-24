import { SidebarLink } from './link'
import { SidebarToggle } from './toggle'
import styles from '@/styles/sidebar.module.scss'
import * as Icon from 'react-icons/md'

export function Sidebar() {
  return (
    <aside className='$-h-[100vh]'>
      <SidebarToggle />

      <section className={styles.sidebar + ' $-flex $-flex-col $-bg-white $-shadow-[0_2rem_3rem_rgba(132,139,200,0.18)] $-h-[88vh] $-relative $-transition-all $-duration-[0.3s] $-ease-[ease] $-rounded-[15px] $-top-6'}>
        <SidebarLink title="Dashboard" icon={Icon.MdDashboard} />
        <SidebarLink title="Users" icon={Icon.MdPersonOutline} />
        <SidebarLink title="History" icon={Icon.MdReceiptLong} />
        <SidebarLink title="Analytics" icon={Icon.MdInsights} active />

        <SidebarLink title="Tickets" icon={Icon.MdMailOutline}>
          <span className='$-bg-[#ff0060] $-text-white $-text-[11px] $-px-1.5 $-py-0.5 $-rounded-[0.4rem]'>69</span>
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