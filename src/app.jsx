import { Sidebar } from '@/components/sidebar'
import { Analytics } from '@/components/analytics'
import { NewUser } from '@/components/new-user'
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
        <NewUser />
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