import { Sidebar } from '@/components/sidebar'
import { Analytics } from '@/components/analytics'
import { NewUser } from '@/components/new-user'
import { RecentOrders } from '@/components/recent-orders'

export function App() {
  return (
    <>
      <div className="container">
        <Sidebar />

        <main>
          <Analytics />
          <NewUser />
          <RecentOrders />
        </main>
      </div>
    </>
  )
}