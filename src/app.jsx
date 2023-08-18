import { Sidebar } from '@/components/sidebar'
import { Analytics } from '@/components/analytics'
import { NewUser } from '@/components/new-user'

export function App() {
  return (
    <>
      <div className="container">
        <Sidebar />

        <main>
          <Analytics />
          <NewUser />
        </main>
      </div>
    </>
  )
}