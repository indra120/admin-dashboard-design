import { Sidebar } from '@/components/sidebar'
import { Analytics } from '@/components/analytics'
import { NewUsers } from '@/components/new-users'
import { RecentOrders } from '@/components/recent-orders'
import { Navbar } from '@/components/navbar'
import { UserProfile } from '@/components/user-profile'
import { Reminders } from '@/components/reminders'

export function App() {
  return (
    <div className="container">
      <Sidebar />

      <main>
        <Analytics />
        <NewUsers />
        <RecentOrders />
      </main>

      <div className="right-section">
        <Navbar />
        <UserProfile />
        <Reminders />
      </div>
    </div>
  )
}