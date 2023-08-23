import { Sidebar } from '@/components/sidebar'
import { Analytics } from '@/components/analytics'
import { NewUsers } from '@/components/new-users'
import { RecentOrders } from '@/components/recent-orders'
import { Navbar } from '@/components/navbar'
import { UserProfile } from '@/components/user-profile'
import { Reminders } from '@/components/reminders'

export function App() {
  return (
    <div className="container $-grid $-w-[96%] $-gap-[1.8rem] $-grid-cols-[12rem_auto_23rem] $-mx-auto $-my-0">
      <Sidebar />

      <main className="$-mt-[1.4rem]">
        <Analytics />
        <NewUsers />
        <RecentOrders />
      </main>

      <div className="right-section $-mt-[1.4rem]">
        <Navbar />
        <UserProfile />
        <Reminders />
      </div>
    </div>
  )
}